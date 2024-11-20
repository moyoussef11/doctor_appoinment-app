import { Link } from "react-router-dom";
import Input from "../components/Input";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const { loginHandle, email, setEmail, password, setPassword } = useLogin();

  return (
    <div className="py-10">
      <h4 className="capitalize text-center text-3xl text-[#3f3042]">login</h4>
      <form
        onSubmit={loginHandle}
        className="border max-w-[400px] mx-auto my-5 py-2 px-10 rounded shadow-lg flex flex-col gap-3 text-[#6a7174]"
      >
        <span className="text-sm">Please log in to book appointment</span>
        <Input
          label={"email"}
          type={"email"}
          placeholder={"Enter your email"}
          onChange={(e) => setEmail(e.target.value)}
          name={"email"}
          id={"email"}
          value={email}
        />
        <Input
          label={"password"}
          type={"password"}
          placeholder={"Enter your password"}
          onChange={(e) => setPassword(e.target.value)}
          name={"password"}
          id={"password"}
          value={password}
        />
        <button className="bg-main text-white w-full text-center rounded-xl py-1">
          login
        </button>
        <span>
          Create an new account?
          <Link className="text-blue-500 underline" to="/create-account">
            Click here{" "}
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
