import CurrentlyPlayingList from "../components/CurrentlyPlayingList";
import Navbar from "../components/Navbar";
import PopularMovieList from "../components/PopularMovieList";
import { movieAPI } from "../services/movie-api";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <CurrentlyPlayingList />
        <PopularMovieList />
      </div>
    </>
  );
};

export default HomePage;
