import { Route, Routes } from 'react-router-dom'
import './App.css'
import { About } from './pages/About'
import { OperacoesMatematicas } from './pages/OperacoesMatematicas'
import { DesignSystemButtons } from './pages/DesignSystemButtons'
import { Home } from './pages/Home'
import { Tasks } from './pages/Tasks'
import { AnimalFacts } from './pages/AnimalFacts'
import { FakeProductsApiPage } from './pages/FakeProductsApiPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="design-system-buttons" element={<DesignSystemButtons />} />
        <Route path="about" element={<About />} />
        <Route path="task-list" element={<Tasks />} />
        <Route path="operacoes" element={<OperacoesMatematicas />} />
        <Route path="animal-facts" element={<AnimalFacts />} />
        <Route path="fake-products" element={<FakeProductsApiPage />} />
      </Routes>
    </div>
  )
}

export default App
