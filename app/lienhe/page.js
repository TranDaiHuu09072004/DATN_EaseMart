"use client";
import React, { useState } from "react";
import styles from "./lienhe.module.css"; // Import CSS module
import Swal from "sweetalert2"; // Import SweetAlert2

export default function LienHe() {
  // State để lưu thông tin form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Hàm xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://trandainghia.id.vn/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Use SweetAlert2 for success message
        Swal.fire({
          icon: "success",
          title: "Gửi thành công!",
          confirmButtonText: "OK",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        // Use SweetAlert2 for error message
        Swal.fire({
          icon: "error",
          title: "Gửi thất bại",
          text: "Vui lòng thử lại.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Lỗi gửi dữ liệu:", error);
      // Use SweetAlert2 for catch error message
      Swal.fire({
        icon: "error",
        title: "Đã xảy ra lỗi",
        text: "Vui lòng thử lại.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="container">
      <div className={styles.container}>
        {/* Breadcrumb - Đường dẫn */}
        <div className={styles.breadcrumbContainer}></div>

        {/* Banner */}
        <div className={styles.banner}>
          <img
            src="/assets/img/Group 3894.png"
            alt="Liên hệ chúng tôi"
            className={styles.bannerImage}
          />
          <div className={styles.bannerText}>
            <h1>Liên hệ chúng tôi</h1>
          </div>
        </div>

        {/* Phần liên hệ */}
        <div className={styles.contactSection}>
          <div className={styles.contactInfo}>
            <h2>Trò chuyện với chúng tôi</h2>
            <p>
              Câu hỏi, đề xuất hay bình luận. Chỉ cần điền vào form và chúng tôi
              sẽ liên hệ với bạn trong thời gian ngắn nhất!
            </p>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i> Tp. HCM, quận 12,
                phường Tân Chánh Hiệp, Công viên phần mềm Quang Trung, Tòa T
              </li>
              <li>
                <i className="fas fa-phone"></i> +84 976 xxxxxx
              </li>
              <li>
                <i className="fas fa-envelope"></i> vietbeauty@gmail.com
              </li>
            </ul>
          </div>

          {/* Phần form liên hệ */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Tên"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Số điện thoại"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Lời nhắn"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit">Gửi</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
