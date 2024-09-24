import "@/public/css/pr_product.globals.css";
export default function Pr_product() {
  return (
    <div className="container">
      <ul className="product-pr">
        <li>
          <img src="assets/img/pr-product1.svg" alt="" />
          <div className="flex-pr">
            <h5>Giá tốt nhất & Ưu đãi</h5>
            <span>Mua từ 300K trở lên</span>
          </div>
        </li>
        <li>
          <img src="assets/img/pr-product2.svg" alt="" />
          <div className="flex-pr">
            <h5>Giao hàng miễn phí</h5>
            <span>Hoạt động từ 24/7</span>
          </div>
        </li>
        <li>
          <img src="assets/img/pr-product3.svg" alt="" />
          <div className="flex-pr">
            <h5>Ưu đãi mỗi ngày</h5>
            <span>Khi bạn đăng nhập</span>
          </div>
        </li>
        <li>
          <img src="assets/img/pr-product4.svg" alt="" />
          <div className="flex-pr">
            <h5>Mặt hàng phong phú</h5>
            <span>Giảm giá lớn</span>
          </div>
        </li>
        <li>
          <img src="assets/img/pr-product5.svg" alt="" />
          <div className="flex-pr">
            <h5>Hoàn trả dễ dàng</h5>
            <span>Trong vòng 30 ngày</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
