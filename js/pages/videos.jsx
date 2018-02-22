import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import VideoOnTheLeft from '../components/videos/videoOnTheLeft.jsx'
import VideoOnTheRight from '../components/videos/videoOnTheRight.jsx'


export default class Videos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-videos">
        <Nav />
        <div className="section__title">
          <span>VIDEOS</span>
        </div>
        <VideoOnTheLeft
          src="https://www.youtube.com/embed/6F8q22Vkp8M?rel=0&amp;showinfo=0"
          title="Some video title"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat quasi nihil tempore esse doloremque maiores? Repudiandae reiciendis possimus, labore sapiente ullam soluta, in eaque numquam qui dignissimos nostrum ab?"
        />
        <VideoOnTheRight
          src="https://www.youtube.com/embed/vynT_jG_c2s?rel=0&amp;showinfo=0"
          title="Some video title"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat quasi nihil tempore esse doloremque maiores? Repudiandae reiciendis possimus, labore sapiente ullam soluta, in eaque numquam qui dignissimos nostrum ab?"
        />
        <VideoOnTheLeft
          src="https://www.youtube.com/embed/2ELb3rsOLsI?rel=0&amp;showinfo=0"
          title="Some video title"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat quasi nihil tempore esse doloremque maiores? Repudiandae reiciendis possimus, labore sapiente ullam soluta, in eaque numquam qui dignissimos nostrum ab?"
        />
        <VideoOnTheRight
          src="https://www.youtube.com/embed/SOsncW3iGq0?rel=0&amp;showinfo=0"
          title="Some video title"
          description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae placeat quasi nihil tempore esse doloremque maiores? Repudiandae reiciendis possimus, labore sapiente ullam soluta, in eaque numquam qui dignissimos nostrum ab?"
        />

        <Footer />
      </div>
    );
  }
}
