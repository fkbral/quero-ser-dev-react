import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './pages/Chat'
import { Contador } from './pages/Contador'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/galeria' element={<Gallery />} ></Route>
      <Route path='/chat' element={<Chat />} ></Route>
      <Route path='/contador' element={<Contador />} ></Route>
    </Routes>
  )
}

export default App
