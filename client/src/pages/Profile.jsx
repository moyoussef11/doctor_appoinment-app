import { memo, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import useLoggedUser from "../hooks/useLoggedUser";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { fetchUser, updateUser } from "../rtk/features/user/user";

const Profile = () => {
  const [phone, setPhone] = useState("");
  const [pic, setPic] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [editUser, setEditUser] = useState(false);
  const { user } = useLoggedUser();
  const userId = user._id;
  const dispatch = useDispatch();
  const [userProfile, setUserProfile] = useState({});


  const getUser = async () => {
    if (userId) {
      const result = await dispatch(fetchUser(userId));
      setUserProfile(result.payload.data.user);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  const submit = async (e) => {
    e.preventDefault();
    if (!pic) return toast.error("please provide file");
    if (!phone) return toast.error("please provide phone");
    if (!address) return toast.error("please provide address");
    if (!gender) return toast.error("please provide gender");
    if (!birthday) return toast.error("please provide birthday");
    const formdata = new FormData();
    formdata.append("image", pic);
    formdata.append("phone", phone);
    formdata.append("gender", gender);
    formdata.append("datebirth", birthday);
    await await dispatch(updateUser({ data: formdata, id: userId }));
    setEditUser(false);
    getUser();
  };

  return (
    <div className="py-10">
      <div className="img relative">
        <img
          src={userProfile?.image}
          className="h-[150px] rounded"
          loading="lazy"
          alt="profile_pic"
        />
        {editUser ? (
          <>
            <label htmlFor="editImg">
              <img
                src={pic ? URL.createObjectURL(pic) : assets.upload_area}
                className="h-[150px] rounded cursor-pointer absolute top-0"
                loading="lazy"
                alt="upload_area_pic"
              />
            </label>
            <input
              className="hidden"
              type="file"
              name="pic"
              onChange={(e) => setPic(e.target.files[0])}
              id="editImg"
            />
          </>
        ) : (
          ""
        )}
      </div>
      <div className="info my-5">
        <h2 className="text-3xl capitalize border-b-2 w-fit py-2">
          {user?.name}
        </h2>
        <div>
          <div>
            <h3 className="uppercase border-b-2 w-fit my-5 font-semibold">
              CONTACT INFORMATION
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-10">
                <strong className="capitalize">email id:</strong>
                <span className="text-blue-500"> {userProfile?.email}</span>
              </li>
              <li className="flex items-center gap-10">
                <strong className="capitalize">phone:</strong>
                {editUser ? (
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border-2"
                    placeholder="Add new number"
                  />
                ) : (
                  <span className="text-blue-500"> {userProfile?.phone}</span>
                )}
              </li>
              <li className="flex items-center gap-10">
                <strong className="capitalize">Address:</strong>
                {editUser ? (
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="border-2"
                    placeholder="Add new address"
                  />
                ) : (
                  <span className="text-blue-500"> {userProfile?.address}</span>
                )}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="uppercase border-b-2 w-fit my-5 font-semibold">
              BASIC INFORMATION
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-10">
                <strong className="capitalize">Gender:</strong>
                {editUser ? (
                  <select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="border-2"
                  >
                    <option value="male">male</option>
                    <option value="female">female</option>
                  </select>
                ) : (
                  <span className="text-blue-500"> {userProfile?.gender}</span>
                )}
              </li>
              <li className="flex items-center gap-10">
                <strong className="capitalize">Birthday:</strong>
                {editUser ? (
                  <input
                    type="date"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    className="border-2"
                  />
                ) : (
                  <span className="text-blue-500">
                    {userProfile?.datebirth}
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {editUser ? (
        <>
          <form onSubmit={submit}>
            <button
              type="submit"
              className="bg-green-500 capitalize p-2 rounded-full sm:w-[100px] text-white hover:bg-green-300 duration-200"
            >
              save info
            </button>
          </form>
        </>
      ) : (
        <button
          onClick={() => setEditUser(true)}
          className="border-2 border-main capitalize p-2 rounded-full sm:w-[100px] hover:text-white hover:bg-main duration-200"
        >
          edit
        </button>
      )}
    </div>
  );
};

export default memo(Profile);
