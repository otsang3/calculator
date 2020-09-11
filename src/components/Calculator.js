import React, { useState } from 'react';
import KeyPad from './KeyPad';
import Result from './Result';

function Calculator() {

    const initialState = {
        result: ""
    }

    const [state, setState] = useState(initialState)

    const calculate = () => {
        try {
            setState(prevState => {
                return {
                    result: (eval(prevState.result) || "" ) + ""
                }
            })
        }
        catch (e) {
            setState({
                result: "error"
            })
        }
    };

    const backspace = () => {
        setState(prevState => {
            return {
                result: prevState.result.slice(0, -1)
            }
        })
    }

    const clear = () => {
        setState(initialState);
    }

    const handleKey = (name) => {
        switch (name) {
            case "=":
                calculate();
                break;
            case "CE":
                backspace();
                break;
            case "C":
                clear();
                break;
            default:
                setState(prevState => {
                    return {
                        result: prevState.result + name
                    }
                })
        }   
    }

    return(
        
        <div>
            <Result result={state.result}/>
            <KeyPad handleKey={handleKey}/>
        </div>
    )
}

export default Calculator;