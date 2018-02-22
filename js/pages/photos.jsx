import React from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav.jsx";
import Footer from "../components/footer.jsx";
import Gallery from "../components/photos/gallery.jsx";

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-photos">
        <Nav />
        <div className="section__title">
          <span>PHOTOS</span>
        </div>
        <Gallery />
        <Footer />
      </div>
    );
  }
}
