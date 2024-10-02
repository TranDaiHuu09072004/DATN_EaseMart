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

const cx = classNames.bind(styles);
const HeaderScroll = () => {
  const [showHeader, setShowHeader] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
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
        <div className={cx("header-scroll")}>
          <div className={cx("header")}>
            <div className={cx("logo")}>
              <img src="assets/img/logo.png" />
            </div>
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
            <div className={cx("cart-info")}>
              <Link href="#" className={cx("cart")}>
                <div className={cx("box-icon-cart")}>
                  <FontAwesomeIcon
                    className={cx("icon-cart")}
                    icon={faCartShopping}
                  />
                  <span className={cx("count")}>0</span>
                </div>
                <div className={cx("title")}> Giỏ hàng</div>
              </Link>
              <Link href="#" className={cx("account")}>
                <div className={cx("box-icon-account")}>
                  <FontAwesomeIcon
                    className={cx("icon-account")}
                    icon={faUser}
                  />
                </div>
                <div className={cx("title")}> Giỏ hàng</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderScroll;
