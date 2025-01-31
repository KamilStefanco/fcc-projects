function Display({lastPlayed}){

    let note ="";

    switch(lastPlayed){
        case "Q":
            note = "Closed HH";
            break;
        case "W":
            note = "Open HH";
            break;
        case "E":
            note = "Heater 1";
            break;
        case "A":
            note = "Heater 2";
            break;
        case "S":
            note = "Heater 3";
            break;
        case "D":
            note = "Heater 4";
            break;
        case "Z":
            note = "Clap";
            break;
        case "X":
            note = "Kick n' hat";
            break;
        case "C":
            note = "Kick";
            break;
        default:
            note = "";    
    }

    return(
        <div className="display" id="display">{note}</div>
    );
}

export default Display