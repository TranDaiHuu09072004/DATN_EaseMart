// CategoryList.js
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function CategoryList() {
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
  return (
    <div>
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
    </div>
  );
}
