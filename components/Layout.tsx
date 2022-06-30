import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";
import Head from "next/head";

type LayoutProps = {
  noFooter?: boolean;
  current?: "posts" | "movies";
  title?: string;
};

const Layout = (props: PropsWithChildren<LayoutProps>) => (
  <>
    <Head>
      <title>{props.title}</title>
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<script async defer data-website-id="8245a15f-85ef-41e8-b582-48daa5fc7fce" src="https://metrics.justsharan.xyz/umami.js"></script>',
        }}
      ></div>
    </Head>
    <nav className={styles.navbar}>
      <span className={styles.title}>
        <Link href="/">Sharan</Link>
      </span>
      <div className={styles.links}>
        <Link href="/posts">
          {props.current === "posts" ? <strong>Posts</strong> : "Posts"}
        </Link>
        <Link href="/movies">
          {props.current === "movies" ? <strong>Movies</strong> : "Movies"}
        </Link>
        <Link href="mailto:sharansr@pm.me">Contact</Link>
      </div>
    </nav>
    <main className={styles.content}>{props.children}</main>
    {!props.noFooter && (
      <p className={styles.footer}>
        &copy; 2021-{new Date().getFullYear()} Sharan.
      </p>
    )}
  </>
);

export default Layout;
