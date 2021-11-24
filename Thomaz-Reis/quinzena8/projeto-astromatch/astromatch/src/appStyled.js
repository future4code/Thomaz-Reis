import styled from "styled-components";

export const Astromatch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 40vw;
  height: 66vh;
  border: 2px solid black;
  background-color: white-smoke;
  border-radius: 10%;
  box-shadow: 1px 1px 0px rgb(49, 49, 49), 2px 2px 0px rgb(49, 49, 49),
    3px 3px 0px rgb(49, 49, 49), 4px 4px 0px rgb(49, 49, 49);
`;
export const ListaMatches = styled.button`
  width: 80px;
  height: 120px;
  border-radius: 50%;
  margin: 25px;
  border: 1px solid black;
  color: red;
  font-size: 1em;
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
`;
export const Cleaner = styled.button`
  width: 80px;
  height: 120px;
  border-radius: 50%;
  margin: 25px;
  border: 1px solid black;
  color: red;
  font-size: 1em;
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
`;
export const Title = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: start;
  font-family: monospace;
`;
export const Footer = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: start;
  font-family: monospace;
`;
export const StyleBlue = styled.p`
  color: blue;
`;
export const StyleRed = styled.p`
  color: red;
`;

export const OptionButton = styled.button`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  border: 1px solid black;
  color: red;
  font-size: 1.2em;
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
