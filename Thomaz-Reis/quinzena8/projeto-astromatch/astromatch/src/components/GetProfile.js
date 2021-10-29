import "../App.css";
import React, { useState, useEffect } from "react";
import ProfileCard from "./ProfileCard";
import GetChoice from "./ChooseProfile";
import styled from "styled-components";
import axios from "axios";

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";


export default function GetData(props) {
  const [profile, setProfile] = useState({});

  const getProfileToChoose = async () => {
    try {
      await axios
        .get(`${url}/thomaz/person`)
        .then((response) => {
          if (response.data.profile != null) {
            setProfile(response.data.profile);
          } else {
            alert("acabou!");
          }
        });
    } catch (err) {
      console.log("Erro", err.data);
    }
  };

  useEffect(getProfileToChoose, []);


  return (
    <ProfileContainer>
      <ProfileCard profile={profile} />
      <GetChoice profile={profile} getProfileToChoose={getProfileToChoose} />
    </ProfileContainer>
  );
}
