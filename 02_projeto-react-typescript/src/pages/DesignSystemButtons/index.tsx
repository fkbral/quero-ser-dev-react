import { FaRegThumbsUp, FaShare, FaHeart } from "react-icons/fa";
import { Button } from "../../components/Button";

export function DesignSystemButtons() {
  return(
    <>
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
    </>
  )
}