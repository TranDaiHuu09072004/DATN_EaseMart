import Link from "next/link";
import styles from "./banner_down.module.css";
export default function BannerDown() {
  return (
    <div>
      <div className={styles.banner_down}>
        <Link href="#" className={styles.Link}>
          <img src="assets/img/Banner_Down-img.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
