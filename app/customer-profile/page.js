import React from "react";
import styles from "./customer.module.css";
export default function CustomerProfile() {
  return (
    <div>
      <div className="container">
        <div className={styles.update_information}>
          <div className={styles.information}>
            <h3 className={styles.title_information}>THÔNG TIN HỘI VIÊN</h3>
            <form action="">
              <div className={styles.fullname_input}>
                <h5>
                  Họ tên <span className={styles.red}>*</span>
                </h5>
                <input
                  type="text"
                  className={styles.ip_fullname}
                  placeholder="Nguyen Van A"
                />
              </div>
              <div className={styles.email_input}>
                <h5>
                  Email <span className={styles.red}>*</span>
                </h5>
                <input
                  type="text"
                  className={styles.ip_email}
                  placeholder="nguyenvana@gmail.com"
                />
              </div>
              <div className={styles.phone_input}>
                <h5>
                  Số điện thoại <span className={styles.red}>*</span>
                </h5>
                <input
                  type="number"
                  className={styles.ip_phone}
                  placeholder="0392706777"
                />
              </div>
              <div className={styles.birthday_input}>
                <h5>
                  Năm sinh <span className={styles.red}>*</span>
                </h5>
                <input
                  type="number"
                  className={styles.ip_birthday}
                  placeholder="09/07/1987"
                />
              </div>
              <button className={styles.update}>Cập Nhật</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
