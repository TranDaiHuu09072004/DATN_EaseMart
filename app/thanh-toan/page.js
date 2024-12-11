"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./payment.module.css";
import classNames from "classnames/bind";
import { useCart } from "@/components/CartFunction";
import { getDistrict, getProvince, getWard } from "@/service/address";
import { formatPrice } from "@/uilts/formatPrice";
import { CheckPayment, CreateQr, PostOrder } from "@/service/order";
// import { log } from "util";
// import { FALSE } from "sass";
import { getInfoCustomer } from "@/service/customer";
import Swal from "sweetalert2";
import axios from "axios";

const cx = classNames.bind(styles);
export default function Payment() {
  const [user, setUser] = useState({});
  const [errorProduct, setErrorProduct] = useState([]);
  const [checkAccept, setCheckAccept] = useState(false);
  const [ErrorCheckAccept, setErrorCheckAccept] = useState(false);
  const [checkPayment, setCheckPayment] = useState(false);
  const [byStatus, setByStatus] = useState(false);
  const [checkFrom, setCheckFrom] = useState(true);
  const { state } = useCart();
  const [listPayment, setListPayment] = useState([]);
  const [listProvince, setlistProvince] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [district, setDistrict] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [ward, setWard] = useState([]);
  const [selectedWard, setSelectedWard] = useState(null);
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [toggleQr, setToggleQr] = useState(false);
  const [linkQr, setLinkQr] = useState(null);
  const [voucherCode, setVoucherCode] = useState("");
  const [discountValue, setDiscountValue] = useState(0);
  const [voucherId, setVoucherId] = useState(null);
  const [voucherError, setVoucherError] = useState("");

  let total = useRef(0);
  let listPaymentMethod = useRef([
    { method: "COD", des: "Thanh toán khi nhận hàng" },
    { method: "BANK", des: "Thanh toán bằng ngân hàng MB" },
  ]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUser(user);

    getInfoCustomer(user.email, user.customer).then((data) => {
      console.log(data);
      const firstName = data.customers.name.split(" ")[0];
      const lastName = data.customers.name.split(" ").splice(1, 2).join(" ");
      setFirstName(firstName);
      setLastName(lastName);
      setEmail(data.customers.email);
      setNumber(data.customers.phone);
    });
  }, []);

  useEffect(() => {
    return () => {
      localStorage.removeItem("buy_now");
    };
  }, []);
  // const [infoUser, setInfoUser] = useState({});
  const intervalId = useRef(null);
  const timeoutId = useRef(null);
  let handleCheckForm = () => {
    if (
      !address ||
      !number ||
      !firstName ||
      !lastName ||
      !email ||
      !selectedProvince ||
      !selectedDistrict ||
      !selectedWard
    ) {
      setCheckFrom(false);

      return;
    } else if (!checkAccept) {
      setErrorCheckAccept(true);
      return;
    } else {
      const shipping_address = `${address} ${selectedWard.name} - ${selectedDistrict.name} - ${selectedProvince.name}`;

      const user = JSON.parse(localStorage.getItem("user"));
      const listProductCart = byStatus
        ? JSON.parse(localStorage.getItem("by_now"))
        : JSON.parse(localStorage.getItem(`cart_${user.email}`));
      const listProductPayment = byStatus
        ? JSON.parse(localStorage.getItem("buy_now"))
        : listProductCart.filter((item) => item.select);
      const items = listProductPayment.map((item) => {
        return {
          product_id: item.id,
          quantity: item.quantity,
          unit_id: item.units[0].unit_id,
        };
      });
      const data = {
        items,
        shipping_address,
        payment_method: paymentMethod,
        total_amount: total.current,
        voucher_id: voucherId,
        token: user.token,
      };
      PostOrder(data)
        .then((data) => {
          console.log(data);

          if (paymentMethod !== "BANK") {
            if (byStatus) {
              localStorage.removeItem("buy_now");
            } else {
              localStorage.removeItem(`cart_${user.email}`);
            }
            Swal.fire({
              icon: "success",
              title: "Đã đặt hàng thành công !",
              text: "Bạn đã đặt hàng thành công !, Bấm OK để quay về trang chủ",
              showCancelButton: false, // Hiển thị nút "Hủy" (hoặc OK)
              confirmButtonText: "OK", // Văn bản nút xác nhận
              // Văn bản nút hủy
            }).then((result) => {
              if (result.isConfirmed) {
                // Điều hướng đến trang đăng nhập nếu người dùng chọn "Đăng nhập"
                window.location.href = "/";
              }
              // Nếu người dùng nhấn "OK", popup sẽ đóng mà không có thêm hành động nào.
            });
            return;
          }

          data.token = user.token;
          CreateQr(data).then((res) => {
            setLinkQr(res.qrUrl);

            intervalId.current = setInterval(() => {
              CheckPayment(data.payment_id).then((res) => {
                console.log(res);
                if (res.message === "Thanh toán thành công.") {
                  console.log("CHECK PAYMENT");
                  clearInterval(intervalId.current);
                  clearTimeout(timeoutId.current); // Dừng `setTimeout` nếu cần
                  setLinkQr(null);
                  if (byStatus) {
                    localStorage.removeItem("buy_now");
                  } else {
                    localStorage.removeItem(`cart_${user.email}`);
                  }

                  Swal.fire({
                    icon: "success",
                    title: "Chuyển tiền thành công",
                    text: "Bạn đã thanh toán thành công !, Bấm OK để quay về trang chủ",
                    showCancelButton: false, // Hiển thị nút "Hủy" (hoặc OK)
                    confirmButtonText: "OK", // Văn bản nút xác nhận
                    // Văn bản nút hủy
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // Điều hướng đến trang đăng nhập nếu người dùng chọn "Đăng nhập"
                      window.location.href = "/";
                    }
                    // Nếu người dùng nhấn "OK", popup sẽ đóng mà không có thêm hành động nào.
                  });
                }
              });
            }, 10000);

            timeoutId.current = setTimeout(() => {
              clearInterval(intervalId);
              alert("Hết giờ thanh toán");
            }, 600000);
          });
        })
        .catch((err) => {
          let message = "Lỗi trong quá trình đặt hàng";
          if (err?.response?.data?.message) {
            message = err?.response?.data?.message;
          }
          Swal.fire({
            icon: "error",
            title: "Đặt hàng thất bại",
            text: `${message} !`,
            showCancelButton: false, // Hiển thị nút "Hủy" (hoặc OK)
            confirmButtonText: "OK", // Văn bản nút xác nhận
            // Văn bản nút hủy
          }).then((result) => {
            if (result.isConfirmed) {
              // Điều hướng đến trang đăng nhập nếu người dùng chọn "Đăng nhập"
              // window.location.href = "/";
            }
            // Nếu người dùng nhấn "OK", popup sẽ đóng mà không có thêm hành động nào.
          });
        });
    }
  };

  // check mua hàng từ giỏ hàng hay mua hàng từ nút mua ngay ở chi tiết sản phẩm

  useEffect(() => {
    const by_status = JSON.parse(localStorage.getItem("buy_now"));
    console.log(by_status);
    if (by_status) {
      setByStatus(true);
    }

    return () => {
      if (byStatus) {
        localStorage.removeItem("buy_now");
      }
    };
  }, [byStatus]);
  console.log();

  useEffect(() => {
    setListPayment(() => {
      if (byStatus) {
        const by_status = JSON.parse(localStorage.getItem("buy_now"));
        console.log(by_status);

        return by_status.filter((item) => {
          console.log(item.units[0].price_sale);

          total.current += item.quantity * item.units[0].price_sale;
          return item;
        });
      }
      return state.cartItems.filter((item) => {
        if (item.select) console.log(item.units[0].price_sale);

        total.current += item.quantity * item.units[0].price_sale;
        return item.select;
      });
    });
  }, [state, byStatus]);
  // thành phố
  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getProvince(user.token).then((province) => {
        console.log(province.data);
        setlistProvince(province.data);
      });
    }
  }, [user]);
  // quận
  useEffect(() => {
    if (!selectedProvince) return;
    console.log(selectedProvince);

    getDistrict(selectedProvince.id, user.token)
      .then((province) => {
        console.log(province.data);

        setDistrict(province.data);
      })
      .catch((error) => console.log(error));
  }, [selectedProvince]);

  // phường
  useEffect(() => {
    if (!selectedDistrict) return;

    getWard(selectedDistrict.id, user.token)
      .then((province) => {
        console.log(province.data);

        setWard(province.data);
      })
      .catch((error) => console.log(error));
  }, [selectedDistrict]);

  const applyVoucher = async () => {
    try {
      const response = await axios.post(
        `https://trandainghia.id.vn/api/voucher/detail`,
        { code: voucherCode }
      );

      if (response.data && response.data.data) {
        const { discount_value, minimum_order_value, id } = response.data.data;

        if (total.current > minimum_order_value) {
          total.current -= discount_value;
          setDiscountValue(discount_value);
          setVoucherId(id);
          setVoucherError("");
        } else {
          Swal.fire({
            icon: "error",
            title: "Đơn hàng không đủ điều kiện",
            text: `Tổng đơn hàng phải lớn hơn ${formatPrice(
              minimum_order_value
            )}đ để áp dụng voucher.`,
          });
        }
      } else {
        setVoucherError(
          "Voucher bạn nhập không đúng hoặc không tồn tại!. Vui lòng thử lại."
        );
      }
    } catch (error) {
      console.error("Lỗi khi áp dụng voucher:", error);
      setVoucherError("Không thể áp dụng voucher. Vui lòng thử lại.");
    }
  };

  return (
    <>
      {linkQr && (
        <div className="fixed top-0 left-0 w-full h-full z-[1000]">
          <div className="w-full h-full relative">
            <div
              className="absolute w-full h-full  bg-gray-800 opacity-50"
              onClick={() => {
                setLinkQr(null);
                clearInterval(intervalId.current);
                clearTimeout(timeoutId.current);
              }}
            ></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[450px] bg-white flex flex-col items-center p-2">
              <h5 className="mb-3 text-[#2a9d5a] font-bold text-xl">
                QUÉT MÃ QR
              </h5>
              <img src={linkQr} className="w-[300px] h-[300px]" />
              <div className={cx("lds-ring")}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <h5 className="mb-3 text-black font-light text-base mt-5">
                Vui lòng quét mã và đợi xác nhận trong vài phút
              </h5>
            </div>
          </div>
        </div>
      )}
      <div>
        <div className="md:max-w-screen-xl md:mx-auto">
          <div className={cx("flex_pm", "max-md:flex-col")}>
            <div
              className={cx(
                "link_home_news",
                "max-md:px-3",
                "max-md:p-1",
                "md:px-3",
                "items-center"
              )}
            >
              <ul className={cx("list_link")}>
                <li>
                  <a
                    href="#"
                    className={cx(
                      "link_item",
                      "xl:text-xl",
                      "lg:text-[#585757]",
                      "lg:no-underline",
                      "max-lg:text-[18px]",
                      "max-md:text-[16px]"
                    )}
                  >
                    Trang Chủ
                  </a>
                </li>
                <li className={cx("separator")}>
                  <a
                    href=""
                    className={cx(
                      "link_item",
                      "xl:text-xl",
                      "lg:text-[#585757]",
                      "lg:no-underline",
                      "max-lg:text-[18px]",
                      "max-md:text-[16px]"
                    )}
                  >
                    /
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={cx(
                      "link_item",
                      "xl:text-xl",
                      "lg:text-[#585757]",
                      "lg:no-underline",
                      "max-lg:text-[18px]",
                      "max-md:text-[16px]"
                    )}
                  >
                    Thanh toán
                  </a>
                </li>
              </ul>
            </div>
            <div className={cx("steps", "max-lg:mr-4", "max-md:mx-auto")}>
              <div className={cx("step")}>
                <span className={cx("step_number")}>1</span>
                <span className={cx("step_text")}>Đăng nhập</span>
              </div>
              <span className={cx("separator")}>—</span>
              <div className={cx("step")}>
                <span className={cx("step_number")}>2</span>
                <span className={cx("step_text")}>Thông tin nhận hàng</span>
              </div>
              <span className={cx("separator")}>—</span>
              <div className={cx("step", "active")}>
                <span className={cx("step_number")}>3</span>
                <span className={cx("step_text")}>Thanh toán</span>
              </div>
            </div>
          </div>

          <section
            className={cx(
              "payment",
              "flex",
              "max-md:flex-col",
              "p-5",
              "bg-white",
              "my-[15px]",
              "rounded-[10px]",
              "max-lg:flex",
              "max-lg:mx-3"
            )}
          >
            <div
              className={cx(
                "inforpayment",
                "max-xl:w-[50%]",
                "max-md:w-full",
                "xl:pr-5"
              )}
            >
              <h3
                className={cx(
                  "title_payment",
                  "xl:text-[22px]",
                  "max-md:text-[18px]"
                )}
              >
                Thông Tin Thanh Toán
              </h3>
              <form action="">
                <div className={cx("flex_nameform", "max-xl:flex-col")}>
                  <div className={cx("name_form")}>
                    <h5>
                      Tên <span class={cx("required")}>*</span>
                    </h5>
                    <input
                      type="text"
                      required
                      placeholder="Vui lòng nhập tên"
                      className="xl:w-[350px] max-xl:w-[320px] h-[40px] rounded-[5px] p-[10px] border border-[#cccccc] max-md:w-full"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  <div className={cx("name_form")}>
                    <h5>
                      Họ <span class={cx("required")}>*</span>
                    </h5>
                    <input
                      type="text"
                      required
                      placeholder="Vui lòng nhập họ"
                      className="xl:w-[350px] max-xl:w-[320px] h-[40px] rounded-[5px] p-[10px] border border-[#cccccc] max-md:w-full"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className={cx("phone")}>
                  <h5>
                    Địa chỉ nhà <span class={cx("required")}>*</span>
                  </h5>
                  <input
                    type="tel"
                    required
                    placeholder="Vui lòng nhập địa chỉ nhà của bạn"
                    className="max-xl:w-[320px] xl:w-full max-md:w-full"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className={cx("nation")}>
                  <h5>
                    Tỉnh/ Thành phố<span class={cx("required")}>*</span>
                  </h5>
                  <select
                    required
                    className="max-xl:w-[320px] h-[40px] xl:w-full max-md:w-full "
                    onChange={(e) => {
                      console.log(e.target.value);
                      if (!JSON.parse(e.target.value)) {
                        return;
                      }
                      setSelectedProvince(JSON.parse(e.target.value));
                    }}
                  >
                    <option value={null}></option>
                    {listProvince.map((pro) => {
                      return (
                        <option
                          key={pro.name}
                          value={JSON.stringify({
                            id: pro.ProvinceID,
                            name: pro.ProvinceName,
                          })}
                        >
                          {pro.ProvinceName}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className={cx("city")}>
                  <h5>
                    Quận <span class={cx("required")}>*</span>
                  </h5>
                  <select
                    required
                    className="max-xl:w-[320px] h-[40px] xl:w-full max-md:w-full border border-[#cccccc] rounded-[5px] my-[10px]"
                    onChange={(e) => {
                      setSelectedDistrict(JSON.parse(e.target.value));
                    }}
                  >
                    <option></option>
                    {district.map((dis) => (
                      <option
                        key={dis.name}
                        value={JSON.stringify({
                          id: dis.DistrictID,
                          name: dis.DistrictName,
                        })}
                      >
                        {dis.DistrictName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("city")}>
                  <h5>
                    Phường <span class={cx("required")}>*</span>
                  </h5>
                  <select
                    required
                    className="max-xl:w-[320px] h-[40px] xl:w-full max-md:w-full border border-[#cccccc] rounded-[5px] my-[10px]"
                    onChange={(e) => {
                      setSelectedWard(JSON.parse(e.target.value));
                    }}
                  >
                    <option></option>
                    {ward.map((ward) => (
                      <option
                        key={ward.name}
                        value={JSON.stringify({
                          id: ward.DistrictID,
                          name: ward.WardName,
                        })}
                      >
                        {ward.WardName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={cx("phone")}>
                  <h5>
                    Số điện thoại <span class={cx("required")}>*</span>
                  </h5>
                  <input
                    type="number"
                    required
                    placeholder="Vui lòng nhp số điện thoại"
                    className="max-xl:w-[320px] xl:w-full max-md:w-full"
                    value={number}
                    onChange={(e) => {
                      setNumber(e.target.value);
                    }}
                  />
                </div>
                <div className={cx("email")}>
                  <h5>
                    Địa chỉ email <span class={cx("required")}>*</span>
                  </h5>
                  <input
                    type="email"
                    required
                    placeholder="Vui lòng nhập Email"
                    className="max-xl:w-[320px] xl:w-full max-sm:w-full max-md:w-full"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={cx("text_note")}>
                  <h5 className="mt-[10px]">Ghi chú đơn hàng (tùy chọn)</h5>
                  <textarea
                    className={cx(
                      "description_oders",
                      "mt-[10px]",
                      "p-[5px]",
                      "xl:h-[200px]",
                      "max-lg:h-[100px]",
                      "max-xl:w-[320px]",
                      "xl:w-full",
                      "max-md:w-full"
                    )}
                    placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                  />
                </div>
              </form>
              {!checkFrom && (
                <div className="error text-red-500 font-bold mt-5">
                  {" "}
                  Vui lòng nhập đầy đủ thông tin !
                </div>
              )}
            </div>
            <div
              className={cx(
                "order_summary",
                "max-xl:w-[50%]",
                "xl:p-5",
                "max-md:w-full"
              )}
            >
              <h3
                className={cx(
                  "title_oders",
                  "xl:text-[22px]",
                  "max-md:text-[18px]",
                  "max-lg:mt-5",
                  "max-md:mt-5"
                )}
              >
                Đơn Đặt Hàng
              </h3>
              <div className={cx("order_item", "mt-5")}>
                <span>Sản phẩm</span>
                <span>Tạm tính</span>
              </div>
              <div className={cx("product_list")}>
                {listPayment.map((item) => (
                  <div className={cx("product")}>
                    <img
                      src={`https://trandainghia.id.vn${item.primary_image.path}`}
                      alt=""
                      width={80}
                    />
                    <p>{item.name}</p>
                    <span>(X{item.quantity})</span>
                    <span className={cx("price_payment")}>
                      {formatPrice(item.quantity * item.units[0].price_sale)}đ
                    </span>
                  </div>
                ))}
              </div>

              <div className={cx("order_voucher")}>
                <span className="mt-[5px]">Mã voucher: </span>
                <input
                  type="text"
                  placeholder="ESM30AB12"
                  className="w-[270px] max-lg:w-[210px] p-[5px] border border-[#cccccc] "
                  value={voucherCode}
                  onChange={(e) => setVoucherCode(e.target.value)}
                />
                <button
                  className={cx("voucher_link", "px-3")}
                  onClick={applyVoucher}
                >
                  Áp ngay
                </button>
              </div>
              {voucherError && ( // Hiển thị thông báo lỗi nếu có
                <span className="text-red-500">{voucherError}</span>
              )}
              <div className={cx("order_discount")}>
                <span>Đã giảm: {formatPrice(discountValue)}đ</span>
              </div>
              <div className={cx("order_total")}>
                <span>Tổng tiền:</span>
                <span className={cx("price_payment")}>
                  {formatPrice(Number(total.current))}đ
                </span>
              </div>
              <div className={cx("payment_method")}>
                <h5 className=" text-2xl mb-3 font-medium ">
                  <i class="fa-solid fa-money-bill-transfer text-[25px] text-[#3bb77e] font-bold pr-1"></i>
                  Phương thức thanh toán
                </h5>
                <select
                  name=""
                  id=""
                  className="text-[18px] w-full h-[35px] rounded-[5px] border-2 border-[#3bb77e] mb-2"
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                  }}
                >
                  {listPaymentMethod.current.map((item, index) => {
                    return (
                      <>
                        <option
                          key={index}
                          value={item.method}
                          checked={paymentMethod === item.method}
                        >
                          {item.des}
                        </option>
                      </>
                    );
                  })}
                </select>
              </div>
              <label className={cx("agree_terms", "flex")}>
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] "
                  onChange={() => {
                    setCheckAccept(!checkAccept);
                  }}
                />
                <span className="text-base">
                  Tôi đã đọc và đồng ý với{" "}
                  <a href="#" className="text-[#3bb77e]">
                    điều khoản và điều kiện
                  </a>{" "}
                  của website
                </span>
              </label>
              {ErrorCheckAccept && (
                <div className="text-red-600">
                  Vui lòng chấp nhận điều khoản của chúng tôi để có thể mua hàng
                  !
                </div>
              )}
              <button
                onClick={() => {
                  handleCheckForm();
                }}
                className={cx("submit_button")}
              >
                Thanh toán
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
