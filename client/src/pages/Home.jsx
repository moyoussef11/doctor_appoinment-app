import { Link } from "react-router-dom";
import { assets, specialityData } from "../assets/assets";
import { useEffect, useState } from "react";
import CardDoctor from "../components/CardDoctor";
import { useDispatch } from "react-redux";
import { getDoctors } from "../rtk/features/doctor/doctor";

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();

  const fetchDocs = async () => {
    const result = await dispatch(getDoctors());
    if (result.payload) {
      setDoctors(result.payload.data.doctors);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchDocs();
  }, []);

  return (
    <>
      <section
        id="hero"
        className="bg-main min-h-[500px] my-5 rounded text-white relative flex flex-col md:flex-row gap-10 items-center px-20 py-5 overflow-hidden"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-5 items-center md:items-start">
          <h2 className="capitalize text-3xl text-center md:text-start font-bold md:text-5xl">
            Book Appointment <br />
            With Trusted Doctors
          </h2>
          <div className="flex items-center flex-col md:flex-row gap-3">
            <img
              src={assets.group_profiles}
              className="w-20"
              loading="lazy"
              alt="group_profiles"
            />
            <p className="text-center md:text-start">
              Simply browse through our extensive list of trusted doctors,
              <br />
              schedule your appointment hassle-free.
            </p>
          </div>
          <a
            href="#speciality"
            className="p-2 bg-white text-[#595959] rounded-full flex items-center gap-3 hover:scale-105 duration-300"
          >
            Book appointment{" "}
            <img src={assets.arrow_icon} loading="lazy" alt="arrow_icon" />
          </a>
        </div>
        <div className="w-full md:w-1/2 -mb-5 md:-mb-28">
          <img src={assets.header_img} loading="lazy" alt="hero_img" />
        </div>
      </section>
      <section id="speciality" className="py-10 flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <h3 className="font-semibold text-[#1F2937] text-2xl md:text-4xl">
            Find by Speciality
          </h3>
          <p className="text-[#4B5563]">
            Simply browse through our extensive list of trusted doctors,
            <br />
            schedule your appointment hassle-free.
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          {specialityData.map((item, index) => (
            <Link
              to={`/doctors`}
              key={index}
              className="flex flex-col items-center justify-center hover:-translate-y-4 duration-300"
            >
              <img
                src={item.image}
                className="w-20 h-20 rounded-full"
                alt={item.speciality}
              />
              <span className="text-[#4B5563] text-sm capitalize">
                {item.speciality}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section id="top-doctors" className="py-10">
        <div className="flex items-center justify-center flex-col gap-3">
          <h2 className="font-semibold text-[#1F2937] text-2xl md:text-4xl">
            Top Doctors to Book
          </h2>
          <p className="text-[#4B5563]">
            Simply browse through our extensive list of trusted doctors.
          </p>
        </div>
        <div className="py-10 flex flex-col items-center gap-5">
          <div className="doctors grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {doctors.slice(0, 10).map((doctor) => (
              <CardDoctor
                key={doctor._id}
                id={doctor._id}
                name={doctor.name}
                image={doctor.image}
                speciality={doctor.speciality}
              />
            ))}
          </div>
          <Link
            to="/doctors"
            className="bg-[#eaefff] rounded-full px-4 py-2 text-[#6e7e89] capitalize"
          >
            more
          </Link>
        </div>
      </section>
      <section
        id="book-appointment"
        className="py-10 bg-main px-5 rounded flex items-center md:max-h-[430px] flex-col md:flex-row"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <h3 className="capitalize text-5xl text-white leading-normal">
            Book Appointment <br /> With 100+ Trusted Doctors
          </h3>
          <Link
            className="capitalize bg-white p-2 rounded-full w-fit"
            to="/create-account"
          >
            create account
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={assets.appointment_img}
            className="h-[500px] md:-mt-16"
            loading="lazy"
            alt="appointment_img"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
