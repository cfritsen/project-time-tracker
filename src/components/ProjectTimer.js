import React, {useState} from 'react'
import Timer from './Timer'
import TimeCardList from './TimeCardList'


export default function ProjectTimer() {
    const [time, setTime] = useState({
        start: new Date(),
        end: new Date(),
        active: false
    })
    const [timeEntry, setTimeEntry] = useState([])
 

    return (
        <div class='timer-container'>
            <Timer time={time} setTime={setTime} />
            <TimeCardList timeEntry={timeEntry} setTimeEntry={setTimeEntry} />
        </div>
    )
}