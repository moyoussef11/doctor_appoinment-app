import { useDispatch } from "react-redux";
import CardMyAppointment from "../components/CardMyAppointment";
import useLoggedUser from "../hooks/useLoggedUser";
import {
  cancelMyAppointment,
  getMyAppointments,
} from "../rtk/features/user/user";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyAppointment = () => {
  const [myAppointments, setMyAppointments] = useState([]);

  const dispatch = useDispatch();
  const { user } = useLoggedUser();
  const id = user._id;
  const fetchMyAppointments = async () => {
    const result = await dispatch(getMyAppointments(id));

    if (result?.payload?.status === "Success") {
      setMyAppointments(result.payload.data.appointments);
    }
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchMyAppointments();
    }
  }, [id]);

  const cancelAppointment = async (id) => {
    const result = await dispatch(cancelMyAppointment(id));
    if (result?.payload) {
      toast.success(`${result.payload.data.msg}`);
      fetchMyAppointments();
    }
  };

  return (
    <div className="py-10">
      <h3 className="border-b-2 py-2 w-fit text-3xl font-semibold">
        My Appointments
      </h3>
      <div className="flex flex-col gap-4">
        {myAppointments.length > 0 ? (
          myAppointments.map((appointment) => (
            <CardMyAppointment
              key={appointment._id}
              src={appointment.docId.image}
              name={appointment.docId.name}
              category={appointment.docId.speciality}
              address={appointment.docId.address}
              date={`${appointment.slotDate} || ${appointment.slotTime}`}
              cancelAppointment={() => cancelAppointment(appointment._id)}
            />
          ))
        ) : (
          <p>your appointments is emtey</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointment;
