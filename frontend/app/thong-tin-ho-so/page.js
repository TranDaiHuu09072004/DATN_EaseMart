import React from "react";
import styles from "./customer.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function CustomerProfile() {
  return (
    <div>
      <div className={cx("max-w-screen-xl", " mx-auto", "p-4")}>
        <div
          className={cx(
            "update_information",
            "w-full",
            "max-lg:flex",
            "max-lg:flex-col",
            "max-md:flex-col"
          )}
        >
          <div className={cx("information", "max-lg:w-full")}>
            <h3 className={cx("title_information")}>THÔNG TIN HỘI VIÊN</h3>
            <form action="" className="max-md:flex max-md:flex-col">
              <div
                className={cx(
                  "fullname_input",
                  "xl:mt-[50px]",
                  "xl:flex",
                  "xl:gap-[69px]",
                  "max-lg:flex-col",
                  "max-lg:mt-[15px]"
                )}
              >
                <h5 className="max-md:text-base">
                  Họ tên <span className={cx("red")}>*</span>
                </h5>
                <input
                  type="text"
                  className={cx(
                    "ip_fullname",
                    "xl:w-[500px]",
                    "h-[35px]",
                    "border border-[#cccccc]",
                    "rounded-[5px]",
                    "p-[5px]",
                    "max-lg:w-full",
                    "max-lg:mt-[10px]"
                  )}
                  placeholder="Nguyen Van A"
                />
              </div>
              <div
                className={cx(
                  "email_input",
                  "xl:mt-[32px]",
                  "xl:flex",
                  "xl:gap-[76px]",
                  "max-lg:flex-col",
                  "max-lg:mt-[25px]"
                )}
              >
                <h5>
                  Email <span className={cx("red")}>*</span>
                </h5>
                <input
                  type="text"
                  className={cx(
                    "ip_email",
                    "ip_fullname",
                    "xl:w-[500px]",
                    "h-[35px]",
                    "border border-[#cccccc]",
                    "rounded-[5px]",
                    "p-[5px]",
                    "max-lg:w-full",
                    "max-lg:mt-[10px]"
                  )}
                  placeholder="nguyenvana@gmail.com"
                />
              </div>
              <div
                className={cx(
                  "phone_input",
                  "xl:mt-[32px]",
                  "xl:flex",
                  "xl:gap-[23px]",
                  "max-lg:flex-col",
                  "max-lg:mt-[25px]"
                )}
              >
                <h5>
                  Số điện thoại <span className={cx("red")}>*</span>
                </h5>
                <input
                  type="number"
                  className={cx(
                    "ip_phone",
                    "xl:w-[500px]",
                    "h-[35px]",
                    "border border-[#cccccc]",
                    "rounded-[5px]",
                    "p-[5px]",
                    "max-lg:w-full",
                    "max-lg:mt-[10px]"
                  )}
                  placeholder="0392706777"
                />
              </div>
              <div
                className={cx(
                  "birthday_input",
                  "xl:mt-[32px]",
                  "xl:flex",
                  "xl:gap-[48px]",
                  "max-lg:flex-col",
                  "max-lg:mt-[25px]"
                )}
              >
                <h5>
                  Năm sinh <span className={cx("red")}>*</span>
                </h5>
                <input
                  type="date"
                  className={cx(
                    "ip_birthday",
                    "xl:w-[500px]",
                    "h-[35px]",
                    "border border-[#cccccc]",
                    "rounded-[5px]",
                    "p-[5px]",
                    "max-lg:w-full",
                    "max-lg:mt-[10px]"
                  )}
                  placeholder="09/07/1987"
                />
              </div>
              <button className={cx("update")}>Cập Nhật</button>
            </form>
          </div>
          <div
            className={cx(
              "upload_img",
              "flex",
              "flex-col",
              "gap-[10px]",
              "max-lg:mx-auto"
            )}
          >
            <i className="fa-solid fa-circle-user text-[300px] text-[#9a9a9a] xl:mt-[30px] xl:ml-[60px] "></i>
            <button
              className={cx(
                "upload_file",
                "w-[100px]",
                "p-[10px]",
                "bg-[#d2d2d2]",
                "rounded-[5px]",
                "rounded-none",
                "font-[550px]",
                "lg:ml-[160px]",
                "max-lg:mx-auto",
                "cursor-pointer"
              )}
            >
              Tải ảnh lên
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
