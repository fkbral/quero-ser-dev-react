import './styles.css'

export function TodayDateDisplay() {
  return (
    <div className="date-display">
      <h2>Data atual: </h2>
      <p>{new Date().toLocaleDateString()}</p>
    </div>
  )
}