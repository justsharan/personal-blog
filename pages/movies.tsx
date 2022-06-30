import Layout from "components/Layout";
import MovieCard from "components/MovieCard";
import { useEffect, useState } from "react";
import styles from "./movies.module.css";

const API = "https://lboxd.vercel.app/api/lbox?user=justsharan";
const FIRST_DAY_OF_YEAR = Number(new Date(new Date().getFullYear(), 0, 1));

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const res = await fetch(API);
    const body = await res.json();
    setMovies(body);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout title="Movies" current="movies">
      <h1 className={styles.title}>
        Movies I&apos;ve Watched Recently{" "}
        <svg
          viewBox="0 0 500 500"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>letterboxd-decal-dots-neg-rgb</title>
          <desc>Created with Sketch.</desc>
          <defs>
            <rect
              id="path-1"
              x="0"
              y="0"
              width="129.847328"
              height="141.389313"
            ></rect>
            <rect
              id="path-3"
              x="0"
              y="0"
              width="129.847328"
              height="141.389313"
            ></rect>
          </defs>
          <g
            id="letterboxd-decal-dots-neg-rgb"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g id="dots-pos" transform="translate(61.000000, 180.000000)">
              <g id="Dots">
                <ellipse
                  id="Green"
                  fill="#00E054"
                  cx="189"
                  cy="69.9732824"
                  rx="70.0786517"
                  ry="69.9732824"
                ></ellipse>
                <g id="Blue" transform="translate(248.152672, 0.000000)">
                  <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                  </mask>
                  <g id="Mask"></g>
                  <ellipse
                    fill="#40BCF4"
                    mask="url(#mask-2)"
                    cx="59.7686766"
                    cy="69.9732824"
                    rx="70.0786517"
                    ry="69.9732824"
                  ></ellipse>
                </g>
                <g id="Orange">
                  <mask id="mask-4" fill="white">
                    <use xlinkHref="#path-3"></use>
                  </mask>
                  <g id="Mask"></g>
                  <ellipse
                    fill="#FF8000"
                    mask="url(#mask-4)"
                    cx="70.0786517"
                    cy="69.9732824"
                    rx="70.0786517"
                    ry="69.9732824"
                  ></ellipse>
                </g>
                <path
                  d="M129.539326,107.022244 C122.810493,96.2781677 118.921348,83.5792213 118.921348,69.9732824 C118.921348,56.3673435 122.810493,43.6683972 129.539326,32.9243209 C136.268159,43.6683972 140.157303,56.3673435 140.157303,69.9732824 C140.157303,83.5792213 136.268159,96.2781677 129.539326,107.022244 Z"
                  id="Overlap"
                  fill="#556677"
                ></path>
                <path
                  d="M248.460674,32.9243209 C255.189507,43.6683972 259.078652,56.3673435 259.078652,69.9732824 C259.078652,83.5792213 255.189507,96.2781677 248.460674,107.022244 C241.731841,96.2781677 237.842697,83.5792213 237.842697,69.9732824 C237.842697,56.3673435 241.731841,43.6683972 248.460674,32.9243209 Z"
                  id="Overlap"
                  fill="#556677"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </h1>
      <article className={styles.list}>
        {movies
          .filter((m, i) => m.date.watched > FIRST_DAY_OF_YEAR && i < 30)
          .sort((a, b) => b.date.watched - a.date.watched)
          .map((m, i) => (
            <MovieCard key={i} {...m} />
          ))}
      </article>
    </Layout>
  );
}
