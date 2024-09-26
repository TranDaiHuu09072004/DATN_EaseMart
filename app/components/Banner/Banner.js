import Link from "next/link";
import styles from "./banner.module.css";
export default function Banner() {
  return (
    <div>
      <div className={styles.bg}>
        <Link href="#" className={styles.Link}>
          <img src="assets/img/Banner-slider.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
