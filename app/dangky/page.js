import React from "react";
import Link from "next/link";
import styles from "./dangky.module.css";

export default function DangKy() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <h1>EaseMart</h1>
          <p>Your Daily Essentials, Delivered</p>
        </div>
        <h2 className={styles.heading}>Đăng ký hội viên</h2>
        <form>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Nhập họ và tên"
            required
          />
          <input
            type="email"
            className={styles.inputField}
            placeholder="Nhập email"
            required
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Nhập mật khẩu"
            required
          />
          <input
            type="password"
            className={styles.inputField}
            placeholder="Nhập lại mật khẩu"
            required
          />
          <p className={styles.formText}>
            Bằng việc chọn vào Đăng Ký, bạn đồng ý với các điều kiện áp dụng của
            EaseMart để trở thành hội viên của chúng tôi.
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
        <p className={styles.linkContainer}>Đã có tài khoản? <Link href="/dangnhap" className={styles.link}>Đăng nhập ngay</Link></p> 
      </div>
    </div>
  );
}
