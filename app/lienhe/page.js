import React from 'react';
import styles from './lienhe.module.css';
import Link from 'next/link';

export default function LienHe() {
  return (
    <div className={styles.container}>
      <div className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>Trò chuyện với chúng tôi</h2>
          <p>
            Câu hỏi, đề xuất hay bình luận. Chỉ cần điền vào form và chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất!
          </p>
          <ul>
            <li>📍 Tp. HCM, quận 12, phường Tân Chánh Hiệp, Công viên phần mềm Quang Trung, Tòa T</li>
            <li>📞 +84 976 xxxxxx</li>
            <li>📧 vietbeauty@gmail.com</li>
          </ul>
        </div>

        <div className={styles.contactForm}>
          <form>
            <div className={styles.nameFields}>
              <input type="text" placeholder="Họ" required />
              <input type="text" placeholder="Tên" required />
            </div>
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Số điện thoại" required />
            <textarea placeholder="Lời nhắn" rows="4" required></textarea>
            <button type="submit">Gửi</button>
          </form>
        </div>
      </div>
    </div>
  );
}
