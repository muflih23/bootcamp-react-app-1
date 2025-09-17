import React from 'react'
import style from './input-text.module.css'

function InputText({placeholder, onChange, value}) {
  return (
    <input 
        type="text"
        placeholder={placeholder}
        onChange={(text) => onChange(text)}
        value={value}
        className={style.inputField}
    />
  )
}

export default InputText