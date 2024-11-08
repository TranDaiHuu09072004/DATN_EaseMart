"use client";
import {
  faEnvelopeOpenText,
  faLocationDot,
  faMagnifyingGlass,
  faPhone,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./MenuMobile.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
const cx = classNames.bind(styles);

const MenuMobile = ({ color = false }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [searchKeyword, setSearchKeyWord] = useState("");
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSidebar]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKeyword.trim()) {
      const encodedKeyword = encodeURIComponent(searchKeyword.trim());
      window.location.href = `/product?name=${encodedKeyword}`;
    }
  };
  return (
    <div className={cx("hamburger-menu", "lg:hidden", "flex")}>
      <Icon
        icon="heroicons-outline:menu-alt-3"
        className={cx("w-5", "lg:w-7", "h-full", "text-white", {
          "primary-color": color,
        })}
        onClick={() => {
          setShowSidebar(!showSidebar);
        }}
      />
      {showSidebar && (
        <>
          <div
            className={cx(
              "wrapper",
              "absolute",
              "h-screen",
              "top-0",
              "right-0",
              "w-screen",
              "px-10",
              "py-12",
              "z-40"
            )}
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          ></div>
          <div
            className={cx(
              "mobile-size-menu",
              "absolute",
              "h-screen",
              "top-0",
              "right-0",
              "px-10",
              "py-12",
              "z-50"
            )}
          >
            <div className={cx("content")}>
              <div
                className={cx(
                  "box-logo-close",
                  "flex",
                  "justify-between",
                  "items-center",
                  "h-10",
                  "mb-5"
                )}
              >
                <div className={cx("logo", "h-full")}>
                  <img
                    src="/assets/img/logo.png"
                    className={cx("h-full", "w-full")}
                  />
                </div>
                <div
                  className={cx(
                    "close",
                    "rounded-full",
                    "h-10",
                    "w-10",
                    "flex",
                    "items-center",
                    "justify-center"
                  )}
                  onClick={() => {
                    setShowSidebar(!showSidebar);
                  }}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className={cx("box-rearch", "flex", "mb-5")}>
                <form onSubmit={handleSearch} className="flex w-full">
                  <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    className={cx("input-search", "w-full", "h-10", "pl-2")}
                    onChange={(e) => setSearchKeyWord(e.target.value)}
                  />
                  <button
                    type="submit"
                    className={cx("btn-search", "h-10", "w-14")}
                  >
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
                </form>
              </div>

              <ul
                className={cx(
                  "menu-header-mobile",
                  "gap-1",
                  "lg	:gap-5",
                  "xl:gap-7",
                  "h-full",
                  "lg:flex",
                  "mb-5"
                )}
              >
                <li className={cx("flex", "flex-col", "gap-1", "pb-1", "mb-1")}>
                  <div
                    className={cx(
                      "item-menu",
                      "mx-1",
                      "lg:mx-2",
                      "",
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={"/"}>Trang chủ</Link>
                  </div>
                </li>
                <li className={cx("flex", "flex-col", "gap-1", "pb-1", "mb-1")}>
                  <div
                    className={cx(
                      "item-menu",
                      "mx-1",
                      "lg:mx-2",
                      "",
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={"/product"}>Sản phẩm</Link>
                  </div>
                </li>
                <li className={cx("flex", "flex-col", "gap-1", "pb-1", "mb-1")}>
                  <div
                    className={cx(
                      "item-menu",
                      "mx-1",
                      "lg:mx-2",
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={"/vechungtoi"}>Về chúng tôi</Link>
                  </div>
                </li>
                <li className={cx("flex", "flex-col", "gap-1", "pb-1", "mb-1")}>
                  <div
                    className={cx(
                      "item-menu",
                      "mx-1",
                      "lg:mx-2",
                      "",
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={"/khuyenmai"}>Khuyến mãi</Link>
                  </div>
                </li>
                <li className={cx("flex", "flex-col", "gap-1", "pb-1", "mb-1")}>
                  <div
                    className={cx(
                      "item-menu",
                      "mx-1",
                      "lg:mx-2",
                      "",
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={"/lienhe"}>Liên hệ</Link>
                  </div>
                </li>
              </ul>
              <p
                className={cx(
                  "description",
                  "text-[#939292]",
                  "text-sm",
                  "mb-5"
                )}
              >
                EaseMart là chuỗi cửa hàng tiện lợi, chuyên cung cấp các sản
                phẩm hàng tiêu dùng thiết yếu cho cuộc sống hàng ngày với giá cả
                hợp lý. Với phương châm "Tiện lợi mỗi ngày", chúng tôi mong muốn
                đem đến trải nghiệm mua sắm tiện lợi, nhanh chóng và chất lượng
                cho khách hàng.
              </p>

              <div className={cx("box-social", "")}>
                <h2 className={cx("text-lg", "mb-6")}>Liên hệ với chúng tôi</h2>
                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "items-center",
                    "gap-3",
                    "my-5"
                  )}
                >
                  <div
                    className={cx(
                      "box-icon",
                      "flex",
                      "justify-center",
                      "items-center",
                      "w-7",
                      "h-7"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className={cx("icon", "w-3")}
                    />
                  </div>
                  <div className={cx("info", "")}>
                    11/7J Nguyễn Ảnh Thủ, Xã Bà Điểm, Huyện Hóc Môn, TPHCM
                  </div>
                </div>

                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "items-center",
                    "gap-3",
                    "my-5"
                  )}
                >
                  <div
                    className={cx(
                      "box-icon",
                      "flex",
                      "justify-center",
                      "items-center",
                      "w-7",
                      "h-7"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faPhone}
                      className={cx("icon", "w-3")}
                    />
                  </div>
                  <div className={cx("info", "")}>+84 392 706 757</div>
                </div>
                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "items-center",
                    "gap-3",
                    "my-5"
                  )}
                >
                  <div
                    className={cx(
                      "box-icon",
                      "flex",
                      "justify-center",
                      "items-center",
                      "w-7",
                      "h-7"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText} 
                      className={cx("icon", "w-3")}
                    />
                  </div>
                  <div className={cx("info", "")}>+84 392 706 755</div>
                </div>
              </div>
              <div>
                <div className={cx("social", "flex", "gap-3")}>
                  <div
                    className={cx(
                      "social-item",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={cx("icon", "text-white")}
                    />
                  </div>

                  <div
                    className={cx(
                      "social-item",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={cx("icon", "text-white")}
                    />
                  </div>
                  <div
                    className={cx(
                      "social-item",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className={cx("icon", "text-white")}
                    />
                  </div>
                  <div
                    className={cx(
                      "social-item",
                      "flex",
                      "justify-center",
                      "items-center"
                    )}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={cx("icon", "text-white")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default MenuMobile;
