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
import { useState } from "react";

const cx = classNames.bind(styles);

const Cart = () => {
  const [showListCart, setShowListCart] = useState(true);
  return (
    <div className="container">
      <div className={cx("page-cart")}>
        <ul className={cx("nav")}>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faHouse}
            ></FontAwesomeIcon>
            <Link className={cx("item")} href="#">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={cx("item")} href="#">
              Giỏ hàng
            </Link>
          </li>
        </ul>
        <div className={cx("cart-content")}>
          <div className={cx("title")}>Giỏ hàng</div>
          {showListCart ? (
            <div className={cx("content")}>
              <table className={cx("list-product")}>
                {/* Phần tiêu đề của bảng */}
                <thead>
                  <tr>
                    <th colSpan="2">Sản phẩm</th>{" "}
                    {/* Lưu ý: colSpan với chữ "S" lớn */}
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng</th>
                    <th></th>
                  </tr>
                </thead>

                {/* Phần thân của bảng */}
                <tbody>
                  <tr>
                    <td className={cx("product")} colSpan="2">
                      <label className={cx("container")}>
                        <input type="checkbox" />
                        <span className={cx("checkmark")}></span>
                      </label>
                      <div className={cx("thumb")}>
                        <img
                          src="assets/img/product_hotnew1.svg"
                          alt="Sản phẩm"
                          className={cx("product-image")}
                        />
                      </div>
                      <div className={cx("info")}>
                        <div className={cx("name")}>
                          Muối ớt chanh Nha Trang
                        </div>
                        <div className={cx("unit")}>
                          ĐVT: <span>Bó</span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td className={cx("price")}>390.000đ</td>
                    <td className={cx("box-quantity")}>
                      <div className={cx("quantity")}>
                        <button>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <input type="number" value="1" min="1" />
                        <button>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                    </td>
                    <td className={cx("price")}>390.000đ</td>
                    <td className={cx("delete")}>
                      <FontAwesomeIcon
                        className={cx("icon-trash")}
                        icon={faTrashCan}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className={cx("product")} colSpan="2">
                      <label className={cx("container")}>
                        <input type="checkbox" />
                        <span className={cx("checkmark")}></span>
                      </label>
                      <div className={cx("thumb")}>
                        <img
                          src="assets/img/product_hotnew1.svg"
                          alt="Sản phẩm"
                          className={cx("product-image")}
                        />
                      </div>
                      <div className={cx("info")}>
                        <div className={cx("name")}>
                          Muối ớt chanh Nha Trang
                        </div>
                        <div className={cx("unit")}>
                          ĐVT: <span>Bó</span>
                        </div>
                      </div>
                    </td>
                    <td></td>
                    <td className={cx("price")}>390.000đ</td>
                    <td className={cx("box-quantity")}>
                      <div className={cx("quantity")}>
                        <button>
                          <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <input type="number" value="1" min="1" />
                        <button>
                          <FontAwesomeIcon icon={faMinus} />
                        </button>
                      </div>
                    </td>
                    <td className={cx("price")}>390.000đ</td>
                    <td className={cx("delete")}>
                      <FontAwesomeIcon
                        className={cx("icon-trash")}
                        icon={faTrashCan}
                      />
                    </td>
                  </tr>
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
                    <span className={cx("main-total")}>390,000₫</span>
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
