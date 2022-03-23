import './App.css'

function App() {
  const listaDeTarefas = [
    {
      nome: 'Dar comida para o gato',
      categoria: 'pets',
      concluida: false,
    },
    {
      nome: 'Alimentar o peixe',
      categoria: 'pets',
      concluida: true,
    },
    {
      nome: 'Estudar react',
      categoria: 'desenvolvimento web',
      concluida: false,
    },
  ]
  return (
    <div className="App">
      <h1>Olá</h1>
      <h1>{"Olá pessoal".toUpperCase()}</h1>

      <ul>
        {/* <li>
          <h3>Dar comida para o gato</h3>
          <p>categoria: pets</p>
        </li>

        <li>
          <h3>Alimentar o peixe</h3>
          <p>categoria: pets</p>
        </li>

        <li>
          <h3>Estudar react</h3>
          <p>categoria: desenvolvimento web</p>
        </li> */}
        {/* {listaDeTarefas[0].nome} */}
        {/* {listaDeTarefas[1].nome} */}

        {listaDeTarefas.map((tarefa) => {
          return (
            <li>
              <h3>{tarefa.nome}</h3>
              <p>categoria: {tarefa.categoria}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
