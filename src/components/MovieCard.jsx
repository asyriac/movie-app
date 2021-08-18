const CurrentlyPlayingListItem = ({ movie }) => {
  console.log(movie);
  return <img className="responsive-img" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} />;
};

export default CurrentlyPlayingListItem;
  