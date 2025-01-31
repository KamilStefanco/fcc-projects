function Buttons({handleDisplay}){

    const handleClick = (event) => {
        handleDisplay(event.target.textContent);
    }

    return(
        <div className="buttons">
            <div className="button wide red" id="clear" onClick={handleClick} >AC</div>
            <div className="button" id="divide" onClick={handleClick}>/</div>
            <div className="button" id="multiply" onClick={handleClick}>X</div>
            <div className="button" id="seven" onClick={handleClick}>7</div>
            <div className="button" id="eight" onClick={handleClick}>8</div>
            <div className="button" id="nine" onClick={handleClick}>9</div>
            <div className="button" id="subtract" onClick={handleClick}>-</div>
            <div className="button" id="four" onClick={handleClick}>4</div>
            <div className="button" id="five" onClick={handleClick}>5</div>
            <div className="button" id="six" onClick={handleClick}>6</div>
            <div className="button" id="add" onClick={handleClick}>+</div>
            <div className="button" id="one" onClick={handleClick}>1</div>
            <div className="button" id="two" onClick={handleClick}>2</div>
            <div className="button" id="three" onClick={handleClick}>3</div>
            <div className="button tall blue" id="equals" onClick={handleClick}>=</div>
            <div className="button wide" id="zero" onClick={handleClick}>0</div>
            <div className="button" id="decimal"  onClick={handleClick}>.</div>

        </div>
    );
}

export default Buttons