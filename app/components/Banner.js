import Link from "next/link";

export default function Banner() {
  return (
    <div>
      <div className="bg">
        <Link href="#" className="Link">
          <img src="assets/img/Banner-slider.png" alt="" />
        </Link>
      </div>
      <div className="container">
        <section className="list_category">
          <h3 className="category_content">Danh mục sản phẩm</h3>
        </section>
      </div>
    </div>
  );
}
