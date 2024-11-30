"use client";
import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./customer.module.css";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import axios from "axios";
import { toast } from "react-toastify";
import { getInfoCustomer, updateInfoCustomer } from "../../service/customer";
const cx = classNames.bind(styles);
export default function CustomerInfoForm() {
  const [toggleGetInfoUser, setToggleGetInfoUser] = useState(true);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    birth_date: "",
    gender: "",
    image: null,
  });
  const [image, setImage] = useState(null);

  // Call the function only once when the component mounts
  useEffect(() => {
    console.log("check");
    const getUser = localStorage.getItem("user");
    const parsedUser = JSON.parse(getUser);
    const { email, token, name } = parsedUser;
    getInfoCustomer(email, token).then((data) => {
      console.log(data.customers.image);
      if (data.customers.image) {
        setImage(`https://trandainghia.id.vn/${data.customers.image}`);
      }
      setUserData((prevData) => ({
        ...prevData,
        name: data.customers.name,
        email: data.customers.email,
        phone: data.customers.phone,
        address: data.customers.address,
        birth_date: data.customers.birth_date,
        gender: data.customers.gender,
      }));
    });
  }, [toggleGetInfoUser]);

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
    const token = JSON.parse(localStorage.getItem("user")).token;
    // Log dữ liệu trước khi gửi
    console.log(userData);
    console.log(token);

    const formData = new FormData();
    console.log(userData.image);

    if (userData.image) {
      formData.append("image", userData.image);
    }
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("address", userData.address);
    formData.append("phone", userData.phone);
    formData.append("birth_date", userData.birth_date);
    formData.append("gender", userData.gender);

    updateInfoCustomer(formData, token)
      .then(() => {
        toast.success("Cập nhật thành công!");
        setToggleGetInfoUser(!toggleGetInfoUser);
      })
      .catch((err) => {
        console.log(err);
      });

    // Log phản hồi từ API
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
