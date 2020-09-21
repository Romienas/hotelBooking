import React from 'react'
import './input.scss'

function Input(props){
    return (
        <input
            className='input'
            type={props.type}
        />
    )
}

export default Input