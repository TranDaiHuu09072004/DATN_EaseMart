"use client";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Banner from "../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Countdown from "../components/CountDown/CountDown";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/service/product";
import Link from "next/link";
import { Dispatch, useCart, CartFunction } from "../components/CartFunction";
const cx = classNames.bind(styles);

export default function Home() {
  const targetDate = new Date("2024-12-31T00:00:00");
  const [productsPopular, setProductsPopular] = useState([]);
  const [productsFlashSale, setProductsFlashSale] = useState([]);
  const [productsOutstanding, setProductsOutstanding] = useState([]);
  const [isChatVisible, setChatVisible] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    fetchProducts("Product_Popular").then((popular) => {
      setProductsPopular(popular.slice(0, 10));
    });
    fetchProducts("FlashSale").then((flashsale) => {
      setProductsFlashSale(flashsale.slice(0, 10));
    });
    fetchProducts("Product_OutStanding").then((outstanding) => {
      setProductsOutstanding(outstanding.slice(0, 10));
    });
  }, []);

  const toggleChat = () => {
    setChatVisible(!isChatVisible);
  };

  return (
    <>
      <Banner />
      <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
        {/* Voucher section */}
        <div
          className={cx(
            "list-voucher",
            "flex",
            "xl:justify-between",
            "justify-center"
          )}
        >
          {[...Array(4)].map((_, index) => (
            <div className={cx("voucher-item")} key={index}>
              <div className={cx("voucher-item-top")}>
                <div className={cx("info-left")}>
                  <p>
                    Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                    COD, Trả góp, Thanh toán Payme)
                  </p>
                </div>
                <div className={cx("info-right")}>
                  Giảm 50.000đ cho đơn từ 1.500.000đ
                </div>
              </div>
              <div className={cx("voucher-item-bottom")}>
                <h4>2NZ42HJB</h4>
                <button className={cx("button-copy")}>
                  <FontAwesomeIcon icon={faCopy} /> Copy
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Chat button */}
        <div
          className="fixed bottom-0 right-2 z-50 bg-white p-3 flex justify-between items-center gap-2 cursor-pointer shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          onClick={toggleChat}
        >
          <i className="fa-solid fa-messages text-[25px] text-[#3bb77e]"></i>
          <span className="text-xl text-[#3bb77e] font-semibold">Chat</span>
        </div>

        {/* Chat window */}
        {isChatVisible && (
          <div className="fixed bottom-0 right-2 z-50 bg-white rounded-md w-[640px] h-[500px] shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
            {/* Chat Header */}
            <div className="flex justify-between items-center px-3 py-2">
              <h4 className="text-lg text-[#3bb77e] font-semibold">
                Chat Ngay
              </h4>
              <button onClick={toggleChat}>
                <i className="fa-regular fa-square-chevron-down"></i>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="overflow-y-auto flex h-full mb-2 shadow-[0_-1px_0px_rgba(0,0,0,0.1)]">
              <div className="sidebar_chat w-[35%] bg-white mt-[2px] ">
                <div className="relative px-2 py-2">
                  <input
                    type="text"
                    placeholder="Tìm kiếm"
                    className="border border-gray-300 rounded h-[30px] pl-10 w-full "
                  />
                  <button className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
                <div
                  className={`customer_reply cursor-pointer ${
                    selectedMessage === 1 ? "bg-[#eeeeee]" : ""
                  } hover:bg-[#f1f1f1] w-full h-[62px]`}
                  onClick={() => setSelectedMessage(1)}
                >
                  <div className="p-3 flex items-center gap-2">
                    <img
                      src="/assets/img/img_chat_user.jpg"
                      alt=""
                      className="rounded-full w-[32px] h-[32px]"
                    />
                    <div className="">
                      <h5 className="limit_text text-[18px] w-full font-medium overflow-hidden">
                        Quang Hùng MasterD
                      </h5>
                      <p className="limit_text text-[#eeeee]">
                        Sản phẩm quá đẹp, tôi muốn mua thêm sản phẩm này
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className={`customer_reply cursor-pointer ${
                    selectedMessage === 2 ? "bg-[#eeeeee]" : ""
                  } hover:bg-[#f1f1f1] w-full h-[62px]`}
                  onClick={() => setSelectedMessage(2)}
                >
                  <div className="p-3 flex items-center gap-2">
                    <img
                      src="/assets/img/img_chat_user2.jpg"
                      alt=""
                      className="rounded-full w-[32px] h-[32px]"
                    />
                    <div className="">
                      <h5 className="limit_text text-[18px] w-full font-medium overflow-hidden">
                        Hu Tran
                      </h5>
                      <p className="limit_text text-[#eeeee]">
                        Hàng này bị lỗi vui lòng đổi cho tôi sản phẩm mới
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content_chat w-[65%] bg-white mt-[2px] border-l shadow-[-1px_0px_0px_rgba(0,0,0,0.1)]">
                <h3 className="name_contact my-4 pl-3">Quang Hùng MasterD</h3>
                <div className="boxchat bg-[#f3f3f3] w-full h-[336px] text-center relative">
                  <div className="absolute realtime text-center py-1 top-2 left-[40%] rounded-lg bg-white px-3 w-max">
                    <span className="text-sm">29 Th10</span>
                  </div>
                  <div className="absolute top-[50px] flex">
                    <div>
                      <svg
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                        class="chat-icon absolute fill-white mt-[7px] ml-[6px] h-[15px] w-[15px]"
                      >
                        <path d="M1.387 0C.246 0-.405 1.323.279 2.25L6 10V0H1.387z"></path>
                      </svg>
                    </div>
                    <div className="absolute realtime text-center py-1 top-2 ml-[14px] rounded-lg bg-white px-3 w-max">
                      <span className="text-sm">
                        Bạn cần hỗ trợ về những vấn đề gì???
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-[100px] flex">
                    <div className="absolute realtime py-1 top-2 ml-[70px] rounded-lg bg-[#d7f7ef] px-3 w-max">
                      <span className="text-sm">
                        Sản phẩm của tôi bị lỗi, mong được hoàn lại tiền và tôi
                        sẽ yêu cầu đổi trả hàng
                      </span>
                    </div>
                    <div>
                      <svg
                        viewBox="0 0 6 10"
                        xmlns="http://www.w3.org/2000/svg"
                        class="chat-icon absolute fill-[#d7f7ef] mt-[7px] ml-[380px] h-[15px] w-[15px]"
                      >
                        <path d="M1.387 0C.246 0-.405 1.323.279 2.25L6 10V0H1.387z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-[390px] flex justify-between items-center">
                  <textarea
                    name=""
                    id=""
                    placeholder="Nhập nội dung tin nhắn"
                    className="border-none h-[42px] py-2 pl-2 focus:outline-none resize-none overflow-y-hidden"
                  ></textarea>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon fill-gray-500 w-[18px] h-[18px] cursor-pointer"
                  >
                    <path d="M4 14.497v3.724L18.409 12 4 5.779v3.718l10 2.5-10 2.5zM2.698 3.038l18.63 8.044a1 1 0 010 1.836l-18.63 8.044a.5.5 0 01-.698-.46V3.498a.5.5 0 01.698-.459z"></path>
                  </svg>
                </div>
                <div className="icon-flex flex pl-2 gap-2">
                  <svg
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon fill-gray-500 w-[18px] h-[18px]"
                  >
                    <path d="M9 1a8 8 0 110 16A8 8 0 019 1zm0 1.6a6.4 6.4 0 100 12.8A6.4 6.4 0 009 2.6zM5 9.8h8a4 4 0 01-7.995.2L5 9.8h8-8zm1.2-4a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zm5.6 0a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>

                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon fill-gray-500 w-[18px] h-[18px]"
                  >
                    <path d="M19 18.974V5H5v14h.005l4.775-5.594a.5.5 0 01.656-.093L19 18.974zM4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1zm11.5 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon  fill-gray-500 w-[18px] h-[18px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.974 3h-16a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zm-15 16V5h14v14h-14z"
                    ></path>
                    <path d="M15.42 11.733a.3.3 0 010 .534L9.627 15.24a.3.3 0 01-.437-.267V9.027a.3.3 0 01.437-.267l5.793 2.973z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon  fill-gray-500 w-[18px] h-[18px]"
                  >
                    <path d="M14.442 2c.413 0 .753.322.776.735l.692 12.444a.778.778 0 01-.734.82l-.043.001H2.777a.778.778 0 01-.772-.687L2 15.2l.692-12.466A.778.778 0 013.47 2h10.973zm-.736 1.556H4.204L3.734 12h10.441l-.469-8.444zm-1.64 1.556v1.042l-.004.149C11.978 7.825 10.601 9 8.955 9c-1.698 0-3.11-1.252-3.11-2.846V5.12H7.4v1.034l.005.103c.063.646.716 1.187 1.55 1.187.879 0 1.556-.6 1.556-1.29V5.111h1.555z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 18 18"
                    xmlns="http://www.w3.org/2000/svg"
                    class="chat-icon  fill-gray-500 w-[18px] h-[18px]"
                  >
                    <path d="M5.111 2.003v1.365h7.778V2.003h2.333c.43 0 .778.354.778.79v8.44a2 2 0 01-.575 1.404l-2.726 2.767a2 2 0 01-1.425.596H2.778A.784.784 0 012 15.21V2.794c0-.436.348-.79.778-.79H5.11zm9.333 2.944H3.556v9.474H11V11.5a.5.5 0 01.5-.5h2.944V4.947zM12.89 8.105v1.58H5.11v-1.58h7.778zM11.61 1a.5.5 0 01.5.5v1.079H5.89V1.5a.5.5 0 01.5-.5h5.222z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Flash Sale section */}
        <div className={cx("max-w-screen-xl", "mx-auto", "gap")}>
          <div className={cx("flash-sale")}>
            <h4>Flash Sale - Giá Sốc</h4>
            <Countdown targetDate={targetDate} />
          </div>
          <ProductList products={productsFlashSale} />
        </div>

        {/* Outstanding Products section */}
        <div className={cx("max-w-screen-xl", "mx-auto", "gap")}>
          <div className={cx("title")}>Sản phẩm nổi bật</div>
          <ProductList products={productsOutstanding} />
        </div>

        {/* Popular Products section */}
        <div className={cx("max-w-screen-xl", "mx-auto", "gap")}>
          <div className={cx("title")}>Sản phẩm phổ biến</div>
          <ProductList products={productsPopular} />
        </div>
      </div>
    </>
  );
}

const ProductList = ({ products }) => {
  const { state, dispatch } = useCart();
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const cx = classNames.bind(styles);
  return (
    <div className={cx("box-list-product", "flex", "justify-center")}>
      <div className={cx("list-product", "w-fit", "flex", "justify-stretch")}>
        {products.map((product) => (
          <div
            className={cx(
              "flex",
              "flex-col",
              "lg:basis-1/5",
              "md:basis-1/3",
              "basis-1/2",
              "p-1"
            )}
            key={product.id}
          >
            <div className="w-full h-full">
              <div className={cx("product-item")}>
                <img
                  src={product.image}
                  alt={product.name}
                  className={cx("product-image", "h-auto", "object-cover")}
                />
                <Link
                  href={`/chi-tiet-san-pham/${product.id}`}
                  className={cx("content-product")}
                >
                  <h3>{product.name}</h3>
                </Link>
                <div className={cx("unit")}>
                  ĐVT: <span>{product.unit_of_caculation}</span>
                </div>
                <div className={cx("price")}>
                  <div className={cx("original-price")}>
                    {formatPrice(product.price)}
                  </div>
                  <div className={cx("price-reduction")}>
                    {formatPrice(product.sale_price)}
                  </div>
                </div>
                <button
                  className={cx(
                    "btn",
                    "addtocart",
                    "flex",
                    "justify-center",
                    "max-h-full",
                    "items-center"
                  )}
                  onClick={() => {
                    product.quantity = 1;
                    dispatch(new Dispatch("ADD_ITEM_CART", product));
                  }}
                >
                  <span className={cx("lg:block", "hidden")}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                  Thêm giỏ hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
