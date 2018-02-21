import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Gallery from "react-photo-gallery";

const PHOTO_SET = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "../../images/marlena/image2.jpeg",
    width: 1,
    height: 1
  }
];

class GalleryComponent extends React.Component {
  render() {
    return <Gallery photos={PHOTO_SET} />;
  }
}

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-photos">
        <Nav />
        <div className="section-music__title">
          <span>PHOTOS</span>
        </div>
        <GalleryComponent />
      </div>
    );
  }
}
