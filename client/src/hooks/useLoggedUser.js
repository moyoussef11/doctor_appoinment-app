import { useEffect, useState } from "react";

const useLoggedUser = () => {
  const [tokenFromLocal, setTokenFromLocal] = useState("");
  const [loggedUser, setLoggedUser] = useState("");
  const [user, setUser] = useState({});
  const isLogged = localStorage.getItem("loggedUser");

  async function setVars() {
    await setTokenFromLocal(localStorage.getItem("token"));
    await setLoggedUser(isLogged);
    await setUser(JSON.parse(localStorage.getItem("user")));
  }

  useEffect(() => {
    if (isLogged) {
      setVars();
    }
  }, [isLogged]);

  return { tokenFromLocal, loggedUser, user };
};

export default useLoggedUser;
