import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <title>Vishal Gawade | Software Engineer Portfolio</title>
        <meta name="description" content="Software Engineer Portfolio showcasing Vishal Gawade's work and skills in software development" />
      </Helmet>
      <Main />
    </div>
  );
}

export default App;
