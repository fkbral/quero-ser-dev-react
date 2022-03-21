import './App.css'

function App() {
  const nomeDaMateria = "React"
  
  const tecnologiasAprendidas = [
    {
      nome: 'HTML',
      topico: 'Frontend Estático'
    },
    {
      nome: 'CSS',
      topico: 'Frontend Estático'
    },
    {
      nome: 'JS',
      topico: 'Lógica de Programação'
    },
  ]

  return (
    <div className="App">
      <header>cabeçalho da página</header>
      <main>
        <div>
          <h1>conteúdo da página</h1>
          <h2>Aprendendo {nomeDaMateria.toUpperCase()}</h2>
        </div>

        <div>
          <h2>Conhecimentos já adquiridos:</h2>
          <ul>
            {tecnologiasAprendidas.map((tecnologia) => {
              return (
                <li>
                  <section>
                    <h3>{tecnologia.nome}</h3>
                    <p>Aprendido no módulo: {tecnologia.topico}</p>
                  </section>
                </li>
              )
            })}
            {/* <li>
              <section>
                <h3>HTML</h3>
                <p>Aprendido no módulo: Frontend Estático</p>
              </section>
            </li>

            <li>
              <section>
                <h3>CSS</h3>
                <p>Aprendido no módulo: Frontend Estático</p>
              </section>
            </li>

            <li>
              <section>
                <h3>JS</h3>
                <p>Aprendido no módulo: Lógica de Programação</p>
              </section>
            </li> */}
          </ul>
        </div>
      </main>
      <footer>rodapé da página</footer>
    </div>
  )
}

export default App
