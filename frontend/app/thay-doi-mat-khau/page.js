"use client";
import React, { useState } from "react";
import styles from "./replace_password.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (type) => {
    if (type === "current") setShowPassword(!showPassword);
    if (type === "new") setShowNewPassword(!showNewPassword);
    if (type === "confirm") setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div>
      <div className="container">
        <div className={styles.link_home_news}>
          <ul className={styles.list_link}>
            <li>
              <a href="#">Trang Chủ</a>
            </li>
            <li>/</li>
            <li>
              <a href="#">Đổi mật khẩu</a>
            </li>
          </ul>
        </div>
        <div className={styles.change_password}>
          <h3 className={styles.title_changepassword}>ĐỔI MẬT KHẨU</h3>
          <form action="">
            {/* Mật khẩu hiện tại */}
            <div className={styles.now_pasword}>
              <h5>
                Mật khẩu hiện tại <span className={styles.changecolor}>*</span>
              </h5>
              <div className={styles.password_input_wrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  className={styles.ip_now_password}
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  className={styles.eye_icon}
                  onClick={() => togglePasswordVisibility("current")}
                />
              </div>
            </div>

            {/* Mật khẩu mới */}
            <div className={styles.new_password}>
              <h5>
                Mật khẩu mới <span className={styles.changecolor}>*</span>
              </h5>
              <div className={styles.password_input_wrapper}>
                <input
                  type={showNewPassword ? "text" : "password"}
                  className={styles.ip_new_password}
                />
                <FontAwesomeIcon
                  icon={showNewPassword ? faEye : faEyeSlash}
                  className={styles.eye_icon}
                  onClick={() => togglePasswordVisibility("new")}
                />
              </div>
            </div>

            {/* Nhập lại mật khẩu mới */}
            <div className={styles.enter_new_password}>
              <h5>
                Nhập mật khẩu mới <span className={styles.changecolor}>*</span>
              </h5>
              <div className={styles.password_input_wrapper}>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  className={styles.ip_enter_new_password}
                />
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEye : faEyeSlash}
                  className={styles.eye_icon}
                  onClick={() => togglePasswordVisibility("confirm")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
