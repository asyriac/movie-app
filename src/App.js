import { Route, Switch } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/:movieID" component={DetailsPage} />
    </Switch>
  );
}

export default App;
