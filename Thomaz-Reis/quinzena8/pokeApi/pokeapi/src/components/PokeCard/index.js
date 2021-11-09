import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



const PokeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: stretch;
  width: 100%;
  height: auto;
`;
const PokeDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: white;
  flex-grow: 1;
  font-family: monospace;
  box-shadow: 1px 1px 0px rgb(49, 49, 49), 2px 2px 0px rgb(49, 49, 49),
    3px 3px 0px rgb(49, 49, 49), 4px 4px 0px rgb(49, 49, 49),
    5px 5px 0px rgb(49, 49, 49), 6px 6px 0px rgb(49, 49, 49),
    7px 7px 0px rgb(49, 49, 49), 8px 8px 0px rgb(49, 49, 49),
    8px 8px 0px rgb(49, 49, 49), 9px 9px 0px rgb(49, 49, 49);
`;
const PokeImg = styled.div`
  width: 50%;
  height: auto;
  border-radius: 50%;
  background-color: white;
  align-self: center;
  flex-grow: 2;
  box-shadow: 1px 1px 0px rgb(49, 49, 49), 2px 2px 0px rgb(49, 49, 49),
    3px 3px 0px rgb(49, 49, 49), 4px 4px 0px rgb(49, 49, 49),
    5px 5px 0px rgb(49, 49, 49), 6px 6px 0px rgb(49, 49, 49),
    7px 7px 0px rgb(49, 49, 49), 8px 8px 0px rgb(49, 49, 49),
    8px 8px 0px rgb(49, 49, 49), 9px 9px 0px rgb(49, 49, 49);
`;
const PokeType = styled.div``;
const PokeName = styled.div`
  background-color: #e2e2e2;
  border-radius: 25px;
  padding: 5px;
`;
const PokeWeight = styled.div`
  background-color: #e2e2e2;
  border-radius: 25px;
  padding: 5px;
`;

export default function PokeCard(props) {
  const [pokeName, setPokeName] = useState("");
  const [weight, setWeight] = useState("");
  const [types, setTypes] = useState("");
  const [sprites, setSprites] = useState("");

  

  console.log(props.pokeName);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
      .then((response) => {
        setPokeName(response.data.name.toUpperCase());
        setWeight(response.data.weight);
        setTypes(response.data.types[0].type.name.toUpperCase());
        setSprites(response.data.sprites.front_default);
      })
      .catch((err) => {
        console.log("Erro");
      });
  }, [props.pokeName]);

  

  return (
    <div>
      <PokeContainer>
        <PokeImg>{sprites && <img src={sprites} alt={pokeName} />}</PokeImg>
        <PokeDetails>
          <PokeName>{pokeName}</PokeName>
          <PokeType>{types && <p>{types}</p>}</PokeType>
          <PokeWeight>{weight} Kg</PokeWeight>
        </PokeDetails>
      </PokeContainer>
    </div>
  );
}
