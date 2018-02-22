import React from "react";

export default class VideoOnTheLeft extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page-videos__left">
        <iframe
          width="560"
          height="315"
          src={this.props.src}
          frameBorder="0"
          allowFullScreen
        />
        <div>
          <span>{this.props.title.toUpperCase()}</span>
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  }
}
