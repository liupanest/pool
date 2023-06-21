import { Request, Response } from "express";
import crypto from "crypto";
import Article from "../db/article";
import { MysqlError } from "mysql";

const create = (req: Request, res: Response) => {
  if (!req.body) {
    res.status(400).send({ message: "Content can not by empty" });
  }

  const data = {
    id: crypto.randomBytes(16).toString("hex"),
    ...req.body,
  };

  Article.create(data, (err: MysqlError, data: any) => {
    if (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the articles.",
      });
    } else {
      res.send(data);
    }
  });
};

const getOne = (req: Request, res: Response) => {
  Article.queryById(req.params.id, (err: MysqlError, data: any) => {
    if (err) {
      if (err.message === "not_found") {
        res.status(404).send({
          message:
            err.message || "Some error ocurred whild receiving articles.",
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Turial with id " + req.params.id,
        });
      }
    } else {
      res.send(data);
    }
  });
};

const getAll = (req: Request, res: Response) => {
  const title = req.query.title;
  Article.queryAll(title, (err: MysqlError, data: any) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error ocurred whild receiving articles.",
      });
    } else {
      res.send(data);
    }
  });
};

export default { create, getOne, getAll };
