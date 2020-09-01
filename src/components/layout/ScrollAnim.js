import React, { Component } from "react";
import LottieScroll from "../widgets/LottieScroll";

import CountdownTo10 from "../../json/CountdownTo10.json";

export class ScrollAnim extends Component {
  render() {
    return (
      <LottieScroll
        JsonAnimation={CountdownTo10}
        name="EGLogo"
        markers={CountdownTo10.markers}
      />
    );
  }
}

export default ScrollAnim;
