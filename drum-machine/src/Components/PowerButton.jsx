function PowerButton({isPower,handlePowerToggle}){

    return(
        <>
            <span className="power-btn-text">Power</span>
            <label className="switch">
                <input type="checkbox" checked={isPower} onChange={handlePowerToggle} />
                <span className="slider"></span>
            </label>
        
        </>
    );
}

export default PowerButton