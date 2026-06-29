import { useState } from "react";

const Textbox=(props)=>{
    
    const [inputValue, setInputValue] = useState('');
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }
    
    const [result, setResult] = useState('');
    const checkAnswer = () => {
        if (inputValue == props.description){
            setResult('correct')
        }
        else{
            setResult('wrong')
        }
    }

    return(
        <>
        <div className={`answer-box ${result}`}>
            <h3>Guess the answer here:</h3>
            <form>
                <input
                    type="text"
                    value={inputValue}
                    placeholder="Enter your answer"
                    onChange={handleChange}
                />
                <button type='button' onClick={checkAnswer}>Submit Guess</button>
            </form>
      </div>
    </>
    );
}

export default Textbox;