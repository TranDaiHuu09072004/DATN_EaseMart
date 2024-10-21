import classNames from "classnames/bind";
import styles from "./Chitietdonhang.module.scss";
import { Icon } from "@iconify/react";
const cx = classNames.bind(styles);
const Chitietdonhang = () => {
  return (
    <div className={cx("max-w-screen-xl", " mx-auto", "p-4", "bg-white")}>
      <table
        className={cx(
          "table",
          "border-collapse",
          " min-w-full",
          " text-left",
          " text-sm",
          " text-gray-500 ",
          "border",
          " border-zinc-950"
        )}
      >
        <thead>
          <tr>
            <th
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-2",
                " text-gray-900"
              )}
            >
              Sản phẩm
            </th>
            <th
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-2",
                " text-gray-900"
              )}
            >
              Số tiền
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Muối ớt chanh Nha Trang{" "}
              <span className="block text-xs">(x1)</span>
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300 ",
                "px-4",
                " py-5",
                "hightlight"
              )}
            >
              250,000đ
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Muối ớt chanh Nha Trang{" "}
              <span className="block text-xs">(x1)</span>
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300 ",
                "px-4",
                " py-5",
                "hightlight"
              )}
            >
              250,000đ
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Tạm tính:
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300 ",
                "px-4",
                " py-5",
                "hightlight"
              )}
            >
              500,000đ
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Giao nhận hàng:
            </td>
            <td className="border border-gray-300 px-4 py-6 text-blue-500 underline">
              Giao hàng miễn phí
            </td>
          </tr>
          <tr>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Phương thức thanh toán:
            </td>
            <td className={cx("border", " border-gray-300 ", "px-4", " py-5")}>
              Trả tiền mặt khi nhận hàng
            </td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-6 font-bold text-base">
              Tổng cộng:
            </td>
            <td
              className={cx(
                "border",
                " border-gray-300",
                " px-4",
                " py-6",
                "hightlight",
                "font-bold",
                " text-base"
              )}
            >
              500,000đ
            </td>
          </tr>
        </tbody>
      </table>

      <div className={cx("flex", "flex-wrap")}>
        <div className={cx("basis-full", "lg:basis-1/2", "", "p-2")}>
          <div className={cx("border-gray-200", "rounded-lg", "p-4", "w-full")}>
            <div
              className={cx(
                "info-container",
                "font-bold",
                "bg-gray-100",
                "py-2",
                "px-4",
                "border-b",
                "border-gray-200"
              )}
            >
              Địa chỉ thanh toán
            </div>
            <div
              className={cx(
                "info-container",
                "py-4",
                "px-4",
                "flex",
                "flex-col",
                "gap-5"
              )}
            >
              <p className="font-semibold">Lê Đức Anh</p>
              <p>Quận 11</p>
              <p className="text-green-500">Hồ Chí Minh</p>
              <p className="flex items-center ">
                <Icon icon="solar:phone-broken" />
                0334481550
              </p>
            </div>
          </div>
        </div>
        <div className={cx("basis-full", "lg:basis-1/2", "", "p-2")}>
          <div className={cx("border-gray-200", "rounded-lg", "p-4", "w-full")}>
            <div
              className={cx(
                "info-container",
                "font-bold",
                "bg-gray-100",
                "py-2",
                "px-4",
                "border-b",
                "border-gray-200"
              )}
            >
              Địa chỉ thanh toán
            </div>
            <div
              className={cx(
                "info-container",
                "py-4",
                "px-4",
                "flex",
                "flex-col",
                "gap-5"
              )}
            >
              <p className="font-semibold">Lê Đức Anh</p>
              <p>Quận 11</p>
              <p className="text-green-500">Hồ Chí Minh</p>
              <p className="flex items-center ">
                <Icon icon="solar:phone-broken" />
                0334481550
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chitietdonhang;
