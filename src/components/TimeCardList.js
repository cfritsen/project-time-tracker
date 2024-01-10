import React, {useState, useEffect} from 'react'
import TimeCard, {GetHours} from './TimeCard'
import './TimeCardList.css'

//-------------------------------------------
export default function TimeCardList(props) {
    const {timeEntryList} = props;

    const [totalHours, setTotalHours] = useState(0)

    useEffect(() => {
        setTotalHours(sumHours(timeEntryList))
    }, [timeEntryList])

    return(
        <div className='timecard-list'>
            <span className='total'>Total: <GetHours timeEntry={totalHours}/></span>
            {timeEntryList.map((timeEntry, index) => (<TimeCard key={index} startTime={timeEntry.startTime} endTime={timeEntry.endTime} timeEntry={timeEntry.timeEntry} />))}
        </div>
    )
}
//--------------------------------------------


const sumHours = timeEntryHours => {
    let sum = 0;
    for (let entry = 0; entry < timeEntryHours.length; entry++){
        sum += timeEntryHours[entry].timeEntry;
    }
    return sum;
}