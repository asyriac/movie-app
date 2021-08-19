import { useCallback, useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, apiCall, horizontalView }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const element = useRef(null);

  async function fetchData() {
    setLoading(true);
    const result = await apiCall(pageNo);
    setMovies((prev) => [...prev, ...result]);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNo]);

  const fetchMoreData = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        !loading && setPageNo((prev) => prev + 1);
      }
    },
    [loading]
  );

  useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver(fetchMoreData, { threshold: 0.5 });

    if (element.current) {
      observer.observe(element.current);
      observerRefValue = element.current;
    }

    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, [element, fetchMoreData]);

  return (
    <>
      {movies.length > 0 && (
        <div>
          <h1>{title}</h1>
          <div className={`${horizontalView ? `horizontal-view-container` : `vertical-view-container`}`}>
            {movies.map((movie, index) => {
              if (index === movies.length - 1) return <MovieCard lastItem={true} innerRef={element} key={movie.id} movie={movie} horizontalView={horizontalView} />;
              else return <MovieCard key={movie.id} movie={movie} horizontalView={horizontalView} />;
            })}
            <div>{loading && <h1>Loading...</h1>}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieList;
