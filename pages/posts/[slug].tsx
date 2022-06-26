import { GetStaticPropsContext } from "next";
import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

type Props = {
  data: Record<string, string>;
  parsed: string;
};

export default function (props: Props) {
  return (
    <main>
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: props.parsed }} />
    </main>
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
  const post = await readFile(`posts/${params.slug}.md`, { encoding: "utf-8" });

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
