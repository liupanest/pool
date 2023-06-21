import mysql from "mysql";
import config from "../config/db.config.json";

const connection = mysql.createConnection(config);

connection.connect((err) => {
  if (err) {
    return console.error("连接失败: ", err);
  }
  console.log("连接成功", "连接线程ID: " + connection.threadId);
});

export default connection;
