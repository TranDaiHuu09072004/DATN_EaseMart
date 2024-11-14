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

export default function DangKy() {
  // Yup validation schema
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
      .required("Bạn phải nhập mật khẩu xác nhận"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/register",
        data
      );
      console.log(response.data);
      toast.success("Đăng ký thành công!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTimeout(() => {
        window.location.href = "/dangnhap";
      }, 2000);
    } catch (error) {
      console.error(
        "Đăng ký thất bại:",
        error.response ? error.response.data : error.message
      );
      toast.error("Đăng ký thất bại!", {
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
            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập mật khẩu"
              {...register("password")}
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}

            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập lại mật khẩu"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className={styles.error}>{errors.confirmPassword.message}</p>
            )}

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
            <button className={styles.facebookBtn}>Facebook</button>
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
