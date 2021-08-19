import { useHistory } from "react-router-dom";

const MovieCard = ({ movie, horizontalView }) => {
  const history = useHistory();

  const imageSrc = horizontalView ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  return (
    <div className={`card ${horizontalView ? `horizontal-view` : `vertical-view`}`} onClick={handleClick}>
      <img className={`view `} src={imageSrc} />
      {!horizontalView && (
        <div className="movie-card-body-container">
          <h1>{movie.original_title}</h1>
          <h3>Rating: {movie.vote_average} / 10</h3>
          <h3>Language: {languageNames.of(movie.original_language)}</h3>
          <h3>Year: {movie.release_date?.split("-")[0]}</h3>
        </div>
      )}
      {horizontalView && (
        <>
          <h3 style={{ position: "absolute", bottom: "8px", left: "10px" }} className="card-overlay-text">
            {movie.original_title}
          </h3>
          <h3 style={{ position: "absolute", top: "8px", left: "10px" }} className="card-overlay-text">
            {movie.vote_average} / 10
          </h3>
        </>
      )}
    </div>
  );
};

export default MovieCard;
