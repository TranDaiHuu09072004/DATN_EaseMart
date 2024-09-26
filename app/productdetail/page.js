import React from "react";
import Link from "next/link";
import styles from "./productdetail.module.css";
export default function ProductDetail() {
  return (
    <div>
      <div className="container">
        <ul className={styles.pr_detail}>
          <li>
            <img
              src="assets/img/icon_pr--detail.svg"
              alt=""
              width={30}
              height={30}
            />
          </li>
          <li>
            <Link href="/" className="a">
              Trang Chủ
            </Link>
          </li>
          <li>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <span className="name_productdetail">Chi tiết sản phẩm</span>
          </li>
        </ul>
        <div className={styles.box_product__detail}>
          <div className={styles.product_detail__img}>
            <img src="assets/img/pr_detail.svg" alt="" className="img_detail" />
            <div className="image_small">
              <img src="assets/img/pr_detail1.svg" alt="" />
              <img src="assets/img/pr_detail2.svg" alt="" />
              <img src="assets/img/pr_detail3.svg" alt="" />
            </div>
          </div>

          <div className={styles.content_product__detail}>
            <h3 className={styles.name_detail}>
              24 lon nước tăng lực Redbull 250ml
            </h3>
            <div className={styles.price_detail}>
              <span className={styles.price}>230,000đ</span>
              <span className={styles.sale_price}>208,000đ</span>
            </div>
            <p className={styles.inforproduct}>
              Nước tăng lực Redbull có thành phần tự nhiên, thơm ngon, sảng
              khoái. Thùng 24 lon nước tăng lực Redbull 250ml cung cấp nước,
              năng lượng, vitamin và các khoáng chất cho cơ thể, cho bạn nguồn
              năng lượng mạnh mẽ, xua tan mệt mỏi. Nước tăng lực không đường hóa
              học, không hóa chất, đảm bảo an toàn
            </p>
            <span>
              Còn lại:<strong style={{ fontWeight: 550 }}>20</strong>
            </span>
            <div className={styles.btn_input}>
              <input type="number" value={1} className={styles.quantity} />
              <button className={styles.addCart}>
                <Link href="" className={styles.a}>
                  Thêm vào giỏ hàng
                </Link>
              </button>
              <button className={styles.buynow}>
                <Link href="" className={styles.a}>
                  Mua ngay
                </Link>
              </button>
            </div>
            <span className={styles.code_product}>SKU:ESM12B4A</span>
            <span className={styles.category_product}></span>

            <div className={styles.product_info}>
              <h3>Thông tin sản phẩm</h3>
              <p>
                Nước tăng lực Redbull có thành phần tự nhiên, thơm ngon, sảng
                khoái. Thùng 24 lon nước tăng lực Redbull 250ml cung cấp nước,
                năng lượng, vitamin và các khoáng chất cho cơ thể, cho bạn nguồn
                năng lượng mạnh mẽ, xua tan mệt mỏi. Nước tăng lực không đường
                hóa học, không hóa chất, đảm bảo an toàn
              </p>
              <ul className={styles.detail_infor}>
                <li>Thương hiệu: Redbull (Thái Lan)</li>
                <li>Sản xuất tại: Việt Nam</li>
                <li>
                  Nguyên liệu chính: Nước, đường, chất điều chỉnh độ axit, hương
                  liệu trái cây hỗn hợp, vitamin B5, vitamin B6, vitamin B12,...
                </li>
                <li>Thể tích: 250ml.</li>
                <li>
                  Hướng dẫn sử dụng: Lắc nhẹ trước khi uống, dùng ngay sau khi
                  mở nắp. Ngon hơn khi uống lạnh.
                </li>
                <li>
                  Bảo quản: Để nơi khô ráo, thoáng mát, tránh ánh sáng trực tiếp
                  hoặc nơi có nhiệt độ cao.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
