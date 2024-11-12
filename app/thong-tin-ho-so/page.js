"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./customer.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(styles);
export default function CustomerInfoForm() {
  const [token, setToken] = useState("");
  const [email, setEmail] = useState("");
  const [customerData, setCustomerData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    birth_date: "",
    gender: "",
    image: "",
  });
  const [userData, setUserData] = useState(formData); // Initialize userData with formData
  const [image, setImage] = useState(""); // Thêm state cho hình ảnh

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user")); // Lấy thông tin user từ localStorage

    if (storedUser) {
      setEmail(storedUser.email); // Set email từ localStorage
      setUserData((prevUserData) => ({
        ...prevUserData,
        name: storedUser.name, // Set name từ localStorage
        email: storedUser.email, // Set email từ localStorage
      }));
    }
  }, []); // Chạy một lần khi component được mount

  // Hàm lấy thông tin customer
  const fetchCustomerData = async () => {
    try {
      const response = await fetch("https://trandainghia.id.vn/api/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Lấy thông tin khách hàng thất bại.");
      }

      const data = await response.json();
      console.log(data);
      setCustomerData(data.customers); // Cập nhật dữ liệu customer
      setUserData({
        name: data.customers.name,
        phone: data.customers.phone,
        address: data.customers.address,
        birth_date: data.customers.birth_date,
        gender: data.customers.gender,
        image: data.customers.image,
      });
    } catch (error) {
      console.error(error);
      alert("Không tìm thấy khách hàng hoặc có lỗi xảy ra.");
    }
    fetchCustomerData();
  };

  // Hàm cập nhật thông tin customer
  const updateCustomerProfile = async () => {
    try {
      const response = await fetch(
        "https://trandainghia.id.vn/api/customers/profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(userData), // Use userData for update
        }
      );

      if (!response.ok) {
        throw new Error("Cập nhật thông tin khách hàng thất bại.");
      }

      const data = await response.json();
      alert("Cập nhật thông tin thành công.");
      setTimeout(() => window.location.reload(), 1000);
      setCustomerData(data.customers); // Cập nhật lại thông tin khách hàng nếu cần
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra khi cập nhật thông tin.");
    }
  };

  // Hàm xử lý khi có thay đổi trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  // Hàm xử lý khi gửi form
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    updateCustomerProfile(); // Call the update function
  };

  // Hàm xử lý khi thay đổi hình ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Cập nhật hình ảnh
      };
      reader.readAsDataURL(file);
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
