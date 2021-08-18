import { useEffect, useState } from "react";
import { movieAPI } from "../services/movie-api";
import MovieCard from "./MovieCard";

const MovieList = ({ categoryToFetch, horizontalView, title }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    async function fetchData() {
      const result = await categoryToFetch();
      setMovies(result);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{title}</h1>
          <div className={`${horizontalView ? `horizontal-view-container ` : `vertical-view-container  `}`}>
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} horizontalView={horizontalView} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
