"use client";
import { usePathname } from "next/navigation";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import { Roboto } from "next/font/google";
import "@/public/css/list_category.globals.css";
import "@/public/css/CardFlashSale.globals.css";
import "@/public/css/CardPopular.globals.css";
import "@/public/css/CardNewhot.globals.css";
import "@/public/css/pr_product.globals.css";
import "@/public/css/CardRelated.globals.css";
import "@/public/css/rating.globals.css";
import "@/app/globals.css";

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
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
        />
      </head>
      <body className={roboto.className}>
        {!hideHeaderFooter && <Header />}
        {children}
        {!hideHeaderFooter && <Footer />}
      </body>
    </html>
  );
}
