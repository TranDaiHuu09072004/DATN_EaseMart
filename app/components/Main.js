import React from "react";
import Banner from "@/app/components/Banner";
import CategoryList from "@/app/components/CategoryList";
import CardFlashSale from "@/app/components/CardFlashSale";
import CardPopular from "@/app/components/CardPopular";
import CardNewhot from "@/app/components/CardNewhot";
import BannerDown from "@/app/components/BannerDown";
import Pr_product from "@/app/components/Pr_Product";
export default function Main() {
  return (
    <div>
      <Banner />
      <CategoryList />
      <CardFlashSale />
      <CardPopular />
      <CardNewhot />
      <BannerDown />
      <Pr_product />
    </div>
  );
}
