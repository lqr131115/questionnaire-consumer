import Link from "next/link";
import styles from "@/styles/Fail.module.scss";

export default function Index() {
  return (
    <div className={styles.wrapper}>
      <h1>首页</h1>
      <span>
        有一份问卷,
        <Link href="/question/id1">前去填写</Link>
      </span>
    </div>
  );
}
