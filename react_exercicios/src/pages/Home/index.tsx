import './styles.css'
import { Link } from "react-router-dom";

export function Home() {
  return(
    <div className='links-container'>
      <Link to={'/galeria'}>Exercício 1: Galeria de Imagens</Link>
      <Link to={'/chat'}>Exercício 2: Chat</Link>
      <Link to={'/contador'}>Exercício 4: Contador</Link>
      <Link to={'/lista-de-presenca'}>Exercício 5: Lista de Presença dos Alunos</Link>
      <Link to={'/perfil-github'}>Exercício 6: Perfil Github</Link>
      <Link to={'/pagina-light-dark'}>Exercício 7: Página com tema light/dark</Link>
    </div>
  )
}