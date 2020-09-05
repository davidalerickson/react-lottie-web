import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { Parallax, Background } from "react-parallax";

import SomeJPEG from "../../json/images/perspective_distort.jpg";
import SomeJPEGInvis from "../../json/images/perspective_distort.jpg";
import transparentGif from "../../json/images/transparent.gif";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: white;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
  .lottie-animation {
    position: fixed;
    width: 50%;
    top: 20px;
    right: 10%;
    border: solid 1px black;
    border-radius: 5px;
    margin: 0 auto;
    z-index: 10;
  }
`;

export class LottieScrollTest extends Component {
  state = { frames: 0, animObj: {} };

  componentDidMount() {
    this.anim = lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: this.props.JsonAnimation,
      name: this.props.name,
    });
    this.frames = this.anim.getDuration(true);
    this.setState({ frames: this.frames });
  }

  getParallexScrollHeight() {
    // if parallaxContainer is not null return it's height
    return this.parallaxContainer
      ? this.parallaxContainer.scrollHeight
      : "It is Null";
  }

  render() {
    console.log(`this is called from outside ${this.frames} frames`);
    return (
      <Wrapper>
        {/* <div style={{ height: "1000px" }}>Some Text</div> */}
        <div
          className="lottie-animation"
          ref={(ref) => (this.animBox = ref)}
        ></div>
        {/* The following div gets a ref to be able to know the height of the parallax content */}
        <div ref={(ref) => (this.parallaxContainer = ref)}>
          <Parallax
            blur={0}
            bgImage={transparentGif}
            bgHeight="10000px"
            bgImageAlt="the cat"
            strength={0}
            renderLayer={(percentage) => (
              <div>
                {console.log(percentage)}
                {console.log(window.innerHeight)}

                {lottie.goToAndStop(
                  Math.round(this.frames * percentage) - 25,
                  true
                )}
              </div>
            )}
          >
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>

            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
            <div style={{ height: "200px" }}></div>
            <div>Scroll Down</div>
          </Parallax>
        </div>
      </Wrapper>
    );
  }
}

export default LottieScrollTest;
