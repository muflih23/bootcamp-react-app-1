import React from 'react'
import Sidebar from '../../molecule/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import style from './layout.module.css'

function Layout() {
  return (
    <div className={style.screenLayout}>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Layout