import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";

import SomeJPEG from "../../json/images/perspective_distort.jpg";
import SomeJPEGInvis from "../../json/images/perspective_distort.jpg";

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

export class LottieScroll extends Component {
  componentDidMount() {
    console.log(this.props.JsonAnimation);
    lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: this.props.JsonAnimation,
      name: this.props.name,
    });
  }

  render() {
    return (
      <Wrapper>
        <Parallax
          blur={0}
          bgImage={SomeJPEGInvis}
          bgImageAlt="the cat"
          strength={0}
        >
          <div
            className="lottie-animation"
            ref={(ref) => (this.animBox = ref)}
          ></div>
        </Parallax>

        <div style={{ height: "200px" }}></div>

        <Parallax
          blur={0}
          bgImage={SomeJPEG}
          bgImageAlt="the cat"
          strength={300}
        >
          <div style={{ height: "200px" }}></div>
        </Parallax>
        <div style={{ height: "2000px" }}></div>
      </Wrapper>
    );
  }
}

export default LottieScroll;
