import { Navigate, Outlet } from "react-router-dom";

const RedirectIfAuth = () => {
  const token = localStorage.getItem("token");
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default RedirectIfAuth;
