import React from 'react'
import TimeCard, {GetHours} from './TimeCard'
import './TimeCardList.css'

//-------------------------------------------
export default function TimeCardList(props) {
    const {timeEntryList} = props;
    console.log(timeEntryList)

    const sumHours = timeEntryHours => {
        for (let entry in timeEntryHours){
            
        }
    }

    return(
        <div class='timecard-list'>
            <span>Total: <GetHours /></span>
            {timeEntryList.map((timeEntry, index) => (<TimeCard key={index} startTime={timeEntry.startTime} endTime={timeEntry.endTime} timeEntry={timeEntry.timeEntry} />))}
        </div>
    )
}
//--------------------------------------------