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
          <div className={cx("sidebar")}>
            <Sidebar></Sidebar>
          </div>
          <div className={cx("content")}>
            <div className={cx("title")}>Rau, Củ, Quả</div>
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
                    Rau lá
                  </Link>
                </li>
              </ul>
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
                    <button className={cx("btn", "buynow")}>
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faCartShopping} />
                      </span>
                      Mua
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
