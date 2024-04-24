import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import PageWrapper from "@/components/PageWrapper";
import styles from "@/styles/Success.module.scss";

export default function Success() {
  const [sec, setSec] = useState(3);
  const router = useRouter();
  useEffect(() => {
    const timer = setInterval(() => {
      setSec((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (sec === 0) {
      router.push("/");
    }
  }, [router, sec]);
  return (
    <PageWrapper title="提交成功" description="提交成功">
      <div className={styles.wrapper}>
        <h1>Success!</h1>
        <p style={{ fontWeight: "bold" }}>提交成功</p>
        {sec > 0 && <p>{sec}秒后返回首页</p>}
      </div>
    </PageWrapper>
  );
}
