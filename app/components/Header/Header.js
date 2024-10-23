import classNames from "classnames/bind";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HeaderScroll from "./components/HeaderScroll/HeaderScroll";
import { Icon } from "@iconify/react";
import MenuMobile from "./components/MenuMobile";

const cx = classNames.bind(styles);
export default function Header() {
  return (
    <div className={cx("box-header")}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={cx("header")}>
          <div className={cx("header-top")}>
            <MenuMobile></MenuMobile>

            <div className={cx("logo")}>
              <img src="assets/img/home/logo.png" />
            </div>
            <div className={cx("search-box", "lg:flex", "hidden")}>
              <input type="text" placeholder="Bạn muốn mua gì ..." />
              <button>
                <FontAwesomeIcon
                  className={cx("icon-search")}
                  icon={faSearch}
                />
              </button>
            </div>
            <div
              className={cx(
                "cart-info",

                "items-center",
                "lg:justify-between",
                "justify-end",
                "flex",
                "lg:gap-5",
                "gap-12",
                "lg:w-72"
              )}
            >
              <Link href="#" className={cx("cart", "flex", "py-3", "gap-2")}>
                <div className={cx("box-icon-cart")}>
                  <FontAwesomeIcon
                    className={cx(
                      "icon-cart",
                      "lg:w-7",
                      "lg:h-7",
                      "w-9",
                      "h-9"
                    )}
                    icon={faCartShopping}
                  />
                  <span className={cx("count")}>0</span>
                </div>
                <div
                  className={cx(
                    "title",
                    "xl:text-xl",
                    "lg:text-base",
                    "text-sm",
                    "w-20",
                    "lg:block",
                    "hidden"
                  )}
                >
                  {" "}
                  Giỏ hàng
                </div>
              </Link>
              <div className={cx("account", "relative", "group", "py-3")}>
                <Link href="/dangky" className={cx("flex")}>
                  <div className={cx("box-icon-account")}>
                    <FontAwesomeIcon
                      className={cx(
                        "icon-cart",
                        "lg:w-7",
                        "lg:h-7",
                        "w-9",
                        "h-9"
                      )}
                      icon={faUser}
                    />
                  </div>
                  <div
                    className={cx(
                      "title",
                      "xl:text-xl",
                      "lg:text-base",
                      "text-sm",
                      "w-20",
                      "lg:block",
                      "hidden"
                    )}
                  >
                    {" "}
                    Giỏ hàng
                  </div>
                </Link>
                <ul
                  className={cx(
                    "hidden",
                    "menu-child",
                    "w-48",
                    "absolute",
                    "-top-full",
                    "right-0",
                    "flex",
                    "flex-col",
                    "opacity-0",
                    "group-hover:flex",
                    "group-hover:opacity-100",
                    "group-hover:top-full",
                    "transition-all",
                    "ease-in-out-300",
                    "bg-white"
                  )}
                >
                  <li className={cx("text-black", "px-3", "py-4")}>
                    <Link href="#">Cập nhật tài khoản</Link>
                  </li>
                  <li className={cx("text-black", "px-3", "py-4")}>
                    <Link href="#">Cập nhật tài khoản</Link>
                  </li>
                  <li className={cx("text-black", "px-3", "py-4")}>
                    <Link href="#">Cập nhật tài khoản</Link>
                  </li>
                  <li
                    className={cx(
                      "text-black",
                      "px-3",
                      "py-4",
                      "flex",
                      "items-center",
                      "gap-2"
                    )}
                  >
                    <Icon
                      icon="material-symbols:logout-sharp"
                      className={cx("w-5", "h-5")}
                    />
                    <Link href="#">Đăng xuất</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={cx("header-bot", "lg:block", "hidden")}>
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
