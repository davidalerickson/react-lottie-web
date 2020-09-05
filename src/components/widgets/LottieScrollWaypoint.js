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

  render() {
    return (
      <Wrapper>
        <div
          className="side-lottie-animation"
          ref={(ref) => (this.animBox = ref)}
        >
          {lottie.goToAndStop(1, true)}
        </div>

        <div className="side-content">
          <Waypoint
            onEnter={() => lottie.goToAndStop(1, true)}
            // onEnter={() => console.log("entered area")}
            // onLeave={() => console.log("left area")}
          >
            {/* Fragments used to avoid error */}
            <div className="waypoint__text">
              <h1>Count Down from 10</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(6, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 9</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(11, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 8</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(16, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 7</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(21, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 6</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(26, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 5</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(31, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 4</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(36, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 3</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(41, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 2</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
          <Waypoint onEnter={() => lottie.goToAndStop(46, true)}>
            <div className="waypoint__text">
              <h1>Count Down from 1</h1>
              <p>Scroll Down to step through Animation</p>
              <div style={{ height: window.innerHeight }}></div>
            </div>
          </Waypoint>
        </div>
      </Wrapper>
    );
  }
}

export default LottieScroll;
