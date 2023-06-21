import express from "express";
// import bodyParser from "body-parser";
import cors from "cors";

import router from "./router";

const PORT = 8001;

const app = express();

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin", "*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == "options")
    res.sendStatus(200); //让options尝试请求快速结束
  else next();
});

app
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(router);

app.listen(PORT, function () {
  console.log("服务器启动，端口：", PORT);
});
