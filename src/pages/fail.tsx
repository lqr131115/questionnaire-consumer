import styles from "@/styles/Fail.module.scss";

export default function Fail() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Failed!</h1>
      <p style={{ fontWeight: "bold" }}>提交失败</p>
    </div>
  );
}
