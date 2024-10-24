"use client";
import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Banner from "./components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./components/CountDown/CountDown";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/product";

const cx = classNames.bind(styles);
export default function Home() {
  const targetDate = new Date("2024-10-31T00:00:00");
  const [products_Popular, setProducts_Popular] = useState([]);
  const [products_FlashSale, setProducts_Products_FlashSale] = useState([]);
  const [products_OutStanding, setProducts_Products_OutStanding] = useState([]);

  useEffect(() => {
    fetchProducts("Product_Popular").then((popular) => {
      setProducts_Popular(() => {
        let newPopular = [];
        for (let index = 0; index < 10; index++) {
          newPopular.push(popular[index]);
        }
        return newPopular;
      });
    });
    fetchProducts("FlashSale").then((flashsale) => {
      setProducts_Products_FlashSale(() => {
        let newflashsale = [];
        for (let index = 0; index < 10; index++) {
          newflashsale.push(flashsale[index]);
        }
        return newflashsale;
      });
    });
    fetchProducts("Product_OutStanding").then((outStanding) => {
      setProducts_Products_OutStanding(() => {
        let newoutStanding = [];
        for (let index = 0; index < 10; index++) {
          newoutStanding.push(outStanding[index]);
        }
        return newoutStanding;
      });
    });
  }, []);

  return (
    <>
      <Banner />
      <div className={cx("max-w-screen-xl", " mx-auto", "p-4")}>
        <div
          className={cx(
            "list-voucher",
            "flex",
            "xl:justify-between",
            "justify-center"
          )}
        >
          <div className={cx("voucher-item")}>
            <div className={cx("voucher-item-top")}>
              <div className={cx("info-left")}>
                <p>
                  Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn COD,
                  Trả góp, Thanh toán Payme)
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
          <div className={cx("voucher-item")}>
            <div className={cx("voucher-item-top")}>
              <div className={cx("info-left")}>
                <p>
                  Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn COD,
                  Trả góp, Thanh toán Payme)
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
          <div className={cx("voucher-item")}>
            <div className={cx("voucher-item-top")}>
              <div className={cx("info-left")}>
                <p>
                  Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn COD,
                  Trả góp, Thanh toán Payme)
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
          <div className={cx("voucher-item")}>
            <div className={cx("voucher-item-top")}>
              <div className={cx("info-left")}>
                <p>
                  Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn COD,
                  Trả góp, Thanh toán Payme)
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
        </div>
      </div>
      <div className={cx("max-w-screen-xl", " mx-auto", "gap")}>
        <div className={cx("flash-sale")}>
          <h4>Flash Sale - Giá Sốc</h4>
          <Countdown targetDate={targetDate} />
        </div>
        <div className={cx("box-list-product", "flex", "justify-center")}>
          <div
            className={cx("list-product", "w-fit", "flex", "justify-stretch")}
          >
            {products_FlashSale.map((product) => (
              <div
                className={cx(
                  "flex",
                  "flex-col",
                  "lg:basis-1/5",
                  "md:basis-1/3",
                  "basis-1/2 ",
                  "p-1"
                )}
                key={product.id}
              >
                <div className={cx("product-item", "h-full")}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={cx("product-image", "h-auto", "object-cover")}
                  />
                  <div className={cx("content-product")}>
                    <h3>{product.name}</h3>
                  </div>
                  <div className={cx("unit")}>
                    ĐVT: <span>{product.unit_of_caculation}</span>
                  </div>
                  <div className={cx("price")}>
                    <div className={cx("original-price")}>{product.price}đ</div>
                    <div className={cx("price-reduction")}>
                      {product.sale_price}đ
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
                  >
                    <span className={cx("lg:block", "hidden")}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Thêm giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cx("max-w-screen-xl", " mx-auto", "gap")}>
        <div className={cx("title")}>Sản phẩm nổi bật</div>
        <div className={cx("box-list-product", "flex", "justify-center")}>
          <div
            className={cx("list-product", "w-fit", "flex", "justify-stretch")}
          >
            {products_OutStanding.map((product) => (
              <div
                className={cx(
                  "flex",
                  "flex-col",
                  "justify-between",
                  "lg:basis-1/5",
                  "md:basis-1/3",
                  "basis-1/2 ",
                  "p-1"
                )}
                key={product.id}
              >
                <div className={cx("product-item", "h-full")}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={cx(
                      "product-image",
                      "max-h-full",
                      "object-cover"
                    )}
                  />
                  <div className={cx("content-product")}>
                    <h3>{product.name}</h3>
                  </div>
                  <div className={cx("unit")}>
                    ĐVT: <span>{product.unit_of_caculation}</span>
                  </div>
                  <div className={cx("price")}>
                    <div className={cx("original-price")}>{product.price}đ</div>
                    <div className={cx("price-reduction")}>
                      {product.sale_price}đ
                    </div>
                  </div>
                  <button
                    className={cx(
                      "btn",
                      "addtocart",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <span className={cx("lg:block", "hidden")}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Thêm giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cx("max-w-screen-xl", " mx-auto", "gap")}>
        <div className={cx("title")}>Sản phẩm phổ biến</div>
        <div className={cx("box-list-product", "flex", "justify-center")}>
          <div
            className={cx("list-product", "w-fit", "flex", "justify-stretch")}
          >
            {products_Popular.map((product) => (
              <div
                className={cx(
                  "flex",
                  "flex-col",
                  "justify-between",
                  "lg:basis-1/5",
                  "md:basis-1/3",
                  "basis-1/2 ",
                  "p-1"
                )}
                key={product.id}
              >
                <div className={cx("product-item", "h-full")}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={cx(
                      "product-image",
                      "max-h-full",
                      "object-cover"
                    )}
                  />
                  <div className={cx("content-product")}>
                    <h3>{product.name}</h3>
                  </div>
                  <div className={cx("unit")}>
                    ĐVT: <span>{product.unit_of_caculation}</span>
                  </div>
                  <div className={cx("price")}>
                    <div className={cx("original-price")}>{product.price}đ</div>
                    <div className={cx("price-reduction")}>
                      {product.sale_price}đ
                    </div>
                  </div>
                  <button
                    className={cx(
                      "btn",
                      "addtocart",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <span className={cx("lg:block", "hidden")}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </span>
                    Thêm giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
