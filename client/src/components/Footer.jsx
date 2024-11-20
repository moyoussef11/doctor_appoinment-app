import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-16 py-2">
      <div className="flex justify-between flex-col sm:flex-row gap-5 border-b py-4 border-[#BDBDBD]">
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          <img src={assets.logo} className="w-52" alt="logo" loading="lazy" />
          <p className="text-[#4B5563]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-semibold">company</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link
                to="/"
                className="capitalize hover:underline text-[#4B5563]"
              >
                home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="capitalize hover:underline text-[#4B5563]"
              >
                about us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="capitalize hover:underline text-[#4B5563]"
              >
                contact us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="capitalize hover:underline text-[#4B5563]"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="uppercase font-semibold">GET IN TOUCH</h2>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/" className="hover:underline text-[#4B5563]">
                +201146646254
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline text-[#4B5563]">
                mohamedDemo@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-2 text-center capitalize text-[#4B5563]">
        Copyright 2024 @ mohamed youssef - All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
