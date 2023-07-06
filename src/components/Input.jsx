import React, { Children } from 'react'

const Input = (props) => {
  const handleChange = (e) => {
    props.setValue(e.target.value);
  }
  return (
    <div id = "input">
        <input 
        placeholder={props.label}
        onChange={handleChange}
        type={props.type}/>
    </div>
  )
}

export default Input