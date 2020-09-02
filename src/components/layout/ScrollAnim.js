import React, { Component } from "react";
import LottieScrollTest from "../widgets/LottieScroll";

import CountdownTo10 from "../../json/CountdownTo10.json";

export class ScrollAnim extends Component {
  render() {
    return (
      <>
        <LottieScrollTest
          JsonAnimation={CountdownTo10}
          name="CountdownTo10"
          markers={CountdownTo10.markers}
        />
        <div>Other Stuff</div>
      </>
    );
  }
}

export default ScrollAnim;
