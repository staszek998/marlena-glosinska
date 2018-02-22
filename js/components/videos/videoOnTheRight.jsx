import React from "react";

export default class VideoOnTheRight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-videos__right">
        <div>
          <span>{this.props.title.toUpperCase()}</span>
          <p>{this.props.description}</p>
        </div>
        <iframe
          width="560"
          height="315"
          src={this.props.src}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}
