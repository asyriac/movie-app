import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieAPI } from "../services/movie-api";
import Info from "./Info";

const MovieDetails = () => {
  const { movieID } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  let languageNames = new Intl.DisplayNames(["en"], { type: "language" });

  useEffect(() => {
    async function fetchData() {
      const data = await Promise.all([movieAPI.getMovieDetails(movieID), movieAPI.getMovieCast(movieID)]);

      const movieDetails = data[0];
      const movieCast = data[1];

      setMovie({ ...movieDetails, ...movieCast });
      setLoading(false);
    }
    fetchData();
  }, [movieID]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="movie-detail-header">
            <img className="movie-detail-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`${movie.original_title}-poster`} />
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
            <h2>Cast</h2>
            <div className="info-list-container">
              {movie.cast.map(({ cast_id, name, character, profile_path }) => (
                <Info key={cast_id} name={name} character={character} img_path={profile_path} />
              ))}
              {movie.cast.length === 0 && <h3>Not Available</h3>}
            </div>
          </div>
          <div className="mt-1">
            <h2>Crew</h2>
            <div className="info-list-container">
              {movie.crew.map(({ credit_id, name, job, profile_path }) => (
                <Info key={credit_id} name={name} job={job} img_path={profile_path} />
              ))}
              {movie.crew.length === 0 && <h3>Not Available</h3>}
            </div>
          </div>
          <div className="mt-1">
            <h2>Production Companies</h2>
            <div className="info-list-container">
              {movie.production_companies.map(({ id, name, job, logo_path }) => (
                <Info key={id} name={name} job={job} img_path={logo_path} />
              ))}
              {movie.production_companies.length === 0 && <h3>Not Available</h3>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
