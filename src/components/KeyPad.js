import React from 'react';

function KeyPad(props) {

    return(
        <div>
            <div>
                <button onClick={(e) => props.handleKey(e.target.name)} name="(">(</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="CE">CE</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name=")">)</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="C">C</button>
            </div>
            <div>
                <button onClick={(e) => props.handleKey(e.target.name)} name="7">7</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="8">8</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="9">9</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="+">+</button>
            </div>
            <div>
                <button onClick={(e) => props.handleKey(e.target.name)} name="4">4</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="5">5</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="6">6</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="-">-</button>
            </div>
            <div>
                <button onClick={(e) => props.handleKey(e.target.name)} name="1">1</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="2">2</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="3">3</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="*">x</button>
            </div>
            <div>
                <button onClick={(e) => props.handleKey(e.target.name)} name=".">.</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="0">0</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="=">=</button>
                <button onClick={(e) => props.handleKey(e.target.name)} name="/">÷</button>
            </div>
        </div>
    )
}

export default KeyPad;