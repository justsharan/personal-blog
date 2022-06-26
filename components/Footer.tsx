import Link from "next/link";
import styles from "./Footer.module.css";

export default () => (
  <p className={styles.footer}>
    &copy; {new Date().getFullYear()} <Link href="/">Sharan</Link>.
  </p>
);
