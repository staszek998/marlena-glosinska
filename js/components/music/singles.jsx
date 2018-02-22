import React from "react";

export default class Singles extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="section-music__singles">
        <span>SINGLES</span>
        <div className="section-music__singles__covers">
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
          <div className="singles__cover">
            <div className="singles__cover-description">single name</div>
          </div>
        </div>
      </div>
    );
  }
}
