import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: white;
  box-shadow: var(--shadow-light);
  border-radius: 5px;
  .btn {
    display: inline-block;
    padding: 0.3em 1.2em;
    margin: 0 0.3em 0.3em 0;
    border-radius: 2em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    color: #ffffff;
    background-color: #4eb5f1;
    text-align: center;
    transition: all 0.2s;
  }
  .btn:hover {
    background-color: #4095c6;
  }
`;

export class LottieContainer extends Component {
  state = { animObj: {} };

  componentDidMount() {
    console.log(this.props.JsonAnimation.markers);
    let anim = lottie.loadAnimation({
      container: this.animBox, //the DOM element which will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: this.props.JsonAnimation,
      name: this.props.name,
    });

    this.setState({ animObj: anim });
    //setup some event listners
    // anim.onLoopComplete = () => {
    //   console.log("Animation Complete");
    //   anim.setDirection(-1);
    // };
  }

  onAnimEnter = () => {
    lottie.pause(this.props.name);
  };

  onAnimLeave = () => {
    lottie.play(this.props.name);
  };

  frameFromName = (name) => {
    const markers = this.props.JsonAnimation.markers;
    let frameFromMarker = 0;

    let foundMarkerElement = markers.find((element) => {
      return element.cm.toLowerCase() === name.toLowerCase();
    });

    frameFromMarker = Math.round(foundMarkerElement.tm);

    return frameFromMarker;
  };

  render() {
    console.log(this.frameFromName("david"));
    return (
      <Wrapper>
        <div
          style={{ width: 300, margin: "0 auto" }}
          ref={(ref) => (this.animBox = ref)}
          onMouseEnter={() => this.onAnimEnter()}
          onMouseLeave={() => this.onAnimLeave()}
        ></div>
        <div
          className="btn"
          onClick={() =>
            this.state.animObj.playSegments(
              [this.frameFromName("david"), this.frameFromName("david-out")],
              true
            )
          }
        >
          David
        </div>
        <div
          className="btn"
          // onClick={() => this.state.animObj.playSegments([10, 100], false)}
          onClick={() =>
            this.state.animObj.playSegments(
              [
                this.frameFromName("carmela"),
                this.frameFromName("carmela-out"),
              ],
              true
            )
          }
        >
          Carmela
        </div>
        <div
          className="btn"
          onClick={() =>
            this.state.animObj.playSegments(
              [
                this.frameFromName("gustavo"),
                this.frameFromName("gustavo-out"),
              ],
              true
            )
          }
        >
          Gustavo
        </div>
      </Wrapper>
    );
  }
}

export default LottieContainer;
