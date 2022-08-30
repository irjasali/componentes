import React, { useState } from 'react'
import { useEffect } from 'react';

const Car = () => {
    const [stateCar, setStateCar] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Total:' + count);
    }, [count])

    const turnOnOff = () => {
        setStateCar(!stateCar)
        setCount(count + 1);
        // setStateCar(prevValue => !prevValue)
    }
    return (
        <>
            <div>Turn On / Turn Off the Car</div>
            <div>
                <h3>El coche esta: {stateCar ? "Encendido" : "Apagado"}</h3>
                <h4>Clicks: {count}</h4>
            </div>
            <div>
                <button onClick={() => { turnOnOff() }}>Encender / Apagar</button>
            </div>
        </>

    )
}

export default Car