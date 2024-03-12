
import TimerText from './timer/timer-text'
import './App.css';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ClearIcon from '@mui/icons-material/Clear';
import PauseIcon from '@mui/icons-material/Pause';
import Navbar from './navbar/navbar';

function App() {
  const [count, setCount] = useState(0);
  const [playButton, setPlayButton] = useState("Play");
  const [laps, setLaps] = useState([]);

  function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
  }

  // function counting() {
  //   console.log(count)
  //   if (playButton === "Pause") {
  //     setCount((count) => count + 1);
  //   }
  //   else {
  //   }
  // }
  const drawerWidth = 230;
  useEffect(
    () => {
      if (playButton === "Pause") {
        setCount((count) => count + 1);
        sleep(1000);
      }
    }, [playButton, count])

  return (
    <div className="App">
      <Navbar />
      <h1>Stopwatch</h1>
      <h2><TimerText count={count} /></h2>
      {/* <h2><TimerText count={count} onChange={counting()} /></h2> */}
      <div id="buttons">
        <Button variant="contained" color="primary" size='small' onClick={() => {
          if (playButton === "Play") {
            setPlayButton("Pause");
            setCount((count) => count + 1);
            document.getElementById('clockSound').play();
          }
          else {
            setPlayButton("Play");
            document.getElementById('clockSound').pause();
          }
        }}> {playButton === "Play" ? <PlayArrowIcon /> : <PauseIcon />} </Button>

        < Button variant="contained" color='secondary' size='small' onClick={() => {
          const updatedLaps = [...laps, count];
          setLaps(updatedLaps);
        }}>Lap</Button>

        < Button variant="contained" color='error' startIcon={<ClearIcon />} size='small' onClick={() => {
          setLaps([]);
          setCount(0);
        }}>Clear</Button>
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
