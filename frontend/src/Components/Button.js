import React from 'react'
import './button.scss'

function Button(props) {

    const handleClick = () => {
        props.clickHandler()
    }

    return (
        <div 
            className='button'
            onClick={handleClick}
        >
            {props.text}
        </div>
    )
}

export default Button