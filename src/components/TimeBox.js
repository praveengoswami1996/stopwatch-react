import './TimeBox.css';

function TimeBox({ time, label }) {

    let Time = time < 10 ? '0'+ time : time;

    return (
        <div className="timer__timebox">
            <h1>{ Time }</h1>
            <div>{ label }</div>
        </div>
    )
}

export default TimeBox;