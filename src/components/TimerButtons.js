import React, {useState, useEffect} from 'react'

//-------------------------------------------
export default function TimerButtons(props) {
    const {time, setTime, addTimeEntry} = props;

    const startHandler = () => {
        setTime({...time, start: new Date(), active: true});
    }

    const stopHandler = () => {
        setTime({...time, end: new Date(), active: false});
    }
  
    const [firstRender, setFirstRender] = useState(true);
    useEffect(() => {
        setFirstRender(false)
    }, [])
    useEffect(() => {
        if (!firstRender) {
            addTimeEntry({
                startTime: time.start,
                endTime: time.end,
                timeEntry: time.end - time.start
            })
        }
    }, [time.end])
  

    return (
        <div className='buttons-container'>
            <button className='start-btn' disabled={time.active} onClick={startHandler}>Start</button>
            <button className='stop-btn' disabled={!time.active} onClick={stopHandler}>Stop</button>
        </div>
    )
}
//--------------------------------------------