import React from "react";
import styled from "styled-components";
import axios from "axios";
import App from "../App";
import Youtube from "react-youtube";
var getYoutubeID = require("get-youtube-id");

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const header = {
  headers: {
    Authorization: "tom-capila-banu",
  },
};

const InputCreatDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 25%;
  align-self: center;
  padding: 30px @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
  }
`;
const ContainerAddPlaylist = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  heigth: 100vh;
  align-self: start;
  margin: 1px solid black;
`;
const InputPlaylist = styled.input`
  display: flex;
  flex-direction: column;
  width: 240px;
  font-family: "Verdana";
  align-self: center;
  border-radius: 25px;
`;
const ButtonCreate = styled.button`
  display: flex;
  flex-direction: column;
  width: 120px;
  border-radius: 25px;
  font-family: "Verdana";
  align-self: center;
`;
const ButtonDelete = styled.button`
  display: flex;
  flex-direction: column;
  color: #5f9ea0;
  font-family: "Verdana";
  align-self: center;
  width: 22px;
  height: 22px;
  border-radius: 22px;
  border: 0;
  padding-top: 5%;
  padding-right: 5%;
  :hover {
    font-weight: bold;
    box-shadow: 3px 3px 3px black;
  }
`;
const ButtonSelect = styled.button`
  display: flex;
  flex-direction: column;
  color: #5f9ea0;
  font-family: "Verdana";
  align-self: center;
  width: 22px;
  height: 22px;
  border-radius: 22px;
  border: 0;
  margin: 0;
  padding-top: 5%;
  :hover {
    font-weight: bold;
    box-shadow: 3px 3px 3px black;
  }
`;
const ListaTodasPlaylists = styled.div`
  background-color: #f0f8ff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 25%;
  heigth: 100vh;
  align-self: center;
  justify-self: center;
  text-align: center;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListaCadaPlaylist = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #5f9ea0;
  color: white;
  border-radius: 25px;
  margin: 5px;
  font-family: "Verdana";
`;

export default class AddPlaylists extends React.Component {
  state = {
    playlists: [],
    nomePlaylist: "",
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  updateNomePlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
  };

  pegarPlaylist = (playlistId) => {
    axios
      .get(url, header)
      .then((resposta) => {
        this.setState({ playlists: resposta.data.result.list });
        this.setState({ playlistId: resposta.data.result.list });
        console.log(resposta.data.result.list);
      })
      .catch((erro) => console.log(erro));
  };

  criarPlaylist = () => {
    const body = {
      name: this.state.nomePlaylist,
    };

    axios
      .post(url, body, header)
      .then((resposta) => {
        console.log(resposta);
        this.setState({ nomePlaylist: "" });
        this.pegarPlaylist();
      })
      .catch((erro) => {
        this.setState({ nomePlaylist: "" });
        alert("Nome de playlist já utilizado");
      });
  };

  deletarPlaylist = (playlistId) => {
    const newPlaylistId = this.state.playlists.map((playlist) => {
      if (playlist.id === playlistId) {
        axios
          .delete(url + `/${playlistId}`, header)
          .then((resposta) => {
            alert("Playlist deletada!");
            this.setState({ nomePlaylist: "" });
            this.pegarPlaylist();
          })
          .catch((erro) => {
            this.setState({ nomePlaylist: "" });
            console.log(erro, "Não deletou");
          });
      }
    });
  };

  render() {
    return (
      <ContainerAddPlaylist>
        <InputCreatDiv>
          <InputPlaylist
            placeholder="Digite o nome da sua playlist"
            value={this.state.nomePlaylist}
            onChange={this.updateNomePlaylist}
          />
          <ButtonCreate onClick={this.criarPlaylist}>
            Criar playlist
          </ButtonCreate>
        </InputCreatDiv>

        <ListaTodasPlaylists>
          {this.state.playlists.map((playlist) => (
            <ListaCadaPlaylist
              name={playlist.name}
              playlistId={playlist.id}
            >
              {playlist.name} :
              {playlist.id}
              <Buttons>
                <ButtonSelect onClick={() => this.props.updatePlaylistID(playlist.id)}>
                  ۞
                </ButtonSelect>
                <ButtonDelete onClick={() => this.deletarPlaylist(playlist.id)}>
                  X
                </ButtonDelete>
              </Buttons>
            </ListaCadaPlaylist>
          ))}
        </ListaTodasPlaylists>
      </ContainerAddPlaylist>
    );
  }
}
