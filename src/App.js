import "./App.css";
import MovieList from "./components/MovieList";
import { movieAPI } from "./services/movie-api";

function App() {
  return (
    <div className="App">
      <MovieList categoryToFetch={movieAPI.getCurrentlyPlayingMovies} horizontalView={true} title="Currently Playing" />
      <MovieList categoryToFetch={movieAPI.getPopularMovies} title="Popular Movies" />
    </div>
  );
}

export default App;
