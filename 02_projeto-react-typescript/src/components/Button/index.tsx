import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import './styles.css'

// interface IButtonProps {
//   id?: string,
//   texto?: string,
//   Icone?: IconType,
// }

type ButtonProps = {
  id?: string,
  texto?: string,
  posicaoDoIcone?: 'esquerda' | 'direita',
  Icone?: IconType,
}

export function Button(props: ButtonProps) {
  const { Icone, id, texto, posicaoDoIcone } = props

  console.log(props.id)
  console.log(props.texto)
  console.log(props.Icone)

  return(
    <button 
      id={id}
      className={
        `default-btn 
        ${posicaoDoIcone === 'direita' ? 'icone-direita' : ''}`
      }
    >
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