"use client";
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
import { getCate, getCateById } from "@/service/category";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getProByCate } from "@/service/product";
import { getBrand } from "@/service/brand";

const cx = classNames.bind(styles);
const Product = () => {
  const [cate, setCate] = useState([]);
  const [cateChoose, setCateChoose] = useState({});
  const [cateSub, setCateSub] = useState([]);
  const [cateSubChoose, setCateSubChoose] = useState({});
  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandChoose, setBrandChoose] = useState({});
  const [brandChooseCheck, setBrandChooseCheck] = useState(false);
  useEffect(() => {
    // list cate
    getCate().then((data) => {
      console.log({ id: data[0].id, name: data[0].name });

      setCate(data);
      setCateChoose({ id: data[0].id, name: data[0].name });
      setCateSub(data[0].subcategories);
    });
  }, []);

  // list product theo cate
  useEffect(() => {
    if (!cateChoose) return;

    getProByCate("category_id", cateChoose.id).then((data) => {
      setBrandChooseCheck(false);
      setProduct(data);
    });
    getCateById(cateChoose.id).then((data) => {
      if (data.length > 0) {
        console.log(data);
        setCateSub(data[0].subcategories);
      }
    });
  }, [cateChoose]);

  //list brand
  useEffect(() => {
    getBrand().then((data) => {
      setBrand(data);
    });
  }, []);
  //đổi sản phẩm khi nhấp vào brand
  useEffect(() => {
    if (!brandChoose) return;
    getProByCate("brand_id", brandChoose.id).then((data) => {
      setProduct(data);
    });

    setBrandChooseCheck(true);
  }, [brandChoose]);

  //đổi sản phẩm khi nhấp vào cate con
  useEffect(() => {
    getProByCate("subcategory_id", cateSubChoose).then((data) => {
      setProduct(data);
    });
  }, [cateSubChoose]);

  const handleChooseSubCate = (id) => {
    setCateSubChoose(`${id}`);
  };

  const handleChooseCate = (id) => {
    setCateChoose(id);
  };

  const handleChooseBrand = (id) => {
    setBrandChoose(id);
  };

  console.log(brandChoose);

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
            <Sidebar
              listCate={cate}
              updateCate={handleChooseCate}
              listBrand={brand}
              updateBrand={handleChooseBrand}
            ></Sidebar>
          </div>
          <div className={cx("content")}>
            <div className={cx("title")}>
              {brandChooseCheck ? brandChoose.name : cateChoose.name}
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
            {!brandChooseCheck && (
              <>
                <div className={cx("type")}>
                  <ul className={cx("menu-type")}>
                    {cateSub.map((item) => {
                      return (
                        <li
                          className={cx("item")}
                          onClick={() => handleChooseSubCate(item.id)}
                        >
                          <div className={cx("item-thumbnail")}>
                            <img src="assets/img/products/image 321.png" />
                          </div>
                          <Link className={cx("item-name")} href="#">
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}

            <div className={cx("product-list")}>
              {product.map((item) => {
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
                          {item.name}
                        </Link>
                        <div className={cx("unit", "text-sm", "text-gray-400")}>
                          ĐVT: <span className={cx()}>Bó</span>
                        </div>
                        <div className={cx("price")}>
                          <div className={cx("price-reduction")}>
                            {item.sale_price}đ
                          </div>
                          <div className={cx("original-price")}>
                            {item.price}đ
                          </div>
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
