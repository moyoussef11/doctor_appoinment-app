import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "../rtk/features/auth/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const useSignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { error, loading } = authState;
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const formData = { name, email, password };
    if (!name) return toast.error("please enter your name");
    if (name.length < 3) return toast.error("name at least is 3 digits");
    if (!email) return toast.error("please enter your email");
    if (!password) return toast.error("please enter your password");
    if (password.length < 8)
      return toast.error("password at least is 8 digits");
    const result = await dispatch(register(formData));
    if (result?.payload?.status === "Success") {
      nav("/login");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);
  return {
    submit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
  };
};

export default useSignUp;
