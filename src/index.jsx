import React, { Component } from "react";
import sample from "./sample.ogg";

class SpringAudio extends Component {
  render() {
    return (
      <audio autoplay="true" preload="auto">
        <source src={sample} type="audio/ogg" />
      </audio>
    );
  }
}

export default SpringAudio;
