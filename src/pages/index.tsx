import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import styles from "@/styles/Index.module.scss";
export default function Index() {
  return (
    <PageWrapper title="首页" description="首页">
      <div className={styles.wrapper}>
        <h1>首页</h1>
        <span>
          有一份问卷,
          <Link href="/question/id1">前去填写</Link>
        </span>
      </div>
    </PageWrapper>
  );
}
