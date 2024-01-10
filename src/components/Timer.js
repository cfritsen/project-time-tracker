import React, {useState, useEffect} from 'react'
import TimerButtons from './TimerButtons'
import './Timer.css'



//Component -------------------------------------
export default function Timer(props) {
    const {time, time: {start, end, active}, setTime, addTimeEntry} = props;

    const [timeUpdate, setTimeUpdate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTimeUpdate(new Date()), 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='timer-container'>
            {active ? <TimeFormat start={start} end={new Date()} /> : <TimeFormat start={start} end={end} />}
            <TimerButtons time={time} setTime={setTime} addTimeEntry={addTimeEntry} />
        </div>
    )
}
//End Component-------------------------------------

//Format Helper for Timer
function TimeFormat(props) {
    const {start, end} = props;
    
    const timeElapsed = end - start;
    const hours = Math.floor(timeElapsed / 3600000);
    const minutes = Math.floor((timeElapsed % 3600000) / 60000);
    const seconds = Math.floor(((timeElapsed % 3600000) % 60000) / 1000)

    return (
        <div className ='timer'>{hours < 10 ? '0' + hours : hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</div>
    )
}