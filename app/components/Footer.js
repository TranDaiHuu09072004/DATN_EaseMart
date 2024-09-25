import Link from "next/link";
import "@/public/css/footer.globals.css";
export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="Footer">
          <ul className="list_footer">
            <li className="ft-1">
              <Link href="#" className="Link">
                <div className="footer1">
                  <img src="assets/img/Logo.png" alt="" />
                  <h5 className="footer-content">
                    Cửa hàng tiện lợi <span>EaseMart</span> luôn đem đến trải
                    nghiệm tuyệt vời cho mọi người
                  </h5>
                  <h6 className="footer-address">
                    Địa chỉ: 11/7J Nguyễn Ảnh Thủ, Bà Điểm, Hóc Môn, TPHCM
                  </h6>
                  <h5 className="footer-hotline">
                    Hotline liên hệ:<span>+0973072717</span>
                  </h5>
                  <h5 className="footer-email">
                    Email: <span>easemart@gmail.com</span>
                  </h5>
                  <h6 className="footer-opendoor">
                    Giờ làm: 10:00 - 18:00, Thứ 2 - Thứ 7
                  </h6>
                </div>
              </Link>
            </li>
            <li className="ft-2">
              <Link href="#" className="Link">
                <div className="footer2">
                  <h3
                    className="footer-company"
                    style={{ textDecoration: "none", marginTop: 15 }}
                  >
                    Công Ty
                  </h3>
                  <h6 className="footer-item">Về chúng tôi</h6>
                  <h6 className="footer-item">Thông tin giao hàng</h6>
                  <h6 className="footer-item">Chính sách bảo mật</h6>
                  <h6 className="footer-item">Điều khoản & điều kiện</h6>
                  <h6 className="footer-item">Liên hệ</h6>
                  <h6 className="footer-item">Trung tâm hỗ trợ</h6>
                </div>
              </Link>
            </li>
            <li className="ft-2">
              <Link href="#" className="Link">
                <div className="footer2">
                  <h3
                    className="footer-company"
                    style={{ textDecoration: "none", marginTop: 15 }}
                  >
                    Tài khoản
                  </h3>
                  <h6 className="footer-item">Đăng nhập</h6>
                  <h6 className="footer-item">Xem giỏ hàng</h6>
                  <h6 className="footer-item">Danh sách yêu thích</h6>
                  <h6 className="footer-item">Theo dõi đơn</h6>
                  <h6 className="footer-item">Phiếu hỗ trợ</h6>
                  <h6 className="footer-item">Chi tiết đơn hàng</h6>
                </div>
              </Link>
            </li>
            <li className="ft-2">
              <Link href="#" className="Link">
                <div className="footer2">
                  <h3
                    className="footer-company"
                    style={{ textDecoration: "none", marginTop: 15 }}
                  >
                    Phổ biến
                  </h3>
                  <h6 className="footer-item">Thực phẩm tươi sống</h6>
                  <h6 className="footer-item">Thực phẩm chế biến</h6>
                  <h6 className="footer-item">Thực phẩm chế biến sẵn</h6>
                  <h6 className="footer-item">Đồ uống </h6>
                  <h6 className="footer-item">Sản phẩm Bestseller</h6>
                  <h6 className="footer-item">Sản Phẩm Phổ Biến</h6>
                </div>
              </Link>
            </li>
            <li className="ft-2">
              <Link href="#" className="Link">
                <div className="footer2">
                  <h3
                    className="footer-company"
                    style={{ textDecoration: "none", marginTop: 15 }}
                  >
                    Liên Kết
                  </h3>
                  <h6 className="footer-item">Từ mạng xã hội</h6>
                  <div className="media-social">
                    <img
                      src="assets/img/ft_fb.svg"
                      alt=""
                      className="gg-play"
                    />
                    <img
                      className="app-store"
                      src="assets/img/ft_tt.svg"
                      alt=""
                    />
                    <img
                      className="app-store"
                      src="assets/img/ft_ig.svg"
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
          <hr style={{ color: "#3bb77e" }} />
          <h4 className="copyright">
            © 2024, Bản quyền thuộc về công ty EaseMart.
          </h4>
        </div>
      </div>
    </>
  );
}
