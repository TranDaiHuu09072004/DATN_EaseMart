"use client";
import React from 'react';
import styles from './lienhe.module.css'; // Import CSS module

export default function LienHe() {
  return (
    <div className="container">
    <div className={styles.container}>
        {/* Breadcrumb - Đường dẫn */}
        <div className={styles.breadcrumbContainer}>
        <div className={styles.breadcrumb}>
          <a href="/">Trang chủ</a> / <span>Liên Hệ</span>
        </div>
      </div>
      {/* Banner */}
      <div className={styles.banner}>
        <img src="/assets/img/Group 3894.png" alt="Liên hệ chúng tôi" className={styles.bannerImage} />
        <div className={styles.bannerText}>
          <h1>Liên hệ chúng tôi</h1>
        </div>
      </div>

      {/* Phần liên hệ */}
      <div className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Trò chuyện với chúng tôi</h2>
          <p>
            Câu hỏi, đề xuất hay bình luận. Chỉ cần điền vào form và chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất!
          </p>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Tp. HCM, quận 12, phường Tân Chánh Hiệp, Công viên phần mềm Quang Trung, Tòa T</li>
            <li><i className="fas fa-phone"></i> +84 976 xxxxxx</li>
            <li><i className="fas fa-envelope"></i> vietbeauty@gmail.com</li>
          </ul>
        </div>

        {/* Phần form liên hệ */}
        <div className={styles.contactForm}>
          <form>
            <div className={styles.nameFields}>
              
            </div>
            <input type="text" placeholder="Họ" required />
              <input type="text" placeholder="Tên" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Số điện thoại" required />
            <textarea placeholder="Lời nhắn" rows="4"></textarea>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}
