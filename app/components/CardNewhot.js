"use client";
import React, { useEffect, useState } from "react";
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
        <h3 className="CardPopular">Sản Phẩm Nổi Bật</h3>
        <section className="Product_FLashSale">
          <div className="list-productPopular">
            {productPopular.map((item) => {
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
                          marginLeft: 25,
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
