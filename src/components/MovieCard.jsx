import { useHistory } from "react-router-dom";

const MovieCard = ({ movie, horizontalView }) => {
  const history = useHistory();

  const imageSrc = horizontalView ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  return <img className={`view ${horizontalView && `horizontal-view`}`} src={imageSrc} onClick={handleClick} />;
};

export default MovieCard;
