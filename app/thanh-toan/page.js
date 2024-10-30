import React from "react";
import styles from "./payment.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function Payment() {
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
                  />
                </div>
              </div>
              <div className={cx("nation")}>
                <h5>
                  Quốc gia <span class={cx("required")}>*</span>
                </h5>
                <select
                  required
                  className="max-xl:w-[320px] xl:w-full max-md:w-full "
                >
                  <option>Việt Nam</option>
                </select>
              </div>
              <div className={cx("city")}>
                <h5>
                  Tỉnh/ Thành phố <span class={cx("required")}>*</span>
                </h5>
                <select
                  required
                  className="max-xl:w-[320px] xl:w-full max-md:w-full "
                >
                  <option> Tỉnh/ Thành phố</option>
                </select>
              </div>
              <div className={cx("phone")}>
                <h5>
                  Số điện thoại <span class={cx("required")}>*</span>
                </h5>
                <input
                  type="tel"
                  required
                  placeholder="Vui lòng nhập số điện thoại"
                  className="max-xl:w-[320px] xl:w-full max-md:w-full"
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
              <div className={cx("product")}>
                <img src="assets/img/pr_detail1.svg" alt="" width={80} />
                <p>Gà Giòn Cổ Diễn Foster Farms Takeout </p>
                <span>(X1)</span>
                <span className={cx("price_payment")}>390,000đ</span>
              </div>

              <div className={cx("product")}>
                <img src="assets/img/pr_detail1.svg" alt="" width={80} />
                <p>Gà Giòn Cổ Diễn Foster Farms Takeout </p>
                <span>(X1)</span>
                <span className={cx("price_payment")}>390,000đ</span>
              </div>
            </div>
            <div className={cx("order_total")}>
              <span>Tạm tính:</span>
              <span className={cx("price_payment")}>785,000đ</span>
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
            <div className={cx("payment_method")}>
              <h5 className=" text-2xl mb-3 font-medium ">
                Phương thức thanh toán
              </h5>
              <div className="flex text-center items-center gap-2">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] mt-2 mb-3"
                />
                <span className={cx("checkmark")}></span>
                <a href="" className="">
                  <i class="fa-solid fa-money-bill-transfer text-[25px] text-[#3bb77e] font-bold"></i>{" "}
                  Chuyển khoản ngân hàng
                </a>
              </div>

              <div className="flex text-center items-center gap-2">
                <input
                  type="checkbox"
                  className="w-[20px] h-[20px] mt-2 mb-3"
                />
                <span className={cx("checkmark")}></span>
                <a href="" className="text-[18px]">
                  <i class="fa-solid fa-circle-dollar  text-[25px] text-[#3bb77e] font-bold"></i>{" "}
                  Thanh toán khi nhận hàng
                </a>
              </div>
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
