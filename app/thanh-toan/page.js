import React from "react";
import styles from "./payment.module.css";
export default function Payment() {
  return (
    <div>
      <div className="container">
        <div className={styles.flex_pm}>
          <div className={styles.link_home_news}>
            <ul className={styles.list_link}>
              <li>
                <i class="fa-solid fa-house"></i>
                <a href="#">Trang Chủ</a>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="#">Thanh toán</a>
              </li>
            </ul>
          </div>
          <div className={styles.steps}>
            <div className={styles.step}>
              <span className={styles.step_number}>1</span>
              <span className={styles.step_text}>Đăng nhập</span>
            </div>
            <span className={styles.separator}>—</span>
            <div className={styles.step}>
              <span className={styles.step_number}>2</span>
              <span className={styles.step_text}>Thông tin nhận hàng</span>
            </div>
            <span className={styles.separator}>—</span>
            <div className={`${styles.step} ${styles.active}`}>
              <span className={styles.step_number}>3</span>
              <span className={styles.step_text}>Thanh toán</span>
            </div>
          </div>
        </div>

        <section className={styles.payment}>
          <div className={styles.inforpayment}>
            <h3 className={styles.title_payment}>Thông Tin Thanh Toán</h3>
            <form action="">
              <div className={styles.flex_nameform}>
                <div className={styles.name_form}>
                  <h5>
                    Tên <span class={styles.required}>*</span>
                  </h5>
                  <input type="text" required placeholder="Vui lòng nhập tên" />
                </div>
                <div className={styles.name_form}>
                  <h5>
                    Họ <span class={styles.required}>*</span>
                  </h5>
                  <input type="text" required placeholder="Vui lòng nhập họ" />
                </div>
              </div>
              <div className={styles.nation}>
                <h5>
                  Quốc gia <span class={styles.required}>*</span>
                </h5>
                <select required>
                  <option>Việt Nam</option>
                </select>
              </div>
              <div className={styles.city}>
                <h5>
                  Tỉnh/ Thành phố <span class={styles.required}>*</span>
                </h5>
                <input
                  type="text"
                  required
                  placeholder="Vui lòng nhập Tỉnh/ Thành phố"
                />
              </div>
              <div className={styles.phone}>
                <h5>
                  Số điện thoại <span class={styles.required}>*</span>
                </h5>
                <input
                  type="tel"
                  required
                  placeholder="Vui lòng nhập số điện thoại"
                />
              </div>
              <div className={styles.email}>
                <h5>
                  Địa chỉ email <span class={styles.required}>*</span>
                </h5>
                <input
                  type="email"
                  required
                  placeholder="Vui lòng nhập Email"
                />
              </div>
              <label className={styles.shippingaddress}>
                <input type="checkbox" />
                <span> Giao hàng tới địa chỉ khác?</span>
              </label>
              <div className={styles.text_note}>
                <h5>Ghi chú đơn hàng (tùy chọn)</h5>
                <textarea
                  className={styles.description_oders}
                  placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn địa điểm giao hàng chi tiết hơn."
                />
              </div>
            </form>
          </div>
          <div className={styles.order_summary}>
            <h3 className={styles.title_oders}>Đơn Đặt Hàng</h3>
            <div className={styles.order_item}>
              <span>Sản phẩm</span>
              <span>Tạm tính</span>
            </div>
            <div className={styles.product_list}>
              <div className={styles.product}>
                <img src="assets/img/pr_detail1.svg" alt="" width={80} />
                <p>Gà Giòn Cổ Diễn Foster Farms Takeout </p>
                <span>(X1)</span>
                <span className={styles.price_payment}>390,000đ</span>
              </div>

              <div className={styles.product}>
                <img src="assets/img/pr_detail1.svg" alt="" width={80} />
                <p>Gà Giòn Cổ Diễn Foster Farms Takeout </p>
                <span>(X1)</span>
                <span className={styles.price_payment}>390,000đ</span>
              </div>
            </div>
            <div className={styles.order_total}>
              <span>Tạm tính:</span>
              <span className={styles.price_payment}>785,000đ</span>
            </div>
            <div className={styles.order_voucher}>
              <span>
                Mã voucher:{" "}
                <span className={styles.code_vouchers}> ESM30AB12</span>
              </span>
              <button className={styles.voucher_link}>Xem voucher</button>
            </div>
            <div className={styles.order_discount}>
              <span>Đã giảm: 15,000đ</span>
            </div>
            <div className={styles.payment_method}>
              <h5>Phương thức thanh toán</h5>
              <label className={styles.bank_transfer}>
                <input type="checkbox" />
                <span className={styles.text_payment_method}>Chuyển khoản</span>
              </label>
              <label
                className={`${styles.bank_transfer} ${styles.active_border}`}
              >
                <input type="checkbox" />
                <span className={styles.text_payment_method}>
                  Thanh toán khi nhận hàng
                </span>
              </label>
              <p className={styles.payment_description}>
                Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
              </p>
            </div>
            <label className={styles.agree_terms}>
              <input type="checkbox" />
              <span>
                Tôi đã đọc và đồng ý với <a href="#">điều khoản</a>
              </span>
            </label>
            <button className={styles.submit_button}>Thanh toán</button>
          </div>
        </section>
      </div>
    </div>
  );
}
