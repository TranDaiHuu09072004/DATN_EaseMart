import React from 'react';
import styles from './orderHistory.module.css'; // Import CSS module

export default function OrderHistory() {
  return (
    <div className="container mx-auto px-4">
      <div className={`${styles.container} flex flex-col`}>
        {/* Breadcrumb */}
        <div className={`${styles.breadcrumb} text-sm py-2`}>
          <a href="/" className="hover:underline">Trang chủ</a> / <span>Lịch sử đơn hàng</span>
        </div>

        {/* Title */}
        <h1 className={`${styles.title} text-xl md:text-2xl font-semibold text-center md:text-left py-4`}>Lịch sử đơn hàng</h1>

        {/* Table Container */}
        <div className={`${styles.tableContainer} overflow-x-auto`}>
          <table className={`${styles.table} min-w-full border-collapse`}>
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 border-b">Đơn hàng</th>
                <th className="px-4 py-2 border-b">Ngày</th>
                <th className="px-4 py-2 border-b">Tình trạng</th>
                <th className="px-4 py-2 border-b">Tổng</th>
                <th className="px-4 py-2 border-b">Thao tác khác</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b"><a href="#" className="text-blue-500 hover:underline">#3374</a></td>
                <td className="px-4 py-2 border-b">01-10-2024</td>
                <td className="px-4 py-2 border-b">
                  <span className={`${styles.status} ${styles.processing}`}>Đang xử lý</span>
                </td>
                <td className="px-4 py-2 border-b">250,000đ</td>
                <td className="px-4 py-2 border-b">
                  <button className={`${styles.button} px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600`}>Xem</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b"><a href="#" className="text-blue-500 hover:underline">#3375</a></td>
                <td className="px-4 py-2 border-b">01-10-2024</td>
                <td className="px-4 py-2 border-b">
                  <span className={`${styles.status} ${styles.shipping}`}>Đang giao</span>
                </td>
                <td className="px-4 py-2 border-b">250,000đ</td>
                <td className="px-4 py-2 border-b">
                  <button className={`${styles.button} px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600`}>Xem</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b"><a href="#" className="text-blue-500 hover:underline">#3376</a></td>
                <td className="px-4 py-2 border-b">01-10-2024</td>
                <td className="px-4 py-2 border-b">
                  <span className={`${styles.status} ${styles.completed}`}>Đã giao</span>
                </td>
                <td className="px-4 py-2 border-b">250,000đ</td>
                <td className="px-4 py-2 border-b">
                  <button className={`${styles.button} px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600`}>Xem</button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b"><a href="#" className="text-blue-500 hover:underline">#3377</a></td>
                <td className="px-4 py-2 border-b">01-10-2024</td>
                <td className="px-4 py-2 border-b">
                  <span className={`${styles.status} ${styles.canceled}`}>Đã hủy</span>
                </td>
                <td className="px-4 py-2 border-b">250,000đ</td>
                <td className="px-4 py-2 border-b">
                  <button className={`${styles.button} px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600`}>Xem</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
