function VolumeSlider({volume, handleVolumeChange}){

    return(
        <>
            <span className="volume-text">Volume</span>
            <input type="range" className="volume" value={volume} onChange={handleVolumeChange} min="0" max="100" ></input>
        </>
    );
}

export default VolumeSlider