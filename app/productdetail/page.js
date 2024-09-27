"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import styles from "./productdetail.module.css";
export default function ProductDetail() {
  const [related_products, setRelated_products] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const ProductRelated = res.data.filter(
          (item) => item.category === "related_products"
        );
        setRelated_products(ProductRelated);
      })
      .catch((err) => {
        console.log("Fetching is Failed", err);
      });
  }, []);
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
            <div className={styles.image_small}>
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
        <section className="related_products">
          <div className="container">
            <h3 className="CardRelated_products">Sản Phẩm Gợi Ý</h3>
            <section className="Product_Related">
              <div className="list-productRelated">
                {related_products.map((item) => {
                  return (
                    <>
                      <div className="card_related" key={item.id}>
                        <img
                          className="card-image_related"
                          src={item.img}
                          alt={item.name}
                        />
                        <div className="card-price_related">
                          <span className="old-price_related">
                            {item.price.toLocaleString()}đ
                          </span>
                          <span
                            className="new-price_related"
                            style={{
                              color: "#FED070",
                              fontWeight: 700,
                              fontSize: 35,
                              marginLeft: 25,
                            }}
                          >
                            {item.sale_price.toLocaleString()}đ
                          </span>
                        </div>
                        <h4 className="card-name_related">{item.name}</h4>
                        <button className="card-button_related">
                          <Link href="/productdetail" className="a">
                            Thêm vào giỏ hàng
                          </Link>
                        </button>
                      </div>
                    </>
                  );
                })}
              </div>
              {/* </div> */}
            </section>
          </div>
        </section>
        <h3 className="comment_product">Bình luận về sản phẩm</h3>
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
