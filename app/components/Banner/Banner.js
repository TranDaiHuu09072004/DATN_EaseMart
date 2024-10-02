import Link from "next/link";
import styles from "./banner.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
export default function Banner() {
  return (
    <div>
      <div className={cx("container")} style={{ marginTop: "15px" }}>
        <div className={cx("bg")}>
          <Link href="#" className={cx("link", "main")}>
            <img src="assets/img/Banner-slider.png" alt="" />
          </Link>
          <Link href="#" className={cx("link", "sub")}>
            <img src="assets/img/banner/1.png" alt="" />
            <img src="assets/img/banner/2.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
