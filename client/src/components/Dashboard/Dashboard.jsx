import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import CardDetails from "./Cards/CardDetails";
import CardLatestAppoinment from "./Cards/CardLatestAppoinment";
import { useEffect } from "react";
import { fetchUsers, getAppointments } from "../../rtk/features/user/user";
import { getDoctors } from "../../rtk/features/doctor/doctor";

const Dashboard = () => {
  const usersState = useSelector((state) => state.users);
  const doctorsState = useSelector((state) => state.doctors);
  const { users, appointments } = usersState;
  const { doctors } = doctorsState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(getDoctors());
    dispatch(getAppointments());
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <CardDetails
          src={assets.doctor_icon}
          name={"doctor"}
          nums={doctors?.data?.doctors?.length}
        />
        <CardDetails
          src={assets.appointment_icon}
          name={"appointments"}
          nums={
            appointments?.data?.appointments?.length > 0
              ? appointments?.data?.appointments?.length
              : 0
          }
        />
        <CardDetails
          src={assets.user_icon}
          name={"patients"}
          nums={users?.length}
        />
      </div>
      <div className="bg-white p-5 rounded">
        <div className="flex items-center gap-2">
          <img src={assets.list_icon} alt="list_icon" loading="lazy" />
          <h3 className="font-bold text-[#323232] capitalize">
            latest appointments
          </h3>
        </div>
        <div className="latestApp pt-5 flex flex-col">
          {appointments?.data?.appointments?.length > 0 ? (
            appointments.data.appointments
              .slice(0, 3)
              .map((appointment) => (
                <CardLatestAppoinment
                  key={appointment._id}
                  src={appointment?.userId?.image}
                  date={appointment.slotDate}
                  name={appointment?.docId?.name}
                />
              ))
          ) : (
            <p>Empty</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
