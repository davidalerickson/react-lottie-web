import React from "react";
import LottieContainer from "../widgets/LottieContainer";

//Animations
import EGLogo from "../../json/EGLogo.json";
// import Carmela from "../../json/Carmela.json";
// import CountDownFrom10 from "../../json/CountdownTo10.json";

const Animation = () => {
  return (
    <LottieContainer
      JsonAnimation={EGLogo}
      name="EGLogo"
      markers={EGLogo.markers}
    />
  );
};

export default Animation;
