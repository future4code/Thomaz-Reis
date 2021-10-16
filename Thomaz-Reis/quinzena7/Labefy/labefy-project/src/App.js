import React from "react";
import styled from "styled-components";
import AddPlaylists from "./components/AddPlaylists";
import Header from "./components/Header";
import AddMusica from "./components/AddMusica";

const Body = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f0f8ff;
  width: 100%;
  height: 100vh;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`


export default class App extends React.Component {
  state = {
    playlistId: ""
  };

  updatePlaylistID = (playlistId) => {
    this.setState({ playlistId: playlistId });
    console.log(this.state.playlistId)
    console.log("Pegou ID")
  };

  render () {
    return (
      <div>
        <Header/>
      <Body>
        <AddPlaylists updatePlaylistID={this.updatePlaylistID}/>
        <AddMusica/>
      </Body>
      </div>
    )
  }
}