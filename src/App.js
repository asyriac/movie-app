import { Route, Switch } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:movieID" component={DetailsPage} />
      </Switch>
    </div>
  );
}

export default App;
