import propTypes from "prop-types";
import { assets } from "../../../assets/assets";

const CardLatestAppoinment = ({ src, date, name }) => {
  return (
    <div className="my-5 flex items-center flex-col gap-3 sm:flex-row justify-between w-full border-b pb-2">
      <div className="capitalize flex flex-col sm:flex-row items-center gap-5">
        <img
          src={src}
          className="h-16 w-16 rounded-full"
          alt="profile_pic"
          loading="lazy"
        />
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xl">{name}</span>
          <p className="text-[#696B80]">
            booking on <span>{date}</span>
          </p>
        </div>
      </div>
      <div>
        <img
          className="cursor-pointer"
          src={assets.cancel_icon}
          alt="cancel_icon"
          loading="lazy"
        />
      </div>
    </div>
  );
};

CardLatestAppoinment.propTypes = {
  src: propTypes.string,
  date: propTypes.string,
  name: propTypes.string,
};

export default CardLatestAppoinment;
