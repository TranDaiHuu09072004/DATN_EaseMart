"use client";
import classNames from "classnames/bind";
import styles from "../Chitietdonhang.module.scss";
import { Icon } from "@iconify/react";
import {
  CancelOrderById,
  GetOrderById,
  RestoreOrderById,
} from "@/service/order";
import { fetchProductById } from "@/service/product";
import { useEffect, useState } from "react";
import { formatPrice } from "@/uilts/formatPrice";
import Swal from "sweetalert2";
const cx = classNames.bind(styles);
const Chitietdonhang = ({ params }) => {
  const { id } = params;
  const [orderDetail, setOrderDetail] = useState({});
  const [checkStatusOrder, setCheckStatusOrder] = useState(false);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const { token } = user;
    GetOrderById(id, token).then(async (res) => {
      const list_pro = await Promise.all(
        res.order_details.map(async (item) => {
          const product = await fetchProductById(item.product_id);
          item.product_name = product.name; // Gắn thêm product_name vào item
          item.prce = product.sale_price; // Gắn thêm product_name vào item
          return item;
        })
      );

      console.log(res.order.shipping_address);

      res.order.shipping_address = res?.order?.shipping_address?.split(" - ");
      res.customer.address = res?.customer?.address?.split(" - ");
      res.order_details = list_pro;
      console.log(res);
      console.log(res.order.status);
      if (res.order.status === "Đang giao hàng") {
        setCheckStatusOrder(true);
      }
      setOrderDetail(res);
    });
  }, []);

  console.log(checkStatusOrder);

  return Object.keys(orderDetail).length === 0 ? (
    "...đang load dữ liệu"
  ) : (
    <div className={cx("max-w-screen-xl", " mx-auto", "p-4", "bg-white")}>
      <h2 className="text-center font-bold text-[25px] text-gray-700 mb-2">
        Chi tiết đơn hàng
      </h2>
      <div className={cx("w-full", "flex", "justify-end", "mb-2")}>
        {orderDetail.order.status !== "Đã hủy" ? (
          <button
            title={
              checkStatusOrder
                ? "Đơn hàng đang giao không thể hủy"
                : "Hủy đơn hàng"
            }
            onClick={() => {
              Swal.fire({
                icon: "warning",
                title: "Cảnh báo",
                text: "Bạn có chắc muốn hủy đơn hàng này không?",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
              }).then((result) => {
                if (result.isConfirmed) {
                  const user = localStorage.getItem("user")
                    ? JSON.parse(localStorage.getItem("user"))
                    : null;
                  if (!user) {
                    Swal.fire({
                      icon: "error",
                      title: "Lỗi",
                      text: "Không thể thực hiện hành động này. Vui lòng đăng nhập lại.",
                    });
                    return;
                  }

                  CancelOrderById(id, user.token)
                    .then((result) => {
                      console.log(result);

                      if (
                        result.message === "Đơn hàng đã được hủy thành công."
                      ) {
                        Swal.fire({
                          icon: "success",
                          title: "Thông báo",
                          text: "Bạn đã hủy đơn hàng thành công",
                          confirmButtonText: "OK",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload(); // Cân nhắc việc cập nhật trạng thái thay vì reload nếu có thể
                          }
                        });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Lỗi",
                          text: "Hủy đơn hàng không thành công. Vui lòng thử lại sau.",
                        });
                      }
                    })
                    .catch((error) => {
                      console.error("Lỗi khi hủy đơn hàng:", error);
                      Swal.fire({
                        icon: "error",
                        title: "Lỗi",
                        text: "Có lỗi xảy ra trong quá trình hủy đơn hàng. Vui lòng thử lại.",
                      });
                    });
                }
              });
            }}
            disabled={checkStatusOrder}
            className={cx("button-cancel", { disabled: checkStatusOrder })}
          >
            Hủy đơn hàng
          </button>
        ) : (
          <button
            title={"Khôi phục đơn hàng"}
            onClick={() => {
              Swal.fire({
                icon: "warning",
                title: "Thông báo",
                text: "Bạn có chắc muốn khôi phục đơn hàng này không ?",
                showCancelButton: true,
                confirmButtonText: "OK",
                cancelButtonText: "Cancel",
              }).then((result) => {
                if (result.isConfirmed) {
                  const user = localStorage.getItem("user")
                    ? JSON.parse(localStorage.getItem("user"))
                    : null;
                  if (!user) {
                    Swal.fire({
                      icon: "error",
                      title: "Lỗi",
                      text: "Không thể thực hiện hành động này. Vui lòng đăng nhập lại.",
                    });
                    return;
                  }

                  RestoreOrderById(id, user.token)
                    .then((result) => {
                      console.log(result);

                      if (
                        result.message ===
                        "Đơn hàng đã được khôi phục thành công."
                      ) {
                        Swal.fire({
                          icon: "success",
                          title: "Thông báo",
                          text: "Bạn đã khôi phục đơn hàng thành công",
                          confirmButtonText: "OK",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            location.reload(); // Cân nhắc việc cập nhật trạng thái thay vì reload nếu có thể
                          }
                        });
                      } else {
                        Swal.fire({
                          icon: "error",
                          title: "Lỗi",
                          text: "Khôi phục đơn hàng không thành công. Vui lòng thử lại sau.",
                        });
                      }
                    })
                    .catch((error) => {
                      console.error("Lỗi khi khôi phục đơn hàng:", error);
                      Swal.fire({
                        icon: "error",
                        title: "Lỗi",
                        text: "Có lỗi xảy ra trong quá trình khôi phục đơn hàng. Vui lòng thử lại.",
                      });
                    });
                }
              });
            }}
            disabled={checkStatusOrder}
            className={cx("button-restore", { disabled: checkStatusOrder })}
          >
            Khôi phục đơn hàng này
          </button>
        )}
      </div>
      <table
        className={cx(
          "table",
          "border-collapse",
          " min-w-full",
          " text-left",
          " text-sm",
          " text-gray-500 ",
          "border",
          " border-zinc-950"
        )}
      >
        <thead>
          <tr>
            <th
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-2",
                " text-gray-900"
              )}
            >
              Sản phẩm
            </th>
            <th
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-2",
                " text-gray-900"
              )}
            >
              Thành Tiền
            </th>
          </tr>
        </thead>
        <tbody>
          {orderDetail?.order_details?.map((prod, index) => {
            return (
              <tr key={index}>
                <td
                  className={cx("border", " border-gray-300 ", "px-4", " py-5")}
                >
                  {prod?.product_name}
                  <span className="block text-xs">(x{prod?.quantity})</span>
                </td>
                <td
                  className={cx(
                    "border",
                    " border-gray-300 ",
                    "px-4",
                    " py-5",
                    "hightlight"
                  )}
                >
                  {prod?.total_price}đ
                </td>
              </tr>
            );
          })}

          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Tạm tính:
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300 ",
                "px-4",
                " py-5",
                "hightlight"
              )}
            >
              {+orderDetail?.order?.total_amount}đ
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Trang thái đơn hàng:
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-6",
                { " text-blue-500": orderDetail?.order?.status !== "Đã hủy" },
                { " text-red-500": orderDetail?.order?.status === "Đã hủy" },
                " underline"
              )}
            >
              {orderDetail?.order?.status}
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Phương thức thanh toán:
            </td>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              {orderDetail?.order?.payment_method === "BANK"
                ? " Chuyển khoản qua MBBank "
                : "Trả tiền mặt khi nhận hàng"}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-6 font-bold text-base">
              Tổng cộng:
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-6",
                "hightlight",
                "font-bold",
                " text-base"
              )}
            >
              {+orderDetail?.order?.total_amount}đ
            </td>
          </tr>
        </tbody>
      </table>

      <div className={cx("flex", "flex-wrap")}>
        <div className={cx("basis-full", "lg:basis-1/2", "", "p-2")}>
          <div className={cx("border-gray-200", "rounded-lg", "p-4", "w-full")}>
            <div
              className={cx(
                "info-container",
                "font-bold",
                "bg-gray-100",
                "py-2",
                "px-4",
                "border-b",
                "border-gray-200"
              )}
            >
              Địa chỉ thanh toán
            </div>
            <div
              className={cx(
                "info-container",
                "py-4",
                "px-4",
                "flex",
                "flex-col",
                "gap-5"
              )}
            >
              <p className="font-semibold">{orderDetail?.customer?.name}</p>
              <p>
                {orderDetail?.customer?.address?.[0]
                  ? orderDetail?.customer?.address?.[0]
                  : null}
              </p>
              <p>
                {orderDetail?.customer?.address?.[1]
                  ? orderDetail?.customer?.address?.[1]
                  : null}
              </p>
              <p className="text-green-500">
                {orderDetail?.customer?.shipping_address?.[2]
                  ? orderDetail?.customer?.shipping_address?.[2]
                  : null}
              </p>
              <p className="flex items-center ">
                <Icon icon="solar:phone-broken" />
                {orderDetail?.customer?.phone}
              </p>
            </div>
          </div>
        </div>
        <div className={cx("basis-full", "lg:basis-1/2", "", "p-2")}>
          <div className={cx("border-gray-200", "rounded-lg", "p-4", "w-full")}>
            <div
              className={cx(
                "info-container",
                "font-bold",
                "bg-gray-100",
                "py-2",
                "px-4",
                "border-b",
                "border-gray-200"
              )}
            >
              Địa chỉ nhận hàng
            </div>
            <div
              className={cx(
                "info-container",
                "py-4",
                "px-4",
                "flex",
                "flex-col",
                "gap-5"
              )}
            >
              <p className="font-semibold">{orderDetail?.customer?.name}</p>
              <p>{orderDetail?.order?.shipping_address[0]}</p>
              <p>{orderDetail?.order?.shipping_address[1]}</p>
              <p className="text-green-500">
                {orderDetail?.order?.shipping_address[2]}
              </p>
              <p className="flex items-center ">
                <Icon icon="solar:phone-broken" />
                {orderDetail?.customer?.phone}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietdonhang;
