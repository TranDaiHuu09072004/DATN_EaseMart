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
import { getCate, getCateById, getCateChild } from "@/service/category";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import {
  getProBy2Cate,
  getProByBrand,
  getProByCate,
  getProBySubCate,
  fetchProductsByMinMax,
} from "@/service/product";
import { getBrand } from "@/service/brand";
import { Dispatch, useCart } from "@/components/CartFunction";
import { formatPrice } from "@/uilts/formatPrice";
import {
  DispatchYt,
  useYeuThich,
} from "@/components/YTFunction/sanphamyeuthich";
import Loading from "@/components/Loading/Loading";
import { useRouter } from "next/navigation";
import { searchProducts } from "@/service/search";
const cx = classNames.bind(styles);

const Product = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const { state, dispatch } = useCart();
  const [cate, setCate] = useState([]);
  const [cateChoose, setCateChoose] = useState({});
  const [cateSub, setCateSub] = useState([]);
  const [cateSubChoose, setCateSubChoose] = useState({});
  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [brandChoose, setBrandChoose] = useState({});
  const [brandChooseCheck, setBrandChooseCheck] = useState(false);
  const [resultfilterProduct, setResultFilterProduct] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { stateYt, dispatchYt } = useYeuThich();

  useEffect(() => {
    // list cate
    getCate().then((data) => {
      // console.log(data);
      getCateChild(data[0].id).then((cate) => {
        // console.log(cate);

        setCate(data);
        setCateChoose({
          id: data[0].id,
          name: data[0].categories_parents_name,
        });
        setCateSub(cate.categories);
      });
    });
  }, []);

  // console.log(cateChoose);

  useEffect(() => {
    if (keyword) {
      searchProducts(keyword).then((result) => {
        console.log(result); // Log kết quả API
        if (result) {
          setResultFilterProduct(result);
        }
      });
    }
  }, [keyword]);

  // list product theo cate
  useEffect(() => {
    if (Object.keys(cateChoose).length == 0) return;
    console.log(cateChoose);

    getProByCate(cateChoose.id).then((data) => {
      // console.log(data);

      setBrandChooseCheck(false);

      const listProduct = data.products.map((item) => {
        item.units[0].price_sale_value = item.units[0].price_sale;
        item.units[0].price_sale =
          item.units[0].price_sale || item.units[0].price;
        return item;
      });

      setProduct(listProduct);
      getCateChild(cateChoose.id).then((data) => {
        // console.log(data);

        if (data.categories.length > 0) {
          setCateSub(data.categories);
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
    if (Object.keys(brandChoose).length <= 0) return;
    getProByBrand(brandChoose.id).then((data) => {
      const listProduct = data.products.map((item) => {
        item.units[0].price_sale_value = item.units[0].price_sale;
        item.units[0].price_sale =
          item.units[0].price_sale || item.units[0].price;
        return item;
      });

      setProduct(listProduct);
    });
    setBrandChooseCheck(true);
  }, [brandChoose]);

  //đổi sản phẩm khi nhấp vào cate con
  useEffect(() => {
    getProBySubCate(cateSubChoose.id).then((data) => {
      console.log(data);

      const listProduct = data.products.map((item) => {
        item.units[0].price_sale_value = item.units[0].price_sale;
        item.units[0].price_sale =
          item.units[0].price_sale || item.units[0].price;
        return item;
      });

      setProduct(listProduct);
    });
  }, [cateSubChoose]);

  const handleFilterProduct = (min, max) => {
    let data = {
      min: min,
      max: max,
      category_parent: cateChoose.id,
    };
    if (Object.keys(cateSubChoose).length > 0) {
      data.categories = cateSubChoose.id;
    }
    if (Object.keys(brandChoose).length > 0) {
      data.categories = brandChoose.id;
    }

    fetchProductsByMinMax(data).then((data) => {
      // console.log(data);

      const transformedData = data.data.map((product) => ({
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
          path: product.primary_image.image_path,
          alt_text: product.primary_image.alt_text,
          is_primary: product.primary_image.is_primakey,
        },
      }));
      // console.log(transformedData);

      setProduct(transformedData);
    });
  };

  const handleChooseSubCate = (id) => {
    setCateSubChoose(id);
  };

  const handleChooseCate = ({ id, name }) => {
    setCateChoose({ id, name });
    setIsSearching(false); // Đặt lại trạng thái khi chọn cate
    setResultFilterProduct([]); // Xóa kết quả tìm kiếm
  };

  const handleChooseBrand = (id) => {
    setBrandChoose(id);
    setIsSearching(false); // Đặt lại trạng thái khi chọn brand
    setResultFilterProduct([]); // Xóa kết quả tìm kiếm
  };

  // console.log(product);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setIsDropdownOpen(false);

    const sortedProducts = [...product].sort((a, b) => {
      const priceA = a.units[0].price_sale || a.units[0].price;
      const priceB = b.units[0].price_sale || b.units[0].price;

      if (order === "asc") {
        return priceA - priceB;
      } else if (order === "desc") {
        return priceB - priceA;
      }
      return 0;
    });
    setProduct(sortedProducts);
  };

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
                Sản Phẩm
              </Link>
            </li>
          </ul>
        </div>

        <div className={cx("product-content")}>
          <div className={cx("sidebar", "hidden", "lg:block")}>
            <Sidebar
              filterProduct={handleFilterProduct}
              listCate={cate}
              updateCate={handleChooseCate}
              listBrand={brand}
              updateBrand={handleChooseBrand}
            />
          </div>

          <div className={cx("wrapper-content")}>
            <div className={cx("content")}>
              <div className={cx("title")}>
                {brandChooseCheck ? brandChoose.name : cateChoose.name}
                <div className="relative inline-block text-left">
                  <button
                    className="bg-[#3bb77e] text-white px-3 py-1.5 rounded-md flex items-center gap-1 text-sm hover:bg-green-600"
                    onClick={toggleDropdown}
                  >
                    Sắp xếp theo <FontAwesomeIcon icon={faAngleDown} />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#3bb77e] font-medium transition-colors text-sm"
                        onClick={() => handleSort("asc")}
                      >
                        Giá tăng dần
                      </div>
                      <div
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#3bb77e] font-medium transition-colors text-sm"
                        onClick={() => handleSort("desc")}
                      >
                        Giá giảm dần
                      </div>
                    </div>
                  )}
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
                        onClick={() => handleChooseSubCate({ id: item.id })}
                      >
                        <div className={cx("item-thumbnail")}>
                          <img
                            src={`https://trandainghia.id.vn/${item.image}`}
                            alt={item.categories_name}
                            className="w-full object-cover h-full rounded-full"
                          />
                        </div>
                        <Link className={cx("item-name", "w-full")} href="#">
                          {item.categories_name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Product List */}
              <Suspense
                fallback={
                  <div>
                    <Loading />
                  </div>
                }
              >
                <div className={cx("product-list")}>
                  {Array.isArray(resultfilterProduct) &&
                  resultfilterProduct.length > 0
                    ? resultfilterProduct.map((item) => (
                        <div
                          key={item.id}
                          className={cx(
                            "box-border",
                            "xl:basis-1/5",
                            "lg:basis-1/4",
                            "sm:basis-1/3",
                            "xs:basis-1/2",
                            "basis-full",
                            "p-[2px]"
                          )}
                        >
                          <div className={cx("box-product", "h-full")}>
                            <div className={cx("product")}>
                              <div className={cx("thumb")}>
                                <img
                                  src={`https://trandainghia.id.vn/${item.primary_image.path}`}
                                />
                              </div>
                              <Link
                                href={`/chi-tiet-san-pham/${item.id}`}
                                className={cx("name")}
                              >
                                {item.name}
                              </Link>
                              <div
                                className={cx(
                                  "unit",
                                  "text-sm",
                                  "text-gray-400"
                                )}
                              >
                                ĐVT: <span>{item.units[0].unit_name}</span>
                              </div>
                              <div className={cx("price")}>
                                <div>
                                  <div className={cx("price-reduction")}>
                                    {item.units[0].price_sale}đ
                                  </div>

                                  {item.units[0].price_sale_value && (
                                    <div className={cx("original-price")}>
                                      {item.units[0].price}đ
                                    </div>
                                  )}
                                </div>
                                <div
                                  className={cx(
                                    "flex-grow",
                                    "flex",
                                    "justify-end"
                                  )}
                                ></div>
                                <Icon
                                  onClick={() => {
                                    dispatchYt(
                                      new DispatchYt("ADD_ITEM_YEUTHICH", item)
                                    );
                                  }}
                                  icon="mdi:heart-outline"
                                  className="w-6 h-6 text-red-500"
                                />
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
                      ))
                    : product.map((item) => (
                        <div
                          key={item.id}
                          className={cx(
                            "box-border",
                            "xl:basis-1/5",
                            "lg:basis-1/4",
                            "sm:basis-1/3",
                            "xs:basis-1/2",
                            "basis-full",
                            "p-[2px]"
                          )}
                        >
                          <div className={cx("box-product", "h-full")}>
                            <div className={cx("product")}>
                              <div className={cx("thumb")}>
                                <img
                                  src={`https://trandainghia.id.vn/${item.primary_image.path}`}
                                />
                              </div>
                              <Link
                                href={`/chi-tiet-san-pham/${item.id}`}
                                className={cx("name")}
                              >
                                {item.name}
                              </Link>
                              <div
                                className={cx(
                                  "unit",
                                  "text-sm",
                                  "text-gray-400"
                                )}
                              >
                                ĐVT: <span>{item.units[0].unit_name}</span>
                              </div>
                              <div className={cx("price")}>
                                <div>
                                  <div className={cx("price-reduction")}>
                                    {item.units[0].price_sale}đ
                                  </div>

                                  {item.units[0].price_sale_value && (
                                    <div className={cx("original-price")}>
                                      {item.units[0].price}đ
                                    </div>
                                  )}
                                </div>
                                <div
                                  className={cx(
                                    "flex-grow",
                                    "flex",
                                    "justify-end"
                                  )}
                                ></div>
                                <Icon
                                  onClick={() => {
                                    dispatchYt(
                                      new DispatchYt("ADD_ITEM_YEUTHICH", item)
                                    );
                                  }}
                                  icon="mdi:heart-outline"
                                  className="w-6 h-6 text-red-500"
                                />
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

                  {!isSearching && product.length === 0 && (
                    <div className={cx("no-results")}>
                      Không có sản phẩm nào.
                    </div>
                  )}
                </div>
              </Suspense>

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
    </div>
  );
};

export default Product;
