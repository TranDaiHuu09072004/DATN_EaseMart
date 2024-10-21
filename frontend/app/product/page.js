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
const cx = classNames.bind(styles);
const Product = async () => {
  return (
    <div className={cx("container")}>
      <div className={cx("page-product")}>
        <div className={cx("link_home_news", "max-md:px-3", "max-md:p-1")}>
          <ul className={cx("list_link", "py-2")}>
            <li>
              <a
                href="#"
                className={cx(
                  "link_item",
                  "lg:text-[18px]",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "md:text-[18px]",
                  "sm:text-[12px]"
                )}
              >
                Trang Chủ
              </a>
            </li>
            <li className={cx("separator")}>
              <a
                href=""
                className={cx(
                  "link_item",
                  "lg:text-[18px]",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "md:text-[18px]",
                  "sm:text-[12px]"
                )}
              >
                /
              </a>
            </li>
            <li>
              <a
                href="#"
                className={cx(
                  "link_item",
                  "lg:text-[18px]",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "md:text-[18px]",
                  "sm:text-[12px]"
                )}
              >
                Cửa hàng
              </a>
            </li>
          </ul>
        </div>
        <div className={cx("product-content")}>
          <div className={cx("sidebar")}>
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
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("box-product")}>
                <div className={cx("product")}>
                  <div className={cx("thumb")}>
                    <img src="assets/img/products/1.svg" />
                  </div>
                  <Link href="#" className={cx("name")}>
                    Lê Đức Anh
                  </Link>
                  <div className={cx("price")}>
                    <div className={cx("price-reduction")}>70,000đ</div>
                    <div className={cx("original-price")}>100,000đ</div>
                  </div>
                  <div className={cx("btn-action")}>
                    <button className={cx("btn", "addtocart")}>
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                </div>
              </div>
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
