import { Link } from "react-router-dom";

export function About() {
  return(
    <div>
      {/* em vez de usarmos a tag a, devemos usar o componente <Link>
       para não haver recarregamento de página*/}
      {/* <a href="/">Página home</a> */}
      <Link to="/">Página home</Link>
      <h1>Sobre nós</h1>
    </div>
  )
}