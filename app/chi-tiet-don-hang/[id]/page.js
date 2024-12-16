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
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "@/components/Loading/Loading";
const cx = classNames.bind(styles);
const Chitietdonhang = ({ params }) => {
  const { id } = params;
  const [orderDetail, setOrderDetail] = useState({});
  const [checkStatusOrder, setCheckStatusOrder] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    const { token } = user;
    GetOrderById(id, token).then(async (res) => {
      console.log(res);

      const list_pro = await Promise.all(
        res.order_details.map(async (item) => {
          const product = await fetchProductById(item.product_id);
          item.name = product.product.name; // Gắn thêm product_name vào item
          // console.log("Name:", item.name);
          // console.log("Data:", product);

          item.price = product.product.sale_price; // Gắn thêm product_name vào item
          return item;
        })
      );
      console.log(list_pro);

      // console.log(res.order.shipping_address);

      // console.log(res);
      // console.log(res.order.status);
      if (res.order.status === "Đang giao hàng") {
        setCheckStatusOrder(true);
      }
      setOrderDetail(res);
    });
  }, []);

  // console.log(checkStatusOrder);
  // console.log(orderDetail);

  const handleReviewSubmit = async (product_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Vui lòng đăng nhập để đánh giá sản phẩm.",
      });
      return;
    }
    const token = user.token;
    console.log(token);

    // Gọi API tạo comment
    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/comments",
        { rating, content, product_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("review:", response.data);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Đánh giá thành công",
          text: "Cảm ơn bạn đã đánh giá sản phẩm!",
        });
        setShowModal(false);
        setRating(0);
        setContent("");
      } else {
        Swal.fire({
          icon: "error",
          title: "Lỗi",
          text: "Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại.",
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text:
          error.response?.data?.message ||
          "Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại.",
      });
    }
  };

  return Object.keys(orderDetail).length === 0 ? (
    <Loading />
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
                  {prod?.name}
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
              Mã giảm giá:
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
              Đã giảm: 0đ
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
      <div className="flex justify-end">
        {orderDetail?.order?.status === "Giao thành công" &&  (
          <button
            onClick={() => setShowModal(true)}
            className="ml- mt-5 border-2 border-[#3bb77e] px-4 py-2 rounded-[5px] text-[#3bb77e] font-bold"
          >
            Đánh Giá
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-content w-[500px] h-auto bg-white rounded-lg shadow-lg p-5">
            <span
              className="close text-gray-500 hover:text-gray-700 text-[25px] flex justify-end cursor-pointer"
              onClick={() => setShowModal(false)}
            >
              &times;
            </span>
            <h2 className="text-lg font-bold mb-4">Đánh giá sản phẩm</h2>
            <div className="mb-4 flex items-center">
              <span className="font-semibold text-[16px] text-[#939292]">
                Chất lượng sản phẩm:{" "}
              </span>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => setRating(star)}
                  className={`cursor-pointer ${
                    star <= rating ? "text-yellow-500" : "text-gray-400"
                  } text-[35px] `}
                >
                  ★
                </span>
              ))}
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Nhập nội dung đánh giá..."
              className="w-full h-24 border border-gray-300 rounded-md p-2 mb-4"
            />
            {orderDetail?.order_details?.map((prod) => (
              <button
                onClick={() => handleReviewSubmit(prod.product_id)}
                className="w-full bg-[#3BB77E] text-white font-bold py-2 rounded-md" // Lấy product_id từ orderDetail.order_details
              >
                Đánh Giá
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={cx("flex", "flex-wrap")}>
        <div className={cx("basis-full")}>
          <div
            className={cx("border-gray-200", "rounded-lg", "w-full", "mt-5")}
          >
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
                "gap-2"
              )}
            >
              <p className="font-semibold">
                {orderDetail?.customer?.name} | {orderDetail?.customer?.phone}{" "}
              </p>
              <p>{orderDetail?.order?.shipping_address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietdonhang;
