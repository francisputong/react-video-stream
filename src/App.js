import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import VideoPopular from "./components/Navigation/VideoPopular";
import Projects from "./components/Navigation/Projects";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route path="/" exact component={VideoPopular} />
        <Route path="/projects" exact component={Projects} />
      </BrowserRouter>
    </>
  );
};

export default App;
