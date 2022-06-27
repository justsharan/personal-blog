import { PropsWithChildren } from "react";
import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = (props: PropsWithChildren<{ noFooter?: boolean }>) => (
  <>
    <nav className={styles.navbar}>
      <span className={styles.title}>
        <Link href="/">Sharan</Link>
      </span>
      <div className={styles.links}>
        <Link href="/posts">Posts</Link>
        <Link href="mailto:sharansr@pm.me">Contact</Link>
      </div>
    </nav>
    <main className={styles.content}>{props.children}</main>
    {!props.noFooter && (
      <p className={styles.footer}>
        &copy; {new Date().getFullYear()} <Link href="/">Sharan</Link>.
      </p>
    )}
  </>
);

export default Layout;
