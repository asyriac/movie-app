import { useCallback, useEffect, useRef, useState } from "react";
import { movieAPI } from "../services/movie-api";
import MovieCard from "./MovieCard";

const PopularMovieList = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const element = useRef(null);

  async function fetchData() {
    console.log("Exec...");
    setLoading(true);
    const result = await movieAPI.getPopularMovies(pageNo);
    console.log(result);
    setMovies((prev) => [...prev, ...result]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  const fetchMoreData = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        !loading && setPageNo((prev) => prev + 1);
      }
    },
    [loading, pageNo, fetchData]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(fetchMoreData, { threshold: 1 });

    if (element.current) {
      observer.observe(element.current);
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current);
      }
    };
  }, [element, fetchMoreData]);

  return (
    <>
      {movies.length > 0 && (
        <div>
          <h1>Popular Movies</h1>
          <div className="vertical-view-container">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} horizontalView={false} />;
            })}
          </div>
        </div>
      )}
      <div ref={element}>{loading && <h1>Loading...</h1>}</div>
    </>
  );
};

export default PopularMovieList;
