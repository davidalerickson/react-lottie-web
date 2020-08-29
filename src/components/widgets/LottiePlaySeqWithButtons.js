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
    width: 50%;
    border: solid 1px black;
    border-radius: 5px;
    margin: 2rem auto;
  }
  .controls {
    display: flex;
    justify-content: center;
    margin: 1rem auto;
  }
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
    cursor: pointer;
  }
  .btn:hover {
    background-color: #4095c6;
  }
`;

export class LottiePlaySeqWithButtons extends Component {
  state = { animObj: {} };

  componentDidMount() {
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

  renderButtons() {
    //extract markers and frames from JsonAnimation
    const markers = this.props.JsonAnimation.markers;
    const inOutFrames = markers.map((el) => [
      el.cm.toLowerCase(),
      Math.round(el.tm),
    ]);
    //group markers into in/out pairs
    const InOutFramePairs = inOutFrames.reduce(function (
      result,
      value,
      index,
      array
    ) {
      if (index % 2 === 0) result.push(array.slice(index, index + 2));
      return result;
    },
    []);

    //map over inOutFramePairs to create render buttons which will call lottie playSegments
    // console.log(InOutFramePairs);
    const buttons = InOutFramePairs.map((el, index) => {
      return (
        <div
          key={el[0][1]}
          className="btn"
          onClick={() =>
            this.state.animObj.playSegments([el[0][1], el[1][1]], true)
          }
        >
          {el[0][0]}
        </div>
      );
    });
    return buttons;
  }

  render() {
    return (
      <Wrapper>
        <div
          className="lottie-animation"
          ref={(ref) => (this.animBox = ref)}
          onMouseEnter={() => this.onAnimEnter()}
          onMouseLeave={() => this.onAnimLeave()}
        ></div>
        <div className="controls">
          <div>{this.renderButtons()}</div>
        </div>
      </Wrapper>
    );
  }
}

export default LottiePlaySeqWithButtons;
