"use client";
import React, { useEffect, useState } from "react";
import "@/public/css/CardPopular.globals.css";
import Link from "next/link";
import axios from "axios";
export default function CardPopular() {
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
  return (
    <div>
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
                      <Link href="" className="a">
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
    </div>
  );
}
