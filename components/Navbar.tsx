import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav className={styles.navbar}>
    <span className={styles.title}>
      <Link href="/">Sharan</Link>
    </span>

    <div className={styles.links}>
      <Link href="/posts">Posts</Link>
      {/* <Link href="/movies">Movies</Link> */}
      <Link href="mailto:sharansr@pm.me">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
