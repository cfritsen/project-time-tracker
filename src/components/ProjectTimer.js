import React, {useState} from 'react'
import Timer from './Timer'
import TimeCardList from './TimeCardList'
import './ProjectTimer.css'

//-------------------------------------------
export default function ProjectTimer() {
    const [time, setTime] = useState({
        start: new Date(),
        end: new Date(),
        active: false
    })
    const [timeEntryList, setTimeEntryList] = useState([])
 
    const updateTime = (update) => {
        setTime(update);
    }
    
    const addTimeEntry = (update) => {
        setTimeEntryList([...timeEntryList, update]);
    }

    return (
        <div class='timer-container'>
            <Timer time={time} setTime={updateTime} addTimeEntry={addTimeEntry} />
            <TimeCardList timeEntryList={timeEntryList} />
        </div>
    )
}
//-----------------------------------------------