import React from "react";
import LottiePlaySeqWithButtons from "../widgets/LottiePlaySeqWithButtons";
//Animations
import Carmela from "../../json/family.json";
// import CountDownFrom10 from "../../json/CountdownTo10.json";

const AnimationSequences = () => {
  return (
    <LottiePlaySeqWithButtons
      JsonAnimation={Carmela}
      name="carmela"
      markers={Carmela.markers}
    />
  );
};

export default AnimationSequences;
