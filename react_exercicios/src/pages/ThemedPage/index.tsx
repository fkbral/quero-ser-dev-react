import './styles.css'
import { useState } from "react"
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Link } from 'react-router-dom'
import { TodayDateDisplay } from '../../components/TodayDateDisplay'
import { ChatBaloon } from '../../components/ChatBaloon'
import { Menu } from '../../components/Menu'

export type Theme = 'light' | 'dark'
export type UserRole = 'admin' | 'user'

export function ThemedPage() {
  // const [theme, setTheme] = useState('dark' as Theme)
  const [theme, setTheme] = useState<Theme>('light')
  const [userRole, setUserRole] = useState<UserRole>('admin')

  // function handleClick() {
  //   setTheme(
  //     (previousState) =>  previousState === 'light' ? 'dark' : 'dark')
  //   }
  // }

  return (
    <div className={`themed-page theme-${theme}`}>
      <Menu theme={theme} userRole={userRole} />

      <Header theme={theme} />

      <h1>tema {theme}</h1>

      <h3>Nível de acesso: {userRole}</h3>

      <button
        onClick={() => setTheme(
          (previousState) =>  previousState === 'light' ? 'dark' : 'light'
        )}
      >
        Aternar tema
      </button>

      <button
        onClick={() => setUserRole(
          (previousState) =>  previousState === 'admin' ? 'user' : 'admin'
        )}
      >
        Aternar tipo de usuário
      </button>

      <Section theme={theme} >
        <TodayDateDisplay />
        <ChatBaloon type='receiver' text='olá' />

        <ul>
          <li>item 1</li>
          <li>item 2</li>
        </ul>
      </Section>

      <section>
        teste
      </section>

      <Section theme={theme} >
        Conheça nossos serviços
        <Link to=""> Carpintaria</Link>
        <Link to=""> Pintura</Link>
      </Section>
    </div>
  )
}