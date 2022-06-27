import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import PostCard from "components/PostCard";

type PostInfo = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

export default function (props: { posts: PostInfo[] }) {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Navbar />
      <main>
        {props.posts.map((p) => (
          <PostCard {...p} />
        ))}
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts: PostInfo[] = [];
  for (const file of await readdir("posts")) {
    const { data } = matter(await readFile(`posts/${file}`, "utf-8"));
    posts.push({
      slug: file.slice(0, -3),
      title: data.title,
      date: data.date.toString(),
      description: data.description,
    });
  }
  return { props: { posts } };
}
