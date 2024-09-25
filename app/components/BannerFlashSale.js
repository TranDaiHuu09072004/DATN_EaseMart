import React from "react";
import "@/public/css/banner_flashsale.globals.css";
import Link from "next/link";
export default function BannerFlashSale() {
  return (
    <div>
      <div className="banner-bestseller">
        <Link href="#" className="Link">
          <img src="assets/img/Banner-best__seller.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
