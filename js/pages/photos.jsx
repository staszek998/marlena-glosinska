import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
import Nav from "../components/nav.jsx";
import Gallery from "react-photo-gallery";
import Footer from "../components/footer.jsx";

const PHOTO_SET = [
  {
    src:
      "https://image.ibb.co/jLsATH/14633137_1163100917097345_1022928928540682580_o.jpg",
    width: 4,
    height: 3
  },
  {
    src:
      "https://image.ibb.co/efaVTH/14195370_1120868161320621_7266972057748746184_o.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://image.ibb.co/cvaavx/cover_4.jpg",
    width: 1.2,
    height: 1
  },
  {
    src: "https://image.ibb.co/i3Lavx/cover_1.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://image.ibb.co/ddUqTH/cover_2.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://image.ibb.co/d62c8H/image23.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://image.ibb.co/jkmhax/image22.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://image.ibb.co/eUNc8H/image21.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://image.ibb.co/hJLVTH/image20.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://image.ibb.co/igi62c/image19.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://image.ibb.co/bzddFx/image18.png",
    width: 16,
    height: 9
  },
  {
    src: "https://image.ibb.co/dWPJFx/image16.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://image.ibb.co/fvWb2c/image14.jpg",
    width: 1,
    height: 1
  },
  {
    src: "https://image.ibb.co/ceWLTH/image13.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://image.ibb.co/kORXax/image12.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/gbLfTH/image11.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/mbUw2c/image10.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/khhuoH/image8.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/bCf3hc/image9.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://image.ibb.co/mTBn8H/image6.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/jkbyFx/image7.jpg",
    width: 3,
    height: 4
  },
  {
    src: "https://image.ibb.co/bGJpNc/image5.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://image.ibb.co/n4fQvx/image4.jpg",
    width: 4,
    height: 3
  },
  {
    src: "https://image.ibb.co/bS1LTH/image2.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://image.ibb.co/cpPw2c/image1.jpg",
    width: 3,
    height: 2
  },
  {
    src:
      "https://image.ibb.co/fZipNc/18058046_1433647806709320_7407940045128069944_n.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://image.ibb.co/g0xuoH/27368390_1783693328371431_8548575665612480406_o.jpg",
    width: 13,
    height: 16
  }
];

class GalleryComponent extends React.Component {
  render() {
    return (
      <div className="page-photos-gallery">
        <Gallery photos={PHOTO_SET} />
      </div>
    );
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
        <Footer />
      </div>
    );
  }
}
