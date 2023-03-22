import './TimeBox.css';

function TimeBox({ time }) {
    const { hours, minutes, seconds } = time;

    return (
        <>
            <div className="timer__timebox">
                <h1>{ hours.toString().padStart(2, '0') }</h1>
                <div>Hours</div>
            </div>
            <div className="timer__timebox">
                <h1>{ minutes.toString().padStart(2, '0') }</h1>
                <div>Minutes</div>
            </div>
            <div className="timer__timebox">
                <h1>{ seconds.toString().padStart(2, '0') }</h1>
                <div>Seconds</div>
            </div>
        </>
    )
}

export default TimeBox;