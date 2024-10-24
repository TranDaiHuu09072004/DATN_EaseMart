"use client";
import classNames from "classnames/bind";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./productdetail.module.css";
const cx = classNames.bind(styles);
export default function ProductDetail() {
  return (
    <div className="md:max-w-screen-xl md:mx-auto">
      <div
        className={cx("link_home_news", "max-md:px-3", "max-md:p-1", "md:px-3")}
      >
        <ul className={cx("list_link")}>
          <li>
            <a
              href="#"
              className={cx(
                "link_item",
                "lg:text-[18px]",
                "lg:text-[#585757]",
                "lg:no-underline",
                "md:text-[18px]",
                "sm:text-[12px]"
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
                "lg:text-[18px]",
                "lg:text-[#585757]",
                "lg:no-underline",
                "md:text-[18px]",
                "sm:text-[12px]"
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
                "lg:text-[18px]",
                "lg:text-[#585757]",
                "lg:no-underline",
                "md:text-[18px]",
                "sm:text-[12px]"
              )}
            >
              Gà Giòn Cổ Điển Foster Farms Takeout
            </a>
          </li>
        </ul>
      </div>
      <section
        className={cx(
          "product_detail",
          "mx-auto",
          "max-md:flex-col",
          "max-md:p-1"
        )}
      >
        <div className={cx("product_img_left")}>
          <img
            src="assets/img/pr_detail.svg"
            alt=""
            className="max-md:w-full mx-auto"
          />
          <div className={cx("img_small", "flex", "justify-center")}>
            <img
              src="assets/img/pr_detail1.svg"
              alt=""
              className="max-lg:w-[100px]"
            />
            <img
              src="assets/img/pr_detail1.svg"
              alt=""
              className="max-lg:w-[100px]"
            />
            <img
              src="assets/img/pr_detail1.svg"
              alt=""
              className="max-lg:w-[100px]"
            />
          </div>
        </div>
        <div className={cx("product_content_right", "p-5", "max-md:w-full")}>
          <h3 className={cx("product_name_detail")}>
            Gà Giòn Cổ Điển Foster Farms Takeout
          </h3>
          <div className={cx("product_price")}>
            <div>
              <span className={cx("price_label")}>Giá niêm yết</span>
              <span className={cx("price_original")}>27.000đ</span>
            </div>
            <div>
              <span className={cx("price_label")}>Giá khuyến mãi</span>
              <span className={cx("price_discount")}>22.000đ</span>
            </div>
            <div
              style={{
                paddingBottom: 10,
                borderTop: "1px solid rgba(0, 0, 0, .12)",
              }}
            ></div>
            <div>
              <span className={cx("price_label")}>Tình trạng</span>
              <span className={cx("product_status")}>Còn hàng</span>
            </div>
          </div>
          <div
            className={cx("flex_shipping")}
            style={{
              paddingBottom: 10,
              borderBottom: "1px solid rgba(0, 0, 0, .12)",
            }}
          >
            <span className={cx("name")}> Vận chuyển</span>
            <div>
              <h3 className={cx("free_shipping")}>
                Miễn phí giao hàng cho đơn hàng từ 300.000đ{" "}
              </h3>
              <h3 className={cx("free_shipping")}>Giao hàng trong 2 giờ</h3>
            </div>
          </div>
          <div className={cx("sku")}>
            <span className={cx("name")}>Mã hàng</span>
            <span className={cx("code_sku")}>ESM12AB30</span>
          </div>
          <div className={cx("quantity")}>
            <span className={cx("name")}>Số lượng</span>
            <div className={cx("flex_quantity")}>
              <button className={cx("downcount")}>-</button>
              <button className={cx("updatecount")}>1</button>
              <button className={cx("upcount")}>+</button>
            </div>
          </div>
          <div className="flex_btn mt-3 max-md:flex max-md:flex-col max-md:gap-y-4">
            <button className={cx("btn_addCart")}>
              <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
            </button>
            <button className={cx("btn_buynow", "lg:ml-3", "max-lg:ml-[10px]")}>
              <i className="fa-solid fa-cart-shopping"></i> Mua ngay
            </button>
          </div>
          <div className={cx("product_description")}>
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
        </div>
      </section>
      <div className={cx("content_infor")}></div>
      <section className={cx("product_related")}>
        <h3 className={cx("product_title_related")}>Sản phẩm liên quan</h3>
        <ul
          className={cx(
            "list_productrelate",
            "grid",
            "grid-cols-5",
            "gap-1",
            "max-lg:grid-cols-3",
            "max-md:grid-cols-2",
            "max-md:gap-[5px]",
            "max-md:p-1"
          )}
        >
          <li className={cx("item_productrelate")}>
            <Link href="" className={cx("a")}>
              <img src="assets/img/product_hotnew1.svg" alt="" />
            </Link>
            <h3 className={cx("name_productrelated")}>
              <Link href="" className={cx("a")}>
                Sản phẩm 1
              </Link>
            </h3>
            <span className={cx("unitofmeasurement")}>ĐVT: Chai</span>
            <h5 className={cx("price_related")}>15.000đ</h5>
            <button className={cx("btn_addRelated")}>
              <Link href="" className={cx("a")}>
                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
              </Link>
            </button>
          </li>
          <li className={cx("item_productrelate")}>
            <Link href="" className={cx("a")}>
              <img src="assets/img/product_hotnew2.svg" alt="" />
            </Link>
            <h3 className={cx("name_productrelated")}>
              <Link href="" className={cx("a")}>
                Sản phẩm 2
              </Link>
            </h3>
            <span className={cx("unitofmeasurement")}>ĐVT: Chai</span>
            <h5 className={cx("price_related")}>15.000đ</h5>
            <button className={cx("btn_addRelated")}>
              <Link href="" className={cx("a")}>
                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
              </Link>
            </button>
          </li>
          <li className={cx("item_productrelate")}>
            <Link href="" className={cx("a")}>
              <img src="assets/img/product_hotnew3.svg" alt="" />
            </Link>
            <h3 className={cx("name_productrelated")}>
              <Link href="" className={cx("a")}>
                Sản phẩm 3
              </Link>
            </h3>
            <span className={cx("unitofmeasurement")}>ĐVT: Chai</span>
            <h5 className={cx("price_related")}>15.000đ</h5>
            <button className={cx("btn_addRelated")}>
              <Link href="" className={cx("a")}>
                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
              </Link>
            </button>
          </li>
          <li className={cx("item_productrelate")}>
            <Link href="" className={cx("a")}>
              <img src="assets/img/product_hotnew4.svg" alt="" />
            </Link>
            <h3 className={cx("name_productrelated")}>
              <Link href="" className={cx("a")}>
                Sản phẩm 4
              </Link>
            </h3>
            <span className={cx("unitofmeasurement")}>ĐVT: Chai</span>
            <h5 className={cx("price_related")}>15.000đ</h5>
            <button className={cx("btn_addRelated")}>
              <Link href="" className={cx("a")}>
                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
              </Link>
            </button>
          </li>
          <li className={cx("item_productrelate")}>
            <Link href="" className={cx("a")}>
              <img src="assets/img/product_hotnew5.svg" alt="" />
            </Link>
            <h3 className={cx("name_productrelated")}>
              <Link href="" className={cx("a")}>
                Sản phẩm 5
              </Link>
            </h3>
            <span className={cx("unitofmeasurement")}>ĐVT: Chai</span>
            <h5 className={cx("price_related")}>15.000đ</h5>
            <button className={cx("btn_addRelated")}>
              <Link href="" className={cx("a")}>
                <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
              </Link>
            </button>
          </li>
        </ul>
      </section>
      <h3 className={cx("comment-product", "mt-5")}>Bình luận về sản phẩm</h3>
      <div className={cx("comment-section")}>
        <div className={cx("comment-box")}>
          <div className={cx("user-input")}>
            <div className={cx("user-avatar")}>
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className={cx("comment-input")}>
              <textarea
                placeholder="Viết bình luận..."
                className="p-2"
              ></textarea>
              <div className={cx("star-rating")}>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("comment-list")}>
          <div className={cx("comment-item")}>
            <div className={cx("user-avatar")}>
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className={cx("comment-content")}>
              <p>
                Người dùng A:
                .....................................................
              </p>
              <div className={cx("star-rating")}>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
              <span className={cx("comment-time")}>Thời gian đăng</span>
            </div>
          </div>

          <div className={cx("comment-item")}>
            <div className={cx("user-avatar")}>
              <i className="fa-solid fa-circle-user"></i>
            </div>
            <div className={cx("comment-content")}>
              <p>
                Người dùng A:
                .....................................................
              </p>
              <div className={cx("star-rating")}>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9733;</span>
                <span>&#9734;</span>
              </div>
              <span className={cx("comment-time")}>Thời gian đăng</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
