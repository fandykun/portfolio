import React from "react";

import Home from "./containers/Home";
import About from "./containers/About";
import Experiences from "./containers/Experiences";
import Achievements from "./containers/Achievements";

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Experiences />
      <Achievements />
    </React.Fragment>
  );
}

export default App;
