"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as Yup from "yup";

export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .required("Mật khẩu là bắt buộc"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Mật khẩu xác nhận không khớp")
      .required("Mật khẩu xác nhận là bắt buộc"),
  });

  useEffect(() => {
    const isValidAccess = sessionStorage.getItem("isValidAccess");
    if (!isValidAccess) {
      Swal.fire("Error", "Bạn không có quyền truy cập trang này", "error").then(
        () => {
          window.location.href = "/quen-mat-khau";
        }
      );
    }
  }, []);

  const handleChangePassword = async () => {
    const email = sessionStorage.getItem("email");

    try {
      await validationSchema.validate({ password, confirmPassword });
    } catch (error) {
      Swal.fire("Error", error.errors[0], "error");
      return;
    }

    try {
      const response = await axios.post(
        "https://trandainghia.id.vn/api/password/reset",
        { email, password }
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
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
            />
            <span
              className="absolute right-3 mt-2 text-[20px] cursor-pointer text-[#757575]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
        </div>
        <div className="input_change-password mt-5">
          <h5 className="mb-2">Nhập lại mật khẩu mới</h5>

          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
            />
            <span
              className="absolute right-3 mt-2 text-[20px] cursor-pointer text-[#757575]"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
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
