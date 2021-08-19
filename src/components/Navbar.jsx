import { useHistory, useRouteMatch } from "react-router-dom";

const Navbar = () => {
  const match = useRouteMatch();
  const history = useHistory();

  if (match.path === "/:movieID") {
    return (
      <div className="navbar-container">
        <div className="navbar">
          <h2 className="icon" onClick={() => history.push("/")}>
            <i className="fas fa-long-arrow-alt-left"></i>
          </h2>
          <h1>Movie Name</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar-container">
      <div className="navbar">
        <h1>Movie World</h1>
      </div>
    </div>
  );
};

export default Navbar;
