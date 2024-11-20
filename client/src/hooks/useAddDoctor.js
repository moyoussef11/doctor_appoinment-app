import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addDoctor, resetState } from "../rtk/features/doctor/doctor";

const useAddDoctor = () => {
  const [dName, setDName] = useState("");
  const [pic, setPic] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [experience, setExperience] = useState("");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [phone, setPhone] = useState("");
  const doctorState = useSelector((state) => state.doctors);
  const dispatch = useDispatch();
  const { added, loading } = doctorState;

  function validateInputs() {
    if (!dName) return toast.error("Please enter your doctor name");
    if (!pic) return toast.error("Please enter your doctor image");
    if (!speciality) return toast.error("Please enter your doctor speciality");
    if (!email) return toast.error("Please enter your doctor email");
    if (!degree) return toast.error("Please enter your doctor degree");
    if (!address) return toast.error("Please enter your doctor address");
    if (!password) return toast.error("Please enter your doctor password");
    if (!fees) return toast.error("Please enter your doctor fees");
    if (!about) return toast.error("Please enter your doctor about");
    if (!phone) return toast.error("Please enter your doctor phone");
  }

  const submit = async (e) => {
    e.preventDefault();
    await validateInputs();
    const formData = new FormData();
    formData.append("name", dName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("speciality", speciality);
    formData.append("degree", degree);
    formData.append("fees", fees);
    formData.append("experience", experience);
    formData.append("about", about);
    formData.append("available", true);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("image", pic);
    await dispatch(addDoctor(formData));
  };

  useEffect(() => {
    if (added) {
      toast.success("Added successfully");
      dispatch(resetState());
      setAbout("");
      setEmail("");
      setExperience("");
      setDName("");
      setAddress("");
      setDegree("");
      setPassword("");
      setPic("");
      setPhone("");
      setFees("");
      setSpeciality("");
    }
  }, [added]);

  return {
    submit,
    pic,
    setPic,
    dName,
    setDName,
    about,
    setAbout,
    fees,
    setFees,
    address,
    setAddress,
    password,
    setPassword,
    phone,
    setPhone,
    speciality,
    setSpeciality,
    email,
    setEmail,
    experience,
    setExperience,
    degree,
    setDegree,
    loading,
  };
};

export default useAddDoctor;
