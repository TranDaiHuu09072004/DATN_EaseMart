import React from 'react';
import styles from './khuyenmai.module.css'; // Import CSS module
import Link from 'next/link';

export default function KhuyenMai() {
  return (
    <div className={styles.container}>
      <div className={styles.promoContainer}>
      <ul className={styles.pr_detail}>
          <li>
            <img
              src="assets/img/icon_pr--detail.svg"
              alt=""
              width={30}
              height={30}
            />
          </li>
          <li>
            <Link href="/" className="a">
              Trang Chủ
            </Link>
          </li>
          <li>
            <i class="fa-solid fa-chevron-right"></i>
          </li>
          <li>
            <span className="name_productdetail">Khuyến Mãi</span>
          </li>
        </ul>
        <div className={styles.banner}>
          <img src="assets/img/image 263.svg" alt="Banner Khuyến Mãi" className={styles.bannerImg} />
        </div>
        <div className={styles.promoContent}>
          <h1>Khuyến Mãi Đặc Biệt Tại EaseMart: Mua Sắm Tiết Kiệm Hơn Bao Giờ Hết!</h1>
          <p>EaseMart - cửa hàng tiện lợi uy tín, chuyên cung cấp sản phẩm chất lượng cùng bạn trong việc tiết kiệm thời gian và chi phí. Để tri ân khách hàng, EaseMart mang đến chương trình khuyến mãi đặc biệt với nhiều ưu đãi hấp dẫn.</p>

          <h2>1. Giảm Giá Lên Đến 50% Cho Hàng Ngàn Sản Phẩm</h2>
          <p>Trong ngày này bắt đầu diễn ra, bạn sẽ tiết kiệm từ 50% cho các sản phẩm hot nhất hiện nay. Đừng bỏ lỡ!</p>

          <h2>2. Mua 1 Tặng 1 Các Sản Phẩm Hot Nhất</h2>
          <p>Nhận ưu đãi đặc biệt khi mua 1 sản phẩm sẽ nhận ngay 1 sản phẩm tương tự miễn phí. Chỉ áp dụng cho số lượng có hạn.</p>

          <h2>3. Miễn Phí Giao Hàng Đơn Hàng Từ 300.000 VND</h2>
          <p>Giao hàng tận nơi miễn phí cho các đơn hàng từ 300.000 VND. Đặt hàng ngay!</p>

          <h2>Tại Sao Nên Chọn EaseMart?</h2>
          <ul>
            <li>Sản phẩm chất lượng từ các thương hiệu uy tín.</li>
            <li>Giá cả cạnh tranh và nhiều ưu đãi.</li>
            <li>Đội ngũ hỗ trợ khách hàng chuyên nghiệp.</li>
            <li>Giao hàng nhanh chóng và tiện lợi.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
