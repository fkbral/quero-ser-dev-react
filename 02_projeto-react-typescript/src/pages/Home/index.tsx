import './styles.css'

import { FaRegThumbsUp, FaShare, FaHeart } from "react-icons/fa";
import { Button } from "../../components/Button";
import { TaskList } from "../../components/TaskList";

export function Home() {
  return(
    <div>
      <a href="/about">Página about</a>

      <Button
        id="botao-1"
        texto="increva-se agora"
        Icone={FaRegThumbsUp}
      />

      <Button
        texto="compartilhar" 
        Icone={FaShare}
        posicaoDoIcone={'direita'}
      />
      
      <Button Icone={FaHeart} />

      <Button texto='Teste' />

      <Button texto="Conheça nossos serviços" />
      <h1>Olá mundo</h1>
      <h2>{"Olá pessoal".toUpperCase()}</h2>

      <TaskList />
    </div>
  )
}