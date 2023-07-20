import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Layout title="Ana Sayfa">
        <h3>
          {process.env.NODE_ENV === "development"
            ? "dev mode"
            : " production mode"}
        </h3>
        <div>{process.env.API_URL}</div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when lo oking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </Layout>
    </div>
  );
}
