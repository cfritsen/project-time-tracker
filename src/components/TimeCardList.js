import React from 'react'
import TimeCard from './TimeCard'
import './TimeCardList.css'

//-------------------------------------------
export default function TimeCardList(props) {
    const {timeEntryList} = props;
    console.log(timeEntryList)

    return(
        <div class='timecard-list'>
            {timeEntryList.map((timeEntry, index) => (<TimeCard key={index} startTime={timeEntry.startTime} endTime={timeEntry.endTime} timeEntry={timeEntry.timeEntry} />))}
        </div>
    )
}
//--------------------------------------------