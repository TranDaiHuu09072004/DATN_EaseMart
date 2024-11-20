"use client";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);
const Sidebar = ({ listCate, updateCate, listBrand, updateBrand }) => {
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
            {listCate.map((item) => {
              return (
                <li
                  className={cx("item")}
                  onClick={() => {
                    updateCate({ id: item.id, name: item.name });
                  }}
                >
                  <img src={item.image} />
                  <Link href={"#"}>{item.name}</Link>
                </li>
              );
            })}
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
            {listBrand.map((item) => {
              return (
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault;
                    updateBrand({ id: item.id, name: item.name });
                  }}
                >
                  <img src={item.logo} />
                </Link>
              );
            })}
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
