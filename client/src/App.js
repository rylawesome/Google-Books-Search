import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav";
import Jumbo from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Jumbo />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/savedbooks">
            <Saved />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
