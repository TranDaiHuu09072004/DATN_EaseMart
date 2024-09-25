"use client";
import React, { useEffect, useState } from "react";
import "@/public/css/CardFlashSale.globals.css";
import BannerFlashSale from "@/app/components/BannerFlashSale";
import Countdown from "@/app/components/CountDown";
import axios from "axios";
export default function CardFlashSale() {
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
  return (
    <div>
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
                    <button className="card-button">Thêm vào giỏ hàng</button>
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
