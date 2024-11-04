"use client";
import classNames from "classnames/bind";
import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import HeaderScroll from "./components/HeaderScroll/HeaderScroll";
import { Icon } from "@iconify/react";
import MenuMobile from "./components/MenuMobile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useCart } from "../CartFunction";

const cx = classNames.bind(styles);

export default function Header() {
  const { state, dispatch } = useCart();
  const [searchKeyword, setSearchKeyWord] = useState("");
  const [username, setUsername] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let newCount = 0;
    state.cartItems.forEach((element) => {
      newCount += element.quantity;
    });
    setCount(newCount);
  }, [state]);

  useEffect(() => {
    // Lấy tên người dùng từ localStorage nếu đã đăng nhập
    const name = localStorage.getItem("username");
    if (name) setUsername(name);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      const encodedKeyword = encodeURIComponent(searchKeyword.trim());
      window.location.href = `/product?name=${encodedKeyword}`;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    toast.success("Đăng Xuất thành công!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className={cx("box-header")}>
      <ToastContainer />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={cx("header")}>
          <div className={cx("header-top")}>
            <MenuMobile />
            <div className={cx("logo", "w-full", "h-auto")}>
              <img src="/assets/home/logo.png" alt="Logo" />
            </div>
            <form
              onSubmit={handleSearch}
              className={cx("search-box", "lg:flex", "hidden")}
            >
              <input
                type="text"
                onChange={(e) => setSearchKeyWord(e.target.value)}
                placeholder="Bạn muốn mua gì ..."
              />
              <button type="submit">
                <FontAwesomeIcon
                  className={cx("icon-search")}
                  icon={faSearch}
                />
              </button>
            </form>
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
                  <span className={cx("count")}>{count}</span>
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
                  Giỏ hàng
                </div>
              </Link>
              <div className={cx("account", "relative", "group", "py-3")}>
                <Link
                  href={username ? "#" : "/dangky"}
                  className="flex items-center space-x-2"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-white lg:w-7 lg:h-7 w-9 h-9"
                  />
                  <div className="text-white lg:text-lg text-base font-medium w-[150px]">
                    {username ? `Chào, ${username}` : "Đăng ký"}
                  </div>
                </Link>
                {username && (
                  <ul
                    className={cx(
                      "hidden",
                      "menu-child",
                      "w-48",
                      "absolute",
                      "-top-full",
                      "right-0",
                      "left-[3px]",
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
                      <Link href="/thong-tin-ho-so">Cập nhật tài khoản</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/thay-doi-mat-khau">Đổi mật khẩu</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/san-pham-yeu-thich">Sản phẩm yêu thích</Link>
                    </li>
                    <li
                      className={cx(
                        "text-black",
                        "px-3",
                        "py-4",
                        "flex",
                        "items-center",
                        "gap-2",
                        "cursor-pointer"
                      )}
                      onClick={handleLogout}
                    >
                      <Icon
                        icon="material-symbols:logout-sharp"
                        className={cx("w-5", "h-5")}
                      />
                      Đăng xuất
                    </li>
                  </ul>
                )}
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
                  Sản phẩm
                </Link>
              </li>
              <li className={cx("item")}>
                <Link href="/vechungtoi" className={cx("link")}>
                  Về Chúng Tôi
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
          </div>
        </div>
      </div>
      <HeaderScroll />
    </div>
  );
}
