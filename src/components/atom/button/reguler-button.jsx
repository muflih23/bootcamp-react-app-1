import React from 'react'
import style from './reguler-button.module.css'

function RegulerButton({text, onClick}) {
  return (
    <button
        className={style.regularButton}
        onClick={onClick}
    >
        {text}
    </button>
  )
}

export default RegulerButton