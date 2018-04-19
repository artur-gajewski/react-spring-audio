import React, { Component } from "react";
import sample from "./sample.ogg";

class SpringAudio extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <audio autoplay="true" preload="auto">
        <source src={sample} type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
    );
  }
}

export default SpringAudio;
