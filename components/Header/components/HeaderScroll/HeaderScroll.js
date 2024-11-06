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
import MenuMobile from "../MenuMobile";
import { useCart } from "@/components/CartFunction";

const cx = classNames.bind(styles);
const HeaderScroll = () => {
  const { state, dispatch } = useCart();
  const [showHeader, setShowHeader] = useState(false);
  const [showHeaderScroll, setShowHeaderScroll] = useState(true);
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState(null);
  useEffect(() => {
    let newCount = 0;
    state.cartItems.forEach((element) => {
      newCount += element.quantity;
    });
    setCount(newCount);
  }, [state]);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width > 768) {
        console.log(`Chiều rộng của browser thay đổi thành: ${width}px`);
        setShowHeaderScroll(true);
      }
      if (width < 768) {
        console.log(`Chiều rộng của browser thay đổi thành: ${width}px`);
        setShowHeaderScroll(false);
      }
    });
  }, []);

  useEffect(() => {
    // Lấy tên người dùng từ localStorage nếu đã đăng nhập
    const name = localStorage.getItem("username");
    if (name) {
      let handleUsername = name.split(" ");

      handleUsername = handleUsername[handleUsername.length - 1];

      setUsername(handleUsername);
    }
  }, []);

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
      {showHeader && showHeaderScroll && (
        <div className={cx("header-scroll", "py-2", "px-2", "lg:px-16")}>
          <div className={cx("header")}>
            <MenuMobile color={true}></MenuMobile>
            <div className={cx("logo", "lg:w-48", "w-fit", "h-full")}>
              <img src="/assets/home/LogoScroll.png" />
            </div>
            <ul className={cx("nav", "lg:flex", "hidden")}>
              <li className={cx("item")}>
                <Link href="/" className={cx("link")}>
                  Trang chủ
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/product" className={cx("link")}>
                  Sản phẩm
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/vechungtoi" className={cx("link")}>
                  Về chúng tôi
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/khuyenmai" className={cx("link")}>
                  Khuyến mãi
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/lienhe" className={cx("link")}>
                  Liên hệ
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
              <Link href="/cart" className={cx("cart", "w-fit", "lg:w-28")}>
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
                  <span className={cx("count")}>{count}</span>
                </div>
                <div className={cx("title", "hidden", "lg:block")}>
                  {" "}
                  Giỏ hàng
                </div>
              </Link>
              <Link
                href={username ? "#" : "/dangky"}
                className={cx("account", "w-fit", "lg:w-28")}
              >
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
                  {username ? `Chào,${username}` : "đăng nhập"}
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
