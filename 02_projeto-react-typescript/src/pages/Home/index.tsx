import './styles.css'

import { Link } from 'react-router-dom';

export function Home() {
  return(
    <div>
      <div className='links-container'>
        <Link to="/about">About</Link>
        <Link to="/design-system-buttons">Buttons Design System</Link>
        <Link to="/task-list">Task list</Link>
        <Link to="/operacoes">Operações Matemáticas</Link>
        <Link to="/animal-facts">Fatos sobre animais</Link>
        <Link to="/fake-products">Acesso à página de API rest fake de produtos</Link>
        <Link to="/fake-products-axios">Acesso à página de API rest fake de produtos com axios</Link>
      </div>
    </div>
  )
}