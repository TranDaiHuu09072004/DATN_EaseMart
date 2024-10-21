import classNames from "classnames/bind";
import styles from "./home.module.scss";
import Banner from "./components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Countdown from "./components/CountDown/CountDown";
import { Icon } from "@iconify/react";

const cx = classNames.bind(styles);
export default function Home() {
  const targetDate = new Date("2024-10-31T00:00:00");
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
          {Array(4)
            .fill()
            .map(() => {
              return (
                <div className={cx("voucher-item")}>
                  <div className={cx("voucher-item-top")}>
                    <div className={cx("info-left")}>
                      <p>
                        Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với
                        đơn COD, Trả góp, Thanh toán Payme)
                      </p>
                    </div>
                    <div className={cx("info-right")}>
                      Giảm 50.000đ cho đơn từ 1.500.000đ
                    </div>
                  </div>
                  <div className={cx("voucher-item-bottom")}>
                    <h4>2NZ42HJB</h4>
                    <button className={cx("button-copy", "flex", "gap-1")}>
                      <Icon
                        icon="solar:copy-broken"
                        className={cx("w-4", "h-4")}
                      />{" "}
                      Copy
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <div
        className={cx(
          "max-w-screen-xl",
          " mx-auto",

          "gap"
        )}
      >
        <div className={cx("flash-sale")}>
          <h4>Flash Sale - Giá Sốc</h4>
          <Countdown targetDate={targetDate} />
        </div>
        <div className={cx("box-list-product", "flex", "justify-center")}>
          <div
            className={cx("list-product", "w-fit", "flex", "justify-stretch")}
          >
            {Array(10)
              .fill()
              .map(() => (
                <div
                  className={cx(
                    "lg:basis-1/5",
                    "md:basis-1/3",
                    "basis-1/2 ",
                    "p-1"
                  )}
                >
                  <div className={cx("product-item")}>
                    <img
                      src="assets/img/product_hotnew1.svg"
                      alt=""
                      className={cx("product-image")}
                    />
                    <div className={cx("content-product")}>
                      <h3>
                        24 lon nước tăng lực Redbull 250ml 24 lon nước tăng lực
                        Redbull 250ml 24 lon nước tăng lực Redbull 250ml 24 lon
                        nước tăng lực Redbull 250ml
                      </h3>
                    </div>
                    <div className={cx("unit")}>
                      DVT: <span>Bó</span>
                    </div>
                    <div className={cx("price")}>
                      <div className={cx("original-price")}>230,000đ</div>
                      <div className={cx("price-reduction")}>230,000đ</div>
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
                      <span className={cx("lg:flex", "items-center", "hidden")}>
                        <Icon
                          icon="humbleicons:cart"
                          className={cx("w-6", "h-7")}
                        />
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
            {Array(10)
              .fill()
              .map(() => (
                <div
                  className={cx(
                    "lg:basis-1/5",
                    "md:basis-1/3",
                    "basis-1/2 ",
                    "p-1"
                  )}
                >
                  <div className={cx("product-item")}>
                    <img
                      src="assets/img/product_hotnew1.svg"
                      alt=""
                      className={cx("product-image")}
                    />
                    <div className={cx("content-product")}>
                      <h3>
                        24 lon nước tăng lực Redbull 250ml 24 lon nước tăng lực
                        Redbull 250ml 24 lon nước tăng lực Redbull 250ml 24 lon
                        nước tăng lực Redbull 250ml
                      </h3>
                    </div>
                    <div className={cx("unit")}>
                      DVT: <span>Bó</span>
                    </div>
                    <div className={cx("price")}>
                      <div className={cx("original-price")}>230,000đ</div>
                      <div className={cx("price-reduction")}>230,000đ</div>
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
                      <span className={cx("lg:flex", "items-center", "hidden")}>
                        <Icon
                          icon="humbleicons:cart"
                          className={cx("w-6", "h-7")}
                        />
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
            {Array(10)
              .fill()
              .map(() => (
                <div
                  className={cx(
                    "lg:basis-1/5",
                    "md:basis-1/3",
                    "basis-1/2 ",
                    "p-1"
                  )}
                >
                  <div className={cx("product-item")}>
                    <img
                      src="assets/img/product_hotnew1.svg"
                      alt=""
                      className={cx("product-image")}
                    />
                    <div className={cx("content-product")}>
                      <h3>
                        24 lon nước tăng lực Redbull 250ml 24 lon nước tăng lực
                        Redbull 250ml 24 lon nước tăng lực Redbull 250ml 24 lon
                        nước tăng lực Redbull 250ml
                      </h3>
                    </div>
                    <div className={cx("unit")}>
                      DVT: <span>Bó</span>
                    </div>
                    <div className={cx("price")}>
                      <div className={cx("original-price")}>230,000đ</div>
                      <div className={cx("price-reduction")}>230,000đ</div>
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
                      <span className={cx("lg:flex", "items-center", "hidden")}>
                        <Icon
                          icon="humbleicons:cart"
                          className={cx("w-6", "h-7")}
                        />
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
