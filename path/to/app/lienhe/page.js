import * as Yup from "yup"; // Import Yup

// ... existing code ...

// Định nghĩa schema xác thực với Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Tên không được rỗng"),
  phone: Yup.string().required("Số điện thoại không được rỗng"),
  email: Yup.string().email("Email không hợp lệ").required("Email không được rỗng"),
  message: Yup.string().required("Lời nhắn không được rỗng"),
});

// Hàm gửi form
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Xác thực dữ liệu form
  try {
    await validationSchema.validate(formData, { abortEarly: false });
    
    const response = await fetch("https://trandainghia.id.vn/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Use SweetAlert2 for success message
      Swal.fire({
        icon: "success",
        title: "Gửi thành công!",
        confirmButtonText: "OK",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } else {
      // Use SweetAlert2 for error message
      Swal.fire({
        icon: "error",
        title: "Gửi thất bại",
        text: "Vui lòng thử lại.",
        confirmButtonText: "OK",
      });
    }
  } catch (error) {
    console.error("Lỗi gửi dữ liệu:", error);
    // Hiển thị thông báo lỗi cho người dùng
    Swal.fire({
      icon: "error",
      title: "Đã xảy ra lỗi",
      text: error.errors.join(", "), // Hiển thị các lỗi xác thực
      confirmButtonText: "OK",
    });
  }
};

// ... existing code ... 