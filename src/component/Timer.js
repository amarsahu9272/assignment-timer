import React, { useState } from "react";
import DisplayComponent from "./DisplayComponent";
import BtnComponent from "./BtnComponent";
function Timer() {
  const [time, setTime] = React.useState({ ms: 0, s: 50, m: 59, h: 0 });
  const [interv,setInerv]=useState()
  const [status,setStatus]=useState(0)
  const start = () => {
    run();
    setStatus(1)
    setInerv(setInterval(run, 10));
  };
  
  const stop = () => {
    run();
    clearInterval(interv)
    setStatus(2)
    
  };
  const reset = () => {
    run();
    clearInterval(interv)
    setStatus(0)
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };
  const resume = () => start()

  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;
  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };
  return (
    <div>
      <DisplayComponent time={time} />
      <BtnComponent resume={resume} stop={stop} reset={reset} status={status} start={start} />
    </div>
  );
}

export default Timer;
