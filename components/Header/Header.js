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
import { useRouter } from "next/navigation";
import axios from "axios";
const cx = classNames.bind(styles);

export default function Header() {
  const { state, dispatch } = useCart();
  const [searchKeyword, setSearchKeyword] = useState([]);
  const [name, setName] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let newCount = 0;
    state.cartItems.forEach((element) => {
      newCount += element.quantity;
    });
    setCount(newCount);
  }, [state]);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const savedImage = localStorage.getItem("image");
    if (name) {
      let handlename = name.split(" ");
      handlename = handlename[handlename.length - 1];
      setName(handlename);
    }
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("user");
    toast.success("Đăng Xuất thành công!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/products/search",
        { keyword: searchKeyword }
      );
      console.log("Search", response.data);
      router.replace(`/product?keyword=${searchKeyword}`);
      setSearchKeyword("");
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div div className={cx("box-header")}>
      <ToastContainer />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={cx("header")}>
          <div className={cx("header-top")}>
            <MenuMobile />
            <Link href={"/"} className={cx("logo", "w-full", "h-auto")}>
              <img src="/assets/home/logo.png" alt="Logo" />
            </Link>
            <form
              onSubmit={handleSearch}
              className={cx("search-box", "lg:flex", "hidden")}
            >
              <input
                type="text"
                placeholder="Bạn muốn mua gì ..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
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
                "lg:w-72"
              )}
            >
              <Link
                href="/cart"
                className={cx(
                  "cart",
                  "flex",
                  "py-3",
                  "gap-2",
                  "sm:flex",
                  "hidden"
                )}
              >
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
                  href={name ? "#" : "/dangnhap"}
                  className="flex items-center space-x-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-white sm:w-7 sm:h-7 w-5 h-5"
                  />
                  <div className="text-white lg:text-lg text-base font-medium w-full lg:block hidden">
                    {name ? `Chào, ${name}` : "Đăng nhập"}
                  </div>
                </Link>
                {name && (
                  <ul
                    className={cx(
                      "hidden",
                      "menu-child",
                      "w-48",
                      "absolute",
                      "-top-full",
                      "right-0",
                      "lg:left-[3px]",
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
                    <li
                      className={cx(
                        "text-black",
                        "px-3",
                        "py-4",
                        "block",
                        "sm:hidden"
                      )}
                    >
                      <Link href="/cart">Giỏ hàng ({count})</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/thong-tin-ho-so">Cập nhật tài khoản</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/san-pham-yeu-thich">Sản phẩm yêu thích</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/lich-su-don-hang">Lịch sử đơn hàng</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/convert">Quy đổi điểm</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/kho-voucher">Kho Voucher</Link>
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
