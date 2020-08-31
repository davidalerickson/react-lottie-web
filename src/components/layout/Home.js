import React from "react";
import styled from "styled-components";
import LottieContainer from "../widgets/LottieContainer";

//Animations
import EGLogo from "../../json/EGLogo.json";
// import Carmela from "../../json/Carmela.json";
// import CountDownFrom10 from "../../json/CountdownTo10.json";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(min-content);
  }
  .leftContent {
    margin: auto auto;
  }
  .heading-right {
    padding-bottom: 0.6rem;
  }
  .rightContent {
    padding: 5rem 10rem 5rem 0;
    text-align: justify;
    @media only screen and (max-width: 900px) {
      padding: 5rem 10rem 5rem 5rem;
    }
  }
  .content-right {
    font-size: 1.2rem;
    padding-bottom: 0.4rem;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <div className="leftContent">
        <LottieContainer
          JsonAnimation={EGLogo}
          name="EGLogo"
          markers={EGLogo.markers}
        />
      </div>
      <div className="rightContent">
        <h1 className="heading-right">Lottie Animation Examples</h1>
        <p className="content-right">
          Lottle is a javascript library produced by AirBnb which allows
          programatic control over animations produced in Adobe AFter Effects
          and which are exported as JSON by the Boodymovin extension.
        </p>
        <p className="content-right">
          It has gained popularity in recent years because complex animations
          can be produced by designers in After Effects and do not need to be
          laboriously hand coded by programmers. They are also have much smaller
          file sizes than comparable gif or video animations. All the animations
          that are demonstrated here are less than 50kb in size.
        </p>
        <p className="content-right">
          Check out the some of the ways that Lottie can be used to control
          animations.
        </p>
      </div>
    </Wrapper>
  );
};

export default Home;
