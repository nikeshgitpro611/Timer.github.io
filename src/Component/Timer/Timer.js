import React, { useEffect, useState } from 'react'
import './Timer.css'

const Timer = () => {
    const [second, setSecond] = useState(0);
    const [min, setMin] = useState(0);

    var timer = '';
    useEffect(() => {
        timer = setInterval(() => {
            setSecond(second+1);
            if (second === 59) {
                setMin(min+1);
                second(0);
            }
        },1000);
        return ()=>clearInterval(timer)
    })
//fun decler
const restart =()=>{
setMin(0);
setSecond(0);
}

const stope =()=>{
clearInterval(timer);
}

    return (
        <div className='Timer'>
            <div className='container'>
                <div className='Timer-container'>

                    <h1 className='h1-heading'>On Use Timer StopWatch</h1>
                    <h1>{min<10?"0"+min:min}:{second<10?"0"+second:second}</h1>
                    <button className='Restart' onClick={restart}>Restart</button>
                    <button className='Stope' onClick={stope } >Stope</button>
                </div>
            </div>

        </div>
    )
}

export default Timer