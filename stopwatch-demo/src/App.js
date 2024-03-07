
import TimerText from './timer/timer-text'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isStopped, setIsStopped] = useState("Play");
  const [laps, setLaps] = useState([]);

  function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}


  useEffect(
    ()=>{
      if(isStopped==="Pause"){
        setCount((count) => count + 1);
        sleep(1000);
      }
    },
    [count])



    


  return (
    <div className="App">
      <TimerText count={count}/>
      <button onClick={()=>  
      {if(isStopped==="Play"){
        setIsStopped("Pause");
        setCount((count) =>count+1);
      }
      else{
        setIsStopped("Play");
        
      }}
      }>  {isStopped} </button>

    <button onClick={() => {
      const updatedLaps = [...laps, count];
      setLaps(updatedLaps);
    }}>Lap </button>

      <button onClick={()=>{
        setLaps([]);
        setCount(0);
      }} >Clear</button>
      
      <table id="laps-table">
        <thead>
            <tr>
                <th>Laps</th>
            </tr>
        </thead>
        <tbody>
          {
            laps.map(
                  (lap,index)=>{
                  return(
                      <tr key={index} id="laps">
                          <td>
                          <TimerText count={lap}/>
                          </td>
                      </tr>
                  )
                })
          }
        </tbody>
      </table>

    </div>
    
  );
}

export default App;
