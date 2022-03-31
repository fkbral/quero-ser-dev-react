import { useState } from 'react'
import { Button } from '../Button'
import './styles.css'

export function OperationSum() {
  // let soma = 0
  // const [primeraLetra, segundaLetra] = 'professor'
  const [soma, setSoma] = useState(0)
  const [historico, setHistorico] = useState([] as number[])
  const [numero1, setNumero1] = useState(0)
  const [numero2, setNumero2] = useState(0)

  // React.MouseEvent<HTMLButtonElement, MouseEvent>
  function handleSomar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // Resolução usando APIs de JavaScript Vanilla (querySelector)
    // const soma = numero1 + numero2
    // const numero1Input = event.currentTarget.querySelector('#number-one')
    // const numero2Input = event.currentTarget.querySelector('#number-two')

    // const numero1 = Number((numero1Input as any).value)
    // const numero2 = Number((numero2Input as any).value)

    // console.log(numero1)
    // console.log(numero2)

    const acumulador = numero1 + numero2

    // soma = numero1 + numero2
    setSoma(acumulador)

    setHistorico((historicoAntigo) => {
      return [...historicoAntigo, acumulador]
    })
  }

  return(
    <>
      <form 
        onSubmit={(event) => handleSomar(event)}
        className='math-operations'
      >
        <div>
          <label htmlFor="number-one">Primeiro número</label>
          <input 
            type="text"
            id='number-one'
            value={numero1}
            onChange={(event) => setNumero1(Number(event.target.value))}
          />
        </div>

        <div>
          <label htmlFor="number-two">Segundo número</label>
          <input 
            type="text"
            id='number-two'
            value={numero2}
            onChange={(event) => setNumero2(Number(event.target.value))}
          />
        </div>

        {/* <button type="button" onClick={handleSomar}>botao 1</button> */}
        <Button texto='somar'></Button>
      </form>
      <h1>Resultado da Soma: {soma}</h1>
      <h2>Histórico de operações passadas</h2>
      <ul>
        {historico.map(resultado => {
          return <li>{resultado}</li>
        })}
      </ul>
    </>
  )
}