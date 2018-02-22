import React from "react";

export default class Eps extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__eps">
        <span>EPs</span>
        <div className="section-music__eps__covers">
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
          <div className="ep__cover">
            <div className="ep__cover-description">ep name</div>
          </div>
        </div>
      </div>
    );
  }
}
