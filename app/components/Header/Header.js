"use client";
import React from "react";
import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="header">
      <div className={styles.header_top}>
        <div className={styles.container}>
          <img
            src="assets/img/logo.png"
            alt=""
            className={styles.img_logo}
            // width={250}
          />
          <div className={styles.input_search}>
            <input
              type="text"
              placeholder="Giao đơn nhanh chóng, Giảm 10k cho khách hàng đăng ký đầu tiên"
            />
            <button>Tìm kiếm</button>
          </div>
          <div className={styles.icon}>
            <span>
              <Link href="" className={styles.a}>
                <i class="fa-solid fa-cart-shopping"></i> Giỏ hàng (0)
              </Link>
            </span>
            <span>
              <Link href="/dangky" className={styles.a}>
                <h2 className={styles.heading}>Đăng ký hội viên</h2>
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.header_navbar}>
        <div className={styles.container}>
          <ul className={styles.listNavbar}>
            <li className={pathname === "/" ? "active" : ""}>
              <Link href="/">Trang Chủ</Link>
            </li>
            <li className={pathname === "/vechungtoi" ? "active" : ""}>
              <Link href="/vechungtoi">Về Chúng Tôi</Link>
            </li>
            <li className={pathname === "/product" ? "active" : ""}>
              <Link href="/product">Cửa hàng</Link>
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
