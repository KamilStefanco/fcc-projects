import { useEffect } from 'react';

function DrumPad({shortcut, src, audio, isPower, volume, showLastPlayed}){

  const handleKeyPress = (event) => {
    const key = event.key || event;

    if (key === shortcut || key === shortcut.toLowerCase() ) {
      if(isPower === true){
        audio.currentTime = 0;
        audio.volume = volume/100;
        audio.play();
        showLastPlayed(shortcut);
      }
    }
  };

  useEffect(() => {
    
    window.addEventListener('keydown', handleKeyPress);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isPower, shortcut, volume]);

  return(
      <div className='drum-pad-box'>
          <div className="drum-pad" id={shortcut} onClick={()=> { handleKeyPress(shortcut)}}>
              <audio className="clip" src={src} id={shortcut}></audio>
          </div>
          <span> Pad <strong>{shortcut}</strong></span>

      </div>
  );
}

export default DrumPad