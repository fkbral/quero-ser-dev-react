import { Theme } from '../../pages/ThemedPage'
import './styles.css'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  theme: Theme
}

export function Section(props: SectionProps) {
  return (
    <section className={`app-section theme-${props.theme}`}>
      {props.children}
    </section>
  )
}