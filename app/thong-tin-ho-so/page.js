"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./customer.module.css";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";

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

  const fetchCustomerData = async () => {
    try {
      const getUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(getUser);
      const { email, token, name } = parsedUser;
      // Make the API request using axios
      const response = await axios.post(
        "https://trandainghia.id.vn/api/customers",
        { email },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Parse the response data
      const data = response.data;

      if (data.customers && data.customers.email === email) {
        setUserData({
          name: data.customers.name || name,
          email: data.customers.email,
          phone: data.phone,
          address: data.address,
          birth_date: data.birth_date,
          gender: data.gender,
        });
      } else {
        console.warn("Fetched data does not match the logged-in user email.");
      }
    } catch (error) {
      console.error("An error occurred while fetching customer data:", error);
    }
  };

  // Call the function only once when the component mounts
  useEffect(() => {
    fetchCustomerData();
    setUserData((prevData) => ({
      ...prevData,
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      birth_date: userData.birth_date,
      gender: userData.gender,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setUserData((prevData) => ({ ...prevData, image: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Log dữ liệu trước khi gửi

    try {
      const response = await axios.put(
        "https://trandainghia.id.vn/api/customers/profile",
        {
          name: userData.name,
          // email: userData.email,
          phone: userData.phone,
          address: userData.address,
          birth_date: userData.birth_date,
          gender: userData.gender,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Log phản hồi từ API
      console.log("Response from API:", response.data);

      console.log("Submitting data:", {
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        birth_date: userData.birth_date,
        gender: userData.gender,
      });

      if (response.status === 200) {
        toast.success("Cập nhật thông tin thành công!");
        setTimeout(() => {
          window.location.reload(); // Reload the page after a successful update
        }, 1000);
      }
    } catch (error) {
      console.error("An error occurred while submitting data:", error);
      const errorMessages = error.response?.data.errors
        ? Object.values(error.response.data.errors).join(", ")
        : error.response?.data.message || "Có lỗi xảy ra.";
      toast.error(`Cập nhật thất bại! ${errorMessages}`);
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
                value={userData.email}
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
            onChange={handleImageChange}
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
