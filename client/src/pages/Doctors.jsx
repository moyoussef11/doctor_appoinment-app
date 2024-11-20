import { specialityData } from "../assets/assets";
import CardDoctor from "../components/CardDoctor";
import useDoctors from "../hooks/useDoctors";

const Doctors = () => {
  const { resetData, activeList, filterDoctors, doctorsList } = useDoctors();

  return (
    <div className="py-5">
      <h2 className="text-[#4B5563]">Browse through the doctors specialist.</h2>
      <div className="py-5 flex gap-3 flex-col md:flex-row">
        <div className="specialist w-full md:w-1/5">
          <ul className="flex items-center justify-center md:w-full py-2 gap-4 md:items-start md:justify-start md:flex-col flex-wrap">
            <li
              onClick={resetData}
              className={`border text-[#4B5563] rounded px-3 py-1 md:w-full ${
                activeList === "All" ? "bg-[#E2E5FF]" : ""
              } font-thin cursor-pointer hover:bg-[#E2E5FF] duration-200`}
            >
              All
            </li>
            {specialityData?.map((item, index) => (
              <li
                key={index}
                className={`border text-[#4B5563] rounded px-3 py-1 md:w-full font-thin cursor-pointer hover:bg-[#E2E5FF] duration-200 ${
                  item.speciality == activeList ? "bg-[#E2E5FF]" : ""
                }`}
                onClick={() => filterDoctors(item.speciality)}
              >
                {item.speciality}
              </li>
            ))}
          </ul>
        </div>
        <div className="doctors w-full md:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {doctorsList?.map((doctor) => (
            <CardDoctor
              key={doctor._id}
              id={doctor._id}
              name={doctor.name}
              image={doctor.image}
              speciality={doctor.speciality}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
