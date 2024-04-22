import QNInput from "@/components/QNComponents/QNInput/QNInput";
import QNRadio from "@/components/QNComponents/QNRadio/QNRadio";

export default function Question({ post }: any) {
  return (
    <>
      <QNInput
        qn_id="qn_input_id"
        props={{ title: "title", placeholder: "请输入" }}
      />
      <QNRadio
        qn_id="qn_radio_id"
        props={{
          title: "服务器单选标题",
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
    </>
  );
}

// 此函数在构建时被调用
export async function getStaticPaths() {
  console.log("question/[id].tsx");
  const paths = Array.from({ length: 5 }, (_, i) => ({ id: `id${i}` })).map(
    (post) => ({
      params: { id: post.id },
    })
  );
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  const post = `receive-${params.id}`;
  return {
    props: {
      post,
    },
  };
}
