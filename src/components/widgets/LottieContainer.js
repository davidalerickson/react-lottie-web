import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: white;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
`;

export class LottieContainer extends Component {
  componentDidMount() {
    console.log(this.props.JsonAnimation);
    lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.JsonAnimation,
    });
  }

  render() {
    return (
      <Wrapper>
        <div
          style={{ width: 300, margin: "0 auto" }}
          ref={(ref) => (this.animBox = ref)}
        ></div>
      </Wrapper>
    );
  }
}

export default LottieContainer;
