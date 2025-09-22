import { createBrowserRouter } from "react-router-dom";
import Login from "../features/login/login";
import Home from "../features/home/home";
import ProtectedRoutes from "./protectedRoutes";
import Layout from "../components/organizm/layout/Layout";

export const routes = createBrowserRouter([
    {
        element: <Login />,
        path: "/login",
    },
    {
        element: <ProtectedRoutes />,
        children: [
            {
                element: <Layout />,
                children: [
                    {
                        index: true,
                        element: <Home />
                    }
                ]
            }
        ]
    }
])