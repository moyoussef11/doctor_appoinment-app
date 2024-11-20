import { Link, Navigate, Outlet } from "react-router-dom";

const Admin = () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  return !token ? (
    <Navigate to="/login" replace={true} />
  ) : user.role !== "admin" ? (
    <h1 className="py-20">
      for bidden only admin{" "}
      <Link
        to="/"
        className="bg-main p-2 text-white rounded capitalize text-3xl"
      >
        go to home
      </Link>{" "}
    </h1>
  ) : (
    <Outlet />
  );
};

export default Admin;
