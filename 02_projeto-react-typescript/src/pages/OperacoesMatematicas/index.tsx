import { Button } from "../../components/Button";
import { OperationSum } from "../../components/OperationSum";

export function OperacoesMatematicas() {
  return(
    <>  
      <OperationSum />
      <h3>Tudo que estiver a partir daqui não é renderizado novamente ao mudarmos o estado do componente OperationSum</h3>
      <hr />
      <Button texto="não renderizo novamente"></Button>
    </>
  )
}