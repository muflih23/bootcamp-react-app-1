import { lazy } from 'react'

export const routes = [
    {
        path: "/",
        component: lazy(() => import('./features/login/login')),
        name: "login",
    },
    {
        path: "/home",
        component: lazy(() => import('./features/home/home')),
        name: "home",
    },
]