import Layout from "../../components/Layout";

import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";

// const data = [
//   {
//     yazi: "gunluk-1",
//     title: "Depreme Dayanıklı evler",
//     text: `Lorem Ipsum is simply dummy text of the printing and typesetting
//   industry. Lorem Ipsum has been the industry's standard dummy text ever
//   since the 1500s, when an unknown printer took a galley of type and
//   scrambled it to make a type specimen book. It has survived not only five
//   centuries, but also the leap into electronic typesetting, remaining
//   essentially unchanged. It was popularised in the 1960s with the release
//   of Letraset sheets containing Lorem Ipsum passages, and more recently
//   with desktop publishing software like Aldus PageMaker including versions
//   of Lorem Ipsum`,
//   },
//   {
//     yazi: "gunluk-2",
//     title: "Elektrikte Yeni Devrimler",
//     text: `o electronic typesetting, remaining
// essentially unchanged. It was popularised in the 1960s with the release
// of Letraset sknown printer took a galley of type and
// scrambled it to make a type specimen book. It has survived not only five
// centuries, but also the leap intheets containing Lorem Ipsum passages, and more recently
// with desktop publishing software like Aldus PageMaker including versions
// of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting
// industry. Lorem Ipsum has been the industry's standard dummy text ever
// since the 1500s, when an un`,
//   },
// ];

export default ({ frontmatter, content }) => {
  const { title, author, category, date, bannerImage, tags } = frontmatter;

  // const router = useRouter();
  // const { slug } = router.query;
  // let foundItem = data.find((dataItem) => dataItem.yazi === slug);
  // console.log(foundItem);

  // if (!foundItem) {
  //   return <Error statusCode={404} />;
  // }
  return (
    <Layout title={title}>
      <h2>
        {author} || {date}
      </h2>
      <h3>
        {category} || {tags.join()}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </Layout>
  );
};

export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("posts");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
