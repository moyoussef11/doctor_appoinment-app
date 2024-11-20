import { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CalendarOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../rtk/features/auth/auth";
import { useDispatch } from "react-redux";

const { Header, Sider, Content } = Layout;

const LayoutDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();

  async function logoutHandle() {
    await dispatch(logout());
  }

  return (
    <Layout className="w-full min-h-screen">
      <Sider
        trigger={null}
        className="bg-white py-3 border-[#BEBEBE] min-h-screen"
        collapsible
        collapsed={collapsed}
      >
        <Menu
          className="h-full"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: <Link to="/dashboard">Dashboard</Link>,
            },
            {
              key: "2",
              icon: <CalendarOutlined />,
              label: <Link to="appointments">Appointments</Link>,
            },
            {
              key: "3",
              icon: <UserAddOutlined />,
              label: <Link to="add-doctor">Add Doctor</Link>,
            },
            {
              key: "4",
              icon: <UserOutlined />,
              label: <Link to="doctors-lists">Doctors Lists</Link>,
            },
            {
              key: "5",
              icon: <UserOutlined />,
              label: <Link to="patients">Patients</Link>,
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          className="flex justify-between items-center"
          style={{ padding: 0, background: "#FFFFFF" }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Button
            onClick={() => logoutHandle()}
            className="bg-main text-white capitalize"
          >
            logout
          </Button>
        </Header>
        <Content className="p-5 rounded bg-[#F2F3FF]">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutDashboard;
