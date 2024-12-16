"use client";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Banner from "../components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/service/product";
import { fetchProductByView } from "@/service/product";
import Link from "next/link";
import { Dispatch, useCart } from "../components/CartFunction";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import {
  DispatchYt,
  useYeuThich,
} from "@/components/YTFunction/sanphamyeuthich";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const cx = classNames.bind(styles);

export default function Home() {
  const [productsPopular, setProductsPopular] = useState([]);
  const [productsFlashSale, setProductsFlashSale] = useState([]);
  const [products_Views, setProduct_Viewss] = useState([]);
  const [vouchers, setVouchers] = useState([]);

  useEffect(() => {
    fetchProducts("Product_Popular").then((popular) => {
      const transformedData = popular.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        status: product.status,
        units: product.product_units.map((unit) => ({
          unit_id: unit.unit_id,
          unit_name: unit.unit.unit_name,
          price: unit.price,
          price_sale_value: unit.price_sale,
          price_sale: unit.price_sale || unit.price,
          status: unit.status,
        })),
        primary_image: {
          path: product.primary_image ? product.primary_image.image_path : "",
          alt_text: product.primary_image ? product.primary_image.alt_text : "",
          is_primary: product.primary_image
            ? product.primary_image.is_primakey
            : false,
        },
      }));

      // Shuffle the array and take the first 10 items
      const shuffledPopular = transformedData
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);

      setProductsPopular(shuffledPopular);
      // console.log("Popular Products:", shuffledPopular);
    });

    fetchProducts("FlashSale").then((flashsale) => {
      const transformedData = flashsale.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        status: product.status,
        units: product.product_units.map((unit) => ({
          unit_id: unit.unit_id,
          unit_name: unit.unit.unit_name,
          price: unit.price,
          price_sale_value: unit.price_sale,
          price_sale: unit.price_sale || unit.price,
          status: unit.status,
        })),
        primary_image: {
          path: product.primary_image ? product.primary_image.image_path : "",
          alt_text: product.primary_image ? product.primary_image.alt_text : "",
          is_primary: product.primary_image
            ? product.primary_image.is_primakey
            : false,
        },
      }));

      // Shuffle the array and take the first 10 items
      const shuffledFlashSale = transformedData.slice(0, 10);

      setProductsFlashSale(shuffledFlashSale);
      // console.log("Flash Sale Products:", shuffledFlashSale);
    });

    fetchProductByView("Product_Views").then((productviews) => {
      const transformedData = productviews.map((product) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        status: product.status,
        units: product.product_units.map((unit) => ({
          unit_id: unit.unit_id,
          unit_name: unit.unit.unit_name,
          price: unit.price,
          price_sale_value: unit.price_sale,
          price_sale: unit.price_sale || unit.price,
          status: unit.status,
        })),
        primary_image: {
          path: product.primary_image ? product.primary_image.image_path : "",
          alt_text: product.primary_image ? product.primary_image.alt_text : "",
          is_primary: product.primary_image
            ? product.primary_image.is_primakey
            : false,
        },
      }));

      // Shuffle the array and take the first 10 items
      const shuffledViews = transformedData
        .sort(() => 0.5 - Math.random())
        .slice(0, 10);

      setProduct_Viewss(shuffledViews);
      // console.log("Viewed Products:", shuffledViews);
    });
  }, []);

  useEffect(() => {
    FetchVoucher();
  }, []);

  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "0";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const FetchVoucher = async (data) => {
    try {
      const response = await axios.get(
        "https://trandainghia.id.vn/api/voucher/value",
        data
      );

      if (Array.isArray(response.data.data)) {
        setVouchers(response.data.data);
      } else {
        console.error("Dữ liệu không phải là mảng:", response.data.data);
        setVouchers([]);
      }
    } catch (error) {
      console.error("Lỗi khi lấy voucher:", error);
    }
  };

  const handleSaveVoucher = async (voucher) => {
    try {
      const getUser = JSON.parse(localStorage.getItem("user"));
      const token = getUser.token;
      const customerId = getUser.customerId;

      const response = await axios.post(
        "https://trandainghia.id.vn/api/customer/voucher",
        {
          customer_id: customerId,
          voucher_id: voucher.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Voucher saved:", response.data);
      toast.success("Voucher đã được lưu thành công!", {
        position: "top-right",
        autoClose: 1000,
      });
    } catch (error) {
      console.error("Lỗi khi lưu voucher:", error);
      toast.error("Voucher đã được lưu!");
    }
  };

  return (
    <>
      <Banner />
      <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
        <div
          className={cx(
            "list-voucher",
            "flex",
            "xl:justify-between",
            "justify-center"
          )}
        >
          {vouchers.map((voucher, index) => (
            <div className={cx("voucher-item")} key={index}>
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
                  Giảm {formatPrice(voucher.discount_value)}
                </div>
              </div>
              <div
                className={cx("voucher-item-bottom", "flex", "justify-between")}
              >
                <h4>{voucher.code}</h4>
                <div className="">
                  <button
                    onClick={() => handleSaveVoucher(voucher)}
                    className="btn_Save border border-[#1ea3e8] rounded-[10px] px-2 py-2 ml-2 hover:bg-[#267edc] hover:text-white"
                  >
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flash Sale section */}
        <div className={cx("max-w-screen-xl", "mx-auto", "gap")}>
          <div className={cx("flash-sale")}>
            <h4>Flash Sale - Giá Sốc</h4>
          </div>
          <ProductList products={productsFlashSale} />
        </div>

        {/* Outstanding Products section */}
        <div className={cx("max-w-screen-xl", "mx-auto", "gap")}>
          <div className={cx("title")}>Sản phẩm nhiều người xem</div>
          <ProductList products={products_Views} />
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
  const baseUrl = "https://trandainghia.id.vn";
  const { state, dispatch } = useCart();
  const { stateYt, dispatchYt } = useYeuThich();
  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "0";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const cx = classNames.bind(styles);
  return (
    <div className={cx("box-list-product", "flex", "justify-center")}>
      <div className={cx("list-product", "w-fit", "flex", "justify-stretch")}>
        {products.map((product) => {
          // Construct full image URL
          const imageUrl = product.primary_image
            ? `${baseUrl}${product.primary_image.path}`
            : "Ảnh bị lỗi"; // Fallback image

          // Access the first product unit to get price and price_sale
          const productUnit = product.units[0];
          const priceSale = productUnit ? productUnit.price_sale_value : null;
          const originalPrice = productUnit ? productUnit.price : 0;
          const unit = productUnit ? productUnit.unit_name : "0 có đơn vị";
          return (
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
              <div className="w-auto h-full">
                <div className={cx("product-item")}>
                  <Link
                    href={`/chi-tiet-san-pham/${product.id}`}
                    className={cx("content-product")}
                  >
                    <img
                      src={imageUrl}
                      alt={product.name || "Product Image"}
                      className={cx(
                        "product-image",
                        "w-auto",
                        "h-[200px]",
                        "object-cover"
                      )}
                    />
                  </Link>
                  <Link
                    href={`/chi-tiet-san-pham/${product.id}`}
                    className={cx("content-product")}
                  >
                    <h3>{product.name}</h3>
                  </Link>
                  <div className={cx("unit")}>
                    ĐVT: <span>{unit}</span>
                  </div>
                  <div className={cx("price")}>
                    {priceSale !== null ? (
                      <>
                        <div className={cx("original-price")}>
                          {formatPrice(priceSale)}
                        </div>
                        <div className={cx("price-reduction")}>
                          {formatPrice(originalPrice)}
                        </div>
                      </>
                    ) : (
                      <div className={cx("original-price")}>
                        {formatPrice(originalPrice)}
                      </div>
                    )}
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
          );
        })}
      </div>
    </div>
  );
};
