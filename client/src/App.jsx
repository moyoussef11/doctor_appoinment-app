import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import DoctorDetails from "./pages/DoctorDetails";
import Profile from "./pages/Profile";
import MyAppointment from "./pages/MyAppointment";
import Appointments from "./components/Dashboard/Appointments";
import AddDoctor from "./components/Dashboard/AddDoctor";
import DoctorsList from "./components/Dashboard/DoctorsList";
import LayoutDashboard from "./components/Dashboard/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import PatientsList from "./components/Dashboard/PatientsList";
import RequireAuth from "./protectedRoutes/RequireAuth";
import Admin from "./protectedRoutes/Admin";
import RedirectIfAuth from "./protectedRoutes/RedirectIfAuth";

function App() {
  const location = useLocation();
  const isDashboard = location.pathname.includes("dashboard");

  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />
      {!isDashboard && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route element={<RedirectIfAuth />}>
          <Route path="/create-account" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/doctor-details/:id" element={<DoctorDetails />} />
        <Route element={<RequireAuth />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-appointment" element={<MyAppointment />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-appointment" element={<MyAppointment />} />
        <Route element={<Admin />}>
          <Route path="/dashboard" element={<LayoutDashboard />}>
            <Route index element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="add-doctor" element={<AddDoctor />} />
            <Route path="doctors-lists" element={<DoctorsList />} />
            <Route path="patients" element={<PatientsList />} />
          </Route>
        </Route>
      </Routes>
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
