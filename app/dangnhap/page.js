"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./dangnhap.module.css";

export default function DangNhap() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

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

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/register");
      if (!response.ok) throw new Error("Network response was not ok");

      const users = await response.json();
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setError("");
        alert("Đăng nhập thành công!");

        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }

        // Lưu tên người dùng vào localStorage
        localStorage.setItem("username", user.name);

        window.location.href = "/"; // Chuyển hướng đến trang chủ
      } else {
        setError("Email hoặc mật khẩu không đúng. Vui lòng thử lại.");
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
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Nhập Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            {error && <p className={styles.error}>{error}</p>}

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
