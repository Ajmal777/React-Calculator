import { BsPlus, BsDash, BsX, BsSlash } from "react-icons/bs";
import { useState } from "react";

function Calculator(){

    /*
        first - this useState is used to store the state/value of the num1 input field
        second - this useState is used to store the state/value of the num2 input field

        status - this useState is for error handling. in case of an error, this will store the error message. else it will be empty.
        result - this useState is to store and display the resultant value of the calculation
     */

    const [first, setFirst] = useState(''); 
    const [second, setSecond] = useState('');
    const [error, setError] = useState('');
    const [result, setResult] = useState('');

    function handleClick(op){
        // This block handles the empty input field case
        if(!first || !second){
            if(!first) setError('Num1 cannot be empty');
            else setError('Num2 cannot be empty');
            return;
        }

        setError('');

        const num1 = parseFloat(first);
        const num2 = parseFloat(second);
        
        // This if block wil be triggered if any of the 2 inputs are not a number
        if(isNaN(num1) || isNaN(num2)){
            setError("Invalid input");
            setFirst('');
            setSecond('');
            return;
        }
        
        // If there are no issues, these conditions will update the result state
        if(op === '+') setResult(num1 + num2);
        else if(op === '-') setResult(num1 - num2);
        else if(op === '*') setResult(num1 * num2);
        else setResult(num1 / num2);
    }

    // This function updates the value of the state of the input fields
    function handleChange(event){
        const input = event.target.value;
        event.target.id === 'num1' ? setFirst(input) : setSecond(input);
    }

    return (
        <div className="wrapper">

            {/* BackgroundShade element is there to give a background shadow effect to the main element, That is the Calculator element. */}
            <div className="BackgroundShade"></div>

            <div className="Calculator">
                <h1>React Calculator</h1>
                <div className="inputs">
                    <input type="text" value={first} placeholder="Num 1" id="num1" onChange = {handleChange}/>
                    <input type="text" value={second} placeholder="Num 2" id="num2" onChange = {handleChange}/>
                </div>
                <div className="buttons">
                    <button id="add" onClick={()=>handleClick('+')}><BsPlus /></button>
                    <button id="sub" onClick={()=>handleClick('-')}><BsDash /></button>
                    <button id="mul" onClick={()=>handleClick('*')}><BsX /></button>
                    <button id="div" onClick={()=>handleClick('/')}><BsSlash /></button>
                </div>
                
                {/* This section will be triggered when theres an error */}
                {error && 
                    <div className="error">
                        <p className="status">Error!</p>
                        <p className="reason">{error}</p>
                    </div>
                }

                {/* This section will be triggered when there's no error and the result is not empty */}
                {result !== '' && !error && 
                    <div className="result">
                        <p className="status">Success!</p>
                        <p className="ans">Result- {result}</p>
                    </div>
                }
            </div>
        </div>
    )
}

export default Calculator;