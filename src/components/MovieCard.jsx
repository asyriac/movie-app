import { useHistory } from "react-router-dom";

const MovieCard = ({ movie, horizontalView }) => {
  const history = useHistory();

  const imageSrc = horizontalView ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  const handleClick = () => {
    history.push(`/${movie.id}`);
  };

  return (
    <div className={`${horizontalView && `horizontal-view`}`}>
      <img className={`view `} src={imageSrc} onClick={handleClick} />
    </div>
  );
};

export default MovieCard;
