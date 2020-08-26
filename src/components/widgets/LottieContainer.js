import React, { Component } from "react";
import lottie from "lottie-web";

export class LottieContainer extends Component {
  componentDidMount() {
    console.log(this.props.JsonAnimation);
    let animObj = lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.JsonAnimation,
    });
  }

  render() {
    return (
      <div
        style={{ width: 300, margin: "0 auto" }}
        ref={(ref) => (this.animBox = ref)}
      ></div>
    );
  }
}

export default LottieContainer;
