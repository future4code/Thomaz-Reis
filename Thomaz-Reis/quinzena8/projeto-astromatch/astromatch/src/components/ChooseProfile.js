import "../App.css";
import { OptionButton } from "../appStyled";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

export default function GetChoice(props) {
  const [choice, setChoice] = useState(false);

  const postChoosePerson = async () => {
    const body = {
      id: props.profile.id,
      choice: choice,
    };
    try {
      axios.post(`${url}/thomaz/choose-person`, body).then((response) => {
        console.log(response.data);
      });
    } catch (err) {
      console.log("Erro", err.data);
    }
  };
  const onClickChoose = async (choice) => {
    setChoice(choice);
    await postChoosePerson();
    props.getProfileToChoose();
  };

  return (
    <div>
      <ChoiceContainer>
        <OptionButton
          onClick={() => {
            onClickChoose(false);
          }}
        >
          {" "}
          X{" "}
        </OptionButton>
        <OptionButton
          onClick={() => {
            onClickChoose(true);
          }}
        >
          ♥️
        </OptionButton>
      </ChoiceContainer>
    </div>
  );
}
