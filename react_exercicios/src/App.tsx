import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Chat } from './pages/Chat'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/galeria' element={<Gallery />} ></Route>
      <Route path='/chat' element={<Chat />} ></Route>
    </Routes>
  )
}

export default App
