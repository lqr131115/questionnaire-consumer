import styles from "@/styles/Question.module.scss";
import PageWrapper from "@/components/PageWrapper";
import { getQuestion } from "@/services/question";
import { getMaterialByType } from "@/components/QNComponents";
export default function Question({ data }: any) {
  const { id, title, description, css, scripts, componentList } = data;
  return (
    <PageWrapper
      title={title}
      description={description}
      css={css}
      scripts={scripts}
    >
      <form method="post" action="/api/answer">
        <input type="hidden" name="qnId" value={id} />
        {componentList.map((m: any, i: number) => {
          const { qn_id, type, props } = m;
          const { component: Component } = getMaterialByType(type) || {};
          return (
            Component && <Component key={qn_id} qn_id={qn_id} props={props} />
          );
        })}
        <div className={styles.btnWrapper}>
          <button className={styles.btn} type="submit">
            提交
          </button>
        </div>
      </form>
    </PageWrapper>
  );
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  const paths = Array.from({ length: 5 }, (_, i) => ({ id: `id${i}` })).map(
    (post) => ({
      params: { id: post.id },
    })
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const id = `question-${params.id}`;
  const res = await getQuestion(id);
  return {
    props: {
      data: res.data,
    },
  };
}
