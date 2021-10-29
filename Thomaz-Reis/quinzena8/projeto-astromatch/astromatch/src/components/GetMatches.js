import "../App.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MatchContainer = styled.div``;
const CardMatch = styled.div``;
const CardPhoto = styled.div`
  img {
    max-width: 50%;
    height: auto;
    border-radius: 50%;
    object-fit: fit;
    object-position: 50% 0;
    padding: 5px;
  }
`;
const CardName = styled.h3``;

const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/";

export default function GetMatches() {
  const [matches, setMatches] = useState([]);

  const getMatches = async () => {
    try {
      await axios.get(`${url}/thomaz/matches`).then((response) => {
        setMatches(response.data.matches);
        console.log(matches);
      });
    } catch (err) {
      console.log("Erro", err.data);
    }
  };
  useEffect(() => {
    getMatches();
  }, [matches]);

  return (
    <MatchContainer>
      {matches.map((match) => {
        return (
          <CardMatch key={match.id}>
            <CardPhoto alt="photo">
              <img src={match.photo} />
            </CardPhoto>
            <CardName id="name">{match.name}</CardName>
          </CardMatch>
        );
      })}
      {/* <MatchPhoto>
          {photo && <img src={photo} alt={MatchName} />}
        </MatchPhoto>
        <MatchName>{name}</MatchName> */}
    </MatchContainer>
  );
}
