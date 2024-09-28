"use client";
import Banner from "@/app/components/Banner/Banner";
import BannerDown from "@/app/components/BannerDown/BannerDown";
import BannerFlashSale from "@/app/components/BannerFlashSale/BannerFlashSale";
import Countdown from "@/app/components/CountDown/CountDown";
import React, { useEffect, useState } from "react";
// import "@/"
import Link from "next/link";
import axios from "axios";
export default function Main() {
  const [categories, setDatagories] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((res) => {
        setDatagories(res.data);
      })
      .catch((err) => {
        console.log("Fetching is Failed", err);
      });
  }, []);

  useEffect(() => {
    const slider = document.querySelector(".list_category");
    if (!slider) {
      console.error("Element .list_category not found");
      return;
    }

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      document.body.style.userSelect = "none"; // Prevent text selection
    });

    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
      document.body.style.userSelect = ""; // Restore text selection
    });

    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
      document.body.style.userSelect = ""; // Restore text selection
    });

    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scroll speed
      slider.scrollLeft = scrollLeft - walk;
    });
  });

  const targetDate = new Date("2024-10-31T00:00:00");
  const [productFlashSale, setProductFlashSale] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const FlashSale = res.data.filter(
          (item) => item.category === "FlashSale"
        );
        setProductFlashSale(FlashSale);
      })
      .catch((err) => {
        console.log("Fetching is Failed", err);
      });
  }, []);

  const [productPopular, setproductPopular] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const ProductPopular = res.data.filter(
          (item) => item.category === "popular"
        );
        setproductPopular(ProductPopular);
      })
      .catch((err) => {
        console.log("Fetching is Failed", err);
      });
  }, []);

  const [productnewhot, setproductNewhot] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const ProductNewhot = res.data.filter(
          (item) => item.category === "newhot"
        );
        setproductNewhot(ProductNewhot);
      })
      .catch((err) => {
        console.log("Fetching is Failed", err);
      });
  }, []);
  return (
    <div>
      <Banner />
      <div className="container">
        <section className="category">
          <h3 className="category_content">Danh mục sản phẩm</h3>
          <ul className="list_category">
            {categories &&
              categories.map((cate) => (
                <li key={cate.id}>
                  <Link href="" className="a">
                    <img src={cate.img} alt={cate.name} />
                    <h3>{cate.name}</h3>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
      {/* <CardFlashSale /> */}
      <div className="container">
        <section className="Flex-Content_CountDown">
          <h3 className="FlashSale">Flash Sale Còn Lại</h3>
          <Countdown targetDate={targetDate} />
        </section>
        <section className="Product_FLashSale">
          <BannerFlashSale />
          {/* <div className="flex-product__bestseller"> */}
          <div className="list-product">
            {productFlashSale.map((item) => {
              return (
                <>
                  <div className="card" key={item.id}>
                    <img
                      className="card-image"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="card-price">
                      <span className="old-price">
                        {item.price.toLocaleString()}đ
                      </span>
                      <span
                        className="new-price"
                        style={{
                          color: "#FED070",
                          fontWeight: 700,
                          fontSize: 35,
                          marginLeft: 10,
                        }}
                      >
                        {item.sale_price.toLocaleString()}đ
                      </span>
                    </div>
                    <h4 className="card-name">{item.name}</h4>
                    <button className="card-button">
                      <Link className="a" href="/productdetail">
                        Thêm vào giỏ hàng
                      </Link>
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {/* </div> */}
        </section>
      </div>
      {/* <CardPopular /> */}
      <div className="container">
        <h3 className="CardPopular">Sản Phẩm Nổi Bật</h3>
        <section className="Product_Popular">
          <div className="list-productPopular">
            {productPopular.map((item) => {
              return (
                <>
                  <div className="card_popular" key={item.id}>
                    <img
                      className="card-image_popular"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="card-price_popular">
                      <span className="old-price_popular">
                        {item.price.toLocaleString()}đ
                      </span>
                      <span
                        className="new-price_popular"
                        style={{
                          color: "#FED070",
                          fontWeight: 700,
                          fontSize: 35,
                          marginLeft: 25,
                        }}
                      >
                        {item.sale_price.toLocaleString()}đ
                      </span>
                    </div>
                    <h4 className="card-name_popular">{item.name}</h4>
                    <button className="card-button_popular">
                      <Link href="/productdetail" className="a">
                        Thêm vào giỏ hàng
                      </Link>
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {/* </div> */}
        </section>
      </div>
      {/* <CardNewhot /> */}
      <div className="container">
        <h3 className="CardNewHot">Sản Phẩm Nổi Bật</h3>
        <section className="Product_Newhot">
          <div className="list-productNewhot">
            {productnewhot.map((item) => {
              return (
                <>
                  <div className="card_newhot" key={item.id}>
                    <img
                      className="card-image_newhot"
                      src={item.img}
                      alt={item.name}
                    />
                    <div className="card-price_newhot">
                      <span className="old-price_newhot">
                        {item.price.toLocaleString()}đ
                      </span>
                      <span
                        className="new-price_newhot"
                        style={{
                          color: "#FED070",
                          fontWeight: 700,
                          fontSize: 35,
                          marginLeft: 25,
                        }}
                      >
                        {item.sale_price.toLocaleString()}đ
                      </span>
                    </div>
                    <h4 className="card-name_newhot">{item.name}</h4>
                    <button className="card-button_newhot">
                      <Link href="/productdetail">Thêm vào giỏ hàng</Link>
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {/* </div> */}
        </section>
      </div>
      <BannerDown />
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
    </div>
  );
}
