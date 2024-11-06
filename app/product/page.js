"use client";
import classNames from "classnames/bind";
import styles from "./product.module.scss";
import axios from "axios";
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
import { useSearchParams } from "next/navigation";
import { getProBy2Cate, getProByCate } from "@/service/product";
import { getBrand } from "@/service/brand";
import { Dispatch, useCart } from "@/components/CartFunction";

const cx = classNames.bind(styles);

const Product = () => {
  const { state, dispatch } = useCart();
  const [cate, setCate] = useState([]);
  const [cateChoose, setCateChoose] = useState({});
  const [cateSub, setCateSub] = useState([]);
  const [cateSubChoose, setCateSubChoose] = useState({});
  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandChoose, setBrandChoose] = useState({});
  const [brandChooseCheck, setBrandChooseCheck] = useState(false);
  const searchParams = useSearchParams();
  const name = searchParams.get("name"); // Update to get "name" parameter
  const [resultfilterProduct, setResultFilterProduct] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (name) {
        setIsSearching(true); // Đặt trạng thái đang tìm kiếm
        try {
          const response = await axios.get(
            `http://localhost:3000/products?name_like=${encodeURIComponent(
              name
            )}`
          );

          const searchResults = response.data;
          const filteredProducts = searchResults.filter((product) =>
            product.name.toLowerCase().includes(name.toLowerCase())
          );

          console.log(filteredProducts);
          setResultFilterProduct(filteredProducts);
        } catch (error) {
          console.error("Error fetching search results:", error);
        }
      } else {
        setResultFilterProduct([]);
        setIsSearching(false); // Không tìm kiếm
      }
    };

    fetchProducts();
  }, [name]);

  useEffect(() => {
    // list cate
    getCate().then((data) => {
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
      getCateById(cateChoose.id).then((data) => {
        if (data.length > 0) {
          setCateSub(data[0].subcategories);
        }
      });
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
    getProBy2Cate(
      { name: "subcategory_id", id: cateSubChoose.id },
      { name: "category_id", id: cateChoose.id }
    ).then((data) => {
      setProduct(data);
    });
  }, [cateSubChoose]);

  const handleChooseSubCate = (id) => {
    setCateSubChoose(id);
  };

  const handleChooseCate = (id) => {
    setCateChoose(id);
    setIsSearching(false); // Đặt lại trạng thái khi chọn cate
    setResultFilterProduct([]); // Xóa kết quả tìm kiếm
  };

  const handleChooseBrand = (id) => {
    setBrandChoose(id);
    setIsSearching(false); // Đặt lại trạng thái khi chọn brand
    setResultFilterProduct([]); // Xóa kết quả tìm kiếm
  };

  console.log(product);

  return (
    <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
      <div className={cx("page-product")}>
        {/* Breadcrumb */}
        <div
          className={cx(
            "link_home_news",
            "max-md:px-3",
            "max-md:p-1",
            "md:px-3",
            "items-center"
          )}
        >
          <ul className={cx("list_link")}>
            <li>
              <Link
                href="/"
                className={cx(
                  "link_item",
                  "xl:text-xl",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "max-lg:text-[18px]",
                  "max-md:text-[16px]"
                )}
              >
                Trang Chủ
              </Link>
            </li>
            <li
              className={cx(
                "separator",
                "xl:text-xl",
                "lg:text-[#585757]",
                "lg:no-underline",
                "max-lg:text-[18px]",
                "max-md:text-[16px]"
              )}
            >
              /
            </li>
            <li>
              <Link
                href="#"
                className={cx(
                  "link_item",
                  "xl:text-xl",
                  "lg:text-[#585757]",
                  "lg:no-underline",
                  "max-lg:text-[18px]",
                  "max-md:text-[16px]"
                )}
              >
                Cửa hàng
              </Link>
            </li>
          </ul>
        </div>

        <div className={cx("product-content")}>
          <div className={cx("sidebar", "hidden", "lg:block")}>
            <Sidebar
              listCate={cate}
              updateCate={handleChooseCate}
              listBrand={brand}
              updateBrand={handleChooseBrand}
            />
          </div>

          <div className={cx("content")}>
            {/* Category or Brand Title */}
            <div className={cx("title")}>
              {brandChooseCheck ? brandChoose.name : cateChoose.name}
              <div className={cx("filter")}>
                <button className={cx("btn-filter")}>
                  Sắp xếp theo{" "}
                  <span>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </span>
                </button>
              </div>
            </div>

            {/* Subcategories */}
            {!brandChooseCheck && (
              <div className={cx("type")}>
                <ul className={cx("menu-type")}>
                  {cateSub.map((item) => (
                    <li
                      key={item.id}
                      className={cx("item")}
                      onClick={() =>
                        handleChooseSubCate({ id: item.id, name: item.name })
                      }
                    >
                      <div className={cx("item-thumbnail")}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full object-cover h-full rounded-full"
                        />
                      </div>
                      <Link className={cx("item-name", "w-full")} href="#">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Product List */}
            <div className={cx("product-list")}>
              {(isSearching ? resultfilterProduct : product).map((item) => (
                <div
                  key={item.id}
                  className={cx(
                    "xl:basis-1/5",
                    "lg:basis-1/4",
                    "sm:basis-1/3",
                    "basis-1/2",
                    "p-[2px]"
                  )}
                >
                  <div className={cx("box-product", "h-full")}>
                    <div className={cx("product")}>
                      <div className={cx("thumb")}>
                        <img src={item.image} />
                      </div>
                      <Link
                        href={`/chi-tiet-san-pham/${item.id}`}
                        className={cx("name")}
                      >
                        {item.name}
                      </Link>
                      <div className={cx("unit", "text-sm", "text-gray-400")}>
                        ĐVT: <span>{item.unit_of_caculation}</span>
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
                          onClick={() => {
                            dispatch(
                              new Dispatch("ADD_ITEM_CART", {
                                ...item,
                                quantity: 1,
                              })
                            );
                          }}
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
              ))}
            </div>

            {/* Pagination */}
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
