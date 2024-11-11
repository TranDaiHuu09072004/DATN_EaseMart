"use client";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Roboto } from "next/font/google";
import "public/css/list_category.globals.css";
import "public/css/CardFlashSale.globals.css";
import "public/css/CardPopular.globals.css";
import "public/css/CardNewHot.globals.css";
import "public/css/pr_product.globals.css";
import "public/css/CardRelated.globals.css";
import "public/css/rating.globals.css";
import "app/globals.css";
import { CartFunction } from "@/components/CartFunction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { YeuThichFunction } from "@/components/YTFunction/sanphamyeuthich";
const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  // Kiểm tra nếu là trang đăng ký hoặc đăng nhập
  const hideHeaderFooter = pathname === "/dangky" || pathname === "/dangnhap";

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
        />
      </head>
      <body className={roboto.className}>
        <CartFunction>
          <YeuThichFunction>
            {!hideHeaderFooter && <Header />}
            {children}
            {!hideHeaderFooter && <Footer />}
          </YeuThichFunction>
        </CartFunction>
      </body>
    </html>
  );
}
