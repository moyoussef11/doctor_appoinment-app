import propTypes from "prop-types";
import { Link } from "react-router-dom";

const CardDoctor = ({ id, image, name, speciality }) => {
  return (
    <Link
      to={`/doctor-details/${id}`}
      className="rounded border border-[#d2dfff] hover:-translate-y-2 duration-300"
    >
      <img src={image} className="bg-[#eaefff]" alt={name} />
      <div className="p-2 flex flex-col items-center md:items-start gap-1">
        <p className="capitalize text-green-500">avaliable</p>
        <h2 className="font-bold capitalize">{name}</h2>
        <span className="text-sm capitalize">{speciality}</span>
      </div>
    </Link>
  );
};

CardDoctor.propTypes = {
  id: propTypes.string,
  image: propTypes.string,
  name: propTypes.string,
  speciality: propTypes.string,
};

export default CardDoctor;
