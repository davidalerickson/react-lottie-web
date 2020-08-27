import React, { Component } from "react";
import lottie from "lottie-web";

export class LottieContainer extends Component {
  componentDidMount() {
    console.log(this.props.JsonAnimation);
    lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.JsonAnimation,
      name: this.props.name,
    });
  }

  onAnimEnter = () => {
    lottie.pause(this.props.name);
  };

  onAnimLeave = () => {
    lottie.play(this.props.name);
  };

  render() {
    return (
      <div
        style={{ width: 300, margin: "0 auto" }}
        ref={(ref) => (this.animBox = ref)}
        onMouseEnter={() => this.onAnimEnter()}
        onMouseLeave={() => this.onAnimLeave()}
      ></div>
    );
  }
}

export default LottieContainer;
