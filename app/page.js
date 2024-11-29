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
import { Dispatch, useCart } from "../components/CartFunction";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import {
  DispatchYt,
  useYeuThich,
} from "@/components/YTFunction/sanphamyeuthich";
const cx = classNames.bind(styles);

export default function Home() {
  const targetDate = new Date("2024-12-31T00:00:00");
  const [productsPopular, setProductsPopular] = useState([]);
  const [productsFlashSale, setProductsFlashSale] = useState([]);
  const [productsOutstanding, setProductsOutstanding] = useState([]);

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

  const handleCopy = (code) => {
    navigator.clipboard
      .writeText(code)

      .catch((err) => {
        console.error("Lỗi khi sao chép:", err);
      });
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
                  <p
                    className={cx(
                      "text-xs",
                      "max-h-[150px]",
                      "overflow-hidden",
                      "text-ellipsis",
                      "line-clamp-3"
                    )}
                  >
                    Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                    COD, Trả góp, Thanh toán Payme)
                  </p>
                </div>
                <div
                  className={cx(
                    "info-right",
                    "max-h-[150px]",
                    "overflow-hidden",
                    "text-ellipsis",
                    "line-clamp-3"
                  )}
                >
                  Giảm 50.000đ cho đơn từ 1.500.000đ
                </div>
              </div>
              <div className={cx("voucher-item-bottom")}>
                <h4>2NZ42HJB</h4>
                <button
                  onClick={() => {
                    handleCopy(`test${index}`);
                  }}
                  className={cx("button-copy")}
                >
                  <FontAwesomeIcon icon={faCopy} /> Copy
                </button>
              </div>
            </div>
          ))}
        </div>

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
  const { stateYt, dispatchYt } = useYeuThich();
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
              "xs:basis-1/2",
              "basis-full",
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
                    {formatPrice(product.sale_price)}
                  </div>
                  <div className={cx("price-reduction")}>
                    {formatPrice(product.price)}
                  </div>
                  <div className={cx("flex-grow", "flex", "justify-end")}>
                    <Icon
                      onClick={() => {
                        dispatchYt(
                          new DispatchYt("ADD_ITEM_YEUTHICH", product)
                        );
                      }}
                      icon="mdi:heart-outline"
                      className="w-6 h-6 text-red-500"
                    />
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
