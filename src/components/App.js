import React from "react";
import Container from "./layout/Container";
import LottieContainer from "../components/widgets/LottieContainer";
// import LottiePlayer from "../components/widgets/LottiePlayer";
import LottiePlaySeqWithButtons from "./widgets/LottiePlaySeqWithButtons";

//Animations
import Carmela from "../json/family.json";
import CountDownFrom10 from "../json/CountdownTo10.json";

import { ThemeProvider } from "styled-components";

class App extends React.Component {
  state = {
    theme: {
      colorPrimary: "#eb2f64",
      colorPrimaryLight: "#FF3366",
      colorPrimaryDark: "#BA265D",
      bpLargest: "75em", //1200px
      bpLarge: "68em", //1100px
      bpMedium: "56.25em", //900px
      bpSmall: "37.5em", //900px
      bpSmallest: "31.25em", //900px
    },
  };

  render() {
    return (
      <>
        <ThemeProvider theme={this.state.theme}>
          <Container marginTB="8rem" maxWidth="120rem">
            <LottiePlaySeqWithButtons
              JsonAnimation={Carmela}
              name="carmela"
              markers={Carmela.markers}
            />
            <LottieContainer
              JsonAnimation={Carmela}
              name="carmela2"
              markers={Carmela.markers}
            />
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
