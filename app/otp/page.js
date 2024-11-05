import Link from "next/link";

export default function OTP() {
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
          <input
            type="text"
            maxLength="1"
            className="w-[80px] h-[80px] border-2 border-solid border-[#cccccc] rounded-[10px] outline-none pl-8 text-[30px] font-semibold"
          />
          <input
            type="text"
            maxLength="1"
            className="w-[80px] h-[80px] border-2 border-solid border-[#cccccc] rounded-[10px] outline-none pl-8 text-[30px] font-semibold"
          />
          <input
            type="text"
            maxLength="1"
            className="w-[80px] h-[80px] border-2 border-solid border-[#cccccc] rounded-[10px] outline-none pl-8 text-[30px] font-semibold"
          />
          <input
            type="text"
            maxLength="1"
            className="w-[80px] h-[80px] border-2 border-solid border-[#cccccc] rounded-[10px] outline-none pl-8 text-[30px] font-semibold"
          />
        </div>
        <button className="btn_verifyaccount w-full bg-[#3bb77e] h-[45px] text-white rounded-[10px]">
          Xác minh tài khoản
        </button>
        <div className="content_verify flex justify-center gap-3 mt-3">
          <h5 className="text-[#9E9D9D]">Chưa nhận được mã OTP?</h5>{" "}
          <Link href="#" className="text-[#3bb77e] underline font-semibold">
            Gửi lại mã OTP
          </Link>
        </div>
      </div>
    </div>
  );
}
