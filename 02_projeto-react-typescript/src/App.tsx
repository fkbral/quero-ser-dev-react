import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { OperacoesMatematicas } from './pages/OperacoesMatematicas'
import { DesignSystemButtons } from './pages/DesignSystemButtons'
import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="design-system-buttons" element={<DesignSystemButtons />} />
        <Route path="about" element={<About />} />
        <Route path="task-list" element={<Tasks />} />
        <Route path="operacoes" element={<OperacoesMatematicas />} />
      </Routes>
    </div>
  )
}

export default App
