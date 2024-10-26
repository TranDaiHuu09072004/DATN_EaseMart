const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data.json"); // Đảm bảo 'data.json' là file JSON của bạn
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Cấu hình CORS
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running on http://localhost:3000");
});
