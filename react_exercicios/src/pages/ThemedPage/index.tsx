import './styles.css'
import { useState } from "react"

type Theme = 'light' | 'dark'

export function ThemedPage() {
  // const [theme, setTheme] = useState('dark' as Theme)
  const [theme, setTheme] = useState<Theme>('light')

  // function handleClick() {
  //   setTheme(
  //     (previouState) =>  previouState === 'light' ? 'dark' : 'dark')
  //   }
  // }

  return (
    <div className={`themed-page theme-${theme}`}>
      <h1>tema {theme}</h1>
      <button
        onClick={() => setTheme(
          (previousState) =>  previousState === 'light' ? 'dark' : 'light'
        )
        }
      >
          Aternar tema
      </button>
    </div>
  )
}