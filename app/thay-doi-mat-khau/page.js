"use client";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = async () => {
    const email = sessionStorage.getItem("email");

    if (!newPassword || newPassword !== confirmPassword) {
      Swal.fire("Error", "Passwords do not match", "error");
      return;
    }

    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/password/reset",
        { email, newPassword }
      );

      if (response.status === 200) {
        Swal.fire("Thành công", "Vui lòng kiểm tra email của bạn", "success");
        setTimeout(() => {
          window.location.href = "/dangnhap";
        }, 1000);
      } else {
        Swal.fire(
          "Error",
          response.data.message || "Failed to change password",
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
        <div className="change_password ">
          <h1 className="text-[25px] text-[#1B3038] font-semibold mt-5 mb-2">
            Thay đổi mật khẩu
          </h1>
        </div>
        <div className="input_change-password mt-5">
          <h5 className="mb-2">Mật khẩu mới</h5>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
          />
        </div>
        <div className="input_change-password mt-5">
          <h5 className="mb-2">Nhập lại mật khẩu mới</h5>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
          />
        </div>
        <button
          className="btn_continue w-full bg-[#3bb77e] h-[45px] text-white rounded-[5px] mt-5"
          onClick={handleChangePassword}
        >
          Thay đổi mật khẩu
        </button>
      </div>
    </div>
  );
}
