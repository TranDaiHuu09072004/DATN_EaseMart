"use client";
import React from "react";
import Link from "next/link";
import styles from "./dangky.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import CryptoJS from "crypto-js";

export default function DangKy() {
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ và tên"),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email là bắt buộc"),
    phone: Yup.string()
      .required("Vui lòng nhập số điện thoại")
      .matches(/^[0-9]{10}$/, "Số điện thoại phải có 10 số"),
    password: Yup.string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .required("Vui lòng nhập mật khẩu"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    console.log("Submitting data:", data);

    // Hash the password before storing
    const hashedPassword = CryptoJS.SHA256(data.password).toString();
    const dataToStore = { ...data, password: hashedPassword };

    try {
      // Gửi yêu cầu OTP
      const otpResponse = await axios.post(
        "https://trandainghia.id.vn/api/email/send-otp",
        { email: data.email }
      );

      console.log("OTP Response:", otpResponse.data);
      localStorage.setItem("registerData", JSON.stringify(dataToStore));

      // Hiển thị thông báo thành công
      toast.success("Mã OTP đã được gửi tới email của bạn!", {
        position: "top-right",
        autoClose: 2000,
      });

      // Chuyển hướng sang trang đăng nhập
      setTimeout(() => {
        window.location.href = "/otp-email";
      }, 2000);
    } catch (otpError) {
      console.error(
        "Gửi OTP thất bại:",
        otpError.response ? otpError.response.data : otpError.message
      );
      toast.error("Không thể gửi mã OTP. Vui lòng thử lại!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div className={styles.pageContainer}>
      <ToastContainer />
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <h1>Đăng ký hội viên</h1>
            <p>Đăng ký ngay để trở thành hội viên</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nhập họ và tên"
              {...register("name")}
            />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
            <input
              type="email"
              className={styles.inputField}
              placeholder="Nhập email"
              {...register("email")}
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}

            <input
              type="tel"
              className={styles.inputField}
              placeholder="Nhập số điện thoại"
              {...register("phone")}
            />
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className={styles.inputField}
                placeholder="Nhập mật khẩu"
                {...register("password")}
              />
              <span
                className="absolute right-3 mt-7 text-[20px] cursor-pointer text-[#757575]"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>

              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
            </div>

            <p className={styles.formText}>
              Bằng việc chọn vào Đăng Ký, bạn đồng ý với các điều kiện áp dụng
              của EaseMart để trở thành hội viên của chúng tôi.
            </p>
            <button type="submit" className={styles.signupBtn}>
              Đăng Ký
            </button>
          </form>
          <div className={styles.socialLogin}>
            <p>hoặc</p>
            <button className={styles.googleBtn}>Google</button>
          </div>
          <p className={styles.linkContainer}>
            Đã có tài khoản?{" "}
            <Link href="/dangnhap" className={styles.link}>
              Đăng nhập ngay
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
