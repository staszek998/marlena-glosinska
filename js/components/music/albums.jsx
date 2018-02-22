import React from "react";

export default class Albums extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__albums">
        <span>ALBUMS</span>
        <div className="section-music__albums__covers">
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
          <div className="album__cover">
            <div className="album__cover-description">album name</div>
          </div>
        </div>
      </div>
    );
  }
}
