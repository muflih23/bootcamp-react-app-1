import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import style from './sidebar.module.css'
import { menuItems } from '../../../data/navigation-menu';
import NavButton from '../../atom/button/nav-button';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {

    const navigate = useNavigate();
    const { pathname } = useLocation();

  return (
    <div className={style.container}>
        <h3>El-Kasir</h3>
        <GiHamburgerMenu className={style.menuIcon}/>
        <div className={style.menuGroup}>
            {
                menuItems.map(menu => (
                    <NavButton 
                        isActive={pathname === menu.path}
                        text={menu.title} 
                        onClick={() => navigate(menu.path)}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default Sidebar