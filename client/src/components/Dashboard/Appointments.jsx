import { Table } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAppointments } from "../../rtk/features/user/user";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "SlotDate",
    dataIndex: "slotDate",
    key: "slotDate",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const Appointments = () => {
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { appointments } = usersState;

  const data = appointments?.data?.appointments?.map((item, index) => ({
    key: index.toString(),
    name: (
      <Link to={`/doctor-details/${item.docId._id}`}>{item.docId.name}</Link>
    ),
    slotDate: item.slotDate,
    address: item.docId.address,
  }));

  useEffect(() => {
    dispatch(getAppointments());
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default Appointments;
