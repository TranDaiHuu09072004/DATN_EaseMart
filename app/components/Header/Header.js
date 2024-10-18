import classNames from "classnames/bind";
import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
// import { usePathname } from "next/navigation";
import HeaderScroll from "./components/HeaderScroll";
import { Icon } from "@iconify/react";

const cx = classNames.bind(styles);
export default function Header() {
  return (
    <div className={cx("box-header")}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={cx("header")}>
          <div className={cx("header-top")}>
            <div className={cx("pr-3", "block", "lg:hidden")}>
              <Icon
                icon="ic:round-menu"
                className={cx("w-10", "h-10", "text-white")}
              />
            </div>
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
              <Link href="#" className={cx("cart", "flex", "gap-2")}>
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
              <Link href="#" className={cx("account")}>
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
            </div>
          </div>
          <div className={cx("header-bot", "lg:block", "hidden")}>
            <ul className={cx("nav")}>
              <li className={cx("item")}>
                <Link href="#" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="#" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="#" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="#" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="#" className={cx("link")}>
                  Trang chủ
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
