import React, { useState} from "react";
import './App.css';
import CountUp from 'react-countup';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Dropmenu from './component/Dropmenu'
import Dropmenu2 from './component/Dropmenu2'
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import { useTimer } from 'use-timer';

const easingFn = (t, b, c, d) => {
  const ts = (t /= d) * t;
  const tc = ts * t;
  return b + c * (tc + -.00000001 * ts + .3 * t);
};

function App() {
  const [Time, setTime] = useState('10:00');
  const [thisDate, setDate] = useState(new Date());

  const { time, start, status } = useTimer({
    initialTime: 3, //300 seconds = 5 minutes
    timerType: 'DECREMENTAL',
  });

  return (
    <div className="App">
      <div className="Container">
          <div><h1>>start ./mission-control-sim<span className='blink'>|</span></h1></div>
          <br></br>
        <h1 className="Drop"><Dropmenu /></h1>
        <h1 className="Drop"><Dropmenu2 /></h1>

        <h1>Choose Time and Date for Launch</h1>
        <TimePicker disableClock={true} onChange={setTime} value={Time} />
        <DatePicker onChange={setDate} value={thisDate} />
        <h1>
          <button onClick={start}>START LAUNCH SEQUENCE</button>
          <p>{time > 0 ? 'T-Minus ' + time + ' seconds from Launch' : <span className='blink'>LIFT OFF</span>}</p>
          {status === 'RUNNING'}
        </h1>
        <h1>
          <span>Velocity: </span>
          {time <= 0 ? <CountUp duration={120} end={24610} easingFn={easingFn} /> : ' - '}<span>MPH</span>
        </h1>
        <h1>
          <span>Altitude: </span>
          {time <= 0 ? <CountUp duration={120} end={100} /> : ' - '}<span> km</span>{/*28.5°*/}
        </h1>
        <h1>
          <span>Fuel Burn: </span>
          {time <= 0 ? <CountUp duration={120} end={3200} /> : ' - '}<span> lbs/s</span>
        </h1>
      </div>
    </div>
  );
}

export default App;
