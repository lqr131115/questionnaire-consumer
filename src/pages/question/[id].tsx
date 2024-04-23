import QNInput from "@/components/QNComponents/QNInput/QNInput";
import QNRadio from "@/components/QNComponents/QNRadio/QNRadio";
import QNCheckbox from "@/components/QNComponents/QNCheckbox/QNCheckbox";
import styles from "@/styles/Question.module.scss";

export default function Question({ id }: any) {
  return (
    <>
      <form>
        <input type="hidden" name="questionId" value={id} />
        <QNInput
          qn_id="qn_input_id"
          props={{ title: "输入标题", placeholder: "请输入" }}
        />
        <QNRadio
          qn_id="qn_radio_id"
          props={{
            title: "单选标题",
            options: [
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
            ],
            defaultValue: "A",
            vertical: false,
          }}
        />
        <QNCheckbox
          qn_id="qn_checkbox_id"
          props={{
            title: "多选标题",
            options: [
              { value: "A", label: "A" },
              { value: "B", label: "B" },
              { value: "C", label: "C" },
              { value: "D", label: "D" },
            ],
            vertical: false,
          }}
        />
        <div className={styles.btnWrapper}>
          <button className={styles.btn} type="submit">
            提交
          </button>
        </div>
      </form>
    </>
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
  const id = `receive-${params.id}`;
  return {
    props: {
      id,
    },
  };
}
