"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState, useRef } from "react";
import axios from "axios";

export default function OTP() {
  const [otp_code, setOtp] = useState(["", "", "", ""]);
  const [isCooldown, setIsCooldown] = useState(false);
  const inputRefs = useRef([]);
  const handleVerify = async () => {
    const email = sessionStorage.getItem("email");
    const otpValue = otp_code.join("");

    if (!email) {
      Swal.fire("Lỗi", "Email không tồn tại trong session storage", "error");
      return;
    }

    if (!otpValue || otpValue.length !== 4) {
      Swal.fire("Lỗi", "Vui lòng nhập đúng OTP", "error");
      return;
    }

    try {
      const response = await axios.post(
        "https://trandaihuu.id.vn/api/password/verify-otp",
        { email, otp_code: otpValue }
      );

      if (response.status === 200) {
        Swal.fire("Thành Công", "Xác minh mã OTP thành công", "success");
        setTimeout(() => {
          window.location.href = "/thay-doi-mat-khau";
        }, 1000);
      } else {
        Swal.fire(
          "Thất bại",
          response.data.message || "Vui lòng nhập đúng OTP",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("Thất bại", "Vui lòng nhập đúng OTP của bạn", "error");
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp_code];
    newOtp[index] = value;
    setOtp(newOtp);
    // Khi nhập giá trị, viền ô sẽ chuyển sang màu xanh
    if (value !== "") {
      inputRefs.current[index].style.borderColor = "#3bb77e"; // Viền màu xanh khi có giá trị
    } else {
      inputRefs.current[index].style.borderColor = "#cccccc"; // Viền màu xám khi không có giá trị
    }

    // Tự động chuyển sang ô tiếp theo nếu người dùng đã nhập giá trị
    if (value !== "" && index < otp_code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleOtpBackspace = (index) => {
    const newOtp = [...otp_code];
    newOtp[index] = ""; // Xóa giá trị ô hiện tại
    setOtp(newOtp);

    // Khi xóa, viền ô sẽ quay lại màu xám
    inputRefs.current[index].style.borderColor = "#cccccc"; // Viền xám khi xóa giá trị

    // Chuyển focus về ô trước đó nếu có
    if (index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleFocus = (index) => {
    // Khi focus vào ô, viền sẽ chuyển sang xanh
    inputRefs.current[index].style.borderColor = "#3bb77e"; // Viền xanh khi focus vào ô
  };

  const handleBlur = (index) => {
    // Khi blur và ô không có giá trị, viền sẽ quay lại màu xám
    if (otp_code[index] === "") {
      inputRefs.current[index].style.borderColor = "#cccccc"; // Viền xám khi không có giá trị
    }
  };

  const handleResendOtp = async () => {
    if (isCooldown) return;

    const email = sessionStorage.getItem("email");
    try {
      await axios.post("https://trandaihuu.id.vn/api/password/forgot", {
        email,
      });
      Swal.fire(
        "Thành công",
        "OTP đã được gửi vui lòng kiểm tra bên email của bạn",
        "success"
      );
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), 60000); // 1 minute cooldown
    } catch (error) {
      Swal.fire("Lỗi", "Lỗi khi gửi lại OTP", "error");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="OTP w-[500px] h-full bg-white mx-auto rounded-[10px] p-5 max-md:w-full">
        <div className="verify_email text-center">
          <h1 className="text-[25px] text-[#1B3038] font-semibold mt-5 mb-2">
            Xác Minh Email
          </h1>
          <span className="text-[#C1C1C1] text-[16px] font-bold">
            Chúng tôi đã gửi mã OTP đến email của bạn
          </span>
        </div>
        <div className="input_otp flex justify-center gap-5 my-[60px]">
          {otp_code.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
              onKeyDown={(e) =>
                e.key === "Backspace" && handleOtpBackspace(index)
              }
              onFocus={() => handleFocus(index)}
              onBlur={() => handleBlur(index)}
              className="w-[80px] h-[80px] border-2 border-solid border-[#cccccc] rounded-[10px] outline-none pl-8 text-[30px] font-semibold"
            />
          ))}
        </div>
        <button
          className="btn_verifyaccount w-full bg-[#3bb77e] h-[45px] text-white rounded-[10px]"
          onClick={handleVerify}
        >
          Xác minh tài khoản
        </button>
        <div className="content_verify flex justify-center gap-3 mt-3">
          <h5 className="text-[#9E9D9D]">Chưa nhận được mã OTP?</h5>{" "}
          <Link
            href="#"
            className={`text-[#3bb77e] underline font-semibold ${
              isCooldown ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleResendOtp}
          >
            Gửi lại mã OTP
          </Link>
        </div>
      </div>
    </div>
  );
}
