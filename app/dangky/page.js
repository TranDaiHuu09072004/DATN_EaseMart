"use client";
import React from "react";
import Link from "next/link";
import styles from "./dangky.module.css";
import axios from "axios";
import { useState } from "react";

export default function DangKy() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/register",
        {
          name,
          email,
          password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Đăng ký thất bại:", error.response.data);
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
          <h2 className={styles.heading}>Đăng ký hội viên</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className={styles.inputField}
              placeholder="Nhập họ và tên"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className={styles.inputField}
              placeholder="Nhập email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập mật khẩu"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              className={styles.inputField}
              placeholder="Nhập lại mật khẩu"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
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
