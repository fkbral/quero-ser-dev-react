import { Theme } from '../../pages/ThemedPage'
import './styles.css'

type HeaderProps = React.HTMLAttributes<HTMLElement> & {
  theme: Theme
}

export function Header(props: HeaderProps) {
  return (
    <header className={`app-header theme-${props.theme}`}>
      Conteúdo do header
    </header>
  )
}