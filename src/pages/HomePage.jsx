import CurrentlyPlayingList from "../components/CurrentlyPlayingList";
import PopularMovieList from "../components/PopularMovieList";
import { movieAPI } from "../services/movie-api";

const HomePage = () => {
  return (
    <>
      <CurrentlyPlayingList />
      <PopularMovieList />
    </>
  );
};

export default HomePage;
