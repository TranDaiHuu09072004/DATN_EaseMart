import Link from "next/link";

export default function ChangePassword() {
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
            className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
          />
        </div>
        <div className="input_change-password mt-5">
          <h5 className="mb-2">Nhập lại mật khẩu mới</h5>
          <input
            type="password"
            className="w-full h-[35px] rounded-[5px] border-2 border-solid border-[#cccccc] pl-2 outline-none"
          />
        </div>
        <button className="btn_continue w-full bg-[#3bb77e] h-[45px] text-white rounded-[5px] mt-5">
          Thay đổi mật khẩu
        </button>
      </div>
    </div>
  );
}
