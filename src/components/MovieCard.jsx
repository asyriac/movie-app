const MovieCard = ({ movie, horizontalView }) => {
  console.log(movie);

  const imageSrc = horizontalView ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

  return <img className={`view ${horizontalView && `horizontal-view`}`} src={imageSrc} />;
};

export default MovieCard;
