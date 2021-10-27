import React from "react";
import styled from "styled-components";
import axios from "axios";
import Youtube from "react-youtube";
var getYoutubeID = require("get-youtube-id");

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const header = {
  headers: {
    Authorization: "tom-capila-banu",
  },
};

const opts = {
  height: "20",
  width: "640",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const ContainerAddMusic = styled.div`
  background-color: #f0f8ff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 20%;
  heigth: 100vh;
  align-self: start;
  justify-self: center;
  text-align: center;
`;
const YouTube = styled.div``;

const ButtonDelete = styled.button`
  display: flex;
  flex-direction: column;
  color: #5f9ea0;
  font-family: "Verdana";
  align-self: center;
  width: 22px;
  height: 22px;
  border-radius: 22px;
  border: none;
  :hover {
    font-weight: bold;
    box-shadow: 3px 3px 3px black;
  }
`;
const ButtonAdd = styled.button`
  display: flex;
  flex-direction: column;
  width: 120px;
  border-radius: 25px;
  font-family: "Verdana";
  align-self: center;
`;
const ListaCadaMusica = styled.p`
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

export default class AddMusica extends React.Component {
  state = {
    tracks: [],
    nomeMusica: "",
    nomeArtista: "",
    urlMusica: "",
  };

  componentDidMount() {
    this.pegarMusica(this.props.playlistId);
  }

  pegarMusica = (playlistId) => {
    const newMusicaId = this.state.tracks.map((musica) => {
      if (musica.id === playlistId) {
        axios
          .get(`${url}/${this.props.playlistId}/tracks/`, header)
          .then((resposta) => {
            this.setState({ musicas: resposta.data.result.list });
            console.log(resposta.data.result.list);
          })
          .catch((erro) => console.log(erro));
      }
    });
  };

  addMusica = (playlistId) => {
    const body = {
      name: this.state.nomeMusica,
      artist: this.state.nomeArtista,
      url: this.state.urlMusica,
    };
    axios
      .post(`${url}/${this.props.playlist.id}/tracks/`, body, header)
      .then((resposta) => {
        console.log(resposta);
        this.updateTracks();
      })
      .catch((erro) => {
        alert(erro, "Nome de musica já utilizado");
      });
  };

  deletarMusica = (trackId) => {
    const newMusicaId = this.state.tracks.map((musica) => {
      if (musica.id === trackId) {
        axios
          .delete(`${url}/${this.props.playlistId}/tracks/${trackId}`, header)
          .then((resposta) => {
            console.log(resposta);
            this.setState({ nomeMusica: "" });
            this.pegarMusica();
          })
          .catch((erro) => {
            this.setState({ nomeMusica: "" });
            console.log(erro, "Não deletou");
          });
      }
    });
  };

  updateTracks = () => {
    this.setState({ tracks: this.state.tracks });
  };
  updateNomeMusica = (event) => {
    this.setState({ nomeMusica: event.target.value });
  };
  updateNomeArtista = (event) => {
    this.setState({ nomeArtista: event.target.value });
  };
  updateUrlMusica = (event) => {
    this.setState({ urlMusica: event.target.value });
  };

  render() {
    return (
      <ContainerAddMusic>
        <input
          type="text"
          value={this.state.nomeMusica}
          required
          placeholder="Digite o nome da Música"
          onChange={this.updateNomeMusica}
        />
        <input
          type="text"
          value={this.state.nomeArtista}
          required
          placeholder="Digite o nome do Artista"
          onChange={this.updateNomeArtista}
        />
        <input
          type="text"
          value={this.state.urlMusica}
          required
          placeholder="Insira a URL do Youtube"
          onChange={this.updateUrlMusica}
        />

        <ButtonAdd onClick={() => this.addMusica(this.props.playlistId)}>
          Add Música
        </ButtonAdd>
        {this.state.tracks.map((musica) => (
          <ListaCadaMusica
            key={musica.id}
            name={musica.name}
            artist={musica.artist}
            url={musica.url}
          >
            {musica.name}
            {this.props.playlist.id}

            <ButtonDelete onClick={() => this.deletarMusica(musica.id)}>
              X
            </ButtonDelete>

            <YouTube
              videoId={this.state.urlMusica}
              opts={opts}
              onReady={this._onReady}
            />
          </ListaCadaMusica>
        ))}
      </ContainerAddMusic>
    );
  }
}
