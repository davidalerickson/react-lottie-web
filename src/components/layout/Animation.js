import React from "react";
import LottieContainer from "../widgets/LottieContainer";

//Animations
import Carmela from "../../json/Carmela.json";
import CountDownFrom10 from "../../json/CountdownTo10.json";

const Animation = () => {
  return (
    <LottieContainer
      JsonAnimation={Carmela}
      name="carmela2"
      markers={Carmela.markers}
    />
  );
};

export default Animation;
