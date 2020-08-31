import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: white;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
  .lottie-animation {
    width: 100%;
    /* border: solid 1px black;
    border-radius: 5px; */
    margin: 2rem auto;
  }
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
      <Wrapper>
        <div
          className="lottie-animation"
          ref={(ref) => (this.animBox = ref)}
          onMouseEnter={() => this.onAnimEnter()}
          onMouseLeave={() => this.onAnimLeave()}
        ></div>
      </Wrapper>
    );
  }
}

export default LottieContainer;
