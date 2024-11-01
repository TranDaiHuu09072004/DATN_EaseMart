"use client";
import React, { useState } from "react";
import styles from "./replace_password.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function ChangePassword() {
  return (
    <div>
      <div className={cx("max-w-screen-xl", " mx-auto", "p-4")}>
        <div
          className={cx(
            "change_password",
            "xl:mx-auto",
            "xl:max-w-[700px]",
            "max-lg:w-full",
            "max-md:mx-auto"
          )}
        >
          <h3 className={cx("title_changepassword")}>ĐỔI MẬT KHẨU</h3>
          <form action="">
            <div
              className={cx(
                "now_pasword",
                "xl:flex",
                "xl:gap-[50px]",
                "xl:items-center",
                "xl:mt-5",
                "max-lg:flex-col"
              )}
            >
              <h5 className="max-lg:mb-2">
                Mật khẩu hiện tại <span className={cx("changecolor")}>*</span>
              </h5>

              <input
                type="password"
                className={cx(
                  "ip_now_password",
                  "xl:w-[430px]",
                  "h-[35px]",
                  "max-lg:w-full",
                  "border border-[#cccccc]",
                  "rounded-[5px]"
                )}
              />
            </div>

            <div
              className={cx(
                "new_password",
                "xl:flex",
                "xl:gap-[75px]",
                "xl:items-center",
                "mt-5",
                "max-lg:flex-col"
              )}
            >
              <h5 className="max-lg:mb-2">
                Mật khẩu mới <span className={cx("changecolor")}>*</span>
              </h5>

              <input
                type="password"
                className={cx(
                  "ip_new_password",
                  "xl:w-[430px]",
                  "h-[35px]",
                  "max-lg:w-full",
                  "border border-[#cccccc]",
                  "rounded-[5px]"
                )}
              />
            </div>

            <div
              className={cx(
                "enter_new_password",
                "xl:flex",
                "xl:gap-[33px]",
                "xl:items-center",
                "mt-5",
                "max-lg:flex-col"
              )}
            >
              <h5 className="max-lg:mb-2">
                Nhập mật khẩu mới <span className={cx("changecolor")}>*</span>
              </h5>

              <input
                type="password"
                className={cx(
                  "ip_enter_new_password",
                  "xl:w-[430px]",
                  "h-[35px]",
                  "max-lg:w-full",
                  "border border-[#cccccc]",
                  "rounded-[5px]"
                )}
              />
            </div>
          </form>
          <button
            className={cx(
              "submit_button",
              "xl:w-[130px]",
              "max-lg:w-full",
              "items-center",
              "bg-[#3bb77e]",
              "text-white",
              "xl:ml-[320px]",
              "p-[15px]",
              "xl:my-4",
              "border-none",
              "rounded-[5px]",
              "cursor-pointer"
            )}
          >
            Đổi mật khẩu
          </button>
        </div>
      </div>
    </div>
  );
}
