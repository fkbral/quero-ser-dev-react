import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './pages/Chat'
import { Contador } from './pages/Contador'
import { ControleDePresenca } from './pages/ControleDePresenca'
import { Gallery } from './pages/Gallery'
import { GithubProfile } from './pages/GithubProfile'
import { Home } from './pages/Home'
import { ThemedPage } from './pages/ThemedPage'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/galeria' element={<Gallery />} ></Route>
      <Route path='/chat' element={<Chat />} ></Route>
      <Route path='/contador' element={<Contador />} ></Route>
      <Route path='/lista-de-presenca' element={<ControleDePresenca />} ></Route>
      <Route path='/perfil-github' element={<GithubProfile />}></Route>
      <Route path='/pagina-light-dark' element={<ThemedPage />}></Route>
    </Routes>
  )
}

export default App
