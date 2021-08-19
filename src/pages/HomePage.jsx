import Navbar from "../components/Navbar";
import MovieList from "../components/MovieList";
import { movieAPI } from "../services/movie-api";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <MovieList title="Currently Playing" apiCall={movieAPI.getCurrentlyPlayingMovies} horizontalView={true} />
        <MovieList title="Popular Movies" apiCall={movieAPI.getPopularMovies} horizontalView={false} />
      </div>
    </>
  );
};

export default HomePage;
