"use client";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./productdetail.module.css";
import { fetchProductById } from "@/service/product";
import { fetchProducts } from "@/service/product";
import { useCart, CartFunction, Dispatch } from "@/components/CartFunction";
import {
  DispatchYt,
  useYeuThich,
  YeuThichFunction,
} from "@/components/YTFunction/sanphamyeuthich";
const cx = classNames.bind(styles);

export default function ProductDetail({ params }) {
  const { state, dispatch } = useCart();
  const { stateYt, dispatchYt } = useYeuThich();
  const { id } = params; // lấy id từ params
  const [product, setProduct] = useState(null);
  const [product_related, setProduct_Related] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    fetchProducts("Product_Related").then((related) => {
      setProduct_Related(related.slice(0, 5));
    });
  }, []);

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => {
        setProduct(data);
      });
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;
  const handleQuantityChange = (action) => {
    if (quantity <= 1 && action === "minus") return;
    const newQuatity = action === "plus" ? quantity + 1 : quantity - 1;
    setQuantity(newQuatity);
  };
  return (
    <div className="md:max-w-screen-xl md:mx-auto">
      <div
        className={cx("link_home_news", "max-md:px-3", "max-md:p-1", "md:px-3")}
      >
        <ul className={cx("list_link")}>
          <li>
            <Link
              href="/"
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
            </Link>
          </li>
          <li className={cx("separator")}>/</li>
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
              {product.name}
            </a>
          </li>
        </ul>
      </div>

      {/* Product Details Section */}
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
            src={`/${product.image}`}
            alt={product.name}
            className="w-full h-auto mx-auto"
          />
          <div className={cx("img_small", "flex", "justify-center")}>
            {[...Array(3)].map((_, index) => (
              <img
                key={index}
                src={`/${product.image}`}
                alt={`${product.name} thumbnail ${index + 1}`}
                className="w-[100px]"
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div className={cx("product_content_right", "p-5", "max-md:w-full")}>
          <h3 className={cx("product_name_detail")}>{product.name}</h3>

          {/* Price Details */}
          <div className={cx("product_price")}>
            <div>
              <span className={cx("price_label")}>Giá niêm yết</span>
              <span className={cx("price_original")}>
                {formatPrice(product.price)}
              </span>
            </div>
            <div>
              <span className={cx("price_label")}>Giá khuyến mãi</span>
              <span className={cx("price_discount")}>
                {formatPrice(product.sale_price)}
              </span>
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

          {/* Shipping Details */}
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
            <span className={cx("code_sku")}>{product.sku || "ESM12AB30"}</span>
          </div>
          <div className={cx("quantity")}>
            <span className={cx("name")}>Số lượng</span>
            <div className={cx("flex_quantity")}>
              <button
                onClick={() => {
                  handleQuantityChange("minus");
                }}
                className={cx("downcount")}
              >
                -
              </button>
              <button className={cx("updatecount")}>{quantity}</button>
              <button
                onClick={() => handleQuantityChange("plus")}
                className={cx("upcount")}
              >
                +
              </button>
            </div>
          </div>
          <div className="btn_wishlistProduct my-[10px]">
            <button
              onClick={() => {
                dispatchYt(new DispatchYt("ADD_ITEM_YEUTHICH", product));
              }}
              className="border border-red-500 text-red-500 font-semibold text-[18px] w-[145px] h-[35px] rounded-[5px]"
            >
              <i class="fa-solid fa-heart text-red-500 text-[18px]"></i> Yêu
              thích
            </button>
          </div>
          <div className="flex_btn mt-3 max-md:flex max-md:flex-col max-md:gap-y-4">
            <button
              onClick={() => {
                let data = product;
                data.quantity = quantity;
                dispatch(new Dispatch("ADD_ITEM_CART", data));
              }}
              className={cx("btn_addCart", "font-semibold")}
            >
              <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
            </button>
            <button className={cx("btn_buynow", "lg:ml-3", "max-lg:ml-[10px]")}>
              <i className="fa-solid fa-cart-shopping"></i> Mua ngay
            </button>
          </div>

          {/* Product Description */}
          <div className={cx("product_description")}>
            <h3>Mô tả</h3>
            <p>{product.description || "Không có mô tả"}</p>
          </div>
        </div>
      </section>

      {/* Related Products */}
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
          {product_related.map((item) => (
            <li
              key={item}
              className={cx("item_productrelate", "h-auto", "justify-between")}
            >
              <Link href={`/chi-tiet-san-pham/${item.id}`} className={cx("a")}>
                <img
                  src={`/${item.image}`}
                  alt={item.name}
                  className="h-full"
                />
              </Link>
              <h3 className={cx("name_productrelated")}>
                <Link href="" className={cx("a")}>
                  {item.name}
                </Link>
              </h3>
              <span className={cx("unitofmeasurement")}>
                ĐVT: {item.unit_of_caculation}
              </span>
              <h5 className={cx("price_related")}>{formatPrice(item.price)}</h5>
              <button className={cx("btn_addRelated")}>
                <Link href="" className={cx("a")}>
                  <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Comments Section */}
      <h3 className={cx("comment-product", "mt-5")}>Bình luận về sản phẩm</h3>
      <div className={cx("comment-section")}>
        {/* Comment Input Box */}
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
                {[...Array(5)].map((_, idx) => (
                  <span key={idx}>&#9733;</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comment List */}
        <div className={cx("comment-list")}>
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className={cx("comment-item")}>
              <div className={cx("user-avatar")}>
                <i className="fa-solid fa-circle-user"></i>
              </div>
              <div className={cx("comment-content")}>
                <p>Người dùng A: ...</p>
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
          ))}
        </div>
      </div>
    </div>
  );
}
