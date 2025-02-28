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
import Swal from "sweetalert2";

export default function DangKy() {
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập họ và tên"),
    email: Yup.string()
      .email("Email không đúng!")
      .required("Vui lòng nhập Email"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Số điện thoại bắt buộc phải 10 số")
      .required("Vui lòng nhập số điện thoại")
      .test(
        "is-numeric",
        "Số điện thoại chỉ được chứa số",
        (value) => !isNaN(value)
      ),
    password: Yup.string()
      .min(8, "Mật khẩu ít nhất từ 8 kí tự")
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
    const register = { ...data };

    const responseCheckEmail = await axios.post(
      "https://trandaihuu.id.vn/api/check-email",
      { email: data.email }
    );

    if (
      responseCheckEmail.status === 200 &&
      responseCheckEmail.data.registered === false
    ) {
      sessionStorage.setItem("registerData", JSON.stringify(register));

      try {
        // Gửi yêu cầu OTP
        const otpResponse = await axios.post(
          "https://trandaihuu.id.vn/api/send-otp",
          { email: data.email }
        );

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
    } else if (responseCheckEmail.data.registered === true) {
      Swal.fire(
        "Thất bại",
        "Email này đã tồn tại! Vui lòng đăng ký bằng Email khác",
        "error"
      );
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
                type={showPassword ? "text" : "password"} // Dòng này đặt loại input là "text" nếu showPassword là true, ngược lại đặt là "password"
                className={styles.inputField} // Dòng này áp dụng kiểu dáng inputField cho phần tử input
                placeholder="Nhập mật khẩu" // Dòng này đặt văn bản gợi ý là "Nhập mật khẩu"
                {...register("password")} // Dòng này đăng ký trường input với tên "password" bằng cách sử dụng hàm register từ react-hook-form
              />
              <span
                className="absolute right-3 mt-7 text-[20px] cursor-pointer text-[#757575]" // Dòng này đặt kiểu dáng cho phần tử span, định vị nó tuyệt đối và tạo kiểu như một biểu tượng có thể nhấp
                onClick={() => setShowPassword(!showPassword)} // Dòng này chuyển đổi trạng thái showPassword khi phần tử span được nhấp
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
