"use client";
import classNames from "classnames/bind";
import styles from "../home.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
const cx = classNames.bind(styles);
const Page = () => {
  const [vouchers, setVouchers] = useState([]);
  const [usedVouchers, setUsedVouchers] = useState([]);
  const [showUsed, setShowUsed] = useState(false);
  const [activeButton, setActiveButton] = useState("saved");
  const getUser = JSON.parse(localStorage.getItem("user"));
  const token = getUser.token;
  const customerId = getUser.customerId;

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    if (showUsed) {
      fetchUsedVouchers();
    } else {
      fetchSavedVouchers();
    }
  }, [showUsed]);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code).catch((err) => {
      console.error("Lỗi khi sao chép:", err);
    });
  };
  const fetchSavedVouchers = async () => {
    try {
      const response = await axios.get(
        `https://trandainghia.id.vn/api/customers/${customerId}/vouchers`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("Saved Vouchers Response:", response.data);
      const vouchersData = Array.isArray(response.data.data)
        ? response.data.data
        : [];
      setVouchers(vouchersData);
      // console.log("Vouchers State Set:", vouchersData);
    } catch (error) {
      console.error("Error fetching saved vouchers:", error);
    }
  };

  const fetchUsedVouchers = async () => {
    try {
      const response = await axios.get(
        `https://trandainghia.id.vn/api/customers/${customerId}/customer-vouchers`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("Used Vouchers Response:", response.data);
      const usedVouchersData = Array.isArray(response.data.data)
        ? response.data.data
        : [];
      setUsedVouchers(usedVouchersData);
      // console.log("Used Vouchers State Set:", usedVouchersData);
    } catch (error) {
      console.error("Error fetching used vouchers:", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <h3 className="text-center text-[#3E5362] text-[25px] font-bold">
          Kho Voucher
        </h3>
        <div className="flex gap-x-5">
          <button
            onClick={() => {
              setShowUsed(false);
              setActiveButton("saved");
            }}
            className={
              activeButton === "saved"
                ? "border-b-2 border-[#3bb77e] text-[#3bb77e] font-bold"
                : ""
            }
          >
            Voucher đã lưu
          </button>
          <button
            onClick={() => {
              setShowUsed(true);
              setActiveButton("used");
            }}
            className={
              activeButton === "used"
                ? "border-b-2 border-[#3bb77e] text-[#3bb77e] font-bold"
                : ""
            }
          >
            Đã sử dụng
          </button>
        </div>
        <div
          className={cx(
            "list-voucher",
            "flex",
            "xl:justify-between",
            "justify-center",
            "mt-5"
          )}
        >
          {(showUsed ? usedVouchers : vouchers).map((voucher, index) => (
            <div
              className={cx("voucher-item", {
                "opacity-50 cursor-not-allowed": showUsed,
              })}
              key={index}
            >
              <div className={cx("voucher-item-top")}>
                <div className={cx("info-left")}>
                  <p
                    className={cx(
                      "max-h-[150px]",
                      "overflow-hidden",
                      "text-ellipsis",
                      "line-clamp-3",
                      "text-[16px]"
                    )}
                  >
                    {voucher.description}
                  </p>
                </div>
                <div
                  className={cx(
                    "info-right",
                    "max-h-[150px]",
                    "overflow-hidden",
                    "text-ellipsis",
                    "line-clamp-3",
                    "text-[20px]"
                  )}
                >
                  Giảm {formatPrice(voucher.discount_value)}đ
                </div>
              </div>
              <div
                className={cx("voucher-item-bottom", "flex", "justify-between")}
              >
                <h4>{voucher.code}</h4>
                <div className="">
                  <button
                    onClick={() => {
                      handleCopy(voucher.code);
                    }}
                    className={cx("button-copy", {
                      "cursor-not-allowed": showUsed,
                    })}
                    disabled={showUsed}
                  >
                    <FontAwesomeIcon icon={faCopy} /> Copy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
