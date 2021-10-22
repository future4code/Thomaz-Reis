import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import styled from "styled-components";
import PokeCard from "./components/PokeCard";

const AppContainer = styled.div`
  display: flex;
  border: 5px solid black;
  border-radius: 25px;
  flex-direction: column;  
  justify-content: space-evenly;
  width: 50vw;
  height: 75vh;
  background-color:  #ff3737 ;
`;
const HeaderPokedex = styled.div`
  display: flex;
  flex-direction: row; 
  padding: 10px; 
  justify-content: center;
  position: fixed;
  top: 5%;
  align-self: center;
  width: 45vw;
  height: 20%;
  background-color: white;  
  border-radius: 25px;
  font-size: 1.7em;
  font-family: fantasy;
`;
const PokeTitle = styled.div`
  background-color: white;
  align-self: center;
  width: 90%;
  font-size: 1.7em;
`;
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 50%;
  background-color: white;
  justify-content: center;
  text-align: center;
  font-size: 0.7em;
`;
const PokeThings = styled.div`
  display: flex; 
  align-self: center;  
  align-items: end;  
  justify-content: center;
  width: 90%;
  height: 60%;
`;

export const App = () => {
  const [pokeName, setPokeName] = useState("");
  const [pokeList, setPokeList] = useState([]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  const getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((response) => {
        setPokeList(response.data.results);
      })
      .catch((err) => {
        console.log("Erro");
      });
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <AppContainer>
      <HeaderPokedex>
        <PokeTitle>PokeAPI</PokeTitle>
        <SelectContainer>
          Selecione um Pokemón ®
          <select onChange={changePokeName} value={pokeName}>
            <option value={""}>Nenhum</option>
            {pokeList.length &&
              pokeList.map((pokemon) => {
                return (
                  <option key={pokemon.name} value={pokemon.name}>
                    {pokemon.name.toUpperCase()}
                  </option>
                );
              })}
          </select>
        </SelectContainer>
      </HeaderPokedex>
      <PokeThings>{pokeName && <PokeCard pokeName={pokeName} />}</PokeThings>
    </AppContainer>
  );
};

export default App;
