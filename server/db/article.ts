import sql from "./db";

interface ArticleModel {
  published: boolean;
  author: string;
  title?: string;
  content?: string;
  abstract?: string;
  id?: string;
}

const create = (data: ArticleModel, result: Function) => {
  sql.query("INSERT INTO article SET ?", data, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("create article: ", { id: res.insertId, ...data });
    result(null, { id: res.insertId, ...data });
  });
};

const deleteById = (id: string, result: Function) => {
  sql.query("DELETE from article", (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    if (res.affectedRows === 0) {
      result({ message: "not_found" }, null);
      return;
    }
    console.log("delete article: ", { id });
    result(null, { id });
  });
};

const queryAll = (title: any, result: Function) => {
  let query = "SELECT * FROM article";
  if (title) {
    query += ` WHERE title LIKE '${title}'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    console.log("query all article: ", res);
    result(null, res);
  });
};

const queryById = (id: string, result: Function) => {
  sql.query(`SELECT * FROM article WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.error("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found article: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ message: "not_found" }, null);
  });
};

const updateById = (data: ArticleModel, result: Function) => {
  sql.query(
    "UPDATE article set published = ?, author = ?, title = ?, content = ? where id = ?",
    [data.published, data.author, data.title, data.content, data.id],
    (err, res) => {
      if (err) {
        console.error("error: ", err);
        result(err, null);
        return;
      }

      if (res.affectedRows === 0) {
        result({ message: "not_found" }, null);
        return;
      }
      console.log("update article: ", { ...data });
      result(null, { ...data });
    }
  );
};

export default {
  create,
  deleteById,
  queryAll,
  queryById,
  updateById,
};
