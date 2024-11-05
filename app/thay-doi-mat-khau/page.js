"use client";
import React, { useState, useEffect } from "react";
import styles from "./replace_password.module.css";
import classNames from "classnames/bind";
import Swal from "sweetalert2";
import axios from "axios";
const cx = classNames.bind(styles);
export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  useEffect(() => {
    const fetchCurrentPassword = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users");
        setCurrentPassword(response.data.password);
      } catch (error) {
        console.error("Lỗi khi lấy mật khẩu hiện tại:", error);
      }
    };
    fetchCurrentPassword();
  }, []);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      Swal.fire("Lỗi", "Mật khẩu mới không khớp!", "error");
      return;
    }
    try {
      const usersResponse = await axios.get("http://localhost:3000/users");
      const users = usersResponse.data;
      const user = users.find((user) => user.id === users);
      if (user) {
        if (user.password !== currentPassword) {
          Swal.fire("Lỗi", "Mật khẩu hiện tại không đúng!", "error");
          return;
        }
        const response = await axios.put(
          `http://localhost:3000/users/${user.id}`,
          {
            password: newPassword,
          }
        );
        if (response.status === 200) {
          Swal.fire(
            "Thành công",
            "Bạn đã thay đổi mật khẩu thành công!",
            "success"
          );
        } else {
          Swal.fire("Lỗi", "Có lỗi xảy ra khi thay đổi mật khẩu!", "error");
        }
      } else {
        Swal.fire("Lỗi", "Người dùng không tìm thấy!", "error");
      }
    } catch (error) {
      Swal.fire("Lỗi", "Có lỗi xảy ra khi thay đổi mật khẩu!", "error");
      console.error("Lỗi khi thay đổi mật khẩu:", error);
    }
  };

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
          <form onSubmit={handleChangePassword}>
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
              <div className={cx("relative")}>
                <input
                  type={showCurrentPassword ? "text" : "password"}
                  className={cx(
                    "ip_now_password",
                    "xl:w-[430px]",
                    "h-[35px]",
                    "max-lg:w-full",
                    "border border-[#cccccc]",
                    "rounded-[5px]",
                    "pr-10"
                  )}
                  value={currentPassword}
                  // {{ edit_1 }}
                  onChange={(e) => setCurrentPassword(e.target.value)} // Cho phép nhập mật khẩu hiện tại
                  // {{ edit_1 }}
                />
                <span
                  className={cx(
                    "absolute",
                    "right-2",
                    "top-1/2",
                    "-translate-y-1/2",
                    "cursor-pointer"
                  )}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  <i
                    className={
                      showCurrentPassword
                        ? "fa-solid fa-eye"
                        : "fa-regular fa-eye"
                    }
                  ></i>
                </span>
              </div>
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
              <div className={cx("relative")}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  className={cx(
                    "ip_new_password",
                    "xl:w-[430px]",
                    "h-[35px]",
                    "max-lg:w-full",
                    "border border-[#cccccc]",
                    "rounded-[5px]"
                  )}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <span
                  className={cx(
                    "absolute",
                    "right-2",
                    "top-1/2",
                    "-translate-y-1/2",
                    "cursor-pointer"
                  )}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  <i
                    className={
                      showNewPassword ? "fa-solid fa-eye" : "fa-regular fa-eye"
                    }
                  ></i>
                </span>
              </div>
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
              <div className={cx("relative")}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={cx(
                    "ip_enter_new_password",
                    "xl:w-[430px]",
                    "h-[35px]",
                    "max-lg:w-full",
                    "border border-[#cccccc]",
                    "rounded-[5px]"
                  )}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <span
                  className={cx(
                    "absolute",
                    "right-2",
                    "top-1/2",
                    "-translate-y-1/2",
                    "cursor-pointer"
                  )}
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <i
                    className={
                      showConfirmPassword
                        ? "fa-solid fa-eye"
                        : "fa-regular fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
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
          </form>
        </div>
      </div>
    </div>
  );
}
