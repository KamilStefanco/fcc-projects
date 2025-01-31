import { useEffect, useState } from "react"
import ringtone from "./assets/ringtone.mp3"

function App() {

  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [isActive, setIsActive] = useState(false);
  const [seconds,setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [isBreakActive, setIsBreakActive] = useState(false);
  const [appliedStyle, setAppliedStyle] = useState({});

  //timer
  useEffect(() => {
    let interval = null;

    if(isActive || isBreakActive){
      interval = setInterval(()=>{
        updateTimer();
      },1000);
    }

    return ()=> clearInterval(interval);
  },[isActive,seconds,minutes]);

  //update minutes and seconds when session length is changed
  useEffect(() => {
    if(!isBreakActive){
      resetTime(sessionTime);
    }
  },[sessionTime]);


  const updateTimer = () => {
    if(seconds === 0){
      setSeconds(59);
      setMinutes(prev => prev - 1);
    }else{
      setSeconds(prev => prev -1);
    }

    if(isActive){
      if(minutes === 0 && seconds === 0){
        setIsBreakActive(true);
        setIsActive(false);
        setMinutes(breakTime);
        setSeconds(0);
        playAudio();
      }
    }else if(isBreakActive){
      if(minutes === 0 && seconds === 0){
        setIsBreakActive(false);
        setIsActive(true);
        setMinutes(sessionTime);
        setSeconds(0);
        playAudio();
      }
    }

    if (minutes === 0) {
      setAppliedStyle(textShadowStyle);
    } else {
      setAppliedStyle({});
    }

  }

  const increaseSession = () =>{
    if(!isActive && sessionTime < 60){
      setSessionTime(prevSessionTime => prevSessionTime + 1);
    }
  }

  const decreaseSession = () =>{
    if(!isActive && sessionTime > 1){
      setSessionTime(prevSessionTime => prevSessionTime - 1);
    }
  }

  const increaseBreak = () =>{
    if(!isBreakActive && breakTime <60){
      setBreakTime(prevBreakTime => prevBreakTime + 1);
    }
  }

  const decreaseBreak = () =>{
    if(!isBreakActive && breakTime > 1){
      setBreakTime(prevBreakTime => prevBreakTime - 1);
    }
  }

  const startOrPause = () => {
    setIsActive(prev => !prev);
  }

  const resetTime  = (newSessionTime) => {
    setMinutes(newSessionTime);
    setSeconds(0);
    setIsActive(false);
  }

  const resetAll = () => {
    setMinutes(25);
    setSeconds(0);
    setSessionTime(25);
    setBreakTime(5);
    setIsActive(false);
    setIsBreakActive(false);
    setAppliedStyle({});

    const audio = document.getElementById("beep");
    audio.pause();
    audio.currentTime = 0;
  }

  const playAudio =() => {
    const audio = document.getElementById("beep");
    audio.play();
  }

  const formatDisplay = (prop) => {
    if(prop === 0){
      return "00";
    }
    else if(prop < 10){
      return "0" + prop;
    }else{
      return prop;
    }
  }

  const textShadowStyle = {
    textShadow: `2px 2px 0 #ff0000, 2px 2px 0 #ff0000, 2px -2px 0 #ff0000, 2px -2px 0 #ff0000,2px 0 0 #ff0000, 2px 0 0 #ff0000, 0 2px 0 #ff0000, 0 -2px 0 #ff0000,1px 1px 0 #ff0000, 1px 1px 0 #ff0000, 1px -1px 0 #ff0000, 1px -1px 0 #ff0000`, 
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center flex-column align-items-center text-light" style={{backgroundColor:"rgba(219, 10, 10, 0.7)"}}>
      <h1 className="display-2 text-danger text-center mb-5 text-light">Pomodoro Timer</h1>
      <div className="text-center rounded-3" style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>

        <div className="main-clock mb-3">
          <p className="fs-1 mt-5" id="timer-label">{isBreakActive ? "Break" : "Session"}</p>
          <div className="main-timer fw-bold d-inline border-2 border-bottom border-light" id="time-left" style={{fontSize:"65px", ...appliedStyle}}>{formatDisplay(minutes)}:{formatDisplay(seconds)}</div>
        </div>

        <div className="controls mb-5">
          <span id="start_stop" onClick={startOrPause} style={{cursor:"pointer"}}>
            <i className="fa-solid fa-play fa-2xl mx-2"></i>
            <i className="fa-solid fa-pause fa-2xl mx-2"></i>
          </span>
          <i className="fa-solid fa-repeat fa-2xl mx-2" id="reset" onClick={resetAll} style={{cursor:"pointer"}}></i>
        </div>

        <div className="container">

          <div className="row mx-5 mb-5">
            <div className="col-md-5 offset-md-1 mb-4">
              <div className="session-length d-flex flex-column align-items-center">
                <p className="fs-3" id="session-label">Session Lenght</p>
                
                <div className="d-flex justify-content-center w-100 align-items-center">
                  <div id="session-decrement" onClick={decreaseSession}><i className="fa-solid fa-angles-left fa-2xl" style={{cursor:"pointer"}}></i></div>
                  <div className="fs-3 mx-2" id="session-length">{sessionTime}</div>
                  <div id="session-increment" onClick={increaseSession}><i className="fa-solid fa-angles-right fa-2xl" style={{cursor:"pointer"}}></i></div>
                </div>
              </div>
            </div>

            <div className="col-md-5">
              <div className="session-length d-flex flex-column align-items-center">
                <p className="fs-3" id="break-label">Break Lenght</p>
                
                <div className="d-flex justify-content-center w-100 align-items-center">
                  <div className="" id="break-decrement" onClick={decreaseBreak}><i className="fa-solid fa-angles-left fa-2xl" style={{cursor:"pointer"}}></i></div>
                  <div className="fs-3 mx-2" id="break-length">{breakTime}</div>
                  <div id="break-increment" onClick={increaseBreak}><i className="fa-solid fa-angles-right fa-2xl " style={{cursor:"pointer"}}></i></div>
                </div>

              </div>
            </div>

          </div>

        </div>

        <audio id="beep" src={ringtone}></audio>
      </div>
    </div>
  )
}

export default App
