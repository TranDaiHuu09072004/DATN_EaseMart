"use client";
import styles from "./san-pham-yeu-thich.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Wishlist() {
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
          <div className="product_list grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 mt-[15px] gap-4 mx-auto">
            <div className="item_product flex flex-col w-full h-full gap-4 border-2 border-solid p-5 border-[#eeeeee] shadow-md relative">
              <img
                src="/assets/img/product_hotnew1.jpg"
                alt=""
                className="w-full h-auto object-cover "
              />
              <i class="absolute right-2 -top-3 fa-solid fa-circle-xmark text-red-600 font-semibold cursor-pointer text-center text-[25px]  my-5"></i>
              <h5 className="text-[22px] text-[#3bb77e] font-semibold">
                Sản Phẩm 1
              </h5>
              <span className="text-[#cccccc] text-[16px] font-medium">
                ĐVT: Chai
              </span>
              <div className="price flex gap-5">
                <span className="sale_price text-[20px] max-md:text-[16px] text-[#3bb77e] font-semibold">
                  25,000đ
                </span>
                <span className="sale text-[18px] max-md:text-[14px] text-[#cccccc] font-medium line-through">
                  27,000đ
                </span>
              </div>
              <button className="addTocart border-2 max-md:text-[14px] border-[#3BB77E] text-[#3BB77E] w-full py-2 rounded-[5px]">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="item_product flex flex-col w-full h-full gap-4 border-2 border-solid p-5 border-[#eeeeee] shadow-md relative">
              <img
                src="/assets/img/product_hotnew2.jpg"
                alt=""
                className="w-full h-auto object-cover"
              />
              <i class="absolute right-2 -top-3 fa-solid fa-circle-xmark text-red-600 font-semibold cursor-pointer text-center text-[25px]  my-5"></i>
              <h5 className="text-[22px] text-[#3bb77e] font-semibold">
                Sản Phẩm 2
              </h5>
              <span className="text-[#cccccc] text-[16px] font-medium">
                ĐVT: Bịch
              </span>
              <div className="price flex gap-5">
                <span className="sale_price text-[20px] max-md:text-[16px] text-[#3bb77e] font-semibold">
                  12,000đ
                </span>
                <span className="sale text-[18px] max-md:text-[14px] text-[#cccccc] font-medium line-through">
                  15,000đ
                </span>
              </div>
              <button className="addTocart border-2 max-md:text-[14px] border-[#3BB77E] text-[#3BB77E] w-full py-2 rounded-[5px]">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="item_product flex flex-col w-full h-full gap-4 border-2 border-solid p-5 border-[#eeeeee] shadow-md relative">
              <img
                src="/assets/img/product_hotnew3.svg"
                alt=""
                className="w-full h-auto object-cover"
              />
              <i class="absolute right-2 -top-3 fa-solid fa-circle-xmark text-red-600 font-semibold cursor-pointer text-center text-[25px]  my-5"></i>
              <h5 className="text-[22px] text-[#3bb77e] font-semibold">
                Sản Phẩm 3
              </h5>
              <span className="text-[#cccccc] text-[16px] font-medium">
                ĐVT: Bịch
              </span>
              <div className="price flex gap-5">
                <span className="sale_price text-[20px] max-md:text-[16px] text-[#3bb77e] font-semibold">
                  11,000đ
                </span>
                <span className="sale text-[18px] max-md:text-[14px] text-[#cccccc] font-medium line-through">
                  9,000đ
                </span>
              </div>
              <button className="addTocart border-2 max-md:text-[14px] border-[#3BB77E] text-[#3BB77E] w-full py-2 rounded-[5px]">
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className="item_product flex flex-col w-full h-full gap-4 border-2 border-solid p-5 border-[#eeeeee] shadow-md relative">
              <img
                src="/assets/img/product_hotnew4.svg"
                alt=""
                className="w-full h-auto object-cover "
              />
              <i class="absolute right-2 -top-3 fa-solid fa-circle-xmark text-red-600 font-semibold cursor-pointer text-center text-[25px]  my-5"></i>
              <h5 className="text-[22px] text-[#3bb77e] font-semibold">
                Sản Phẩm 4
              </h5>
              <span className="text-[#cccccc] text-[16px] font-medium">
                ĐVT: Nải
              </span>
              <div className="price flex gap-5">
                <span className="sale_price text-[20px] max-md:text-[16px] text-[#3bb77e] font-semibold">
                  25,000đ
                </span>
                <span className="sale text-[18px] text-[#cccccc] max-md:text-[14px] font-medium line-through">
                  27,000đ
                </span>
              </div>
              <button className="addTocart border-2 border-[#3BB77E] max-md:text-[14px] text-[#3BB77E] w-full py-2 rounded-[5px]">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
