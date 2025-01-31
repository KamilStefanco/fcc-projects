import { useState } from "react"
import Buttons from "./Buttons"
import Display from "./Display"

function App() {

  const [display,setDisplay] = useState("0");
  const [last, setLast] = useState("0");
  const [formula, setFormula] = useState("");
  
  const handleDisplay = (prop) => {
    
    if(display.length >= 21){
      setDisplay("DIGIT LIMIT MET");
      return;
    }

    if(display === "DIGIT LIMIT MET" && prop != "AC"){
      return;
    }

    switch(prop){
      case "AC":
        setDisplay("0");
        handleFormula("AC");
        break;
      case "=":
        const result = processResult(eval(formula));
        setLast(result);
        setDisplay(result);
        handleFormula(prop + result);
        break;
      case "X":
        setDisplay("*");
        handleFormula("*");
        break;
      case "+": case "/": case "-":
        setDisplay(prop);
        handleFormula(prop);
        break;
      case "0": case "1": case "2": case "3": case "4": case "5": case "6": case "7": case "8": case "9":
        display === "0" ? setDisplay(prop) : isNaN(prop) ? setDisplay(display) : setDisplay(display +prop);
        handleFormula(prop);
        break;
      case ".":
        if(canHaveDot()){
          setDisplay(display + prop);
          handleFormula(prop);
        }
        break;
      default:
        alert("Wrong Input");
    }
  }

  const canHaveDot = () =>{
    const lastNumber = formula.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes('.')) {
      return false; 
    }
    return true;
  }

  const processResult =(num) => {
    return parseFloat(num.toPrecision(9));
  }

  const handleFormula = (prop) => {
    const operators = ["+", "-", "*", "/"];

    if(prop === "AC"){
      setFormula("");
      return;
    }

    if(display === "0" && prop === "0"){
      return;
    }

    // multiple operators in a row
    if (operators.includes(prop) && operators.includes(formula.slice(-1))) {
      if(prop === "-" && /[\*\/]/.test(formula.slice(-1))){
        setFormula(formula + prop);
        return;
      }

      if(/[\*\/][\-]/.test(formula.slice(-2))){
        setFormula(formula.slice(0, -2) + prop);
        return;
      }

      setFormula(formula.slice(0, -1) + prop);
      return;
    }
    
    // = logic
    if(formula.includes("=") && isNaN(prop)){
      setFormula(last + prop);
      return;
    }else if(formula.includes("=") && !isNaN(prop)){
      setFormula(prop);
      return;
    }
    
    setFormula(formula + prop);
  }

  return (
    <div className="wrapper">
        <Display display={display} formula={formula} />
        <Buttons handleDisplay={handleDisplay}/>
    </div>
  )
}

export default App
