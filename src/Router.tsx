import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
