import React, { Component } from "react";
import LottieScrollWaypoint from "../widgets/LottieScrollWaypoint";

import CountdownTo10 from "../../json/CountdownTo10.json";

export class ScrollAnim extends Component {
  render() {
    return (
      <>
        <LottieScrollWaypoint
          JsonAnimation={CountdownTo10}
          name="CountdownTo10"
          markers={CountdownTo10.markers}
        >
          <div>Other Stuff</div>
        </LottieScrollWaypoint>
      </>
    );
  }
}

export default ScrollAnim;
