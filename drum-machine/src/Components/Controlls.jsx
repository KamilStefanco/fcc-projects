import PowerButton from "./PowerButton";
import VolumeSlider from "./VolumeSlider.jsx";
import Display from "./Display.jsx"

function Controlls({isPower, handlePowerToggle, volume, handleVolumeChange, lastPlayed}){
    return(
        <div className="controlls">
            <span className="name">Finger Drum Kit</span>

            <div className="spin-box">
              <div className="spin"> <div className="inner-spin"></div> </div>
              <div className="spin"> <div className="inner-spin"></div></div>
              <div className="spin"> <div className="inner-spin"></div></div>
              <div className="spin"> <div className="inner-spin"></div></div>
              <div className="spin"> <div className="inner-spin"></div></div>
              <div className="spin"> <div className="inner-spin"></div></div>
            </div>

            <Display lastPlayed={lastPlayed} />
            <VolumeSlider volume={volume} handleVolumeChange={handleVolumeChange} />
            <PowerButton isPower={isPower} handlePowerToggle={handlePowerToggle} />

        </div>
    );
}

export default Controlls