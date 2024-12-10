"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./dangnhap.module.css";
import * as Yup from "yup"; // Import Yup for validation
import { useForm } from "react-hook-form"; // Import useForm from react-hook-form
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver for Yup integration
import Swal from "sweetalert2";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email hoặc password đã tồn tại")
    .required("Email là bắt buộc"),
  password: Yup.string()
    .required("Mật khẩu là bắt buộc")
    .min(8, "Mật khẩu phải có ít nhất 8 ký tự"),
});

export default function DangNhap() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      const response = await fetch("https://trandainghia.id.vn/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const user = await response.json();
      console.log(user);

      const name = user.customers.name;
      const customerId = user.customers.id;

      if (user) {
        setError("");
        Swal.fire("Thành công", "Đăng nhập thành công!", "success");

        if (rememberMe) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              email,
              token: user.token,
              name,
              customerId,
            })
          );
          localStorage.setItem("name", name);
        } else {
          localStorage.removeItem("user");
        }

        setTimeout(() => {
          window.location.href = "/";
        }, 2000);
      } else {
        Swal.fire(
          "Thất bại",
          "Email hoặc mật khẩu không đúng. Vui lòng thử lại.",
          "error"
        );
      }
    } catch (err) {
      console.error("Lỗi khi gọi API:", err);
      setError("Có lỗi xảy ra. Vui lòng thử lại sau.");
      Swal.fire("Lỗi", "Có lỗi xảy ra. Vui lòng thử lại sau.", "error");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    if (!credentialResponse?.credential) {
      Swal.fire("Lỗi", "Đăng nhập Google không hợp lệ.", "error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://trandainghia.id.vn/api/customers/google",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token: credentialResponse.credential }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Đăng nhập bằng Google thất bại.");
      }

      const user = await response.json();

      if (user?.customers) {
        localStorage.setItem("user", JSON.stringify(user.customers));
        localStorage.setItem("name", user.customers.name || "");
        localStorage.setItem(
          "image",
          user.customers.image || "/default-avatar.png"
        );
      }

      Swal.fire("Thành công", "Đăng nhập bằng Google thành công!", "success");
      router.push("/");
    } catch (error) {
      Swal.fire(
        "Lỗi",
        error.message || "Đăng nhập bằng Google thất bại.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Xử lý lỗi đăng nhập Google
  const handleGoogleError = () => {
    Swal.fire("Lỗi", "Đăng nhập bằng Google thất bại.", "error");
  };
  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <div className={styles.pageContainer}>
        <div className={styles.container}>
          <div className={styles.formContainer}>
            <div className={styles.logo}>
              <h1>EaseMart</h1>
              <p>Your Daily Essentials, Delivered</p>
            </div>
            <h2 className={styles.heading}>Đăng nhập hội viên</h2>
            <form onSubmit={handleSubmit(handleLogin)}>
              <input
                type="email"
                className={styles.inputField}
                placeholder="Nhập Email"
                {...register("email")}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <p className={styles.error}>{errors.email.message}</p>
              )}
              <input
                type="password"
                className={styles.inputField}
                placeholder="Nhập mật khẩu"
                {...register("password")}
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <p className={styles.error}>{errors.password.message}</p>
              )}
              <div className={styles.rememberMe}>
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label htmlFor="rememberMe">Ghi nhớ mật khẩu</label>
              </div>
              <button type="submit" className={styles.loginBtn}>
                Đăng nhập
              </button>
            </form>
            <p className={styles.forgotPassword}>
              <Link href="/quen-mat-khau">Quên mật khẩu?</Link>
            </p>
            <div className={styles.socialLogin}>
              <p>Hoặc</p>
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
                className={styles.googleBtn}
              />
            </div>
            <p className={styles.linkContainer}>
              Chưa có tài khoản vui lòng{" "}
              <Link href="/dangky">đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}
