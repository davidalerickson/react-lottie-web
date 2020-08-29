import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  .lottie-animation {
    z-index: 1; // lowest in your page
    position: static;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
`;

export class LottieFullPage extends Component {
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

  render() {
    return (
      <Wrapper>
        <div
          className="lottie-animation"
          ref={(ref) => (this.animBox = ref)}
        ></div>
      </Wrapper>
    );
  }
}

export default LottieFullPage;
