"use client";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";

export default function ForgotPassword() {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");
  const [product_success, Setproduct_success] = useState([]);
  const [currentProductId, setCurrentProductId] = useState(null);

  const fetchDeliveredProducts = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;
    const token = user.token;

    try {
      const response = await axios.get(
        "https://trandainghia.id.vn/api/products-delivered",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const productsInfo = response.data.data;
      Setproduct_success(productsInfo);
      console.log(productsInfo);
    } catch (error) {
      console.error("Error fetching delivered products:", error);
    }
  };

  useEffect(() => {
    fetchDeliveredProducts();
  }, []);

  const handleReviewSubmit = async (product_id) => {
    console.log("Submitting review for product_id:", product_id);
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

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="bg-white my-5 p-5 w-[1000px] mx-auto">
        <span className="flex justify-end font-bold text-[#3bb77e] border-b-2 border-[#cccccc] mb-2">
          Giao thành công
        </span>
        {Array.isArray(product_success) &&
          product_success.map((product) => {
            return (
              <div
                key={product.id}
                className="product-success flex gap-x-4 border-t border-gray-400 border-solid py-4 justify-between"
              >
                <div className="flex">
                  {" "}
                  <img
                    src={`https://trandainghia.id.vn${product.images.image_path}`}
                    alt={product.name}
                    className="w-[100px] h-auto"
                  />
                  <div className="content_product_access flex-col gap-x-4">
                    <h3 className="mt-2">{product.name}</h3>
                    <h5 className="mt-4 text-[13px]">X1</h5>
                  </div>
                </div>

                {/* {orderDetail?.order?.status === "Giao thành công" && ( */}
                <button
                  onClick={() => {
                    setShowModal(true);
                    setCurrentProductId(product.id);
                  }}
                  className="mt-20 border-2 border-[#3bb77e] px-4 py-2 rounded-[5px] text-[#3bb77e] font-bold w-30 h-[40px] justify-end"
                >
                  Đánh Giá
                </button>
                {/* )} */}

                {showModal && (
                  <div className="modal fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-30">
                    <div className="modal-content w-[500px] h-auto bg-white rounded-lg shadow-lg p-5">
                      <span
                        className="close text-gray-500 hover:text-gray-700 text-[25px] flex justify-end cursor-pointer"
                        onClick={() => setShowModal(false)}
                      >
                        &times;
                      </span>
                      <h2 className="text-lg font-bold mb-4">
                        Đánh giá sản phẩm
                      </h2>
                      <div className="mb-4 flex items-center">
                        <span className="font-semibold text-[16px] text-[#939292]">
                          Chất lượng sản phẩm:{" "}
                        </span>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            onClick={() => setRating(star)}
                            className={`cursor-pointer ${
                              star <= rating
                                ? "text-yellow-500"
                                : "text-gray-400"
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
                      {/* {orderDetail?.order_details?.map((prod) => ( */}
                      <button
                        onClick={() => handleReviewSubmit(currentProductId)}
                        className="h-auto bg-[#3BB77E] text-white font-bold py-2 rounded-md w-full" // Lấy product_id từ orderDetail.order_details
                      >
                        Đánh Giá
                      </button>
                      {/* ))} */}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
