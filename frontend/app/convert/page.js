import classNames from "classnames/bind";
import styles from "./convert.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faHouse } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const cx = classNames.bind(styles);
const Convert = () => {
  return (
    <div className="container">
      <div className={cx("page-convert")}>
        <ul className={cx("nav")}>
          <li>
            <FontAwesomeIcon
              className={cx("icon")}
              icon={faHouse}
            ></FontAwesomeIcon>
            <Link className={cx("item")} href="#">
              Trang chủ
            </Link>
          </li>
          <li>
            <Link className={cx("item")} href="#">
              Sản phẩm
            </Link>
          </li>
        </ul>
        <div className={cx("convert-content")}>
          <div className={cx("title-points")}>
            <div className={cx("points")}>
              Số điểm đang có : <span>500đ</span>
            </div>
            <div className={cx("title")}>Quy đổi điểm</div>
          </div>
          <div className={cx("box-voucher")}>
            <div className={cx("title-voucher")}>Voucher</div>
            <div className={cx("list-voucher")}>
              <div className={cx("voucher-item")}>
                <div className={cx("voucher-item-top")}>
                  <div className={cx("info-left")}>
                    <p>
                      Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                      COD, Trả góp, Thanh toán Payme)
                    </p>
                  </div>
                  <div className={cx("info-right")}>
                    Giảm 50.000đ cho đơn từ 1.500.000đ
                  </div>
                </div>
                <div className={cx("voucher-item-bottom")}>
                  <h4>
                    Điều kiện <span>150đ</span>
                  </h4>
                  <button className={cx("button-copy")}>Đổi</button>
                </div>
              </div>
              <div className={cx("voucher-item")}>
                <div className={cx("voucher-item-top")}>
                  <div className={cx("info-left")}>
                    <p>
                      Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                      COD, Trả góp, Thanh toán Payme)
                    </p>
                  </div>
                  <div className={cx("info-right")}>
                    Giảm 50.000đ cho đơn từ 1.500.000đ
                  </div>
                </div>
                <div className={cx("voucher-item-bottom")}>
                  <h4>
                    Điều kiện <span>150đ</span>
                  </h4>
                  <button className={cx("button-copy")}>Đổi</button>
                </div>
              </div>
              <div className={cx("voucher-item")}>
                <div className={cx("voucher-item-top")}>
                  <div className={cx("info-left")}>
                    <p>
                      Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                      COD, Trả góp, Thanh toán Payme)
                    </p>
                  </div>
                  <div className={cx("info-right")}>
                    Giảm 50.000đ cho đơn từ 1.500.000đ
                  </div>
                </div>
                <div className={cx("voucher-item-bottom")}>
                  <h4>
                    Điều kiện <span>150đ</span>
                  </h4>
                  <button className={cx("button-copy")}>Đổi</button>
                </div>
              </div>
              <div className={cx("voucher-item")}>
                <div className={cx("voucher-item-top")}>
                  <div className={cx("info-left")}>
                    <p>
                      Giảm 50.000đ cho đơn từ 1.500.000đ (không áp dụng với đơn
                      COD, Trả góp, Thanh toán Payme)
                    </p>
                  </div>
                  <div className={cx("info-right")}>
                    Giảm 50.000đ cho đơn từ 1.500.000đ
                  </div>
                </div>
                <div className={cx("voucher-item-bottom")}>
                  <h4>
                    Điều kiện <span>150đ</span>
                  </h4>
                  <button className={cx("button-copy")}>Đổi</button>
                </div>
              </div>
            </div>
          </div>
          <div className={cx("box-present")}>
            <div className={cx("title-present")}>Quà tặng</div>
            <div className={cx("list-present")}>
              <div className={cx("present-item")}>
                <div className={cx("thumb")}>
                  <img src="./assets/img/present/image354.png" />
                </div>
                <div className={cx("name")}>
                  Tặng miễn phí 1 thùng đá 8L khi khách đủ điều kiện trên
                </div>
                <div className={cx("price")}>
                  <div className={cx("condition")}>
                    Điều kiện: <span>150đ</span>
                  </div>
                  <div className={cx("quatity")}>
                    Còn lại: <span>50 ly</span>
                  </div>
                </div>
                <button>Đổi ngay</button>
              </div>
              <div className={cx("present-item")}>
                <div className={cx("thumb")}>
                  <img src="./assets/img/present/image354.png" />
                </div>
                <div className={cx("name")}>
                  Tặng miễn phí 1 thùng đá 8L khi khách đủ điều kiện trên
                </div>
                <div className={cx("price")}>
                  <div className={cx("condition")}>
                    Điều kiện: <span>150đ</span>
                  </div>
                  <div className={cx("quatity")}>
                    Còn lại: <span>50 ly</span>
                  </div>
                </div>
                <button>Đổi ngay</button>
              </div>
              <div className={cx("present-item")}>
                <div className={cx("thumb")}>
                  <img src="./assets/img/present/image354.png" />
                </div>
                <div className={cx("name")}>
                  Tặng miễn phí 1 thùng đá 8L khi khách đủ điều kiện trên
                </div>
                <div className={cx("price")}>
                  <div className={cx("condition")}>
                    Điều kiện: <span>150đ</span>
                  </div>
                  <div className={cx("quatity")}>
                    Còn lại: <span>50 ly</span>
                  </div>
                </div>
                <button>Đổi ngay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
