import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const {
    nav,
    menu,
    closeMenu,
    token,
    userLogged,
    dropdown,
    setDropdown,
    logoutHandle,
    setMenu,
  } = useHeader();

  return (
    <header className="py-4 flex items-center justify-between border-b border-[#ADADAD]">
      <img
        onClick={() => nav("/")}
        className="cursor-pointer w-52"
        src={assets.logo}
        alt="logo"
        loading="lazy"
      />
      {/* center start */}
      <nav className="hidden md:block">
        <ul className="flex items-center gap-5">
          <li>
            <NavLink className="uppercase text-[#1F2937] font-semibold" to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-[#1F2937] font-semibold"
              to="/doctors"
            >
              all doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-[#1F2937] font-semibold"
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-[#1F2937] font-semibold"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-[#1F2937] font-semibold border p-2 text-sm rounded hover:bg-main hover:text-white duration-200"
              to="/dashboard"
            >
              dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav
        className={`md:hidden absolute ${
          menu ? "top-20" : "-top-80"
        }  bg-slate-100 w-full left-0 px-4 py-2 z-10 duration-300`}
      >
        <ul className="flex items-center flex-col gap-5">
          <li>
            <NavLink
              onClick={closeMenu}
              className="uppercase text-[#1F2937] font-semibold"
              to="/"
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className="uppercase text-[#1F2937] font-semibold"
              to="/doctors"
            >
              all doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className="uppercase text-[#1F2937] font-semibold"
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeMenu}
              className="uppercase text-[#1F2937] font-semibold"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="uppercase text-[#1F2937] font-semibold border p-2 text-sm rounded hover:bg-main hover:text-white duration-200"
              to="/dashboard"
            >
              dashboard
            </NavLink>
          </li>
        </ul>
        {token ? (
          <div className="md:hidden flex justify-center my-4 items-center gap-5 relative z-20">
            <img
              className="h-12 w-12 rounded-full"
              src={userLogged?.image}
              alt="profile_pic"
              loading="lazy"
            />
            <img
              className="cursor-pointer"
              src={assets.dropdown_icon}
              loading="lazy"
              alt="dropdown_icon"
              onClick={() => setDropdown(!dropdown)}
            />
            {dropdown ? (
              <ul className="bg-[#F8F8F8] rounded flex flex-col gap-1 absolute top-16 w-[218px] py-2 z-20">
                <li>
                  <NavLink
                    onClick={closeMenu}
                    className="capitalize text-[#4B5563]"
                    to="/profile"
                  >
                    my profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={closeMenu}
                    className="capitalize text-[#4B5563]"
                    to="/my-appointment"
                  >
                    my appointments
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => logoutHandle()}
                    className="capitalize text-[#4B5563]"
                  >
                    log out
                  </button>
                </li>
              </ul>
            ) : (
              ""
            )}
          </div>
        ) : (
          <button
            onClick={() => nav("/create-account")}
            className="capitalize bg-main text-white p-2 rounded-full w-full my-2"
          >
            create account
          </button>
        )}
      </nav>
      {/* center end */}
      {token ? (
        <div className="hidden md:flex items-center gap-5 relative z-20">
          <img
            className="h-12 w-12 rounded-full"
            src={userLogged?.image}
            alt="profile_pic"
            loading="lazy"
          />
          <img
            className="cursor-pointer"
            src={assets.dropdown_icon}
            loading="lazy"
            alt="dropdown_icon"
            onClick={() => setDropdown(!dropdown)}
          />
          {dropdown ? (
            <ul className="bg-[#F8F8F8] rounded flex flex-col gap-1 absolute top-16 w-[218px] -left-20 p-2 z-20">
              <li>
                <NavLink className="capitalize text-[#4B5563]" to="/profile">
                  my profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="capitalize text-[#4B5563]"
                  to="/my-appointment"
                >
                  my appointments
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => logoutHandle()}
                  className="capitalize text-[#4B5563]"
                >
                  log out
                </button>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      ) : (
        <button
          onClick={() => nav("/create-account")}
          className="capitalize hidden md:block bg-main text-white p-2 rounded-full"
        >
          create account
        </button>
      )}
      <img
        src={assets.menu_icon}
        loading="lazy"
        className="md:hidden cursor-pointer z-20"
        alt="menu_icon"
        onClick={() => setMenu(!menu)}
      />
    </header>
  );
};

export default Header;
