import React from "react";
import styles from "./banner_flashsale.module.css";
import Link from "next/link";
export default function BannerFlashSale() {
  return (
    <div>
      <div className={styles.banner_bestseller}>
        <Link href="#" className={styles.Link}>
          <img src="assets/img/Banner-best__seller.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
