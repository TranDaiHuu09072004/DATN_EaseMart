"use client";
import classNames from "classnames/bind";
import styles from "./convert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
const Convert = () => {
  const [points, setPoints] = useState("");
  const [converts, setConverts] = useState([]);
  useEffect(() => {
    const getPoint = localStorage.getItem("point");
    setPoints(getPoint || "0");
    FetchVoucherConvert();
  });

  const FetchVoucherConvert = async (data) => {
    try {
      const response = await axios.get(
        "https://trandainghia.id.vn/api/voucher/points",
        data
      );

      if (Array.isArray(response.data.data)) {
        setConverts(response.data.data);
      } else {
        console.error("Dữ liệu không phải là mảng:", response.data.data);
        setConverts([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy voucher:", error);
    }
  };
  return (
    <div className="container">
      <div className={cx("page-convert")}>
        <div
          className={cx(
            "link_home_news",
            "max-md:px-3",
            "max-md:p-1",
            "md:px-3"
          )}
        >
          <ul className={cx("list_link")}>
            <li>
              <Link
                href="/"
                className={cx(
                  "link_item",
                  "lg:text-[18px]",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "md:text-[18px]",
                  "sm:text-[12px]"
                )}
              >
                Trang Chủ
              </Link>
            </li>
            <li className={cx("separator")}>/</li>
            <li>
              <a
                href="#"
                className={cx(
                  "link_item",
                  "lg:text-[18px]",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "md:text-[18px]",
                  "sm:text-[12px]"
                )}
              >
                Quy đổi điểm Voucher
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("convert-content")}>
          <div
            className={cx(
              "title",
              "text-center",
              "text-[#3E5362]",
              "font-bold"
            )}
          >
            Quy đổi điểm hội viên
          </div>
          <div className={cx("title-points")}>
            <div className={cx("points")}>
              Số điểm đang có : <span>{points}đ</span>
            </div>
          </div>
          <div className={cx("box-voucher")}>
            <div className={cx("title-voucher")}>Voucher</div>
            <div className={cx("list-voucher")}>
              {converts.map((convert, index) => (
                <div className={cx("voucher-item")}>
                  <div className={cx("voucher-item-top")}>
                    <div className={cx("info-left")}>
                      <p>{convert.description}</p>

                      <div>
                        <span className="">Số Lượng:{convert.usage_limit}</span>
                        <span className="">
                          Điều kiện:{convert.points_required}đ
                        </span>
                      </div>
                    </div>
                    <div className={cx("info-right")}>
                      Giảm {convert.discount_value}đ cho khách hàng đủ điều kiện
                      để quy đổi
                    </div>
                  </div>
                  <div className={cx("voucher-item-bottom")}>
                    <h4>{convert.code}</h4>
                    <button className={cx("button-copy")}>Đổi</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
