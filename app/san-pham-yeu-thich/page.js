"use client";
import styles from "./san-pham-yeu-thich.module.css";
import classNames from "classnames/bind";
import {
  DispatchYt,
  useYeuThich,
  YeuThichFunction,
} from "@/components/YTFunction/sanphamyeuthich";
import { Dispatch, useCart } from "@/components/CartFunction";
import Link from "next/link";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

export default function Wishlist() {
  const { stateYt, dispatchYt } = useYeuThich();
  const { state, dispatch } = useCart();
  const [listShowByPage, setListShowByPage] = useState([]);
  const [listPage, setListPage] = useState(0);
  const [page, setPage] = useState(0);

  const formatPrice = (price) => {
    if (price === undefined || price === null) {
      return "0";
    }
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  useEffect(() => {
    setListPage((preState) => {
      return Math.ceil(stateYt.yeuThichItems.length / 12);
    });
  }, [stateYt.yeuThichItems]);

  useEffect(() => {
    setListShowByPage((preState) => {
      let allProduct = [...stateYt.yeuThichItems];
      let startIndex = page * 12;
      return allProduct.slice(startIndex, startIndex + 12);
    });
  }, [page, stateYt.yeuThichItems]);
  console.log(listShowByPage);
  console.log(stateYt);

  return (
    <div>
      <div className={cx("max-w-screen-xl", " mx-auto", "px-4")}>
        <div
          className={cx("product_wishlist", "p-[25px]", "max-md:p-2", "w-full")}
        >
          <h3
            className={cx(
              "title_wishlist",
              "text-[25px]",
              "text-[#253d4e]",
              "font-[550]",
              "max-lg:text-[35px]",
              "max-md:text-[25px]"
            )}
          >
            Sản phẩm yêu thích
          </h3>
          {listShowByPage.length > 0 ? (
            <div className="product_list grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 mt-[15px] gap-4 mx-auto">
              {listShowByPage.map((item) => {
                return (
                  <div className="item_product flex flex-col w-[256px] h-full gap-4 border-2 border-solid p-5 border-[#eeeeee] shadow-md relative rounded-[7px]">
                    <img
                      src={`https://trandainghia.id.vn/${item?.primary_image?.path}`}
                      alt=""
                      className="h-[151.2px] w-[201.6px] object-cover mt-5"
                    />
                    <i
                      onClick={() => {
                        dispatchYt(
                          new DispatchYt("DELETE_ITEM_YEUTHICH", item)
                        );
                      }}
                      className="absolute right-2 -top-3 fa-solid fa-circle-xmark text-red-600 font-semibold cursor-pointer text-center text-[25px]  my-5"
                    ></i>
                    <a
                      href={`chi-tiet-san-pham/${item.id}`}
                      className="text-[22px] text-[#3bb77e] font-semibold min-h-10"
                    >
                      {item.name}
                    </a>
                    <span className="text-[#cccccc] text-[16px] font-medium">
                      ĐVT: {item.units[0].unit_name}
                    </span>
                    <div className="price flex gap-5">
                      <span className="sale_price text-[20px] max-md:text-[16px] text-[#3bb77e] font-semibold">
                        {formatPrice(
                          item.units[0].price_sale || item.units[0].price
                        )}
                        đ
                      </span>
                      <span className="sale text-[18px] max-md:text-[14px] text-[#cccccc] font-medium line-through">
                        {formatPrice(item.units[0].price)}đ
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        item.quantity = 1;
                        dispatch(new Dispatch("ADD_ITEM_CART", item));
                      }}
                      className="addTocart border-2 max-md:text-[14px] border-[#3BB77E] text-[#3BB77E] w-full py-2 rounded-[5px]"
                    >
                      Thêm vào giỏ hàng
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-[15px] w-full">
              <img
                src="/assets/gio_hang_trong/gio_hang_trong.png"
                alt=""
                className="w-[150px] h-auto"
              />
              <p className="text-[#939393] font-bold text-[16px]">
                Bạn chưa có sản phẩm yêu thích nào!
              </p>
              <Link
                href="/"
                className="py-2 px-4 bg-[#3bb77e] rounded-[5px] text-white"
              >
                Tiếp tục mua ngay
              </Link>
            </div>
          )}
          <div className="list-page flex gap-3 justify-end mb-2">
            {Array(listPage)
              .fill("")
              .map((item, index) => {
                console.log(page === index);
                return (
                  <div key={index} className="flex justify-center gap-2">
                    <button
                      className={cx(
                        "w-7",
                        "h-7",
                        "text-[17px]",
                        "text-[#3BB77E]",
                        { "text-[#fff]": page == index },
                        "font-medium",
                        "py-3",
                        "flex",
                        "justify-center",
                        "items-center",
                        "gap-2",
                        "cursor-pointer",
                        "border-[#3BB77E]",
                        "border-solid",
                        "border-2",
                        "border-[1px]",
                        "rounded-full",
                        "max-md:hidden",
                        { "bg-[#3BB77E]": page == index },
                        "border-[2px]"
                      )}
                      onClick={() => setPage(index)}
                    >
                      {index + 1}
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
