import React from 'react'
import TimerButtons from './TimerButtons'


export default function Timer(props) {
    const {time: {start, end, active}, setTime} = props;

    return (
        <div className='timer-container'>
            <div className='timer'>

            </div>
            <TimerButtons setTime={setTime} />
        </div>
    )
}