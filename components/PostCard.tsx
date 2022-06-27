import Link from "next/link";
import styles from "./PostCard.module.css";

type Props = {
  title: string;
  date: string;
  description: string;
  slug: string;
};

const PostCard = (props: Props) => (
  <Link href={`/posts/${props.slug}`}>
    <article className={styles.card}>
      <p className={styles.title}>{props.title}</p>
      <time
        dateTime={new Date(props.date).toISOString()}
        className={styles.date}
      >
        {new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(new Date(props.date))}
      </time>
      <p className={styles.summary}>{props.description}</p>
    </article>
  </Link>
);

export default PostCard;
