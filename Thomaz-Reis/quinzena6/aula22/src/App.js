import React from 'react';
import styled from 'styled-components';
import './styles.css'

const TarefaList = styled.ul`
  padding: 10px;
`

const Tarefa = styled.li`
  margin: 10px;
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  justify-content: space-between;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: "",
      filtro: "",
    }

  componentDidUpdate() {
    const guardarLista = () => {
      localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
    }
    guardarLista()
  };

  componentDidMount() {
    const pegarLista = () => {
      let pegaLista = localStorage.getItem('tarefas')
      const pegouLista = JSON.parse(pegaLista)
      console.log(pegouLista)
    }
    pegarLista();
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  criaTarefa = () => {
    const novaTarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false
    }
    const novaLIstaDeTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: novaLIstaDeTarefas});
  }

  selectTarefa = (id) => {
    const novaLIstaDeTarefas = this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: true
        } 
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaLIstaDeTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>        <hr />
        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
