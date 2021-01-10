import React from "react";

import Home from "./containers/Home";
import About from "./containers/About";
import Experiences from "./containers/Experiences";
import Achievements from "./containers/Achievements";
import Projects from "./containers/Projects";
import Footer from "./containers/Footer";

function App() {
  return (
    <React.Fragment>
      <Home />
      <About />
      <Experiences />
      <Achievements />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
