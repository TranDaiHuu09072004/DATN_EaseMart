"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./customer.module.css";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);
export default function CustomerInfoForm() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    birth_date: "",
    gender: "",
  });
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchCustomerData(); // Fetch customer data on component mount
  }, []);

  const fetchCustomerData = async () => {
    const getUser = localStorage.getItem("user");

    if (getUser) {
      // Parse the stored string as JSON
      const parsedUser = JSON.parse(getUser);
      const email = parsedUser.email;
      const token = parsedUser.token;

      const response = await fetch("https://trandainghia.id.vn/api/customers", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      console.log(data); // Log the customer data

      if (data.email === email) {
        setUserData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
          birth_date: data.birth_date,
          gender: data.gender,
        });
      }
    } else {
      console.error("User data not found in localStorage");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const response = await fetch(
      "https://trandainghia.id.vn/api/customers/profile",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      }
    );

    if (response.ok) {
      // Handle successful update
      console.log("Cập nhật thành công!");
    } else {
      // Handle error
      console.error("Cập nhật thất bại!");
    }
  };

  return (
    <div className={cx("max-w-screen-xl", "mx-auto", "p-4")}>
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
                name="name"
                value={userData.name} // Ensure userData is used here
                onChange={handleChange}
                className={cx("ip_fullname", "focus:outline-[#3bb77e]")}
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
                value={userData.email} // Ensure userData is used here
                onChange={handleChange}
                className={cx(
                  "ip_email",
                  "readOnlyInput",
                  "focus:outline-[#3bb77e]"
                )}
                placeholder="Vui lòng nhập email"
                readOnly
              />
            </div>
            <div className={cx("phone_input")}>
              <h5>
                Điện thoại <span className={cx("red")}>*</span>
              </h5>
              <input
                type="tel"
                name="phone"
                value={userData.phone} // Ensure userData is used here
                onChange={handleChange}
                className={cx("ip_phone", "focus:outline-[#3bb77e]")}
                placeholder="Vui lòng nhập điện thoại"
              />
            </div>
            <div className={cx("address_input")}>
              <h5>
                Địa chỉ <span className={cx("red")}>*</span>
              </h5>
              <input
                type="text"
                name="address"
                value={userData.address} // Ensure userData is used here
                onChange={handleChange}
                className={cx("ip_address", "focus:outline-[#3bb77e]")}
                placeholder="Nhập địa chỉ của bạn"
              />
            </div>
            <div className={cx("birthday_input")}>
              <h5>
                Ngày sinh <span className={cx("red")}>*</span>
              </h5>
              <input
                type="date"
                name="birth_date"
                value={userData.birth_date} // Ensure userData is used here
                onChange={handleChange}
                className={cx("ip_birthday", "focus:outline-[#3bb77e]")}
                placeholder="Vui lòng nhập ngày tháng năm sinh"
              />
            </div>
            <div className={cx("gender_input")}>
              <h5>
                Giới tính <span className={cx("red")}>*</span>
              </h5>
              <input
                type="text"
                name="gender"
                value={userData.gender} // Ensure userData is used here
                onChange={handleChange}
                className={cx("ip_gender", "focus:outline-[#3bb77e]")}
                placeholder="Nhập giới tính của bạn"
              />
            </div>
            <button type="submit" className={cx("update")}>
              Cập Nhật
            </button>
          </form>
        </div>
        <div className={cx("upload_img")}>
          {image ? (
            <img
              src={image}
              alt="Image"
              name="image"
              className={cx("image_preview")}
            />
          ) : (
            <i className="fa-solid fa-circle-user text-[300px] text-[#9a9a9a]"></i>
          )}
          <input
            type="file"
            onChange=""
            className="hidden"
            name="image"
            id="image-upload"
          />
          <label htmlFor="image-upload" className={cx("upload_file")}>
            Tải ảnh lên
          </label>
        </div>
      </div>
    </div>
  );
}
