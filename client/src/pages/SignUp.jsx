import { Link } from "react-router-dom";
import Input from "../components/Input";
import useSignUp from "../hooks/useSignUp";

const SignUp = () => {
  const {
    submit,
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    loading,
  } = useSignUp();

  return (
    <div className="py-10">
      <h4 className="capitalize text-center text-3xl text-[#3f3042]">
        create account
      </h4>
      <form
        onSubmit={submit}
        className="border max-w-[400px] mx-auto my-5 py-2 px-10 rounded shadow-lg flex flex-col gap-3 text-[#6a7174]"
      >
        <span className="text-sm">Please sign up to book appointment</span>
        <Input
          label={"name"}
          type={"text"}
          placeholder={"Enter your name"}
          onChange={(e) => setName(e.target.value)}
          name={"name"}
          id={"name"}
          value={name}
        />
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
        <button
          className={`${
            loading === "pending" ? "opacity-40" : "bg-main"
          } text-white w-full text-center rounded-xl py-1 bg-main`}
        >
          Create Account
        </button>
        <span>
          Already have an account?
          <Link className="text-blue-500 underline" to="/login">
            Login here
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
