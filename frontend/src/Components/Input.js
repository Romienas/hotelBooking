import React from 'react'
import './input.scss'

function Input(props){

    const eventHandler = (e) => {
        props.clickHandler(e.target.value)
    }

    return (
        <input
            className='input'
            type={props.type}
            onChange={eventHandler}
        />
    )
}

export default Input