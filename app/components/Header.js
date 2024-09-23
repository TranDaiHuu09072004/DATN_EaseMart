"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="header">
      <div className="header_top">
        <div className="container">
          <img
            src="assets/img/logo.png"
            alt=""
            className="img_logo"
            width={250}
          />
          <div className="input_search">
            <input
              type="text"
              placeholder="Giao đơn nhanh chóng, Giảm 10k cho khách hàng đăng ký đầu tiên"
            />
            <button>Tìm kiếm</button>
          </div>
          <div className="icon">
            <span>
              <Link href="" className="a">
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng (0)
              </Link>
            </span>
            <span>
              <Link href="" className="a">
                <i class="fa-solid fa-user"></i> Đăng ký hội viên
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="header_navbar">
        <div className="container">
          <ul className="listNavbar">
            <li className={pathname === "/" ? "active" : ""}>
              <Link href="/">Trang Chủ</Link>
            </li>
            <li className={pathname === "/vechungtoi" ? "active" : ""}>
              <Link href="/vechungtoi">Về Chúng Tôi</Link>
            </li>
            <li className={pathname === "/cuahang" ? "active" : ""}>
              <Link href="/cuahang">Cửa hàng</Link>
            </li>
            <li className={pathname === "/khuyenmai" ? "active" : ""}>
              <Link href="/khuyenmai">Khuyến mãi</Link>
            </li>
            <li className={pathname === "/page" ? "active" : ""}>
              <Link href="/page">Trang</Link>
            </li>
            <li className={pathname === "/contact" ? "active" : ""}>
              <Link href="/contact">Liên hệ</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
