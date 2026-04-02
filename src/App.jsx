import './App.css'
import Image from './Image'
import tommy from './assets/tommy.jpeg'
import chuckie from './assets/chuckie.jpeg'
import angelica from './assets/angelica.jpeg'
import susie from './assets/susie.png'

function App() {
  return (
    <div className="app">
      <h1>Rugrats Characters</h1>

      <div className="image-grid">
        <Image source={tommy} width="220px" />
        <Image source={chuckie} width="220px" />
        <Image source={angelica} width="220px" />
        <Image source={susie} width="220px" />
      </div>
    </div>
  )
}

export default App