import QNInput from "@/components/QNComponents/QNInput/QNInput";

export default function Question({ post }: any) {
  return (
    <div>
      <QNInput qn_id="c1" props={{ title: "title", placeholder: "请输入" }} />
    </div>
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
