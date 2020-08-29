import React from "react";
import LottieFullPage from "../widgets/LottieFullPage";

//Animations
import Carmela from "../../json/Carmela.json";
// import CountDownFrom10 from "../../json/CountdownTo10.json";

const FullPage = () => {
  return (
    <LottieFullPage
      JsonAnimation={Carmela}
      name="carmela2"
      markers={Carmela.markers}
    />
  );
};

export default FullPage;
