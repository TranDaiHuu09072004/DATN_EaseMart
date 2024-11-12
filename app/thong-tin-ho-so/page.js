"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./customer.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);

export default function CustomerProfile() {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });
  const [avatarPreview, setAvatarPreview] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");
    const savedPhone = localStorage.getItem("phone");
    const savedAddress = localStorage.getItem("address");
    const savedDateOfBirth = localStorage.getItem("date_of_birth");
    const savedAvatar = localStorage.getItem("avatar");

    setUserData((prevData) => ({
      ...prevData,
      fullname: savedName || "",
      email: savedEmail || "",
      phone: savedPhone || "",
      address: savedAddress || "",
      date_of_birth: savedDateOfBirth || "",
    }));
    setAvatarPreview(savedAvatar || "");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://trandainghia.id.vn/api/user/profile",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: userData.fullname,
            email: userData.email,
            phone: userData.phone,
            address: userData.address,
            date_of_birth: userData.date_of_birth,
          }),
        }
      );

      if (response.ok) {
        localStorage.setItem("username", userData.fullname);
        localStorage.setItem("email", userData.email);
        localStorage.setItem("phone", userData.phone);
        localStorage.setItem("address", userData.address);
        localStorage.setItem("date_of_birth", userData.date_of_birth);
        localStorage.setItem("avatar", avatarPreview);

        toast.success("Cập nhật thông tin thành công!");
        setTimeout(() => {
          window.location.reload(); // Reload the page after a successful update
        }, 1000);
      } else {
        const errorData = await response.json();
        const errorMessage =
          errorData.message || "Cập nhật thông tin thất bại!";
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Đã xảy ra lỗi khi cập nhật thông tin!");
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
      setUserData((prevData) => ({ ...prevData, avatar: file }));
    }
  };

  return (
    <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
      <ToastContainer />
      <div
        className={cx(
          "update_information",
          "w-full",
          "max-lg:flex",
          "max-lg:flex-col"
        )}
      >
        <div className={cx("information")}>
          <h3 className={cx("title_information")}>THÔNG TIN HỘI VIÊN</h3>
          <form onSubmit={handleSubmit}>
            <div className={cx("fullname_input")}>
              <h5>
                Họ tên <span className={cx("red")}>*</span>
              </h5>
              <input
                type="text"
                name="fullname"
                value={userData.fullname}
                onChange={handleChange}
                className={cx("ip_fullname")}
                placeholder="Nguyen Van A"
              />
            </div>
            <div className={cx("email_input")}>
              <h5>
                Email <span className={cx("red")}>*</span>
              </h5>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className={cx("ip_email")}
                placeholder="nguyenvana@gmail.com"
              />
            </div>
            <div className={cx("phone_input")}>
              <h5>
                Số điện thoại <span className={cx("red")}>*</span>
              </h5>
              <input
                type="tel"
                name="phone"
                value={userData.phone}
                onChange={handleChange}
                className={cx("ip_phone")}
                placeholder="0392706777"
              />
            </div>
            <div className={cx("address_input")}>
              <h5>
                Địa chỉ <span className={cx("red")}>*</span>
              </h5>
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className={cx("ip_address")}
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>
            <div className={cx("birthday_input")}>
              <h5>
                Ngày sinh <span className={cx("red")}>*</span>
              </h5>
              <input
                type="date"
                name="date_of_birth"
                value={userData.date_of_birth}
                onChange={handleChange}
                className={cx("ip_birthday")}
              />
            </div>
            <button type="submit" className={cx("update")}>
              Cập Nhật
            </button>
          </form>
        </div>
        <div className={cx("upload_img")}>
          {avatarPreview ? (
            <img
              src={avatarPreview}
              alt="Avatar"
              className={cx("avatar_preview")}
            />
          ) : (
            <i className="fa-solid fa-circle-user text-[300px] text-[#9a9a9a]"></i>
          )}
          <input
            type="file"
            onChange={handleAvatarChange}
            className="hidden"
            id="avatar-upload"
          />
          <label htmlFor="avatar-upload" className={cx("upload_file")}>
            Tải ảnh lên
          </label>
        </div>
      </div>
    </div>
  );
}
