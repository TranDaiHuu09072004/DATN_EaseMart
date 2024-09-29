"use client";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);
const Sidebar = () => {
  const [showCate, setShowCate] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const handleToggleCate = () => {
    setShowCate(!showCate);
  };

  const handleShowBrand = () => {
    console.log("check", showBrand);

    setShowBrand(!showBrand);
  };
  return (
    <div className={cx("sidebar")}>
      <div className={cx("box-list-cate")}>
        <div className={cx("title")}>
          Danh mục{" "}
          <span className={cx("down")} onClick={handleToggleCate}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {showCate && (
          <ul className={cx("list-cate")}>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
            <li className={cx("item")}>
              <img src={"assets/img/products/image 321.png"} />
              <Link href={"#"}>Rau, Củ, Quả</Link>
            </li>
          </ul>
        )}
      </div>
      <div className={cx("box-list-brand")}>
        <div className={cx("title")}>
          Thương hiệu{" "}
          <span className={cx("down")} onClick={handleShowBrand}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {showBrand && (
          <div className={cx("list-brand")}>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/2.png" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/2.png" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/2.png" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
            <Link href="#">
              <img src="assets/img/brands/1.svg" />
            </Link>
          </div>
        )}
      </div>
      <h3 className={cx("title-filter")}>Khoản giá </h3>
      <div className={cx("box-filter-price")}>
        <div className={cx("input-group")}>
          <input type="text" placeholder="Từ" />
          <span>—</span>
          <input type="text" placeholder="Đến" />
        </div>
        <button className={cx("apply-button")}>ÁP DỤNG</button>
      </div>
    </div>
  );
};

export default Sidebar;
