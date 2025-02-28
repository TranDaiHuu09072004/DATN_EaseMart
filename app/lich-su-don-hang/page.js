"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./orderHistory.module.css";
import classNames from "classnames/bind";
import Link from "next/link";
import Swal from "sweetalert2";
import Loading from "@/components/Loading/Loading";
const cx = classNames.bind(styles);
export default function OrderHistory() {
  const [order_id, setOrder_Id] = useState([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "0";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Chưa đăng nhập",
        text: "Bạn cần đăng nhập để xem lịch sử đơn hàng!",
        showCancelButton: true,
        confirmButtonText: "Đăng nhập",
        cancelButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/dangnhap";
        }
      });
      setLoading(false);
      return;
    }

    const token = user.token;
    const customerId = user.customerId;

    axios
      .get(
        `https://trandaihuu.id.vn/api/customer/${customerId}/order-history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setOrder_Id(response.data.orders || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p>
        <Loading />
      </p>
    );
  }

  return (
    <div className={cx("max-w-screen-xl", "mx-auto ", "p-4")}>
      <h2 className="text-center font-bold text-[25px] text-gray-700 my-5">
        Lịch sử đơn hàng
      </h2>
      <div className={cx("bg_color", "mb-5", "max-md:w-full")}>
        {order_id.length === 0 ? (
          <div className="mx-auto">
            <img
              src="/assets/lich_su_don/chua_co_don_hang.png"
              alt=""
              className="mx-auto"
            />
            <h3 className="text-center mt-3 text-gray-900">
              Bạn chưa có đơn hàng nào
            </h3>
          </div>
        ) : (
          <div className={cx("tableContainer", "max-lg:w-full")}>
            <table className={cx("table")}>
              <thead>
                <tr>
                  <th>Đơn hàng</th>
                  <th>Ngày</th>
                  <th>Tình trạng</th>
                  <th>Trạng thái thanh toán</th>
                  <th>Tổng</th>
                  <th>Số tiền cần thanh toán</th>
                  <th>Thao tác khác</th>
                </tr>
              </thead>
              <tbody>
                {order_id.map((order) => (
                  <tr key={order.order_code}>
                    <td>
                      <a href={`#/order/${order.order_code}`}>
                        #{order.order_code}
                      </a>
                    </td>
                    <td>{formatDate(order.created_at.split("T")[0])}</td>
                    <td>
                      <span
                        className={`${cx("status")} ${
                          order.status.toLowerCase() === "đang giao hàng"
                            ? "text-blue-500 font-bold"
                            : order.status.toLowerCase() === "giao thành công"
                            ? "text-[#3bb77e] font-bold"
                            : order.status.toLowerCase() === "đã hủy"
                            ? "text-red-500 font-bold"
                            : order.status.toLowerCase() === "chờ xử lý"
                            ? "text-[#FED070]"
                            : ""
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <span
                        className={
                          order.payment_status === "Đã thanh toán"
                            ? "text-[#3bb77e] font-bold"
                            : "text-red-500 font-bold"
                        }
                      >
                        {order.payment_status}
                      </span>
                    </td>
                    <td>{formatPrice(order.total_amount)}đ</td>
                    <td>{formatPrice(order.payment_amount)}đ</td>
                    <td>
                      <button
                        onClick={() => {
                          window.location.href = `/chi-tiet-don-hang/${order.id}`;
                        }}
                        className={cx("button")}
                      >
                        Xem
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
