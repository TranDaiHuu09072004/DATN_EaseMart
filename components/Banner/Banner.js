"use client";
import Link from "next/link";
import styles from "./banner.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const cx = classNames.bind(styles);

export default function Banner() {
  const settings = {
    dots: true, // Hiển thị các chấm điều hướng
    infinite: true, // Cuộn vô hạn
    speed: 500, // Tốc độ chuyển đổi slide (ms)
    slidesToShow: 1, // Số lượng slide hiển thị cùng lúc
    slidesToScroll: 1, // Số lượng slide cuộn khi chuyển
    autoplay: true, // Tự động cuộn
    autoplaySpeed: 3000, // Tốc độ tự động cuộn (ms)
  };
  const [isScroll, setIsScroll] = useState(false);
  const boxScroll = useRef(null);
  const btnLeft = useRef(null);
  const btnRight = useRef(null);

  return (
    <div>
      <div
        className={cx("max-w-screen-xl", "mx-auto")}
        style={{ marginTop: "15px" }}
      >
        <div className={cx("bg", "flex", "gap-1")}>
          <div
            className={cx(
              "main",
              "max-h-[370px]",
              "basis-full",
              "xl:basis-4/5"
            )}
          >
            <Slider {...settings}>
              <img src="assets/img/banner/3.png" alt="" />
              <img src="assets/img/banner/slider_banner2.svg" alt="" />
              <img src="assets/img/banner/slider_banner3.svg" alt="" />
              {/* <img src="assets/img/Banner-slider.png" alt="" />
              <img src="assets/img/Banner-slider.png" alt="" /> */}
            </Slider>
          </div>

          <Link
            href="#"
            className={cx("link", "sub", "xl:flex", "hidden", "basis-1/5")}
          >
            <img src="assets/img/banner/1.png" alt="" />
            <img src="assets/img/banner/2.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
