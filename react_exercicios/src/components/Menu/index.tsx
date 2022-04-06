import { Link } from "react-router-dom"
import { Theme, UserRole } from "../../pages/ThemedPage"
import './styles.css'

type MenuProps = React.HTMLAttributes<HTMLElement> & {
  theme: Theme
  userRole: UserRole
}

export function Menu(props: MenuProps) {
  const { theme, userRole, ...rest } = props
  return (
    <nav className={`app-menu theme-${theme}`} {...rest}>
      <ul>
        {/* <li><Link to="">Home</Link></li>
        <li><Link to="">Sobre nós</Link></li>
        <li><Link to="">O Time</Link></li>
        <li><Link to="">Valores</Link></li> */}
        {userRole === 'admin' &&
        <>
          <li><Link to="">Cadastros</Link></li>
          <li><Link to="">Financeiro</Link></li>
        </> 
        }
        <li><Link to="">Relatórios</Link></li>
      </ul>
    </nav>
  )
}