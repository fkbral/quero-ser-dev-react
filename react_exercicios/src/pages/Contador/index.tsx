import { useState } from "react"

export function Contador() {
  const [contador, setContador] = useState(0)

  function handleIncrement() {
    // setContador(contador + 1)
    // setContador((previousState) => {
    //   return previousState + 1
    // })
    setContador((previousState) => previousState + 1)
  }

  function handleDecrement() {
    setContador((previousState) => {
      const valorFuturo =  previousState - 1

      if (valorFuturo < 0) {
        return previousState
      }

      return valorFuturo
    })
  }

  return(
    <>
      <h1>Contador: {contador}</h1>
      <button onClick={handleIncrement}>incrementar</button>

      {/* Alternativa 2 para resolver icremento */}
      {/* <button onClick={
        () => setContador((previousState) => previousState + 1)
      }>
        incrementar
      </button> */}

      {/* Alternativa 3 para resolver icremento */}
      {/* <button onClick={
        function() {
          setContador((previousState) => previousState + 1)
        }
      }>
        incrementar
      </button> */}

      <button onClick={handleDecrement}>decrementar</button>
    </>
  )
}