import React from 'react';
import Link from 'next/link';
import styles from './dangnhap.module.css'; // Import CSS module

export default function DangNhap() {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logo}>
          <h1>EaseMart</h1>
          <p>Your Daily Essentials, Delivered</p>
        </div>
        <h2 className={styles.heading}>Đăng nhập hội viên</h2>
        <form>
          <input type="email" className={styles.inputField} placeholder="Nhập Email" required />
          <input type="password" className={styles.inputField} placeholder="Nhập mật khẩu" required />
          <button type="submit" className={styles.loginBtn}>Đăng nhập</button>
        </form>
        <p className={styles.forgotPassword}><Link href="#">Quên mật khẩu?</Link></p>
        <div className={styles.socialLogin}>
          <p>Hoặc</p>
          <button className={styles.facebookBtn}>Facebook</button>
          <button className={styles.googleBtn}>Google</button>
        </div>
        <p className={styles.linkContainer}>
          Chưa có tài khoản vui lòng <Link href="/dangky">đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}
