import { useEffect, useState } from "react";
import useLoggedUser from "./useLoggedUser";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../rtk/features/auth/auth";

const useHeader = () => {
  const { tokenFromLocal, loggedUser, user } = useLoggedUser();

  const [token, setToken] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const nav = useNavigate();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const closeMenu = () => {
    setMenu(false);
  };

  const { loggedOut } = authState;

  useEffect(() => {
    if (loggedOut) {
      setToken(false);
    }
  }, [loggedOut]);

  async function logoutHandle() {
    await dispatch(logout());
  }

  useEffect(() => {
    if (loggedUser) {
      setToken(tokenFromLocal);
      setUserLogged(user);
    }
  }, [loggedUser, tokenFromLocal]);

  return {
    nav,
    menu,
    closeMenu,
    token,
    userLogged,
    dropdown,
    setDropdown,
    logoutHandle,
    setMenu,
  };
};

export default useHeader;
