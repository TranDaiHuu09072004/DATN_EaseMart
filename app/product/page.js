import classNames from "classnames/bind";
import styles from "./product.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faCartShopping,
  faChevronRight,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/sidebar/sidebar";
import { Icon } from "@iconify/react";

const cx = classNames.bind(styles);
const Product = async () => {
  return (
    <div className={cx("max-w-screen-xl", " mx-auto", "px-4")}>
      <div className={cx("page-product")}>
        <ul className={cx("nav")}>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faHouse}
            ></FontAwesomeIcon>
            <Link className={cx("item")} href="#">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={cx("item")} href="#">
              Sản phẩm
            </Link>
          </li>
        </ul>
        <div className={cx("product-content")}>
          <div className={cx("sidebar", "hidden", "lg:block")}>
            <Sidebar></Sidebar>
          </div>
          <div className={cx("content")}>
            <div className={cx("title")}>
              Rau, Củ, Quả
              <div className={cx("filter")}>
                <button className={cx("btn-filter")}>
                  Sắp xếp theo{" "}
                  <span>
                    {" "}
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                  <ul className={cx("list-filter")}>
                    <li className={cx("item")}>
                      <Link href="#">Theo tên</Link>
                    </li>
                    <li className={cx("item")}>
                      <Link href="#">Theo tên</Link>
                    </li>
                    <li className={cx("item")}>
                      <Link href="#">Theo tên</Link>
                    </li>
                  </ul>
                </button>
              </div>
            </div>
            <div className={cx("type")}>
              <ul className={cx("menu-type")}>
                <li className={cx("item")}>
                  <div className={cx("item-thumbnail")}>
                    <img src="assets/img/products/image 321.png" />
                  </div>
                  <Link className={cx("item-name")} href="#">
                    Rau lá
                  </Link>
                </li>
                <li className={cx("item")}>
                  <div className={cx("item-thumbnail")}>
                    <img src="assets/img/products/image 321.png" />
                  </div>
                  <Link className={cx("item-name")} href="#">
                    Rau lá
                  </Link>
                </li>
                <li className={cx("item")}>
                  <div className={cx("item-thumbnail")}>
                    <img src="assets/img/products/image 321.png" />
                  </div>
                  <Link className={cx("item-name")} href="#">
                    Rau lá
                  </Link>
                </li>
                <li className={cx("item")}>
                  <div className={cx("item-thumbnail")}>
                    <img src="assets/img/products/image 321.png" />
                  </div>
                  <Link className={cx("item-name")} href="#">
                    Rau lá Rau lá Rau láRau lá
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("product-list")}>
              {Array(9)
                .fill()
                .map(() => {
                  return (
                    <div
                      className={cx(
                        "lg:basis-1/5",
                        "sm:basis-1/3",
                        "basis-1/2",
                        "p-[2px]"
                      )}
                    >
                      <div className={cx("box-product")}>
                        <div className={cx("product")}>
                          <div className={cx("thumb")}>
                            <img src="assets/img/products/1.svg" />
                          </div>
                          <Link href="#" className={cx("name")}>
                            Lê Đức Anh
                          </Link>
                          <div
                            className={cx("unit", "text-sm", "text-gray-400")}
                          >
                            ĐVT: <span className={cx()}>Bó</span>
                          </div>
                          <div className={cx("price")}>
                            <div className={cx("price-reduction")}>70,000đ</div>
                            <div className={cx("original-price")}>100,000đ</div>
                          </div>
                          <div className={cx("btn-action")}>
                            <button
                              className={cx(
                                "btn",
                                "addtocart",
                                "flex",
                                "items-center",
                                "justify-center",
                                "gap-1",
                                "text-base",
                                "basis-full"
                              )}
                            >
                              <span>
                                <Icon
                                  icon="humbleicons:cart"
                                  className={cx("w-5", "h-6")}
                                />
                              </span>
                              Thêm vào giỏ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={cx("pagination")}>
              <div className={cx("page-number", "active")}>1</div>
              <div className={cx("page-number")}>2</div>
              <div className={cx("page-number")}>3</div>
              <div className={cx("page-change")}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
