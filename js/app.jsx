require("../scss/main.scss");
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";
import TopBar from "./components/top-bar.jsx";
import Home from "./pages/home.jsx";
import Music from "./pages/music.jsx";
import Photos from "./pages/photos.jsx";
import Videos from "./pages/videos.jsx";
import Contact from "./pages/contact.jsx";
import Footer from "./components/footer.jsx";
import Error from "./components/error.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <div className="nav-compensator" />
        <TopBar />
        <HashRouter>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route exact path="/music" component={Music} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/contact" component={Contact} />
            <Route component={Error} />
          </AnimatedSwitch>
        </HashRouter>
        {/* <Footer /> */}
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<App />, document.getElementById("app"));

  // let nav = document.querySelector("nav");
  // let navCompensator = document.querySelector(".nav-compensator");
  // let docked = false;

  // window.onscroll = () => {
  //   let scrollTop = document.documentElement.scrollTop;
  //   let pathName = this.props.location.pathname;

  //   if (pathName === "/") {
  //     if (scrollTop > 450) {
  //       nav.classList.add("docked");
  //       navCompensator.style.height = "70px";
  //     } else if (scrollTop < 450) {
  //       nav.classList.remove("docked");
  //       navCompensator.style.height = "0px";
  //     }
  //   } else {
  //     if (scrollTop > 50) {
  //       nav.classList.add("docked");
  //       navCompensator.style.height = "70px";
  //     } else if (scrollTop < 50) {
  //       nav.classList.remove("docked");
  //       navCompensator.style.height = "0px";
  //     }
  //   }
  // };
});
