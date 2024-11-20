import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import { useEffect, useState } from "react";
import CardDoctor from "../components/CardDoctor";
import { useDispatch } from "react-redux";
import {
  getDoctor,
  getDoctors,
  resetState,
} from "../rtk/features/doctor/doctor";
import useLoggedUser from "../hooks/useLoggedUser";
import { toast } from "react-toastify";
import { bookingAppointment } from "../rtk/features/user/user";

const DoctorDetails = () => {
  const dispatch = useDispatch();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docSlots, setDocSlots] = useState([]);
  const [slotTime, setSlotTime] = useState("");
  const [slotIndex, setSlotIndex] = useState(0);
  const { id } = useParams();
  const [docInfo, setDocInfo] = useState({});
  const [relateDocs, setRelateDocs] = useState([]);
  const { tokenFromLocal } = useLoggedUser();
  const nav = useNavigate();

  

  const getDocs = async () => {
    const result = await dispatch(getDoctors());
    if (result?.payload?.status === "Success") {
      setRelateDocs(result.payload.data.doctors);
    }
  };

  // booking appointment
  const bookAppointment = async () => {
    if (!tokenFromLocal) {
      toast.warning("login to book appointment");
      return nav("/login");
    }
    if (!slotTime) {
      return toast.error("please select time");
    }
    const date = docSlots[slotIndex][0].datetime;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let slotDate = `${day}_${month}_${year}`;
    const result = await dispatch(
      bookingAppointment({ id, slotDate, slotTime })
    );
    if (result?.payload?.response?.data?.data?.msg) {
      toast.error(`${result.payload.response.data.data.msg}`);
    }
    
    if (result.payload.status === "Success") {
      toast.success(`Booking successfully`);
      return nav("/my-appointment");
    }
  };

  const fetchDoc = async () => {
    const result = await dispatch(getDoctor(id));
    if (result?.payload?.status === "Success") {
      setDocInfo(result.payload.data.doctor);
    }
  };

  const filterDocs = async () => {
    const filteredDocs = await relateDocs.filter(
      (doc) => doc._id !== id && doc.speciality === docInfo.speciality
    );
    setRelateDocs(filteredDocs);
  };

  // handelSlots
  const getAvailableSlots = async () => {
    setDocSlots([]);
    // getting current date
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      // setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.getMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        // add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // increment current time by 30  minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(resetState());
    getDocs();
    fetchDoc();
  }, [id]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    filterDocs();
  }, [docInfo, id]);


  return (
    <>
      <div className="py-10 flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-1/5 h-[250px] bg-main rounded">
          <img
            src={docInfo?.image}
            className="w-full h-full object-cover"
            loading="lazy"
            alt="doctor-img"
          />
        </div>
        <div className="w-full md:flex-1  rounded text-[#1F2937] flex flex-col gap-3">
          <div className="info p-5 border rounded">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold capitalize text-2xl">
                {docInfo?.name}
              </h2>
              <img
                className="h-5"
                src={assets.verified_icon}
                alt="verified_icon"
              />
            </div>
            <div className="flex items-center gap-3 capitalize font-light">
              <span>{docInfo?.degree}</span>
              <p>{docInfo?.speciality}</p>
              <span className="p-2 border rounded-full">
                {docInfo?.experience}
              </span>
            </div>
            <div className="flex flex-col gap-3">
              <h6 className="flex items-center gap-2 capitalize font-semibold">
                about{" "}
                <img
                  className="h-4"
                  src={assets.info_icon}
                  loading="lazy"
                  alt="info_icon"
                />{" "}
              </h6>
              <p className="text-gray-500">{docInfo?.about}</p>
              <p className="capitalize">
                appointment fee:{" "}
                <span className="font-bold text-red-500">${docInfo?.fees}</span>
              </p>
            </div>
          </div>
          <div className="bookSloting p-5 border rounded flex flex-col gap-5">
            <h3 className="font-semibold capitalize">Booking slots</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`border rounded-full py-2 px-4 flex flex-col items-center cursor-pointer ${
                      slotIndex === index
                        ? "bg-main text-white"
                        : "border border-gray-300"
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                    <p>{item[0] && item[0].datetime.getDate()}</p>
                  </div>
                ))}
              <div className="flex items-center justify-center flex-wrap gap-3 py5">
                {docSlots.length &&
                  docSlots[slotIndex].map((item, index) => (
                    <p
                      onClick={() => setSlotTime(item.time.split(",")[1])}
                      className={`border border-gray-300 rounded-full p-2 cursor-pointer ${
                        item.time.split(",")[1] === slotTime
                          ? "bg-main text-white"
                          : ""
                      }`}
                      key={index}
                    >
                      {item.time.split(",")[1].toLowerCase()}
                    </p>
                  ))}
              </div>
            </div>
            <button
              onClick={() => bookAppointment()}
              className="bg-main text-white w-[250px] capitalize p-2 rounded"
            >
              book an appointment
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center flex gap-3 flex-col">
          <h4 className="text-3xl capitalize font-semibold">Related Doctors</h4>
          <span className="text-sm">
            Simply browse through our extensive list of trusted doctors.
          </span>
        </div>
        <div className="doctors my-10 w-full md:w-[80%] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {relateDocs.map((doctor) => (
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
    </>
  );
};

export default DoctorDetails;
