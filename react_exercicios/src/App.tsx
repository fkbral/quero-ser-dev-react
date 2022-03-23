import './App.css'
import { HelloWorld } from './components/HelloWorld'
import { ImageGallery } from './components/ImageGallery'

function Home() {
  return (
    <div className="App">
      <HelloWorld />
      <ImageGallery />
    </div>
  )
}

export default Home
