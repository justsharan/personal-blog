import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => (
  <p className={styles.footer}>
    &copy; {new Date().getFullYear()} <Link href="/">Sharan</Link>.
  </p>
);

export default Footer;
