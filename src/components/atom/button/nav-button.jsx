import React from "react";
import style from './nav-button.module.css'

function NavButton({onClick, text, isActive}) {
  return (
    <button className={isActive ? style.activeColor : style.navButton} onClick={onClick}>
        {text}
    </button>
  )
}

export default NavButton;
