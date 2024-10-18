"use client";

const { useEffect, useState } = require("react");
import classNames from "classnames/bind";
import styles from "./HeaderScroll.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Icon } from "@iconify/react";

const cx = classNames.bind(styles);
const HeaderScroll = () => {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {showHeader && (
        <div className={cx("header-scroll", "py-2", "px-2", "lg:px-16")}>
          <div className={cx("header")}>
            <div className={cx("pr-3", "block", "lg:hidden")}>
              <Icon
                icon="ic:round-menu"
                className={cx("w-10", "h-10")}
                style={{ color: "3bb77e" }}
              />
            </div>
            <div className={cx("logo", "lg:w-48", "w-fit")}>
              <img src="assets/img/logo.png" />
            </div>
            <ul className={cx("nav", "lg:flex", "hidden")}>
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
            <div
              className={cx(
                "cart-info",
                "xl:w-72",
                "lg:w-60",
                "lg:gap-7",
                "justify-end",
                "gap-8"
              )}
            >
              <Link href="#" className={cx("cart", "w-fit", "lg:w-28")}>
                <div className={cx("box-icon-cart")}>
                  <FontAwesomeIcon
                    className={cx(
                      "icon-cart",
                      "w-10",
                      "h-10",
                      "lg:w-8",
                      "lg:h-8"
                    )}
                    icon={faCartShopping}
                  />
                  <span className={cx("count")}>0</span>
                </div>
                <div className={cx("title", "hidden", "lg:block")}>
                  {" "}
                  Giỏ hàng
                </div>
              </Link>
              <Link href="#" className={cx("account", "w-fit", "lg:w-28")}>
                <div className={cx("box-icon-account")}>
                  <FontAwesomeIcon
                    className={cx(
                      "icon-account",
                      "w-9",
                      "h-9",
                      "lg:w-8",
                      "lg:h-8"
                    )}
                    icon={faUser}
                  />
                </div>
                <div className={cx("title", "hidden", "lg:block")}>
                  Giỏ hàng
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderScroll;
