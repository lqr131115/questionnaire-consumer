import PageWrapper from "@/components/PageWrapper";
import styles from "@/styles/Fail.module.scss";

export default function Fail() {
  return (
    <PageWrapper title="提交失败" description="提交失败">
      <div className={styles.wrapper}>
        <h1 className={styles.h1}>Failed!</h1>
        <p style={{ fontWeight: "bold" }}>提交失败</p>
      </div>
    </PageWrapper>
  );
}
