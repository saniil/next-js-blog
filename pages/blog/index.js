import Layout from "../../components/Layout";
import { styled } from "styled-components";
import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

const BlogDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
  box-sizing: border-box;
`;

const H2 = styled.h2`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding-bottom: 10px;
`;
const BlogWrapper = styled.div`
  margin-top: 30px;
  display: grid;
  gap: 10px;
`;

export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("posts");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}

export default function Index({ posts }) {
  return (
    <div>
      <Layout title={"Blog"}>
        <h2>Yazılarım:</h2>

        <BlogWrapper>
          {posts.map((post) => {
            //extract slug and frontmatter
            const { slug, frontmatter } = post;
            //extract frontmatter properties
            const { title, author, category, date, bannerImage, tags } =
              frontmatter;

            //JSX for individual blog listing
            return (
              <article key={title}>
                <Link href={`/blog/${slug}`}>
                  <h1>{title}</h1>
                </Link>
                <h3>{author}</h3>
                <h3>{date}</h3>
              </article>
            );
          })}
        </BlogWrapper>
      </Layout>
    </div>
  );
}
