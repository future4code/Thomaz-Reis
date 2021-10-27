import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MatchContainer = styled.div``;
const MatchDetails = styled.div``;
const MatchPhoto = styled.div``;
const MatchName = styled.div``;
const MatchAge = styled.div``;
const MatchBio = styled.div``;

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";

export default function Getdata() {

  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      try {
        const response = await axios
        .get(
          `${url}/thomaz/matches`
        )
        .then((response) => {
          setMatches(response.data.matches);
        });
      } catch (err) {
        console.log("Erro", err.data);
      }
    };
    getMatches();
  }, [matches]);

  return (
    <div>
      <MatchContainer>
        <MatchPhoto>{photo && <img src={photo} alt={MatchName} />}</MatchPhoto>
        <MatchDetails>
          <MatchName>{name}</MatchName>
          <MatchAge>{age} years</MatchAge>
        </MatchDetails>
        <MatchBio>{bio && <p>{bio}</p>}</MatchBio>
      </MatchContainer>
    </div>
  );
}
