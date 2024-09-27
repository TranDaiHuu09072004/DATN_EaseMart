import Header from "@/app/components/Header/Header";
import { Roboto } from "next/font/google";
import Footer from "@/app/components/Footer/Footer";
import "@/public/css/list_category.globals.css";
import "@/public/css/CardFlashSale.globals.css";
import "@/public/css/CardPopular.globals.css";
import "@/public/css/CardNewhot.globals.css";
import "@/public/css/pr_product.globals.css";
import "@/public/css/CardRelated.globals.css";
import "@/public/css/rating.globals.css";
import "@/app/globals.css";
const roboto = Roboto({
  weight: ["400", "700"], // Chọn các độ đậm bạn cần
  subsets: ["latin"], // Chọn các ký tự phụ
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
