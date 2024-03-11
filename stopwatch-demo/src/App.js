
import TimerText from './timer/timer-text'
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [playButton, setPlayButton] = useState("Play");
  const [laps, setLaps] = useState([]);

  function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }

  async function counting() {
    while (true) {
      console.log(count)
    }
  }

  useEffect(
    () => {
      if (playButton === "Pause") {
        setCount((count) => count + 1);
        sleep(1000);
      }
    },
    [count])

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h2><TimerText count={count} /></h2>

      <div id="buttons">
        <button id="btn-play" onClick={() => {
          if (playButton === "Play") {
            setPlayButton("Pause");
            setCount((count) => count + 1);
            document.getElementById('clockSound').play();
            counting();
          }
          else {
            setPlayButton("Play");
            document.getElementById('clockSound').pause();
          }
        }}>  {playButton} </button>

        <button id="btn-lap" onClick={() => {
          const updatedLaps = [...laps, count];
          setLaps(updatedLaps);
        }}>Lap </button>

        <button id="btn-clear" onClick={() => {
          setLaps([]);
          setCount(0);
        }}>Clear</button>
        <audio id="clockSound" src="./clock-ticking2.wav" loop ></audio>
      </div>

      <table id="laps-table">
        <thead>
          <tr>
            <th>Laps</th>
          </tr>
        </thead>
        <tbody>
          {
            laps.map(
              (lap, index) => {
                return (
                  <tr key={index} id="laps">
                    <td>
                      <TimerText count={lap} />
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
