"use client";
import styles from "../convert/convert.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classNames.bind(styles);
const Page = () => {
  const [vouchers, setVouchers] = useState([]);
  const [usedVouchers, setUsedVouchers] = useState([]);
  const [showUsed, setShowUsed] = useState(false);

  useEffect(() => {
    FetchVoucherHistory();
  }, []);

  const FetchVoucherHistory = async () => {
    try {
      const response = await axios.get(
        "https://trandainghia.id.vn/api/voucher/history"
      );
      setVouchers(response.data.vouchers);
      setUsedVouchers(response.data.usedVouchers);
    } catch (error) {
      console.error("Lỗi khi lấy lịch sử voucher:", error);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto p-4">
        <h3 className="text-center text-[#3E5362] text-[25px] font-bold">
          Lịch Sử Voucher
        </h3>
        <div>
          <button onClick={() => setShowUsed(false)}>Voucher đã đổi</button>
          <button onClick={() => setShowUsed(true)}>Đã sử dụng</button>
        </div>
        <div className={cx("box-voucher")}>
          <div className={cx("title-voucher")}>Voucher</div>
          <div className={cx("list-voucher")}>
            {(showUsed ? usedVouchers : vouchers).map((voucher, index) => (
              <div className={cx("voucher-item")} key={index}>
                <div className={cx("voucher-item-top")}>
                  <div className={cx("info-left")}>
                    <p>{voucher.description}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-[14px] text-white">
                        Số Lượng:
                        <span className="font-bold text-[#FED070] ml-1">
                          {voucher.usage_limit}
                        </span>
                      </span>
                      <span className="text-[14px] text-white">
                        Điều kiện:{" "}
                        <span className="font-bold text-[#FED070] ml-1">
                          {voucher.points_required}đ
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className={cx("info-right")}>
                    Giảm {voucher.discount_value}đ cho khách hàng đủ điều kiện
                    để quy đổi
                  </div>
                </div>
                <div className={cx("voucher-item-bottom")}>
                  <h4>{voucher.code}</h4>
                  <button className={cx("button-copy")}>Đổi</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
