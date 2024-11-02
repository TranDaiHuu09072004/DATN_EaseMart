"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./dangnhap.module.css";
import * as Yup from "yup"; // Import Yup for validation
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver for Yup integration
import Swal from "sweetalert2";

// Define validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email hoặc password đã tồn tại")
    .required("Email là bắt buộc"),
  password: Yup.string()
    .required("Mật khẩu là bắt buộc")
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export default function DangNhap() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    // Kiểm tra dữ liệu đã lưu trong localStorage cho tính năng "Ghi nhớ mật khẩu"
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const generateToken = () => {
    return Math.random().toString(36).slice(2); // Tạo token ngẫu nhiên
  };

  const handleLogin = async (data) => {
    const { email, password } = data; // Use data from form
    try {
      const response = await fetch("http://localhost:3000/users");
      if (!response.ok) throw new Error("Network response was not ok");

      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setError("");
        const token = generateToken(); // Tạo token ngẫu nhiên
        console.log("Token:", token);
        Swal.fire("Đăng nhập thành công!", "", "success");

        if (rememberMe) {
          localStorage.setItem(
            "user",
            JSON.stringify({ email, token, username: user.name })
          );
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("token"); // Remove token if not remembering
        }

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        Swal.fire("Đăng nhập thất bại!", "", "error");
      }
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <div className={styles.logo}>
            <h1>EaseMart</h1>
            <p>Your Daily Essentials, Delivered</p>
          </div>
          <h2 className={styles.heading}>Đăng nhập hội viên</h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Nhập Email"
              {...register("email")}
              required
            />
            {errors.email && (
              <p className={styles.error}>{errors.email.message}</p>
            )}{" "}
            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập mật khẩu"
              {...register("password")}
              required
              autoComplete="current-password"
            />
            {errors.password && (
              <p className={styles.error}>{errors.password.message}</p>
            )}
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="rememberMe">Ghi nhớ mật khẩu</label>
            </div>
            <button type="submit" className={styles.loginBtn}>
              Đăng nhập
            </button>
          </form>
          <p className={styles.forgotPassword}>
            <Link href="#">Quên mật khẩu?</Link>
          </p>
          <div className={styles.socialLogin}>
            <p>Hoặc</p>
            <button className={`${styles.socialButton} ${styles.facebookBtn}`}>
              Facebook
            </button>
            <button className={`${styles.socialButton} ${styles.googleBtn}`}>
              Google
            </button>
          </div>
          <p className={styles.linkContainer}>
            Chưa có tài khoản vui lòng <Link href="/dangky">đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
