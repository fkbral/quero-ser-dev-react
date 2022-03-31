import { FaRegThumbsUp, FaShare, FaHeart } from "react-icons/fa";
import { Button } from "../../components/Button";

export function DesignSystemButtons() {
  return(
    <>
      <button>
        increva-se agora
      </button>

      <Button
        type="submit"
        title="qualquer coisa"
        id="botao-1"
        Icone={FaRegThumbsUp}
      >
        increva-se agora
      </Button>

      {/* <Button
        id="botao-1"
      >
        increva-se agora
        <FaRegThumbsUp />
      </Button> */}

      <Button
        Icone={FaShare}
        posicaoDoIcone={'direita'}
      >
        compartilhar
      </Button>
      
      <Button Icone={FaHeart} />

      <Button>
        <img src="https://github.com/fkbral.png" alt="" height={60} />
        <h1>exemplo</h1>
        <span>Teste</span>
      </Button>

      <Button>Conheça nossos serviços</Button>
    </>
  )
}