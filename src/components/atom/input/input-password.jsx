import React from 'react'
import style from './input-password.module.css'

function InputPassword({placeholder, value, onChange}) {
  return (
    <input 
        type='password'
        placeholder={placeholder}
        value={value}
        onChange={(value) => onChange(value)}
        className={style.inputField}
    />
  )
}

export default InputPassword