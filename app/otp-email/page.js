"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
export default function OTP() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isCooldown, setIsCooldown] = useState(false);

  const handleVerify = async () => {
    const registerData = JSON.parse(localStorage.getItem("registerData"));
    const email = registerData.email;
    console.log(email);

    const otpValue = otp.join("");

    if (!otpValue || otpValue.length !== 4) {
      Swal.fire("Lỗi", "Vui lòng nhập đúng OTP", "error");
      return;
    }

    try {
      // Gửi yêu cầu xác minh OTP
      const response = await axios.post(
        "https://trandainghia.id.vn/api/email/verify-otp",
        { email, otp: otpValue }
      );

      if (response.status === 200) {
        console.log("OTP verified:", response.data);

        // Sau khi xác minh OTP thành công, gọi API đăng ký
        try {
          const registerResponse = await axios.post(
            "https://trandainghia.id.vn/api/register",
            registerData
          );

          if (registerResponse.status === 201) {
            Swal.fire(
              "Thành công",
              registerResponse.data.message || "Đăng ký thành công",
              "success"
            );
            setTimeout(() => {
              sessionStorage.removeItem("registerData");
              sessionStorage.removeItem("email");
              window.location.href = "/dangnhap";
            }, 2000);
          } else {
            Swal.fire(
              "Thất bại",
              registerResponse.data.message || "Đăng ký thất bại",
              "error"
            );
          }
        } catch (registerError) {
          console.error(
            "Error registering:",
            registerError.response?.data || registerError.message
          );
          Swal.fire("Lỗi", "Đăng ký thất bại", "error");
        }
      } else {
        Swal.fire(
          "Thất bại",
          response.data.message || "Vui lòng nhập đúng OTP",
          "error"
        );
      }
    } catch (error) {
      console.error(
        "Error verifying OTP:",
        error.response?.data || error.message
      );
      Swal.fire("Thất bại", "Vui lòng nhập đúng OTP của bạn", "error");
    }
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  const handleResendOtp = async () => {
    if (isCooldown) return;
    const registerData = JSON.parse(localStorage.getItem("registerData"));
    const email = registerData.email;
    try {
      await axios.post("https://trandainghia.id.vn/api/email/send-otp", {
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
            Xác Thực OTP Khi Đăng Ký Tài Khoản
          </h1>
          <span className="text-[#C1C1C1] text-[16px] font-bold">
            Chúng tôi đã gửi mã OTP đến email của bạn
          </span>
        </div>
        <div className="input_otp flex justify-center gap-5 my-[60px]">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleOtpChange(index, e.target.value)}
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
