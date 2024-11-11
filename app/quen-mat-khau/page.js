"use client";
import Link from "next/link";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleContinue = async () => {
    if (!email) {
      Swal.fire("Lỗi", "Vui lòng kiểm tra email của bạn", "error");
      return;
    }

    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/password/forgot",
        { email }
      );

      if (response.status === 200) {
        sessionStorage.setItem("email", email);
        Swal.fire("Success", "Email has been sent", "success");
        setTimeout(() => {
          window.location.href = "/otp";
        }, 1000);
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Failed to send email",
          "error"
        );
      }
    } catch (error) {
      Swal.fire("Error", "An error occurred", "error");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="OTP w-[500px] h-full bg-white mx-auto rounded-[10px] p-5 max-md:w-full">
        <div className="verify_email text-center">
          <h1 className="text-[25px] text-[#1B3038] font-semibold mt-5 mb-2">
            QUÊN MẬT KHẨU
          </h1>
          <span className="text-[#C1C1C1] text-[16px] font-bold">
            vui lòng nhập email của bạn
          </span>
        </div>
        <div className="input_forgot password">
          <h5 className="mb-2">Email:</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Nhập Email..."
            className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
          />
        </div>
        <button
          className="btn_continue w-full bg-[#3bb77e] h-[45px] text-white rounded-[5px] mt-5"
          onClick={handleContinue}
        >
          Tiếp tục
        </button>
        <div className="content_verify flex justify-center gap-3 my-3">
          <h5 className="text-[#9E9D9D]">Hoặc</h5>{" "}
        </div>
        <button className="btn_continue w-full border-2 border-solid border-[#3bb77e] text-[#3bb77e] h-[45px] rounded-[5px] font-semibold">
          <Link href="/dangnhap">Đăng nhập</Link>
        </button>
      </div>
    </div>
  );
}
