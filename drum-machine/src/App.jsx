import { useState } from "react"
import Controlls from "./Components/Controlls.jsx"
import Drums from "./Components/Drums.jsx"

function App() {

  const [volume, setVolume] = useState(50);
  const [isPower, setPower] = useState(true);
  const [lastPlayed, setLastPlayed] = useState("");

  const handlePowerToggle =() => {
    setPower(prevState => !prevState);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  const handleLastPlayed = (last) => {
    setLastPlayed(last);
  }


  return (
    <div className="wrapper">
      <Controlls isPower={isPower} handlePowerToggle={handlePowerToggle} volume={volume} handleVolumeChange={handleVolumeChange} lastPlayed={lastPlayed} />
      <Drums isPower={isPower} volume={volume} showLastPlayed={handleLastPlayed} />
    </div>
  )
}

export default App
