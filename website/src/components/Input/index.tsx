import styles from "./index.less";

export default function Input(props: any) {
  const { className = "" } = props;
  return (
    <div className={[styles.input, className]?.join(" ")}>
      <input></input>
    </div>
  );
}
