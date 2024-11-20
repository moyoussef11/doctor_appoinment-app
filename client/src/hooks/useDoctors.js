import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../rtk/features/doctor/doctor";

const useDoctors = () => {
     const dispatch = useDispatch();
     const doctorsState = useSelector((state) => state.doctors);
     const { doctors } = doctorsState;
     const [originalDoctorsList, setOriginalDoctorsList] = useState([]);
     const [doctorsList, setDoctorsList] = useState([]);
     const [activeList, setActiveList] = useState("All");

     const fetchDocs = async () => {
       const result = await dispatch(getDoctors());
       if (result?.payload?.status === "Success") {
         const fetchedDoctors = result?.payload.data.doctors;
         setOriginalDoctorsList(fetchedDoctors);
         setDoctorsList(fetchedDoctors);
       }
     };

     // handle filterDoctors
     const filterDoctors = (special) => {
       setActiveList(special);
       if (special === "All") {
         setDoctorsList(originalDoctorsList);
       } else {
         const resultFilter = originalDoctorsList.filter(
           (doc) => doc.speciality === special
         );
         setDoctorsList(resultFilter);
       }
     };

     // handle resetData
     const resetData = () => {
       setActiveList("All");
       setDoctorsList(originalDoctorsList);
     };

     useEffect(() => {
       window.scrollTo(0, 0);
       fetchDocs();
     }, []);

     useEffect(() => {
       if (doctors !== null) {
         setOriginalDoctorsList(doctors?.data?.doctors);
         setDoctorsList(doctors?.data?.doctors);
       }
     }, [doctors]);
  return { resetData, activeList, filterDoctors, doctorsList };
}

export default useDoctors;