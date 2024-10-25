import Header from "@/components/Header/Header";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer/Footer";
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
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css"
        />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
