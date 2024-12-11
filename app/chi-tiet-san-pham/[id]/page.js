"use client";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../productdetail.module.css";
import { fetchProductById } from "@/service/product";
import Loading from "@/components/Loading/Loading";
import { fetchProducts } from "@/service/product";
import { useCart, CartFunction, Dispatch } from "@/components/CartFunction";
import {
  DispatchYt,
  useYeuThich,
  YeuThichFunction,
} from "@/components/YTFunction/sanphamyeuthich";
import Swal from "sweetalert2";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
const cx = classNames.bind(styles);

export default function ProductDetail({ params }) {
  const { state, dispatch } = useCart();
  const { stateYt, dispatchYt } = useYeuThich();
  const { id } = params; // lấy id từ params
  const [products, setProduct] = useState(null);
  const [product_related, setProduct_Related] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(
    products?.images.image_path
  );
  const [comments, setComments] = useState([]);
  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "0";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (id) {
      fetchProductById(id).then((data) => {
        setProduct(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0].image_path);
        }
      });

      // Fetch comments
      fetch("https://trandainghia.id.vn/api/comments-list")
        .then((response) => response.json())
        .then((data) => {
          // Filter comments for the current product
          const productComments = Object.values(data).filter((comment) =>
            comment.comments.some((c) => c.product_id === id)
          );
          setComments(productComments);
        });
    }
  }, [id]);

  if (!products)
    return (
      <p>
        <Loading />
      </p>
    );
  const handleQuantityChange = (action) => {
    if (quantity <= 1 && action === "minus") return;
    const newQuatity = action === "plus" ? quantity + 1 : quantity - 1;
    setQuantity(newQuatity);
  };
  // console.log(products);

  products.images && products.images.length > 0
    ? `https://trandainghia.id.vn/storage/upload/f436k9xwzo_xa_lach_xoong_baby.jpg`
    : "Ảnh bị lỗi";

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy HH:mm");
  };

  return (
    <div className="md:max-w-screen-xl md:mx-auto px-4">
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
              {products.product.name}
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
          "max-md:p-4"
        )}
      >
        <div className={cx("product_img_left", "mt-5")}>
          <img
            src={`https://trandainghia.id.vn${selectedImage}`}
            alt={products.name}
            className=" w-full h-auto"
          />
          <div className={cx("img_small", "flex", "justify-center")}>
            {products.images.map((image, index) => (
              <img
                key={index}
                src={`https://trandainghia.id.vn${image.image_path}`}
                alt={`${products.name} thumbnail ${index + 1}`}
                className="w-[100px] mt-2"
                onClick={() => {
                  setSelectedImage(image.image_path);
                }}
              />
            ))}
          </div>
        </div>

        {/* Product Information */}
        <div
          className={cx(
            "product_content_right",
            "px-5",
            "w-[60%]",
            "max-md:w-full"
          )}
        >
          <h3 className={cx("product_name_detail")}>
            {" "}
            {products.product.name}
          </h3>

          <div className={cx("product_price")}>
            <div>
              <span className={cx("price_label")}>Giá niêm yết</span>
              <span className={cx("price_discount")}>
                {formatPrice(products.product_units[0].price)}
              </span>
            </div>
            <div>
              <span className={cx("price_label")}>Giá khuyến mãi</span>
              <span className={cx("price_original")}>
                {formatPrice(products.product_units[0].price_sale)}
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

          <div className={cx("quantity", "mt-2")}>
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
                dispatchYt(new DispatchYt("ADD_ITEM_YEUTHICH", products));
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
                let data = products;
                data.products = quantity;
                dispatch(new Dispatch("ADD_ITEM_CART", data));
              }}
              className={cx("btn_addCart", "font-semibold")}
            >
              <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ hàng
            </button>
            <button
              onClick={() => {
                const user = JSON.parse(localStorage.getItem("user"));
                if (!user) {
                  Swal.fire({
                    icon: "error",
                    title: "Thông báo",
                    text: "Vui lòng đăng nhập để có thể mua hàng",
                    showCancelButton: true, // Hiển thị nút "Hủy" (hoặc OK)
                    confirmButtonText: "Đăng nhập", // Văn bản nút xác nhận
                    cancelButtonText: "Cancel", // Văn bản nút hủy
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.href = "/dangnhap";
                    }
                  });
                  return;
                }
                products.quantity = quantity;
                localStorage.setItem("buy_now", JSON.stringify([products]));

                window.location.href = "/thanh-toan";
              }}
              className={cx("btn_buynow", "lg:ml-3", "max-lg:ml-[10px]")}
            >
              <i className="fa-solid fa-cart-shopping"></i> Mua ngay
            </button>
          </div>

          <div className={cx("product_description")}>
            <h3>Mô tả</h3>
            <p>{products.product.description || "Không có mô tả"}</p>
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
          {products.related_products.map((item) => (
            <li
              key={item.id}
              className={cx("item_productrelate", "h-auto", "justify-between")}
            >
              <Link href={`/chi-tiet-san-pham/${item.id}`} className={cx("a")}>
                <img
                  src={
                    `https://trandainghia.id.vn${item.image_path}` ||
                    "path/to/default/image.jpg"
                  }
                  alt={item.name}
                  className="h-[151.2px] w-[201.6px]"
                  onClick={() => setSelectedImage(item.image)}
                />
              </Link>
              <h3 className={cx("name_productrelated")}>
                <Link
                  href={`/chi-tiet-san-pham/${item.id}`}
                  className={cx("a")}
                >
                  {item.name}
                </Link>
              </h3>
              <span className={cx("unitofmeasurement")}>
                ĐVT: {item.unit_name}
              </span>
              <h5
                className={cx(
                  "price_related",
                  "flex",
                  "justify-between",
                  "items-center"
                )}
              >
                {formatPrice(item.price)}
                <div className={cx("flex-grow", "flex", "justify-end")}>
                  <Icon
                    onClick={() => {
                      dispatchYt(new DispatchYt("ADD_ITEM_YEUTHICH", item));
                    }}
                    icon="mdi:heart-outline"
                    className="w-6 h-6 text-red-500"
                  />
                </div>
              </h5>
              <button
                onClick={() => {
                  item.quantity = 1;
                  dispatch(new Dispatch("ADD_ITEM_CART", item));
                }}
                className={cx("btn_addRelated")}
              >
                <div href="" className={cx("a")}>
                  <i className="fa-solid fa-cart-shopping"></i> Thêm vào giỏ
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
      <h3 className={cx("comment-product", "mt-5")}>Bình luận về sản phẩm</h3>
      <div className={cx("comment-section")}>
        {comments.length === 0 ? (
          <p className="py-5">Sản phẩm này chưa có bình luận nào!</p>
        ) : (
          comments.map((comment, idx) => (
            <div key={idx} className={cx("comment-item")}>
              <div className={cx("comment-content")}>
                {comment.comments.map((singleComment, idx) => (
                  <div key={idx} className="border-bottom ">
                    <div className={cx("user-avatar", "flex", "gap-x-1")}>
                      <i className="fa-solid fa-circle-user"></i>
                      <div className="">
                        <div className="flex-col gap-4">
                          <p className="text-[14px]">{comment.customer.name}</p>
                          <div className={cx("star-rating")}>
                            {[...Array(parseInt(singleComment.rating))].map(
                              (_, i) => (
                                <span key={i}>★</span> // Filled star
                              )
                            )}
                          </div>
                          <p className={cx("comment-time", "text-[#939393]")}>
                            Thời gian đăng:{" "}
                            {formatDate(singleComment.created_at)}
                          </p>
                        </div>
                        <h4 className="text-[14px] font-medium text-[#696969] leading-5">
                          {" "}
                          {singleComment.content}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
