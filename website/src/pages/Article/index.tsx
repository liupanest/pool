import { useRef } from "react";
import RichEditor from "@/components/RichEditor";
import { history } from "umi";
import { saveArticle } from "./service";

import styles from "./index.less";

const Article = () => {
  const editorRef = useRef() as React.MutableRefObject<any>;
  const onSubmit = () => {
    saveArticle({
      published: 1,
      content: editorRef.current.getData(),
      abstract: editorRef.current.getText(),
    });
    history.go(-1);
  };
  return (
    <div className={styles.article}>
      <div className={styles.operates}>
        <div className={styles.btn} onClick={onSubmit}>
          提交
        </div>
      </div>
      <div>
        <input></input>
      </div>
      <RichEditor className={styles.editor} ref={editorRef}></RichEditor>
    </div>
  );
};

export default Article;
