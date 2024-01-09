import React, {useState, useEffect} from 'react'
import TimerButtons from './TimerButtons'


export default function Timer(props) {
    const {time, time: {start, end, active}, setTime, setTimeEntry} = props;

    const [timeUpdate, setTimeUpdate] = useState(Date.now());

    const timeFormat = (start, end) => {
        const timeElapsed = end - start;
        const hours = Math.floor(timeElapsed / 3600000);
        const minutes = Math.floor((timeElapsed % 3600000) / 60000);
        const seconds = Math.floor(((timeElapsed % 3600000) % 60000) / 1000)

        return (
            <span>{hours < 10 ? '0' + hours : hours} : {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' + seconds : seconds}</span>
        )
    }

    useEffect(() => {
        const interval = setInterval(() => setTimeUpdate(Date.now()), 1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className='timer-container'>
            <div className='timer'>
                {active ? timeFormat(start, timeUpdate) : timeFormat(start, end)}
            </div>
            <TimerButtons time={time} setTime={setTime} setTimeEntry={setTimeEntry} />
        </div>
    )
}