import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

type LayoutProps = {
  noFooter?: boolean;
  current?: "posts" | "movies";
};

const Layout = (props: PropsWithChildren<LayoutProps>) => (
  <>
    <nav className={styles.navbar}>
      <span className={styles.title}>
        <Link href="/">Sharan</Link>
        <script
          async
          defer
          data-website-id="8245a15f-85ef-41e8-b582-48daa5fc7fce"
          src="https://metrics.justsharan.xyz/umami.js"
        ></script>
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
