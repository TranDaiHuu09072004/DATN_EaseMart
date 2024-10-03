"use client";
import React from "react";
import Link from "next/link";
import styles from "./productdetail.module.css";
export default function ProductDetail() {
  return (
    <div>
      <div className="container">
        <div className={styles.link_home_news}>
          <ul className={styles.list_link}>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>
              <i className="fa-solid fa-chevron-right"></i>
            </li>
            <li>
              <a href="#">Gà Giòn Cổ Điển Foster Farms Takeout</a>
            </li>
          </ul>
        </div>
        <section className={styles.product_detail}>
          <div className={styles.product_img_left}>
            <img src="assets/img/pr_detail.svg" alt="" />
            <div className={styles.img_small}>
              <img src="assets/img/pr_detail1.svg" alt="" />
              <img src="assets/img/pr_detail1.svg" alt="" />
              <img src="assets/img/pr_detail1.svg" alt="" />
            </div>
          </div>
          <div className={styles.product_content_right}>
            <h3 className={styles.product_name_detail}>
              Gà Giòn Cổ Điển Foster Farms Takeout
            </h3>
            <div class={styles.product_price}>
              <div>
                <span class={styles.price_label}>Giá niêm yết</span>
                <span class={styles.price_original}>27.000đ</span>
              </div>
              <div>
                {" "}
                <span class={styles.price_label}>Giá khuyến mãi</span>
                <span class={styles.price_discount}>22.000đ</span>
              </div>
              <div
                style={{
                  paddingBottom: 10,
                  borderTop: "1px solid rgba(0, 0, 0, .12)",
                }}
              >
                <span class={styles.price_label}>Tình trạng</span>
                <span class={styles.product_status}>Còn hàng</span>
              </div>
            </div>
            <div
              className={styles.flex_shipping}
              style={{
                paddingBottom: 10,
                borderBottom: "1px solid rgba(0, 0, 0, .12)",
              }}
            >
              <span class={styles.name}> Vận chuyển</span>
              <div>
                <h3 className={styles.free_shipping}>
                  Miễn phí giao hàng cho đơn hàng từ 300.000đ{" "}
                </h3>
                <h3 className={styles.free_shipping}>Giao hàng trong 2 giờ</h3>
              </div>
            </div>
            <div className={styles.sku}>
              <span className={styles.name}>Mã hàng</span>
              <span className={styles.code_sku}>ESM12AB30</span>
            </div>
            <div className={styles.quantity}>
              <span className={styles.name}>Số lượng</span>
              <div className={styles.flex_quantity}>
                <button className={styles.downcount}>-</button>
                <button className={styles.updatecount}>1</button>
                <button className={styles.upcount}>+</button>
              </div>
            </div>
            <button className={styles.btn_addCart}>
              <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
            </button>
          </div>
        </section>
        <div className={styles.content_infor}>
          <div className={styles.product_description}>
            <h3>Mô tả</h3>
            <p>Gà Giòn Cổ Điển Foster Farms Takeout.</p>
            <ul>
              <li>Hương vị: Cổ điển, đậm đà.</li>
              <li>Giá trị dinh dưỡng:</li>
              <ul>
                <li>Cung cấp protein từ thịt gà.</li>
                <li>Không chứa chất bảo quản và màu nhân tạo.</li>
              </ul>
              <li>
                Kích thước: Trọng lượng tịnh: (cần thêm thông tin cụ thể về
                trọng lượng).
              </li>
              <li>Chứng nhận: Đạt tiêu chuẩn an toàn vệ sinh thực phẩm.</li>
            </ul>
          </div>

          {/* New Information Section */}
          <div className={styles.product_info}>
            <h3>Thông tin</h3>
            <table>
              <tbody>
                <tr>
                  <td>Xuất Xứ</td>
                  <td>Việt Nam</td>
                </tr>
                <tr>
                  <td>Thành phần</td>
                  <td>Thịt gà tươi, lớp bột giòn vàng rụm.</td>
                </tr>
                <tr>
                  <td>Hướng dẫn sử dụng</td>
                  <td>
                    Lò nướng: Làm nóng lò trước ở 220°C, nướng 20-25 phút.
                    <br />
                    Chảo chiên: Làm nóng dầu, chiên gà đến khi vàng rụm.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <section className={styles.product_related}>
          <h3 className={styles.product_title_related}>Sản phẩm liên quan</h3>
          <ul className={styles.list_productrelate}>
            <li className={styles.item_productrelate}>
              <Link href="" className={styles.a}>
                <img src="assets/img/product_hotnew1.svg" alt="" />
              </Link>
              <h3 className={styles.name_productrelated}>
                <Link href="" className={styles.a}>
                  Sản phẩm 1
                </Link>
              </h3>
              <span className={styles.unitofmeasurement}>ĐVT: Chai</span>
              <h5 className={styles.price_related}>15.000đ</h5>
              <button className={styles.btn_addRelated}>
                <Link href="" className={styles.a}>
                  <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
            <li className={styles.item_productrelate}>
              <Link href="" className={styles.a}>
                <img src="assets/img/product_hotnew2.svg" alt="" />
              </Link>
              <h3 className={styles.name_productrelated}>
                <Link href="" className={styles.a}>
                  Sản phẩm 2
                </Link>
              </h3>
              <span className={styles.unitofmeasurement}>ĐVT: Chai</span>
              <h5 className={styles.price_related}>15.000đ</h5>
              <button className={styles.btn_addRelated}>
                <Link href="" className={styles.a}>
                  <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
            <li className={styles.item_productrelate}>
              <Link href="" className={styles.a}>
                <img src="assets/img/product_hotnew3.svg" alt="" />
              </Link>
              <h3 className={styles.name_productrelated}>
                <Link href="" className={styles.a}>
                  Sản phẩm 3
                </Link>
              </h3>
              <span className={styles.unitofmeasurement}>ĐVT: Chai</span>
              <h5 className={styles.price_related}>15.000đ</h5>
              <button className={styles.btn_addRelated}>
                <Link href="" className={styles.a}>
                  <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
            <li className={styles.item_productrelate}>
              <Link href="" className={styles.a}>
                <img src="assets/img/product_hotnew4.svg" alt="" />
              </Link>
              <h3 className={styles.name_productrelated}>
                <Link href="" className={styles.a}>
                  Sản phẩm 4
                </Link>
              </h3>
              <span className={styles.unitofmeasurement}>ĐVT: Chai</span>
              <h5 className={styles.price_related}>15.000đ</h5>
              <button className={styles.btn_addRelated}>
                <Link href="" className={styles.a}>
                  <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
            <li className={styles.item_productrelate}>
              <Link href="" className={styles.a}>
                <img src="assets/img/product_hotnew5.svg" alt="" />
              </Link>
              <h3 className={styles.name_productrelated}>
                <Link href="" className={styles.a}>
                  Sản phẩm 5
                </Link>
              </h3>
              <span className={styles.unitofmeasurement}>ĐVT: Chai</span>
              <h5 className={styles.price_related}>15.000đ</h5>
              <button className={styles.btn_addRelated}>
                <Link href="" className={styles.a}>
                  <i class="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
          </ul>
        </section>
        <h3 className="comment-product">Bình luận về sản phẩm</h3>
        <div class="comment-section">
          <div class="comment-box">
            <div class="user-input">
              <div class="user-avatar">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="comment-input">
                <textarea placeholder="Viết bình luận..."></textarea>
                <div class="star-rating">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </div>
              </div>
            </div>
          </div>

          <div class="comment-list">
            <div class="comment-item">
              <div class="user-avatar">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="comment-content">
                <p>
                  Người dùng A:
                  .....................................................
                </p>
                <div class="star-rating">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <span class="comment-time">Thời gian đăng</span>
              </div>
            </div>

            <div class="comment-item">
              <div class="user-avatar">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div class="comment-content">
                <p>
                  Người dùng A:
                  .....................................................
                </p>
                <div class="star-rating">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9734;</span>
                </div>
                <span class="comment-time">Thời gian đăng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
