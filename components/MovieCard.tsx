import Link from "next/link";
import styles from "./MovieCard.module.css";

type MovieCardProps = {
  type: "diary";
  date: {
    published: number;
    watched: number;
  };
  film: {
    title: string;
    year: string;
    image: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
    };
  };
  rating: {
    text: string;
    score: number;
  };
  review?: string;
  spoilers: boolean;
  isRewatch: boolean;
  uri: string;
};

const MovieCard = (props: MovieCardProps) => (
  <Link href={props.uri}>
    <section className={styles.card}>
      <img
        src={props.film.image.large}
        alt={props.film.title}
        width="150"
        height="225"
      />
      <div className={styles.info}>
        <p>
          {props.rating.text}
          {props.isRewatch && " ↻"}
        </p>
        <p>
          {new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "2-digit",
          }).format(props.date.watched)}
        </p>
      </div>
    </section>
  </Link>
);

export default MovieCard;
