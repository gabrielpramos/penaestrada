import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BottomNavBar from "./components/bottom-navbar/BottomNavBar";

function App() {
  const history = createBrowserHistory();

  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Redirect to="/map"></Redirect>
          </Route>
          <Route path="/map" component={HomePage} />
        </Switch>
      </Router>

      <BottomNavBar history={history} />
    </>
  );
}

export default App;
