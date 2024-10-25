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
  console.log(color);

  const [showSidebar, setShowSidebar] = useState(false);
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showSidebar]);
  return (
    <div className={cx("hamburger-menu", "lg:hidden", "flex")}>
      <Icon
        icon="heroicons-outline:menu-alt-3"
        className={cx("w-7", "h-full", "text-white", {
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
                  <img src="assets/img/logo.png" className={cx("h-full")} />
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
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  className={cx("input-search", "w-full", "h-10", "pl-2")}
                />
                <button className={cx("btn-search", "h-10", "w-14")}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
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
                      "flex",
                      "justify-between",
                      "items-center",
                      "gap-1",
                      "pb-2"
                    )}
                  >
                    <Link href={""}>Home</Link>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={cx("icon-menu")}
                    />
                  </div>
                  <ul className={cx("menu-child", "pl-5")}>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                  </ul>
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
                    <Link href={""}>Home</Link>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={cx("icon-menu")}
                    />
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
                    <Link href={""}>Home</Link>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={cx("icon-menu")}
                    />
                  </div>
                  <ul className={cx("menu-child", "pl-5")}>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                    <li className={cx("")}>Trang chủ 1</li>
                  </ul>
                </li>
              </ul>
              <p className={cx("description", "", "text-sm", "mb-5")}>
                Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla
                a lobortis lectus, id volutpat magna. Morbi consequat porttitor
                fermentum. Nulla vestibulum tincidunt viverra. Vestibulum
                accumsan molestie lorem, non laoreet massa. Duis at dui sem.
              </p>

              <div className={cx("box-social", "")}>
                <h2 className={cx("text-lg", "mb-6")}>Contact Us</h2>
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
                    Valentin, Street Road 24, New York,
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
                  <div className={cx("info", "")}>+000 123 (456) 789</div>
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
                  <div className={cx("info", "")}>+000 123 (456) 789</div>
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
