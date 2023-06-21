import "@/models/article";
import styles from "./index.less";

export default function ArticleCard(props: any) {
  const { data = {} } = props;
  return (
    <div className={styles.card}>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.abstract}>{data.abstract}</div>
    </div>
  );
}
