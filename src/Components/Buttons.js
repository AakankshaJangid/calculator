import React, { useState } from 'react'
import OutputScreen from './OutputScreen'

function Buttons() {
    const [input,setInput] = useState('')
    const [result,setResult] = useState('')
    const onClick =  (e) => {
        
        const value = e.target.innerText

        switch (value) {
            case '=': {
                if (input !== '') {
                    try {
                        console.log(input)
                        result = Function("return "+input.toString())
                        console.log(result)
                    }
                    catch(err) {
                        setResult("Math Error")
                    }
                    if (result === undefined)
                        setResult("Math Error")
                    else {
                        setResult(result)
                    }
                }
                break
            }
            case 'Clear' : {
                setResult('')
                setInput('')
                break
            }
            case 'C' : {
                let str = input
                str = str.substring(0, str.length-1)
                setInput(str)
                break
            }
            default: {
                setInput(input + value)
                console.log(value)
                break
            }
        }
    }

  return (
    <div>
    <OutputScreen input={input} result={result}/>
    <div className='mainCalc'>
      <div className='numbers'>
        <div className='top-rows'>
        <button onClick={onClick} id='clear' >Clear</button>
        <button onClick={onClick} id='backspace'>C</button>
        <button value='%' onClick={onClick}>%</button>
        <button value='7' onClick={onClick}>7</button>
        <button value='8' onClick={onClick}>8</button>
        <button value='9' onClick={onClick}>9</button>
        <button value='4' onClick={onClick}>4</button>
        <button value='5' onClick={onClick}>5</button>
        <button value='6' onClick={onClick}>6</button>
        <button value='1' onClick={onClick}>1</button>
        <button value='2' onClick={onClick}>2</button>
        <button value='3' onClick={onClick}>3</button>
        </div>
        <div className='bottom-row'>
        <button className='zero' value='0' onClick={onClick}>0</button>
        <button value='.' onClick={onClick} className='dot'>.</button>
        </div>        
      </div>
      <div className='operations'>
        <button value='/' onClick={onClick}>/</button>
        <button value='*' onClick={onClick}>*</button>
        <button value='-' onClick={onClick}>-</button>
        <button value='+' onClick={onClick}>+</button>
        <button value='=' onClick={onClick}>=</button>
      </div>
    </div>
    </div>
  )
}

export default Buttons
