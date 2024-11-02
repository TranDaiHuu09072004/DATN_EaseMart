import React from 'react';
import styles from './vechungtoi.module.css'; // Import CSS module

export default function VeChungToi() {
  return (
    <div className="container">
      <div className={styles.container}>
        {/* Breadcrumb - Đường dẫn */}
        <div className={styles.breadcrumb}>
          <a href="/">Trang chủ</a> / <span>Về chúng tôi</span>
        </div>

        {/* Phần giới thiệu */}
        <div className={styles.introSection}>
          <div className={styles.imageContainer}>
            <img src="/assets/img/vechungtoi1.png" alt="Giới thiệu" className={styles.mainImage} />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Chào mừng đến với EaseMart</h1>
            <p className={styles.description}>
              EaseMart là chuỗi cửa hàng tiện lợi, chuyên cung cấp các sản phẩm hàng tiêu dùng thiết yếu cho cuộc sống hàng ngày với giá cả hợp lý. Với phương châm "Tiện lợi mỗi ngày", chúng tôi mong muốn đem đến trải nghiệm mua sắm tiện lợi, nhanh chóng và chất lượng cho khách hàng.
            </p>
            <div className={styles.imageGroup}>
              <img src="/assets/img/vechungtoi2.png" alt="Image 2" className={styles.subImage} />
              <img src="/assets/img/vechungtoi3.png" alt="Image 3" className={styles.subImage} />
              <img src="/assets/img/vechungtoi4.png" alt="Image 4" className={styles.subImage} />
            </div>
          </div>
        </div>

        {/* Phần dịch vụ */}
        <div className={styles.servicesSection}>
          <h2 className={styles.subHeading}>Chúng tôi cung cấp những gì?</h2>
          <div className={styles.services}>
            <div className={styles.serviceCard}>
              <img src="/assets/img/Group 5.png" alt="Giá tốt nhất và ưu đãi" className={styles.icon} />
              <h3 className={styles.serviceTitle}>Giá tốt nhất và ưu đãi</h3>
              <p className={styles.serviceDescription}>
                EaseMart luôn cung cấp cho khách hàng mức giá cạnh tranh nhất trên thị trường.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/assets/img/Group 6.png" alt="Sự đa dạng" className={styles.icon} />
              <h3 className={styles.serviceTitle}>Sự đa dạng</h3>
              <p className={styles.serviceDescription}>
                EaseMart cung cấp đầy đủ các mặt hàng thiết yếu cho cuộc sống hằng ngày.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/assets/img/Group 7.png" alt="Giao hàng miễn phí" className={styles.icon} />
              <h3 className={styles.serviceTitle}>Giao hàng miễn phí</h3>
              <p className={styles.serviceDescription}>
                Giao hàng tận nơi nhanh chóng , cung cấp đầy đủ các mặt hàng thiết yếu cho cuộc sống hằng ngày..
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/assets/img/Group 8.png" alt="Trả hàng dễ dàng" className={styles.icon} />
              <h3 className={styles.serviceTitle}>Trả hàng dễ dàng</h3>
              <p className={styles.serviceDescription}>
                EaseMart hỗ trợ trả hàng miễn phí cho khách hàng.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/assets/img/icon-note__money.png" alt="100% hài lòng" className={styles.icon} />
              <h3 className={styles.serviceTitle}>100% hài lòng</h3>
              <p className={styles.serviceDescription}>
                Chúng tôi cam kết khách hàng sẽ luôn hài lòng.
              </p>
            </div>
            <div className={styles.serviceCard}>
              <img src="/assets/img/icon-sell 1.png" alt="Chất lượng đảm bảo" className={styles.icon} />
              <h3 className={styles.serviceTitle}>Chất lượng đảm bảo</h3>
              <p className={styles.serviceDescription}>
                Chúng tôi cung cấp sản phẩm chất lượng cao.
              </p>
            </div>
          </div>
        </div>

        {/* Hiệu suất */}
        <div className={styles.performanceSection}>
          <div className={styles.performanceImage}>
            <img src="/assets/img/about-5 1.png" alt="Hiệu suất" />
          </div>
          <div className={styles.performanceText}>
            <h2>Hiệu suất của chúng tôi</h2>
            <p>
              Đối tác của bạn cho giải pháp thương mại điện tử EaseMart tự hào là đối tác tin cậy cho các giải pháp thương mại điện tử, giúp bạn đặt hàng một cách hiệu quả và nhanh chóng. Chúng tôi luôn nỗ lực cải thiện hệ thống để mang đến trải nghiệm tốt nhất cho khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
