"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./payment.module.css";
import classNames from "classnames/bind";
import { useCart } from "@/components/CartFunction";
import { getDistrict, getProvince, getWard } from "@/service/address";
import { formatPrice } from "@/uilts/formatPrice";
const cx = classNames.bind(styles);
export default function Payment() {
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
  let total = useRef(0);
  // const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    setListPayment(() => {
      return state.cartItems.filter((item) => {
        if (item.select) total.current += item.quantity * item.sale_price;
        return item.select;
      });
    });
  }, [state]);
  // thành phố
  useEffect(() => {
    getProvince().then((province) => {
      console.log(province.data);

      setlistProvince(province.data);
    });
  }, []);
  // quận
  useEffect(() => {
    if (!selectedProvince) return;
    console.log(selectedProvince);

    getDistrict(selectedProvince.id)
      .then((province) => {
        console.log(province.data);

        setDistrict(province.data);
      })
      .catch((error) => console.log(error));
  }, [selectedProvince]);

  // phường
  useEffect(() => {
    if (!selectedDistrict) return;

    getWard(selectedDistrict.id)
      .then((province) => {
        console.log(province.data);

        setWard(province.data);
      })
      .catch((error) => console.log(error));
  }, [selectedDistrict]);

  return (
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
              <div className={cx("flex_nameform", "max-lg:flex-col")}>
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
                  placeholder="Vui lòng nhập số điện thoại"
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
                  <img src={item.image} alt="" width={80} />
                  <p>{item.name}</p>
                  <span>(X{item.quantity})</span>
                  <span className={cx("price_payment")}>
                    {formatPrice(item.quantity * item.sale_price)}đ
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
              />
              <button className={cx("voucher_link", "px-3")}>Áp ngay</button>
            </div>
            <div className={cx("order_discount")}>
              <span>Đã giảm: 15,000đ</span>
            </div>
            <div className={cx("order_total")}>
              <span>Tổng tiền:</span>
              <span className={cx("price_payment")}>
                {formatPrice(total.current)}đ
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
              >
                <option value="Thanh Toán Khi Nhận Hàng">
                  Thanh Toán Khi Nhận Hàng
                </option>
                <option value="Thanh toán bằng VNPAY">
                  Thanh toán bằng VNPAY
                </option>
              </select>
              <h5 className=" text-2xl mb-3 font-medium">
                <i class="fa-solid fa-truck-fast  text-[25px] text-[#3bb77e] font-bold pr-1"></i>
                Hình thức vận chuyển
              </h5>
              <select
                name=""
                id=""
                className="text-[18px] w-full h-[35px] rounded-[5px] border-2 border-[#3bb77e]"
              >
                <option value="Giao hàng hỏa tốc">Giao hàng hỏa tốc</option>
                <option value="Giao hàng nhanh">Giao hàng nhanh</option>
                <option value="Giao hàng tiết kiệm">Giao hàng tiết kiệm</option>
              </select>
              <p className={cx("payment_description")}>
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
              </p>
            </div>
            <label className={cx("agree_terms", "flex")}>
              <input type="checkbox" className="w-[20px] h-[20px] " />
              <span className="text-base">
                Tôi đã đọc và đồng ý với{" "}
                <a href="#" className="text-[#3bb77e]">
                  điều khoản và điều kiện
                </a>{" "}
                của website
              </span>
            </label>
            <button className={cx("submit_button")}>Thanh toán</button>
          </div>
        </section>
      </div>
    </div>
  );
}
