// pages/api/hello.js
import Cors from "cors";

// Khởi tạo cấu hình CORS
const cors = Cors({
  methods: ["GET", "POST", "OPTIONS"], // Các phương thức được phép
  origin: "http://localhost:3001", // Đường dẫn frontend của bạn
});

// Hàm chạy middleware cho Next.js API
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Chạy middleware CORS
  await runMiddleware(req, res, cors);

  res.json({ message: "Hello, CORS configured!" });
}
