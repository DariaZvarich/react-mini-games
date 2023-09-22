import { useState } from 'react';

function Die() {
    const [rollResult, setRollResullt] = useState(1);
    const rollDie = () => {
        const newRoll = Math.floor(Math.random()* 6) + 1;
        setRollResullt(newRoll);
    };
    
    return (
        <div>
            <h2>Die Roll</h2>
            <p>Current Roll: {rollResult}</p>
            <button onClick={rollDie}>Roll Die</button>
        </div>
    );
}


export default Die;