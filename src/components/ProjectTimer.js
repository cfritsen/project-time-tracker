import React, {useState} from 'react'
import Timer from './Timer'
import TimeCardList from './TimeCardList'


export default function ProjectTimer() {
    const [time, setTime] = useState({
        start: Date.now(),
        end: Date.now(),
        active: false
    })
    const [timeEntry, setTimeEntry] = useState([])
 
    const updateTime = (update) => {
        setTime(update);
    }
    
    const updateTimeEntry = (update) => {
        setTimeEntry([...timeEntry, update]);
    }

    return (
        <div class='timer-container'>
            <Timer time={time} setTime={updateTime} setTimeEntry={updateTimeEntry} />
            <TimeCardList timeEntry={timeEntry} />
        </div>
    )
}