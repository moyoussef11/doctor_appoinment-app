import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Table } from "antd";
import { useEffect } from "react";
import { fetchUsers } from "../../rtk/features/user/user";

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

const PatientsList = () => {
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const { users } = usersState;

  const data = users?.map((item, index) => ({
    key: index.toString(),
    name: <Link to={`/doctor-details/${item._id}`}>{item.name}</Link>,
    email: item.email,
    address: item.address,
  
  }));

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return <Table columns={columns} dataSource={data} />;
};

export default PatientsList;
