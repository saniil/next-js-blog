import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Error from "next/error";

const data = [
  {
    yazi: "gunluk-1",
    title: "Depreme Dayanıklı evler",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only five
  centuries, but also the leap into electronic typesetting, remaining
  essentially unchanged. It was popularised in the 1960s with the release
  of Letraset sheets containing Lorem Ipsum passages, and more recently
  with desktop publishing software like Aldus PageMaker including versions
  of Lorem Ipsum`,
  },
  {
    yazi: "gunluk-2",
    title: "Elektrikte Yeni Devrimler",
    text: `o electronic typesetting, remaining
essentially unchanged. It was popularised in the 1960s with the release
of Letraset sknown printer took a galley of type and
scrambled it to make a type specimen book. It has survived not only five
centuries, but also the leap intheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions
of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting
industry. Lorem Ipsum has been the industry's standard dummy text ever
since the 1500s, when an un`,
  },
];

export default ({}) => {
  const router = useRouter();
  const { slug } = router.query;
  let foundItem = data.find((dataItem) => dataItem.yazi === slug);
  console.log(foundItem);

  if (!foundItem) {
    return <Error statusCode={404} />;
  }
  return (
    <Layout title={foundItem?.title}>
      <h1>{slug}:burası blog/... ne geliyorsa ona eşittir.</h1>
      <p>{foundItem?.text}</p>
    </Layout>
  );
};
