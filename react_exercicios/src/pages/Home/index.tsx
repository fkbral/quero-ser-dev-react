import './styles.css'
import { Link } from "react-router-dom";

export function Home() {
  return(
    <div className='links-container'>
      <Link to={'/galeria'}>Exercício 1: Galeria de Imagens</Link>
      <Link to={'/chat'}>Exercício 2: Chat</Link>
      <Link to={'/contador'}>Exercício 4: Contador</Link>
    </div>
  )
}