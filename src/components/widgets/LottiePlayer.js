import React, { Component } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const ButtonWrapper = styled.div`
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
  }

  onAnimEnter = () => {
    lottie.pause(this.props.name);
  };

  onAnimLeave = () => {
    lottie.play(this.props.name);
  };

  render() {
    return (
      <>
        <div
          style={{ width: 300, margin: "0 auto" }}
          ref={(ref) => (this.animBox = ref)}
          onMouseEnter={() => this.onAnimEnter()}
          onMouseLeave={() => this.onAnimLeave()}
        ></div>
        <ButtonWrapper>
          <div className="btn">David</div>
          <div
            className="btn"
            onClick={() => this.state.animObj.playSegments([10, 100], true)}
          >
            Carmela
          </div>
          <div className="btn">Gustavo</div>
        </ButtonWrapper>
      </>
    );
  }
}

export default LottieContainer;
