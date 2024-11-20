import { assets } from "../../assets/assets";
import useAddDoctor from "../../hooks/useAddDoctor";
import Input from "../Input";

const AddDoctor = () => {
  // const [dName, setDName] = useState("");
  // const [pic, setPic] = useState("");
  // const [speciality, setSpeciality] = useState("");
  // const [email, setEmail] = useState("");
  // const [degree, setDegree] = useState("");
  // const [password, setPassword] = useState("");
  // const [address, setAddress] = useState("");
  // const [experience, setExperience] = useState("");
  // const [fees, setFees] = useState("");
  // const [about, setAbout] = useState("");
  // const [phone, setPhone] = useState("");
  // const doctorState = useSelector((state) => state.doctors);
  // const dispatch = useDispatch();
  // const { added, loading } = doctorState;

  // function validateInputs() {
  //   if (!dName) return toast.error("Please enter your doctor name");
  //   if (!pic) return toast.error("Please enter your doctor image");
  //   if (!speciality) return toast.error("Please enter your doctor speciality");
  //   if (!email) return toast.error("Please enter your doctor email");
  //   if (!degree) return toast.error("Please enter your doctor degree");
  //   if (!address) return toast.error("Please enter your doctor address");
  //   if (!password) return toast.error("Please enter your doctor password");
  //   if (!fees) return toast.error("Please enter your doctor fees");
  //   if (!about) return toast.error("Please enter your doctor about");
  //   if (!phone) return toast.error("Please enter your doctor phone");
  // }

  // const submit = async (e) => {
  //   e.preventDefault();
  //   await validateInputs();
  //   const formData = new FormData();
  //   formData.append("name", dName);
  //   formData.append("email", email);
  //   formData.append("password", password);
  //   formData.append("speciality", speciality);
  //   formData.append("degree", degree);
  //   formData.append("fees", fees);
  //   formData.append("experience", experience);
  //   formData.append("about", about);
  //   formData.append("available", true);
  //   formData.append("address", address);
  //   formData.append("phone", phone);
  //   formData.append("image", pic);
  //   await dispatch(addDoctor(formData));
  // };

  // useEffect(() => {
  //   if (added) {
  //     toast.success("Added successfully");
  //     dispatch(resetState());
  //     setAbout("");
  //     setEmail("");
  //     setExperience("");
  //     setDName("");
  //     setAddress("");
  //     setDegree("");
  //     setPassword("");
  //     setPic("");
  //     setPhone("");
  //     setFees("");
  //     setSpeciality("");
  //   }
  // }, [added]);

  const {
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
  } = useAddDoctor();

  return (
    <div>
      <h2 className="text-3xl font-semibold capitalize border-b-2 w-fit pb-2">
        add doctor
      </h2>
      <form
        onSubmit={submit}
        className="my-5 grid grid-cols-1 gap-5 bg-white md:p-5 w-full"
      >
        <div className="w-full col-span-2">
          <label
            htmlFor="pic"
            className="text-[#7B7B7B] flex items-center gap-3 flex-col sm:flex-row cursor-pointer"
          >
            <img
              className="h-16 w-16"
              src={pic ? URL.createObjectURL(pic) : assets.uploadArea}
              alt="upload_area"
              loading="lazy"
            />
            <p className="text-2xl capitalize"> upload doctor picture</p>
          </label>
          <input
            type="file"
            onChange={(e) => setPic(e.target.files[0])}
            className="hidden"
            name="pic"
            id="pic"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-1">
          <Input
            label={"doctor name"}
            type={"text"}
            placeholder={"Name"}
            onChange={(e) => setDName(e.target.value)}
            name={"dName"}
            id={"dName"}
            value={dName}
          />
          <Input
            label={"speciality"}
            type={"text"}
            placeholder={"speciality"}
            onChange={(e) => setSpeciality(e.target.value)}
            name={"speciality"}
            id={"speciality"}
            value={speciality}
          />
          <Input
            label={"email"}
            type={"email"}
            placeholder={"email"}
            onChange={(e) => setEmail(e.target.value)}
            name={"email"}
            id={"email"}
            value={email}
          />
          <Input
            label={"degree"}
            type={"text"}
            placeholder={"degree"}
            onChange={(e) => setDegree(e.target.value)}
            name={"degree"}
            id={"degree"}
            value={degree}
          />
          <Input
            label={"password"}
            type={"password"}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
            name={"password"}
            id={"password"}
            value={password}
          />
          <Input
            label={"address"}
            type={"text"}
            placeholder={"address"}
            onChange={(e) => setAddress(e.target.value)}
            name={"address"}
            id={"address"}
            value={address}
          />
          <Input
            label={"experience"}
            type={"text"}
            placeholder={"experience"}
            onChange={(e) => setExperience(e.target.value)}
            name={"experience"}
            id={"experience"}
            value={experience}
          />{" "}
          <Input
            label={"phone"}
            type={"text"}
            placeholder={"phone"}
            onChange={(e) => setPhone(e.target.value)}
            name={"phone"}
            id={"phone"}
            value={phone}
          />
          <Input
            label={"fees"}
            type={"text"}
            placeholder={"fees"}
            onChange={(e) => setFees(e.target.value)}
            name={"fees"}
            id={"fees"}
            value={fees}
          />
        </div>
        <div className="flex flex-col capitalize gap-2 col-span-2">
          <label htmlFor="aboutMe" className="text-[#5D607D]">
            aboutMe
          </label>
          <textarea
            name="aboutMe"
            id="aboutMe"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            rows={5}
            className="border-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className={`col-span-2 duration-200 ${
            loading === "pending"
              ? "bg-gray-300 pointer-events-none"
              : "bg-main"
          } p-2 rounded capitalize text-white w-full md:w-[200px] mx-auto hover:bg-white hover:text-main border hover:border-main`}
        >
          add doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctor;
