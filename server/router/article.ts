import express from "express";
import ArticleController from "../controller/article";

const router = express.Router();

// 返回结构
router.post("/add", (req, res) => {
  return ArticleController.create(req, res);
});

router.get("/get", (req, res) => {
  return ArticleController.getOne(req, res);
});

router.get("/getAll", (req, res) => {
  return ArticleController.getAll(req, res);
});

export default router;
