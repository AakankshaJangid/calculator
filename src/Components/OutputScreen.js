import React from 'react'

const OutputScreen = (props) => {
  return (
    <div className='output-screen'>
        <input type='text' className='input-screen' readOnly value = {props.input}/>
        <input type='text' className='result-screen' readOnly value={props.result}/>
    </div>
  )
}

export default OutputScreen
