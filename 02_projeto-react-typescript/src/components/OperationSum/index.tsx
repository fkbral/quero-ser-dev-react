import './styles.css'

export function OperationSum() {
  let soma = 0

  // React.MouseEvent<HTMLButtonElement, MouseEvent>
  function handleSomar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // const soma = numero1 + numero2
    const numero1Input = event.currentTarget.querySelector('#number-one')
    const numero2Input = event.currentTarget.querySelector('#number-two')

    const numero1 = Number((numero1Input as any).value)
    const numero2 = Number((numero2Input as any).value)
    console.log(numero1)
    console.log(numero2)

    soma = numero1 + numero2

    alert(soma)
  }

  return(
    <>
      <form 
        onSubmit={(event) => handleSomar(event)}
        className='math-operations'
      >
        <div>
          <label htmlFor="number-one">Primeiro número</label>
          <input type="text" id='number-one' />
        </div>

        <div>
          <label htmlFor="number-two">Segundo número</label>
          <input type="text" id='number-two' />
        </div>

        {/* <button type="button" onClick={handleSomar}>botao 1</button> */}
        <button type='submit'>somar</button>
      </form>
      <h1>Resultado da Soma: {soma}</h1>
    </>
  )
}