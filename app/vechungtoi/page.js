import React from 'react';
import styles from './vechungtoi.module.css'; // Import CSS module

export default function VeChungToi() {
  return (
    <div className="container mx-auto px-4">
      <div className={`${styles.container} flex flex-col`}>
        
        {/* Breadcrumb */}
        <div className={`${styles.breadcrumb} text-sm py-2`}>
          <a href="/" className="hover:underline">Trang chủ</a> / <span>Về chúng tôi</span>
        </div>

        {/* Introduction Section */}
        <div className={`${styles.introSection} flex flex-col md:flex-row gap-8 py-8`}>
          <div className={`${styles.imageContainer} w-full md:w-1/2 flex justify-center`}>
            <img
              src="/assets/img/vechungtoi1.png"
              alt="Giới thiệu"
              className={`${styles.mainImage} w-full md:w-4/5 object-cover`}
            />
          </div>
          <div className={`${styles.textContainer} w-full md:w-1/2 space-y-4`}>
            <h1 className={`${styles.title} text-xl md:text-2xl lg:text-3xl font-semibold`}>
              Chào mừng đến với EaseMart
            </h1>
            <p className={`${styles.description} text-gray-700`}>
              EaseMart là chuỗi cửa hàng tiện lợi, chuyên cung cấp các sản phẩm hàng tiêu dùng thiết yếu cho cuộc sống hàng ngày với giá cả hợp lý. Với phương châm "Tiện lợi mỗi ngày", chúng tôi mong muốn đem đến trải nghiệm mua sắm tiện lợi, nhanh chóng và chất lượng cho khách hàng.
            </p>
            <div className={`${styles.imageGroup} flex gap-4`}>
              <img src="/assets/img/vechungtoi2.png" alt="Image 2" className={`${styles.subImage} w-1/3`} />
              <img src="/assets/img/vechungtoi3.png" alt="Image 3" className={`${styles.subImage} w-1/3`} />
              <img src="/assets/img/vechungtoi4.png" alt="Image 4" className={`${styles.subImage} w-1/3`} />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className={`${styles.servicesSection} py-8`}>
          <h2 className={`${styles.subHeading} text-center text-xl md:text-2xl font-semibold`}>
            Chúng tôi cung cấp những gì?
          </h2>
          <div className={`${styles.services} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8`}>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/Group 5.png" alt="Giá tốt nhất và ưu đãi" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>Giá tốt nhất và ưu đãi</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                EaseMart luôn cung cấp cho khách hàng mức giá cạnh tranh nhất trên thị trường.
              </p>
            </div>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/Group 6.png" alt="Sự đa dạng" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>Sự đa dạng</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                EaseMart cung cấp đầy đủ các mặt hàng thiết yếu cho cuộc sống hằng ngày.
              </p>
            </div>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/Group 7.png" alt="Giao hàng miễn phí" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>Giao hàng miễn phí</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                Giao hàng tận nơi nhanh chóng , cung cấp đầy đủ các mặt hàng thiết yếu cho cuộc sống hằng ngày..
              </p>
            </div>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/Group 8.png" alt="Trả hàng dễ dàng" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>Trả hàng dễ dàng</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                EaseMart hỗ trợ trả hàng miễn phí cho khách hàng.
              </p>
            </div>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/icon-note__money.png" alt="100% hài lòng" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>100% hài lòng</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                Chúng tôi cam kết khách hàng sẽ luôn hài lòng.
              </p>
            </div>
            <div className={`${styles.serviceCard} p-4 border rounded-lg shadow-md text-center`}>
              <img src="/assets/img/icon-sell 1.png" alt="Chất lượng đảm bảo" className={`${styles.icon} w-16 h-16 mx-auto mb-4`} />
              <h3 className={`${styles.serviceTitle} text-lg font-semibold`}>Chất lượng đảm bảo</h3>
              <p className={`${styles.serviceDescription} text-gray-600`}>
                Chúng tôi cung cấp sản phẩm chất lượng cao.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Section */}
        <div className={`${styles.performanceSection} flex flex-col lg:flex-row items-center gap-8 py-8`}>
          <div className={`${styles.performanceImage} w-full lg:w-1/2 flex justify-center`}>
            <img src="/assets/img/about-5 1.png" alt="Hiệu suất" className="w-full lg:w-4/5 object-cover" />
          </div>
          <div className={`${styles.performanceText} w-full lg:w-1/2 space-y-4`}>
            <h2 className="text-xl md:text-2xl font-semibold">Hiệu suất của chúng tôi</h2>
            <p className="text-gray-700">
              Đối tác của bạn cho giải pháp thương mại điện tử EaseMart tự hào là đối tác tin cậy cho các giải pháp thương mại điện tử, giúp bạn đặt hàng một cách hiệu quả và nhanh chóng. Chúng tôi luôn nỗ lực cải thiện hệ thống để mang đến trải nghiệm tốt nhất cho khách hàng.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
