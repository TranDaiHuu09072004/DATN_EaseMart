"use client";
import React from 'react';
import styles from './lienhe.module.css'; // Import CSS module

export default function LienHe() {
  return (
    <div className="container mx-auto px-4">
      <div className={`${styles.container} flex flex-col`}>
        {/* Breadcrumb */}
        <div className={`${styles.breadcrumbContainer} py-2`}>
          <div className={`${styles.breadcrumb} text-sm`}>
            <a href="/" className="hover:underline">Trang chủ</a> / <span>Liên Hệ</span>
          </div>
        </div>

        {/* Banner */}
        <div className={`${styles.banner} relative h-48 md:h-64 lg:h-72`}>
          <img
            src="/assets/img/Group 3894.png"
            alt="Liên hệ chúng tôi"
            className={`${styles.bannerImage} w-full h-full object-cover`}
          />
          <div className={`${styles.bannerText} absolute inset-0 flex items-center justify-center`}>
            <h1 className="text-white text-2xl md:text-3xl font-semibold">Liên hệ chúng tôi</h1>
          </div>
        </div>

        {/* Contact Section */}
        <div className={`${styles.contactSection} flex flex-col md:flex-row bg-white max-w-4xl w-full mx-auto p-4 md:p-8 gap-6`}>
          {/* Contact Info */}
          <div className={`${styles.contactInfo} flex-1 space-y-4`}>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800">Trò chuyện với chúng tôi</h2>
            <p className="text-gray-600">
              Câu hỏi, đề xuất hay bình luận. Chỉ cần điền vào form và chúng tôi sẽ liên hệ với bạn trong thời gian ngắn nhất!
            </p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-green-500 mr-2"></i>
                Tp. HCM, quận 12, phường Tân Chánh Hiệp, Công viên phần mềm Quang Trung, Tòa T
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-green-500 mr-2"></i> +84 976 xxxxxx
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-green-500 mr-2"></i> vietbeauty@gmail.com
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className={`${styles.contactForm} flex-1 bg-gray-50 p-4 rounded-lg shadow-md`}>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Họ"
                  required
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Tên"
                  required
                  className="w-full md:w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                required
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Lời nhắn"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                Gửi
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
