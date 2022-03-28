import './styles.css'

import { Link } from 'react-router-dom';

export function Home() {
  return(
    <div>
      <div className='links-container'>
        <Link to="/about">About</Link>
        <Link to="/design-system-buttons">Buttons Design System</Link>
        <Link to="/task-list">Task list</Link>
        <Link to="/calculator">Calculator</Link>
      </div>
      <h1>Olá mundo</h1>

      <h2>{"Olá pessoal".toUpperCase()}</h2>
    </div>
  )
}