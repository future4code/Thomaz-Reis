import styled from "styled-components";
import axios from "axios";

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

const Cleaner = styled.button`
  width: 6vw;
  max-height: 7vh;
  border-radius: 50%;
  margin: 25px;
  border: 1px solid black;
  color: red;
  font-size: 0.8em;
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

export default function ClearChoices() {
  const putClear = async () => {
    try {
      const response = await axios.put(`${url}/thomaz/clear`);
      alert("Lista de Matches limpa!");
    } catch (err) {
      alert("Erro", err.data);
    }
  };



  return <Cleaner onClick={putClear}>Limpa Matches</Cleaner>;
}
