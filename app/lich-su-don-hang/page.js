import React from 'react';
import styles from './orderHistory.module.css'; // Import CSS module

export default function OrderHistory() {
  return (
    <div className="container">
    <div className={styles.container}>
    <div className={styles.breadcrumb}>
      <a href="/">Trang chủ</a> / <span>Lịch sử đơn hàng</span>
    </div>
    
    <h1 className={styles.title}>Lịch sử đơn hàng</h1>
  
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Đơn hàng</th>
            <th>Ngày</th>
            <th>Tình trạng</th>
            <th>Tổng</th>
            <th>Thao tác khác</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><a href="#">#3374</a></td>
            <td>01-10-2024</td>
            <td><span className={`${styles.status} ${styles.processing}`}>Đang xử lý</span></td>
            <td>250,000đ</td>
            <td><button className={styles.button}>Xem</button></td>
          </tr>
          <tr>
            <td><a href="#">#3374</a></td>
            <td>01-10-2024</td>
            <td><span className={`${styles.status} ${styles.shipping}`}>Đang giao</span></td>
            <td>250,000đ</td>
            <td><button className={styles.button}>Xem</button></td>
          </tr>
          <tr>
            <td><a href="#">#3374</a></td>
            <td>01-10-2024</td>
            <td><span className={`${styles.status} ${styles.completed}`}>Đã giao</span></td>
            <td>250,000đ</td>
            <td><button className={styles.button}>Xem</button></td>
          </tr>
          <tr>
            <td><a href="#">#3374</a></td>
            <td>01-10-2024</td>
            <td><span className={`${styles.status} ${styles.canceled}`}>Đã hủy</span></td>
            <td>250,000đ</td>
            <td><button className={styles.button}>Xem</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  );
}
