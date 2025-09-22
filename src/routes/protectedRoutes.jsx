import { Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const { pathname } = useLocation();

  const tokenProtected = [
    "/"
  ];

  const token = localStorage.getItem("token") ?? "";

  if (tokenProtected.includes(pathname)) {
    if (!token) {
      const redirectUrl = "/login";
      window.location.href = redirectUrl;
      return null;
    }
  }

  return <Outlet />;
}

export default ProtectedRoutes;
