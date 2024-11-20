import propTypes from "prop-types";
import { useState } from "react";
import { assets } from "../assets/assets";

const CardMyAppointment = ({
  src,
  name,
  category,
  address,
  date,
  cancelAppointment,
}) => {
  const [payOnline, setPayOnline] = useState(false);

  return (
    <div className="py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2">
      <img
        className="bg-[#EAEFFF] rounded h-[182px] w-1/2 sm:w-[160px] mx-auto"
        src={src}
        alt="doc-img"
        loading="lazy"
      />
      <div className="info capitalize flex flex-col gap-1 my-4 flex-1 ml-10">
        <h3 className="font-semibold text-3xl capitalize">{name}</h3>
        <small>{category}</small>
        <strong>address:</strong>
        <p>{address}</p>
        <strong>date & time</strong>
        <span>{date}</span>
      </div>
      <div className="flex flex-col gap-2">
        {!payOnline ? (
          <button
            onClick={() => setPayOnline(true)}
            className="capitalize border-2 p-2 sm:w-[200px] rounded text-gray-500 hover:bg-main hover:text-white duration-200"
          >
            pay online
          </button>
        ) : (
          <div className="flex flex-col gap-2">
            <button className="capitalize border-2 p-2 sm:w-[200px] rounded text-gray-500 hover:bg-gray-300 hover:text-white duration-200">
              <img
                src={assets.stripe_logo}
                alt="stripe_logo"
                className="mx-auto h-5"
                loading="lazy"
              />
            </button>
            <button className="capitalize border-2 p-2 sm:w-[200px] rounded text-gray-500 hover:bg-gray-300 hover:text-white duration-200">
              <img
                src={assets.razorpay_logo}
                alt="razorpay_logo"
                className="mx-auto h-5"
                loading="lazy"
              />
            </button>
          </div>
        )}
        <button
          onClick={cancelAppointment}
          className="capitalize border-2 p-2 sm:w-[200px] rounded text-gray-500 hover:bg-red-500 hover:text-white duration-200"
        >
          cancel appointment
        </button>
      </div>
    </div>
  );
};

CardMyAppointment.propTypes = {
  src: propTypes.string,
  name: propTypes.string,
  category: propTypes.string,
  address: propTypes.string,
  date: propTypes.string,
  cancelAppointment: propTypes.func,
};

export default CardMyAppointment;
