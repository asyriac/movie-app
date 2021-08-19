import { useHistory } from "react-router-dom";

const MovieCard = ({ movie, horizontalView, innerRef, lastItem }) => {
  const history = useHistory();

  const imageSrc = horizontalView ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const languageNames = new Intl.DisplayNames(["en"], { type: "language" });
  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  return (
    <div ref={lastItem && innerRef} className={`card ${horizontalView ? `horizontal-view` : `vertical-view`}`} onClick={handleClick}>
      <img className={`card-img `} src={imageSrc !== null ? imageSrc : movie.poster_path} alt={`${movie.original_title}-poster`} />
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
          <h3 className="card-overlay-text card-overlay-text-top">{movie.original_title}</h3>
          <h3 className="card-overlay-text card-overlay-text-bottom">{movie.vote_average} / 10</h3>
        </>
      )}
    </div>
  );
};

export default MovieCard;
