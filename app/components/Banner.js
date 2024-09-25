import Link from "next/link";
import "@/public/css/banner.globals.css";
export default function Banner() {
  return (
    <div>
      <div className="bg">
        <Link href="#" className="Link">
          <img src="assets/img/Banner-slider.png" alt="" />
        </Link>
      </div>
    </div>
  );
}
