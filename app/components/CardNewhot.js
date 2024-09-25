"use client";
import React, { useEffect, useState } from "react";
import "@/public/css/CardNewhot.globals.css";
import Link from "next/link";
import axios from "axios";
export default function CardNewhot() {
  const [productPopular, setproductPopular] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        const ProductPopular = res.data.filter(
          (item) => item.category === "newhot"
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
        <h3 className="CardNewHot">Sản Phẩm Nổi Bật</h3>
        <section className="Product_Newhot">
          <div className="list-productNewhot">
            {productPopular.map((item) => {
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
                      <Link href="">Thêm vào giỏ hàng</Link>
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
