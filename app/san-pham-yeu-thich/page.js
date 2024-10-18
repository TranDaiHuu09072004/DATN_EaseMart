"use client";
import React, { useState } from "react";
import styles from "./san-pham-yeu-thich.module.css";
export default function Wishlist() {
  const [showproduct_empty, setShowProduct_empty] = useState(false);
  return (
    <div>
      <div className="container">
        <div className={styles.link_home_news}>
          <ul className={styles.list_link}>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">Sản phẩm yêu thích</a>
            </li>
          </ul>
        </div>
        {!showproduct_empty ? (
          <div className={styles.product_empty}>
            <h3 className={styles.title_wishlist_empty}>Sản Phẩm Yêu Thích</h3>
            <div className={styles.product_cartempty}>
              <i class="fa-light fa-cart-shopping"></i>
              <span>Bạn chưa có sản phẩm yêu thích nào</span>
              <button className={styles.btn_continuewbuy}>
                Tiếp tục mua sắm
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.product_wishlist}>
            <h3 className={styles.title_wishlist}>Sản phẩm yêu thích</h3>
            <ul className={styles.list_productwishlist}>
              <li>
                <img
                  className={styles.img_wishlist}
                  src="assets/img/product_hotnew1.svg"
                  alt=""
                />
                <h5 className={styles.name_product_wishlist}>Sản phẩm 1</h5>
                <span>X1</span>
                <span className={styles.price}>22.000đ</span>
                <i class="fa-solid fa-trash-can"></i>
                <button className={styles.btn_addcart}>
                  Thêm vào giỏ hàng
                </button>
              </li>
              <li>
                <img
                  className={styles.img_wishlist}
                  src="assets/img/product_hotnew2.svg"
                  alt=""
                />
                <h5 className={styles.name_product_wishlist}>Sản phẩm 2</h5>
                <span>X1</span>
                <span className={styles.price}>25.000đ</span>
                <i class="fa-solid fa-trash-can"></i>
                <button className={styles.btn_addcart}>
                  Thêm vào giỏ hàng
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
