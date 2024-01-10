import React from 'react'

//----------------------------------------
export default function TimeCard(props) {
    const {startTime, endTime, timeEntry} = props;

    return (
        <div className='timecard'>
            <div className='time-stamp'>
                <DateStamp start={startTime} />
                <TimeStamp start={startTime} end={endTime} />
            </div>
            <div className='time-entry'>
                <GetHours timeEntry={timeEntry} />
            </div>
        </div>
    )
}
//----------------------------------------


//Helper Functions for TimeCard
const DateStamp = (props) => {
    const {start} = props;
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const day = start.getDay()
    const month = start.getMonth()
    const date = start.getDate()
    const year = start.getFullYear()

    return (
        <span className='date'>{dayNames[day]}, {date} {monthNames[month]} {year}</span>
    )
}
const TimeStamp = (props) => {
    const {start, end} = props;

    const startHours = start.getHours()
    const startMinutes = start.getMinutes()
    const endHours = end.getHours()
    const endMinutes = end.getMinutes()

    return (
        <span className='time'>{startHours}:{startMinutes} - {endHours}:{endMinutes}</span>
    )
}

const GetHours = props => {
    const {timeEntry} = props;
    const hours = (timeEntry / 3600000).toFixed(2)

    return (
        <span className='hours'>{hours} hrs</span>
    )
}