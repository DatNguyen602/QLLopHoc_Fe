import React from 'react'

const Button = (props) => {
    const handleClick =  props.handle ? props.handle : () => {};
  return (
    <button
    id="button"
    onClick = {handleClick}
    type='button'>
        {props.label}
    </button>
  )
}

export default Button