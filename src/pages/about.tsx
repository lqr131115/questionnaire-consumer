export default function About({ title }: any) {
  return (
    <div>
      I AM About
      <p>{title}</p>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "About Page",
    },
  };
}
