import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctors } from "../../rtk/features/doctor/doctor";
import { Table } from "antd";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },

];

const DoctorsList = () => {
  const doctorsState = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  const data = doctorsState?.doctors?.data?.doctors?.map((item, index) => ({
    key: index.toString(),
    name: <Link to={`/doctor-details/${item._id}`}>{item.name}</Link>,
    email: item.email,
    address: item.address,
  
  }));

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default DoctorsList;
