import './App.css';
import TimeBox from "./components/TimeBox";
import Button from './components/Button';
import { useState, useEffect } from 'react';

function App() {
    const [start, setStart] = useState(false);
    const [time, setTime] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        let intervalId = null;
        if (start) {
            intervalId = setInterval(() => {
                setTime((prevTime) => {
                    let { hours, minutes, seconds } = prevTime;
                    if (seconds === 59) {
                        seconds = 0;
                        if (minutes === 59) {
                            minutes = 0;
                            hours++;
                        } else {
                            minutes++;
                        }
                    } else {
                        seconds++;
                    }
                    return { hours, minutes, seconds }
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [start]);
    
    const handleStartClick = () => {
        setStart(!start);
    }

    const handleStopClick = () => {
        setStart(false);
    }

    const handleResetClick = () => {
        setStart(false);    
        setTime({
            hours: 0,
            minutes: 0,
            seconds: 0
        })
    }

    return (
        <div className="App">
            
            <div className='App__timer'>
                <TimeBox time={time} />
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