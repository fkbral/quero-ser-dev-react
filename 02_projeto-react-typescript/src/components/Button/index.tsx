import './styles.css'

export function Button(props) {
  const { id, texto, Icone } = props

  console.log(props.id)
  console.log(props.texto)
  console.log(props.Icone)

  return(
    <button id={id} className='default-btn'>
      {Icone && <Icone />}
      {/* renderização condicional */}
      {texto 
        ? <p>{texto}</p>
        : <></>
      }
      {/* {temTexto && <p>Text only</p>} */}
    </button>
  )
}