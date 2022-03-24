import './App.css'
import { ChatBaloon } from './components/02_ChatBaloon'
import { ImageGallery } from './components/01_ImageGallery'
import { HelloWorld } from './components/HelloWorld'
import { TodayDateDisplay } from './components/TodayDateDisplay'

function App() {
  return (
    <div>
      <ChatBaloon type='sender' text='Olá Maria'/>
      <ChatBaloon type='receiver' text='Olá Mel'/>
      <ChatBaloon 
        type='receiver'
        text='Veja essa linda cidade'
        imageUrl='https://source.unsplash.com/random/?city,night'
      />
      {/* <TodayDateDisplay />
      <HelloWorld />
      <ImageGallery /> */}
    </div>
  )
}

export default App
