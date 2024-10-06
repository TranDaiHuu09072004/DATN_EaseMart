import React from 'react';
import styles from './khuyenmai.module.css'; // Ensure the path and filename are correct

export default function Promotion() {
  return (
    <div className="container">
    <div className={styles.container}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="/">Trang chủ</a> / <span>Khuyến mãi</span>
      </div>

      {/* Title */}
      <h1 className={styles.title}>
        Khuyến Mãi Đặc Biệt Tại EaseMart: Mua Sắm Tiết Kiệm Hơn Bao Giờ Hết!
      </h1>

      {/* Main Image */}
      <div className={styles.imageContainer}>
        <img src="/assets/img/image 263.svg" alt="Khuyến mãi" className={styles.mainImage} />
      </div>

      {/* Description */}
      <div className={styles.description}>
        <p>
          EaseMart - cửa hàng tiện lợi uy tín của bạn, luôn đồng hành cùng bạn trong việc tiết kiệm thời gian và chi phí. Để tri ân khách hàng, chúng tôi xin gửi đến bạn chương trình khuyến mãi đặc biệt với nhiều ưu đãi hấp dẫn.
        </p>

        {/* Promotion List */}
        <ul className={styles.promotionList}>
          <li>
            <strong>1. Giảm Giá Lên Đến 50% Cho Hàng Ngàn Sản Phẩm</strong><br />
            Từ ngay bây giờ đến cuối tháng, bạn sẽ được giảm giá lên đến 50% cho các mặt hàng thiết yếu như thực phẩm, đồ uống, và đồ dùng gia đình.
          </li>
          <li>
            <strong>2. Mua 1 Tặng 1 Cho Sản Phẩm Hot Nhất</strong><br />
            Chỉ có tại EaseMart, chương trình Mua 1 Tặng 1 cho các sản phẩm hot nhất hiện nay.
          </li>
          <li>
            <strong>3. Miễn Phí Giao Hàng Cho Đơn Hàng Từ 300,000 VND</strong><br />
            Bạn không cần phải lo lắng về chi phí giao hàng khi mua sắm tại EaseMart. Với đơn hàng từ 300,000 VND, bạn sẽ được miễn phí giao hàng.
          </li>
          <li>
            <strong>4. Ưu Đãi Đặc Biệt Dành Cho Thành Viên</strong><br />
            Thành viên thân thiết của EaseMart sẽ nhận ngay phiếu giảm giá 10% cho đơn hàng đầu tiên trong ngày hôm nay!
          </li>
        </ul>

        {/* Closing Text */}
        <p>
          Còn chần chừ gì nữa? Hãy tham gia ngay cùng chúng tôi để tận hưởng những ưu đãi khổng lồ ngay hôm nay!
        </p>
      </div>
    </div>
    </div>
  );
}
