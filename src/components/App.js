import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Container from "./layout/Container";

import Header from "./Header";
import Home from "./layout/Home";
import Animation from "./layout/Animation";
import AnimationSequences from "./layout/AnimationSequences";
import FullPage from "./layout/FullPage";
import ScrollAnim from "./layout/ScrollAnim";

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
            <HashRouter basename="/">
              {/* <HashRouter basename="/" history={history}> */}
              <Header />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Animation" exact component={Animation} />
                <Route
                  path="/AnimationSequences"
                  exact
                  component={AnimationSequences}
                />
                <Route path="/FullPage" exact component={FullPage} />
                <Route path="/Scroll" exact component={ScrollAnim} />
              </Switch>
            </HashRouter>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
