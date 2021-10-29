import "./App.css";
import React from "react";
import GetData from "./components/GetProfile";
import GetMatches from "./components/GetMatches";
import ClearChoices from "./components/ClearChoices";
import {
  Astromatch,
  ListaMatches,
  Title,
  StyleBlue,
  StyleRed,
} from "./appStyled";

function App() {
  return (
    <div className="App">
      <Astromatch>
        <GetMatches />
        <Title>
          <StyleBlue>astro</StyleBlue>
          <StyleRed>match</StyleRed>
        </Title>
        <GetData />
        <ClearChoices />
      </Astromatch>
    </div>
  );
}

export default App;
