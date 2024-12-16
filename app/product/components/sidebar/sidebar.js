"use client";
import classNames from "classnames/bind";
import styles from "./sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";

const cx = classNames.bind(styles);
const Sidebar = ({
  filterProduct,
  listCate,
  updateCate,
  listBrand,
  updateBrand,
}) => {
  const [showCate, setShowCate] = useState(true);
  const [showBrand, setShowBrand] = useState(true);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [error, setError] = useState("");

  const handleToggleCate = () => {
    setShowCate(!showCate);
  };

  const handleShowBrand = () => {
    // console.log("check", showBrand);

    setShowBrand(!showBrand);
  };
  // console.log(listCate);

  const handleApplyFilter = () => {
    const minValue = parseFloat(min);
    const maxValue = parseFloat(max);

    if (minValue === 0 || maxValue === 0) {
      setError("Nhập khoản tiền muốn kiếm");
      return;
    }
    if (minValue > maxValue) {
      setError("Nhập từ bé đến lớn");
      return;
    }

    filterProduct(minValue, maxValue);
    setError("");
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
          <ul className={cx("list-cate", "bg-white")}>
            {listCate.map((item) => {
              return (
                <li
                  key={item}
                  className={cx("item")}
                  onClick={() => {
                    updateCate({
                      id: item.id,
                      name: item.categories_parents_name,
                    });
                  }}
                >
                  <img src={`https://trandainghia.id.vn/${item.image}`} />
                  <Link href={"#"}>{item.categories_parents_name}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className={cx("box-list-brand", "bg-white")}>
        <div className={cx("title")}>
          Thương hiệu{" "}
          <span className={cx("down")} onClick={handleShowBrand}>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
        {showBrand && (
          <div className={cx("list-brand")}>
            {listBrand.map((item, index) => {
              return (
                <Link
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    updateBrand({ id: item.id, name: item.name });
                  }}
                >
                  <img src={`https://trandainghia.id.vn/${item.image}`} />
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <h3 className={cx("title-filter")}>Khoản giá </h3>
      <div className={cx("box-filter-price")}>
        <div className={cx("input-group")}>
          <input
            type="text"
            placeholder="Từ"
            onChange={(e) => {
              setMin(e.target.value);
            }}
          />
          <span>—</span>
          <input
            type="text"
            placeholder="Đến"
            onChange={(e) => {
              setMax(e.target.value);
            }}
          />
        </div>
        <button onClick={handleApplyFilter} className={cx("apply-button")}>
          ÁP DỤNG
        </button>
        {error.length > 0 && <span className="text-red-500">{error}</span>}
      </div>
    </div>
  );
};

export default Sidebar;
