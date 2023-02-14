import './App.css';
import TimeBox from "./components/TimeBox";
import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
    const [start, setStart] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    useEffect(() => {
        let interval = null;
        if (start) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
            }, 1000);

            if (seconds > 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }
            if (minutes > 59) {
                setHours(hours + 1);
                setMinutes(0);
            }
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }

    }, [start, seconds, minutes, hours]);

    const handleStartClick = () => {
        setStart(!start);
    }

    const handleStopClick = () => {
        setStart(false);
    }

    const handleResetClick = () => {
        setStart(false);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    }

    return (
        <div className="App">
            
            <div className='App__timer'>
                <TimeBox time={hours} label="Hours"/>
                <TimeBox time={minutes} label="Minutes"/>
                <TimeBox time={seconds} label="Seconds"/>
            </div>

            <div className='App__button-container'>
                {
                    start
                    ? <Button onClick={ handleStopClick } bgcolor="red">Stop</Button>
                    : <Button onClick={ handleStartClick } bgcolor="green">Start</Button> 
                }
                <Button onClick={ handleResetClick } bgcolor="gray">Reset</Button>
            </div>

        </div>
    )
}

export default App;