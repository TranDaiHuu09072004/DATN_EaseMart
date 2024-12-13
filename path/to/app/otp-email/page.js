const handleKeyDown = (e, index) => {
  if (e.key === "Backspace") {
    if (index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = ""; // Xóa ô trước đó
      setOtp(newOtp);
      setTimeout(() => {
        document.querySelector(`input:nth-child(${index}`).focus(); // Chuyển đến ô trước
      }, 200); // Thêm độ trễ 200ms
    }
  } else if (e.key.match(/^[0-9]$/)) {
    handleOtpChange(index, e.key);
    setTimeout(() => {
      if (index < otp.length - 1) {
        document.querySelector(`input:nth-child(${index + 2})`).focus();
      }
    }, 200); // Thêm độ trễ 200ms
  }
};

// Thay đổi class cho ô input để thêm màu viền đỏ khi xóa
<input
  key={index}
  type="text"
  maxLength="1"
  value={value}
  onChange={(e) => handleOtpChange(index, e.target.value)}
  onKeyDown={(e) => handleKeyDown(e, index)}
  className={`w-[80px] h-[80px] border-2 border-solid rounded-[10px] outline-none pl-8 text-[30px] font-semibold ${
    value ? "border-[#3bb77e]" : isDeleting ? "border-red-500" : "border-[#cccccc]"
  }`}
/> 