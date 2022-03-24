import './App.css'
import { FaHeart, FaRegThumbsUp } from 'react-icons/fa'
import { Button } from './components/Button'
import { TaskList } from './components/TaskList'

function App() {
  return (
    <div className="App">
      <Button
        id="botao-1"
        texto="increva-se agora"
        Icone={FaRegThumbsUp}
      />
      
      <Button Icone={FaHeart} />

      <Button texto="Conheça nossos serviços" />
      <h1>Olá mundo</h1>
      <h2>{"Olá pessoal".toUpperCase()}</h2>

      <TaskList />
    </div>
  )
}

export default App
