import Link from "next/link";
import classNames from "classnames/bind";
import styles from "./footer.module.css";

const cx = classNames.bind(styles);
export default function Footer() {
  return (
    <>
      <div className={cx("footer")}>
        <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
          <div className={styles.Footer}>
            <ul className={styles.list_footer}>
              <li className={styles.ft_1}>
                <Link href="#" className={styles.a}>
                  <div className={styles.footer1}>
                    <img src="assets/img/home/logo.png" alt="" />
                    <h5 className={styles.footer_content}>
                      Cửa hàng tiện lợi <span>EaseMart</span> luôn đem đến trải
                      nghiệm tuyệt vời cho mọi người
                    </h5>
                    <h6 className={styles.footer_address}>
                      Địa chỉ: 11/7J Nguyễn Ảnh Thủ, Bà Điểm, Hóc Môn, TPHCM
                    </h6>
                    <h5 className={styles.footer_hotline}>
                      Hotline liên hệ:<span>+0973072717</span>
                    </h5>
                    <h5 className={styles.footer_email}>
                      Email: <span>easemart@gmail.com</span>
                    </h5>
                    <h6 className={styles.footer_opendoor}>
                      Giờ làm: 10:00 - 18:00, Thứ 2 - Thứ 7
                    </h6>
                  </div>
                </Link>
              </li>
              <li className={styles.ft_2}>
                <Link href="#" className={styles.a}>
                  <div className={styles.footer2}>
                    <h3
                      className={styles.footer_company}
                      style={{ textDecoration: "none", marginTop: 15 }}
                    >
                      Công Ty
                    </h3>
                    <h6 className={styles.footer_item}>Về chúng tôi</h6>
                    <h6 className={styles.footer_item}>Thông tin giao hàng</h6>
                    <h6 className={styles.footer_item}>Chính sách bảo mật</h6>
                    <h6 className={styles.footer_item}>
                      Điều khoản & điều kiện
                    </h6>
                    <h6 className={styles.footer_item}>Liên hệ</h6>
                    <h6 className={styles.footer_item}>Trung tâm hỗ trợ</h6>
                  </div>
                </Link>
              </li>
              <li className={styles.ft_2}>
                <Link href="#" className={styles.a}>
                  <div className={styles.footer2}>
                    <h3
                      className={styles.footer_company}
                      style={{ textDecoration: "none", marginTop: 15 }}
                    >
                      Tài khoản
                    </h3>
                    <h6 className={styles.footer_item}>Đăng nhập</h6>
                    <h6 className={styles.footer_item}>Xem giỏ hàng</h6>
                    <h6 className={styles.footer_item}>Danh sách yêu thích</h6>
                    <h6 className={styles.footer_item}>Theo dõi đơn</h6>
                    <h6 className={styles.footer_item}>Phiếu hỗ trợ</h6>
                    <h6 className={styles.footer_item}>Chi tiết đơn hàng</h6>
                  </div>
                </Link>
              </li>
              <li className={styles.ft_2}>
                <Link href="#" className={styles.a}>
                  <div className={styles.footer2}>
                    <h3
                      className={styles.footer_company}
                      style={{ textDecoration: "none", marginTop: 15 }}
                    >
                      Phổ biến
                    </h3>
                    <h6 className={styles.footer_item}>Thực phẩm tươi sống</h6>
                    <h6 className={styles.footer_item}>Thực phẩm chế biến</h6>
                    <h6 className={styles.footer_item}>
                      Thực phẩm chế biến sẵn
                    </h6>
                    <h6 className={styles.footer_item}>Đồ uống </h6>
                    <h6 className={styles.footer_item}>Sản phẩm Bestseller</h6>
                    <h6 className={styles.footer_item}>Sản Phẩm Phổ Biến</h6>
                  </div>
                </Link>
              </li>
              <li className={styles.ft_2}>
                <Link href="#" className={styles.a}>
                  <div className={styles.footer2}>
                    <h3
                      className={styles.footer_company}
                      style={{ textDecoration: "none", marginTop: 15 }}
                    >
                      Liên Kết
                    </h3>
                    <h6 className={styles.footer_item}>Từ mạng xã hội</h6>
                    <div className={styles.media_social}>
                      <img
                        src="assets/img/ft_fb.svg"
                        alt=""
                        className={styles.gg_play}
                      />
                      <img
                        className={styles.app_store}
                        src="assets/img/ft_tt.svg"
                        alt=""
                      />
                      <img
                        className={styles.app_store}
                        src="assets/img/ft_ig.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              </li>
            </ul>
            <hr style={{ color: "#3bb77e" }} />
            <h4 className={styles.copyright}>
              © 2024, Bản quyền thuộc về công ty EaseMart.
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
