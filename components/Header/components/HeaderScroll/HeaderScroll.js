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
import { toast } from "react-toastify";
const cx = classNames.bind(styles);
const HeaderScroll = () => {
  const { state, dispatch } = useCart();
  const [showHeader, setShowHeader] = useState(false);
  const [showHeaderScroll, setShowHeaderScroll] = useState(true);
  const [count, setCount] = useState(0);
  const [name, setName] = useState(null);
  const [image, setImage] = useState("");
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
        setShowHeaderScroll(true);
      }
      if (width < 768) {
        setShowHeaderScroll(false);
      }
    });
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const name = user ? user.name : null;
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

  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("user");
    localStorage.removeItem("image");
    toast.success("Đăng Xuất thành công!", {
      position: "top-right",
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
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
              <div className={cx("account", "relative", "group", "py-3")}>
                <Link
                  href={name ? "#" : "/dangnhap"}
                  className="flex items-center space-x-2 truncate whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-[#3bb77e] sm:w-7 sm:h-7 w-5 h-5"
                  />
                  {/* )} */}
                  <div className="text-[#3bb77e] lg:text-lg text-base font-medium w-full lg:block hidden">
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
                      <Link href="/kho-voucher">Kho voucher</Link>
                    </li>
                    <li className={cx("text-black", "px-3", "py-4")}>
                      <Link href="/giao-thanh-cong">Giao Thành Công</Link>
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
        </div>
      )}
    </>
  );
};

export default HeaderScroll;
