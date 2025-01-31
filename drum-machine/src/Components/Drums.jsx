import Q_audio from "../assets/Cev_H2.mp3"
import W_audio from "../assets/Dsc_Oh.mp3"
import E_audio from "../assets/Heater-1.mp3"
import A_audio from "../assets/Heater-2.mp3"
import S_audio from "../assets/Heater-3.mp3"
import D_audio from "../assets/Heater-4_1.mp3"
import Z_audio from "../assets/Heater-6.mp3"
import X_audio from "../assets/Kick_n_Hat.mp3"
import C_audio from "../assets/RP4_KICK_1.mp3"

import DrumPad from "./DrumPad"


function Drums({isPower, volume, showLastPlayed}){

    const Q_sound = new Audio(Q_audio);
    const W_sound = new Audio(W_audio);
    const E_sound = new Audio(E_audio);
    const A_sound = new Audio(A_audio);
    const S_sound = new Audio(S_audio);
    const D_sound = new Audio(D_audio);
    const Z_sound = new Audio(Z_audio);
    const X_sound = new Audio(X_audio);
    const C_sound = new Audio(C_audio);

    return(
        <div id="drum-machine" className="drum-machine">
            <DrumPad shortcut="Q" src="./assets/Cev_H2.mp3" audio={Q_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="W" src="./assets/Dsc_Oh.mp3" audio={W_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="E" src="./assets/Heater-1.mp3" audio={E_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />

            <DrumPad shortcut="A" src="./assets/Heater-2.mp3" audio={A_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="S" src="./assets/Heater-3.mp3" audio={S_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="D" src="./assets/Heater-4_1.mp3" audio={D_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />

            <DrumPad shortcut="Z" src="./assets/Heater-6.mp3" audio={Z_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="X" src="./assets/Kick_n_Hat.mp3" audio={X_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
            <DrumPad shortcut="C" src="./assets/RP4_KICK_1.mp3" audio={C_sound} isPower={isPower} volume={volume} showLastPlayed={showLastPlayed} />
      </div>
    );
} 

export default Drums