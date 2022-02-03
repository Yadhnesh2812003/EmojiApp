import react,{useState} from 'react'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Welcome from './components/Welcome'
const App=()=>{
const [windowCng,setWindow]=useState(false)
const [player,setPlayer]=useState(" ")
return(
<>
<Navbar/>
{
windowCng==true?
<Body playerName={player}/>
:
<Welcome nameOfPlayer={setPlayer} cngWin={setWindow}/>
}

</>
)
}
export default App;