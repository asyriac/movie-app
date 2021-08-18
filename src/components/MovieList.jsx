import { useEffect, useState } from "react";
import { movieAPI } from "../services/movie-api";
import MovieCard from "./MovieCard";

const CurrentlyPlaylingList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  console.log(movies);

  useEffect(() => {
    async function fetchData() {
      const result = await movieAPI.getCurrentlyPlayingMovies();
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
        <div className="flex currently-playing-container">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      )}
    </>
  );
};

export default CurrentlyPlaylingList;
