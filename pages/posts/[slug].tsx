import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import styles from "./[slug].module.css";

type Props = {
  data: Record<string, string>;
  parsed: string;
};

export default function ({ data, parsed }: Props) {
  return (
    <>
      <Head>
        <title>{data.title} - Sharan</title>
      </Head>
      <Navbar />
      <main className={styles.content}>
        <header className={styles.title}>
          <h1 className={styles.title}>{data.title}</h1>
          <em>
            Posted on{" "}
            {new Intl.DateTimeFormat("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(data.date))}
          </em>
        </header>
        <article dangerouslySetInnerHTML={{ __html: parsed }} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  // Get all posts
  const files = await readdir("posts");

  // Pass in all possible slugs for Next.js to pre-render
  return {
    paths: files.map((file) => ({ params: { slug: file.slice(0, -3) } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  // Load post
  const post = await readFile(`posts/${params.slug}.md`, "utf-8");

  // Extract front matter and parsed markdown
  const { content, data } = matter(post);
  if (data.date instanceof Date) {
    data.date = data.date.toISOString();
  }
  const parsed = marked(content);

  return {
    props: { data, parsed },
  };
}
