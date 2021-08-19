import MovieDetails from "../components/MovieDetails";
import Navbar from "../components/Navbar";

const DetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <MovieDetails />
      </div>
    </>
  );
};

export default DetailsPage;
