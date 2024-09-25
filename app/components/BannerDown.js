import Link from "next/link";
import "@/public/css/banner_down.globals.css";
export default function BannerDown() {
  return (
    <div>
      <div className="banner-down">
        <Link href="#" className="Link">
          <img src="assets/img/Banner_Down-img.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
