import MovieList from "../components/MovieList";
import { movieAPI } from "../services/movie-api";

const HomePage = () => {
  return (
    <>
      <MovieList categoryToFetch={movieAPI.getCurrentlyPlayingMovies} horizontalView={true} title="Currently Playing" />
      <MovieList categoryToFetch={movieAPI.getPopularMovies} title="Popular Movies" />
    </>
  );
};

export default HomePage;
