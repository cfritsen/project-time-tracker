import React, {useState} from 'react'


export default function TimerButtons(props) {
    const {time, setTime, setTimeEntry} = props;

    const startHandler = () => {
        setTime({...time, start: new Date(), active: true});

    }

    const stopHandler = () => {

    }

    return (
        <div className='buttons-container'>
            <button className='start-btn' disabled={time.active} onClick={startHandler}>Start</button>
            <button className='stop-btn' disabled={!time.active} onClick={stopHandler}>Stop</button>
        </div>
    )
}