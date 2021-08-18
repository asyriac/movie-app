import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieAPI } from "../services/movie-api";
import Person from "./Person";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  let languageNames = new Intl.DisplayNames(["en"], { type: "language" });

  useEffect(() => {
    async function fetchData() {
      const movieDetails = await movieAPI.getMovieDetails(movieID);
      const movieCast = await movieAPI.getMovieCast(movieID);
      setMovie({ ...movieDetails, ...movieCast });
      setLoading(false);
    }
    fetchData();
  }, []);

  console.log(movie);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container">
          <div className="movie-detail-header">
            <img className="movie-detail-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <div>
              <h1>{movie.original_title}</h1>
              <h3>Rating: {movie.vote_average} / 10</h3>
              <h3>Language: {languageNames.of(movie.original_language)}</h3>
              <h3>Year: {movie.release_date.split("-")[0]}</h3>
              <h3>Status: {movie.status}</h3>
            </div>
          </div>
          <div className="mt-1">
            <h1>Overview</h1>
            <p>{movie.overview}</p>
          </div>
          <div className="mt-1">
            <h1>Cast</h1>
            <div className="person-list-container">
              {movie.cast.map((item) => (
                <Person details={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
