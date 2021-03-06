import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { Waypoint } from "react-waypoint";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: white;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
  .side-lottie-animation {
    position: fixed;
    top: 10rem;
    left: 15%;
    width: 40%;
    margin: 0 auto;
    border: solid 1px black;
    border-radius: 5px;
  }
  .side-content {
    width: 40%;
    margin: 10rem 0 0 60%;
  }
  .waypoint__text {
    text-align: center;
  }
`;

export class LottieScroll extends Component {
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

  framesForWaypoints = [1, 6, 11, 16, 21, 26, 31, 36, 41, 46];

  renderWaypoints() {
    const renderedWaypoints = this.framesForWaypoints.map(
      (frameForWaypoint, index) => {
        return (
          <Waypoint
            onEnter={() => lottie.goToAndStop(frameForWaypoint, true)}
            key={index}
          >
            <div className="waypoint__text">
              <h1>Count Down from {10 - index}</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
        );
      }
    );
    return renderedWaypoints;
  }

  render() {
    console.log(this.renderWaypoints());
    return (
      <Wrapper>
        <div
          className="side-lottie-animation"
          ref={(ref) => (this.animBox = ref)}
        >
          {lottie.goToAndStop(1, true)}
        </div>

        <div className="side-content">{this.renderWaypoints()}</div>
      </Wrapper>
    );
  }
}

export default LottieScroll;
