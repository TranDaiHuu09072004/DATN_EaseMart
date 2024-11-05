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

const cx = classNames.bind(styles);

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Cart = () => {
  const { state, dispatch } = useCart();
  const [total, setTotal] = useState(0);
  // const [showListCart, setShowListCart] = useState(true);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    let total = 0;
    state.cartItems.forEach((item) => {
      total += item.quantity * item.sale_price;
    });

    setTotal(total);
  }, [state]);
  return (
    <div className="container">
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
          {state.cartItems.length > 0 ? (
            <div className={cx("content")}>
              <table className={cx("list-product")}>
                {/* Phần tiêu đề của bảng */}
                <thead>
                  <tr>
                    <th colSpan="2">Sản phẩm</th>
                    {/* Lưu ý: colSpan với chữ "S" lớn */}
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                    <th></th>
                  </tr>
                </thead>

                {/* Phần thân của bảng */}
                <tbody>
                  {state?.cartItems?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className={cx("product")} colSpan="2">
                          <label className={cx("container")}>
                            <input type="checkbox" />
                            <span className={cx("checkmark")}></span>
                          </label>
                          <div className={cx("thumb")}>
                            <img
                              src={item.image}
                              alt="Sản phẩm"
                              className={cx("product-image")}
                            />
                          </div>
                          <div className={cx("info")}>
                            <div className={cx("name")}>{item.name}</div>
                            <div className={cx("unit")}>
                              ĐVT: <span>{item.unit_of_caculation}</span>
                            </div>
                          </div>
                        </td>
                        <td></td>
                        <td className={cx("price")}>
                          {formatPrice(item.sale_price)}đ
                        </td>
                        <td className={cx("box-quantity")}>
                          <div className={cx("quantity")}>
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
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={() => {}}
                              min="1"
                            />
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
                          </div>
                        </td>
                        <td className={cx("price")}>
                          {formatPrice(item.quantity * item.sale_price)}đ
                        </td>
                        <td className={cx("delete")}>
                          <FontAwesomeIcon
                            className={cx("icon-trash")}
                            icon={faTrashCan}
                            onClick={() => {
                              dispatch(new Dispatch("REMOVE_ITEM_CART", item));
                            }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className={cx("total")}>
                <div className={cx("box-discount")}>
                  <div className={cx("title")}>Áp dụng khuyến mãi</div>
                  <div className={cx("discount")}>
                    <input type="text" placeholder="Mã khuyến mãi" />
                    <button>Áp dụng</button>
                  </div>
                </div>
                <div className={cx("detail-total")}>
                  <div className={cx("title-total")}>Cộng giỏ hàng</div>
                  <div className={cx("provisional")}>
                    <span>Tạm tính</span>{" "}
                    <span className={cx("total-provisional")}>390,000₫</span>
                  </div>
                  <div className={cx("ship")}>
                    <span>Giao hàng</span>{" "}
                    <span className={cx("ship-detail")}>
                      Giao hàng miễn phí
                    </span>
                  </div>
                  <div className={cx("discount")}>
                    <span>Giảm giá</span>{" "}
                    <span className={cx("total-discount")}>0₫</span>
                  </div>
                  <div className={cx("warning")}>
                    Tùy chọn giao hàng sẽ được cập nhật trong quá trình thanh
                    toán
                  </div>
                  <div className={cx("main-total")}>
                    <span>Tạm tính</span>{" "}
                    <span className={cx("main-total")}>
                      {formatPrice(total)}₫
                    </span>
                  </div>
                </div>
                <button className={cx("buynow")}>Thanh toán</button>
              </div>
            </div>
          ) : (
            <div className={cx("empty-cart")}>
              <FontAwesomeIcon
                className={cx("icon-cart-empty")}
                icon={faCartShopping}
              />
              <p> Bạn chưa có sản phẩm nào</p>
              <button>Tiếp tục mua hàng</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
