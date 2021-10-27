import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const MatchDetails = styled.div``;
const MatchPhoto = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
  img {
height: 200px;
width: 200px;
border-radius: 50%;
object-fit: cover;
  }
`;

const MatchName = styled.div``;
const MatchAge = styled.div``;
const MatchBio = styled.div`

`;

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch";

export default function GetData() {
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [bio, setBio] = useState("");

  useEffect(() => {
    const getProfileToChoose = () => {
      try {
        axios.get(`${url}/thomaz/person`).then((response) => {
          setId(response.data.profile.id);
          setAge(response.data.profile.age);
          setName(response.data.profile.name);
          setPhoto(response.data.profile.photo);
          setBio(response.data.profile.bio);
          console.log(id, age, name, bio);
        });
      } catch (err) {
        console.log("Erro", err.data);
      }
    };
    return getProfileToChoose();
  }, []);

  const changeMatchProfile = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <MatchContainer>
        <MatchPhoto>
          {photo && (
            <img
              src={photo}
              alt={name}
            />
          )}
        </MatchPhoto>
        <MatchDetails>
          <MatchName>{name}</MatchName>
          <MatchAge>{age} years</MatchAge>
        </MatchDetails>
        <MatchBio>{bio && <p>{bio}</p>}</MatchBio>
      </MatchContainer>
    </div>
  );
}
