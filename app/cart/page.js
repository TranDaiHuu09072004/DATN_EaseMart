"use client";
import classNames from "classnames/bind";
import styles from "./cart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHouse,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { Dispatch, useCart } from "@/components/CartFunction";
import Swal from "sweetalert2";

const cx = classNames.bind(styles);

const Cart = () => {
  const { state, dispatch } = useCart();
  const [total, setTotal] = useState(0);
  // const [showListCart, setShowListCart] = useState(true);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleRemoveCart = (data) => {
    Swal.fire({
      icon: "warning",
      title: "Cảnh báo",
      text: "Bạn có chắc muốn xóa toàn bộ giỏ hàng không",
      showCancelButton: true, // Hiển thị nút "Hủy" (hoặc OK)
      confirmButtonText: "OK", // Văn bản nút xác nhận
      cancelButtonText: "Cancel", // Văn bản nút hủy
    }).then((result) => {
      if (result.isConfirmed) {
        // Điều hướng đến trang đăng nhập nếu người dùng chọn "Đăng nhập"
        dispatch(new Dispatch("REMOVE_ALL", data));
      }
      // Nếu người dùng nhấn "OK", popup sẽ đóng mà không có thêm hành động nào.
    });
  };
  useEffect(() => {
    let total = 0;
    state.cartItems.forEach((item) => {
      if (item.select) {
        total += item.quantity * item.units[0].price_sale;
      }
    });
    setTotal(total);
  }, [state]);

  const handlePayMent = () => {
    // kiểm tra đã có sản phẩm nào được chọn chưa
    if (state.cartItems.some((item) => item.select)) {
      // đưa đến trang thanh toán
      window.location.href = "/thanh-toan";
      //...
    } else {
      // thông báo người dùng chưa chọn sản phẩm nào
      Swal.fire({
        icon: "error",
        title: "Thông báo",
        text: "Vui lòng chọn sản phẩm để thanh toán",
      });
    }
  };
  return (
    <div className={cx("max-w-screen-xl", "mx-auto", "px-4")}>
      <div className={cx("page-cart")}>
        <div
          className={cx(
            "link_home_news",
            "max-md:px-3",
            "max-md:p-1",
            "md:px-3",
            "items-center"
          )}
        >
          <ul className={cx("list_link")}>
            <li>
              <Link
                href="/"
                className={cx(
                  "link_item",
                  "xl:text-xl",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "max-lg:text-[18px]",
                  "max-md:text-[16px]"
                )}
              >
                Trang Chủ
              </Link>
            </li>
            <li
              className={cx(
                "separator",
                "xl:text-xl",
                "lg:text-[#585757]",
                "lg:no-underline",
                "max-lg:text-[18px]",
                "max-md:text-[16px]"
              )}
            >
              /
            </li>
            <li>
              <Link
                href="#"
                className={cx(
                  "link_item",
                  "xl:text-xl",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "max-lg:text-[18px]",
                  "max-md:text-[16px]"
                )}
              >
                Giỏ hàng
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx("cart-content")}>
          <div className={cx("title")}>Giỏ hàng</div>
          <button
            className="mt-5 text-[20px] text-[#3bb77e] font-bold"
            onClick={() => {
              dispatch(new Dispatch("UPDATE_SELECT_All_CART"));
            }}
          >
            Chọn tất cả
          </button>
          {state.cartItems.length > 0 ? (
            <div
              className={cx(
                "content",
                "flex",
                "flex-col",
                "xl:flex-row",
                "xl:justify-between",
                "justify-center",
                "item-center"
              )}
            >
              <div className={cx("list-product")}>
                {/* Phần tiêu đề của bảng */}
                <div
                  className={cx(
                    "box-title",
                    "md:flex",
                    "hidden",
                    "gap-7",
                    "mb-2"
                  )}
                >
                  <div
                    className={cx(
                      "lg:basis-7/12",
                      "md:basis-6/12",
                      "mr-16",
                      "md:mr-10",
                      "lg:mr-0"
                    )}
                  >
                    Sản phẩm
                  </div>
                  <div className={cx("basis-1/12")}>Giá</div>
                  <div className={cx("basis-1/12")}>Số lượng</div>
                  <div className={cx("basis-1/12")}>Tổng</div>
                </div>
                {/* Phần thân của bảng */}
                <div className={cx("flex", "flex-col", "gap-4", "not")}>
                  {state?.cartItems?.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={cx(
                          "flex",
                          "md:items-center",
                          "items-start",
                          "justify-start",
                          "gap-2",
                          "border",
                          "border-b",
                          "last:border-none"
                        )}
                      >
                        <label className={cx("container")}>
                          <input
                            type="checkbox"
                            checked={item.select}
                            onChange={() => {
                              dispatch(
                                new Dispatch("UPDATE_SELECT_CART", item)
                              );
                            }}
                          />
                          <span className={cx("checkmark")}></span>
                        </label>
                        <div className={cx("thumb", "w-20", "flex-shrink-0")}>
                          <img
                            src={`https://trandainghia.id.vn/${item.primary_image.path}`}
                            alt="Sản phẩm"
                            className={cx("product-image", "w-full")}
                          />
                        </div>
                        <div
                          className={cx(
                            "flex-grow",
                            "flex",
                            "md:flex-row",
                            "flex-col",
                            "justify-center",
                            "md:items-center",
                            "gap-1"
                          )}
                        >
                          <div className={cx("info", "lg:w-96", "w-full")}>
                            <div className={cx("name")}>{item.name}</div>
                            <div className={cx("unit", "mb-3")}>
                              ĐVT: <span>{item.units[0].unit_name}</span>
                            </div>
                          </div>

                          <div className={cx("price", "w-24")}>
                            {formatPrice(item.units[0].price_sale)}đ
                          </div>
                          <div className={cx("box-quantity")}>
                            <div className={cx("quantity")}>
                              <button
                                onClick={() => {
                                  dispatch(
                                    new Dispatch("UPDATE_MINUS_ITEM_CART", {
                                      ...item,
                                      index,
                                    })
                                  );
                                }}
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <input
                                type="number"
                                value={item.quantity}
                                onChange={() => {}}
                                min="1"
                              />
                              <button
                                onClick={() => {
                                  dispatch(
                                    new Dispatch("UPDATE_PLUS_ITEM_CART", {
                                      ...item,
                                      index,
                                    })
                                  );
                                }}
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          </div>
                          <div className={cx("price", "w-24")}>
                            {formatPrice(
                              item.quantity * item.units[0].price_sale
                            )}
                            đ
                          </div>
                        </div>
                        <div className={cx("delete")}>
                          <FontAwesomeIcon
                            className={cx("icon-trash")}
                            icon={faTrashCan}
                            onClick={() => {
                              dispatch(new Dispatch("REMOVE_ITEM_CART", item));
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                  <div
                    className={cx("flex", "justify-between", "text-[#3bb77e]")}
                  >
                    <button
                      onClick={() => {
                        handleRemoveCart(true);
                      }}
                    >
                      Xóa tất cả
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("total")}>
                <div className={cx("detail-total")}>
                  <div className={cx("title-total")}>Cộng giỏ hàng</div>
                  <div className={cx("ship")}>
                    <span>Giao hàng</span>{" "}
                    <span className={cx("ship-detail")}>Chưa có</span>
                  </div>

                  <div className={cx("warning")}>
                    Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh
                    toán
                  </div>
                  <div className={cx("main-total")}>
                    <span>Tổng tiền</span>{" "}
                    <span className={cx("main-total")}>
                      {formatPrice(total)}₫
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    handlePayMent();
                  }}
                  className={cx("buynow")}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          ) : (
            <div className={cx("empty-cart")}>
              <img
                src="/assets/gio_hang_trong/gio_hang_trong.png"
                alt=""
                className={cx("icon-cart-empty")}
              />
              <p className="text-[#939393] font-bold">
                Bạn chưa có sản phẩm nào
              </p>
              <button>
                <Link href="/">Tiếp tục mua hàng</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
