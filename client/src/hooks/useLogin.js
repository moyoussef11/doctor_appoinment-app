import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../rtk/features/auth/auth";

const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { error } = authState;
  const nav = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const loginHandle = async (e) => {
    e.preventDefault();
    const formData = { email, password };
    if (!email) return toast.error("Please enter your email");
    if (!password) return toast.error("Please enter your password");
    if (password.length < 8)
      return toast.error("password at least is 8 digits");
    const result = await dispatch(login(formData));
    if (result.payload.status === "Success") {
      nav(from, { replace: true });
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return { loginHandle, email, setEmail, password, setPassword };
};

export default useLogin;
