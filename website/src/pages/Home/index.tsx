import { useEffect, useState } from "react";
import ArticleCard from "./components/ArticleCard";
import { getArticles } from "./service";

import "@/models/article";
import styles from "./index.less";

export default function Layout() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    getArticles().then((data) => {
      console.log("data...", data);
      setArticles(data);
    });
  }, []);
  return (
    <div className={styles.content}>
      {articles.map((item: ArticleModel) => (
        <ArticleCard data={item}></ArticleCard>
      ))}
    </div>
  );
}
