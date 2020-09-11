import React, { useState } from 'react';
import KeyPad from './KeyPad';
import Result from './Result';

function Calculator() {

    const initialState = {
        result: 0
    }

    const [state, setState] = useState(initialState)

    const handleKey = (name) => {
        console.log(name);
    }

    return(
        
        <div>
            <Result result={state.result}/>
            <KeyPad handleKey={handleKey}/>
        </div>
    )
}

export default Calculator;