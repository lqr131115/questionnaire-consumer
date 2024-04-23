import styles from "@/styles/Success.module.scss";

export default function Success() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Success!</h1>
      <p style={{ fontWeight: "bold" }}>提交成功</p>
    </div>
  );
}
