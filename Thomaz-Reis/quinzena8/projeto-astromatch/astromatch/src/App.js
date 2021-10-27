import "./App.css";
import React from "react";
import styled from "styled-components";
import GetProfile from "./components/GetProfile";

const Astromatch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 50vw;
  height: 70vh;
  border: 2px solid black;
  background-color: white-smoke;
  border-radius: 10%;
  box-shadow: 1px 1px 0px rgb(49, 49, 49), 2px 2px 0px rgb(49, 49, 49),
    3px 3px 0px rgb(49, 49, 49), 4px 4px 0px rgb(49, 49, 49);
`;
const Header = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: start;
  font-family: monospace;
`;
const Footer = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: start;
  font-family: monospace;
`;
const StyleBlue = styled.p`
  color: blue;
`;
const StyleRed = styled.p`
  color: red;
`;

const OptionButton = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid black;
  color: red;
  font-size: 50px;
  transform: scale(0.7);
  transition: 0.2s;
  position: relative;
  box-shadow: 0 0 15px 0 rgba(205, 205, 205, 0.73);
  overflow: hidden;
  background-color: white;

  :focus {
    outline: none;
  }

  :hover {
    background-color: white;
    color: red;
    transform: scale(0.8);
  }

  :active {
    :before {
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      content: "";
    }
  }
`;


function App() {
  return (
    <div className="App">
      <Astromatch>
        <Header>
          <StyleBlue>astro</StyleBlue>
          <StyleRed>match</StyleRed>
        </Header>
        <GetProfile />
        <Footer>
          <OptionButton>X</OptionButton>
          <OptionButton>♥️</OptionButton>
        </Footer>
      </Astromatch>
    </div>
  );
}

export default App;
