import React from 'react'
import './input.css'
function InputBox(props) {
    return (
        <input
            type={props.type}
            className='input'
            placeholder={props.name}
            onChange={props.handleChange}>
        </input>

    )
}

export default InputBox