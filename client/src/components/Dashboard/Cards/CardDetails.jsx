import propTypes from "prop-types";

const CardDetails = ({ src, nums, name }) => {
  return (
    <div className="card flex items-center flex-col md:flex-row gap-5 bg-[#FFFFFF] md:p-5 w-full">
      <img
        className="h-16 w-16"
        src={src}
        alt={name + "_icon"}
        loading="lazy"
      />
      <div className="capitalize flex flex-col text-sm">
        <strong>{nums}</strong>
        <span className="capitalize font-light">{name}</span>
      </div>
    </div>
  );
};

CardDetails.propTypes = {
  src: propTypes.string,
  nums: propTypes.number,
  name: propTypes.string,
};

export default CardDetails;
