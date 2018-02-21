require("../scss/main.scss");
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import TopBar from "./components/top-bar.jsx";
import Home from "./pages/home.jsx";
import Music from "./pages/music.jsx";
import Footer from "./components/footer.jsx";
import Error from "./components/error.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <TopBar />
        <HashRouter>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route component={Error} />
          </Switch>
        </HashRouter>
        <Footer />
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));
});
