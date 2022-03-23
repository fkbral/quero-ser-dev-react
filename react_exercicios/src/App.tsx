import './App.css'
import { ImageGallery } from './components/01_ImageGallery'
import { HelloWorld } from './components/HelloWorld'
import { TodayDateDisplay } from './components/TodayDateDisplay'

function App() {
  return (
    <div>
      <TodayDateDisplay />
      <HelloWorld />
      <ImageGallery />
    </div>
  )
}

export default App
