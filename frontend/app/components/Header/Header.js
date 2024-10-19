import classNames from "classnames/bind";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HeaderScroll from "./components/HeaderScroll";

const cx = classNames.bind(styles);
export default function Header() {
  return (
    <div className={cx("box-header")}>
      <div className="container">
        <div className={cx("header")}>
          <div className={cx("header-top")}>
            <div className={cx("logo")}>
              <img src="assets/img/home/logo.png" />
            </div>
            <div className={cx("search-box")}>
              <input type="text" placeholder="Bạn muốn mua gì ..." />
              <button>
                <FontAwesomeIcon
                  className={cx("icon-search")}
                  icon={faSearch}
                />
              </button>
            </div>
            <div className={cx("cart-info")}>
              <Link href="/OrderHistory" className={cx("cart")}>
                <div className={cx("box-icon-cart")}>
                  <FontAwesomeIcon
                    className={cx("icon-cart")}
                    icon={faCartShopping}
                  />
                  <span className={cx("count")}>0</span>
                </div>
                <div className={cx("title")}> Giỏ hàng</div>
              </Link>
              <Link href="/dangky" className={cx("account")}>
                <div className={cx("box-icon-account")}>
                  <FontAwesomeIcon
                    className={cx("icon-account")}
                    icon={faUser}
                  />
                </div>
                <div className={cx("title")}>Đăng ký</div>
              </Link>
            </div>
          </div>
          <div className={cx("header-bot")}>
            <ul className={cx("nav")}>
              <li className={cx("item")}>
                <Link href="/" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/product" className={cx("link")}>
                  Cửa hàng
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/khuyenmai" className={cx("link")}>
                  Khuyến mãi
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/vechungtoi" className={cx("link")}>
                  Về Chúng Tôi
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/lienhe" className={cx("link")}>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <HeaderScroll />
    </div>
  );
}
