import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import './styles.css'

// interface IButtonProps {
//   id?: string,
//   texto?: string,
//   Icone?: IconType,
// }

type ButtonProps = 
React.ButtonHTMLAttributes<HTMLButtonElement> &
{
  // id?: string,
  // texto?: string,
  // children: ReactNode,
  posicaoDoIcone?: 'esquerda' | 'direita',
  Icone?: IconType,
}

export function Button(props: ButtonProps) {
  const { Icone, posicaoDoIcone, children, ...demaisProps } = props

  // console.log(props.id)
  // console.log(props.texto)
  // console.log(props.Icone)

  return(
    <button 
      // id={id}
      // type={type}
      className={
        `default-btn 
        ${posicaoDoIcone === 'direita' ? 'icone-direita' : ''}`
      }
      {...demaisProps}
    >
      {Icone && <Icone />}
      {/* renderização condicional */}
      {/* {texto 
        ? <p>{texto}</p>
        : <></>
      } */}
      {/* {temTexto && <p>Text only</p>} */}
      {children}
    </button>
  )
}