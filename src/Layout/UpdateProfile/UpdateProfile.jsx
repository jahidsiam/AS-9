import { useContext, useState } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import "animate.css";
import { FaRegEdit, FaRegSave } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { MdCancel } from "react-icons/md";
import { Helmet } from "react-helmet-async";
const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(Authcontext);
  const [edit, setEdit] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    updateUserProfile(data.username, data.photoURL);
    e.target.reset();
    setEdit(!edit);
  };
  const handleEditBuTton = () => {
    setEdit(!edit);
  };
    const handlecancelBuTton = () => {
      setEdit(!edit);
    };

  return (
    <div className="mb-10 p-2 min-h-screen ">
      <Helmet>
        <title>Elite Estates | Update profile</title>
      </Helmet>
      <h1 className="text-center text-4xl my-5 font-bold text-[#00c194]">
        Update your profile now!!
      </h1>
      {/* <div className="lg:w-1/2 card card-side bg-base-100 shadow-xl m-auto border border-[#00c194] flex-col ">
        <figure className="lg:w-1/3">
          {loading ? (
            <span className="loading loading-spinner loading-sm"></span>
          ) : (
            <div
              style={{ backgroundImage: `url(${user.photoURL})` }}
              className="w-full bg-green-500 bg-cover bg-center animate__animated animate__fadeIn"
            ></div>
          )}
        </figure>
        <div className="card-body">
          
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div> */}
      <div className="hero lg:w-3/5 m-auto  bg-[#00c19411] shadow-xl border border-[#00c194] rounded-lg animate__fadeInUp animate__animated">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user.photoURL}
            className="max-w-sm rounded-lg shadow-2xl lg:w-1/3 animate__animated animate__fadeIn"
          />

          <div className="p-5 w-full">
            {edit ? (
              <div className="space-y-2">
                <h2 className="card-title capitalize font-bold text-4xl animate__animated animate__fadeIn">
                  {user.displayName}
                </h2>
                <p className="animate__animated animate__fadeIn">Your Email:</p>
                <p className="font-bold text-xl animate__animated animate__fadeIn">
                  {user.email}
                </p>
                <p className="capitalize animate__animated animate__fadeIn bg-gray-300 p-1 rounded-lg pl-3">
                  You can update your name and profile just click edit button.{" "}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" space-y-6 w-full "
              >
                <div className="capitalize text-2xl font-bold">
                  Enter Your name and photo URL
                </div>
                <div className="space-y-1 text-sm relative animate__animated animate__fadeIn">
                  <label htmlFor="username" className="block">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    {...register("username", { required: true })}
                    defaultValue={user.displayName}
                    placeholder="Username"
                    className="w-full px-4 py-3 focus:outline-none rounded-md border border-[#00c194] bg-[#ECF9F6]"
                  />
                  {errors.username && (
                    <span className="text-red-500">Username is required</span>
                  )}
                </div>
                <div className="space-y-1 text-sm relative animate__animated animate__fadeIn">
                  <label htmlFor="photoURL" className="block">
                    Photo URL
                  </label>
                  <input
                    type="text"
                    id="photoURL"
                    {...register("photoURL", { required: true })}
                    defaultValue={user.photoURL}
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 focus:outline-none rounded-md border border-[#00c194] bg-[#ECF9F6]"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500">Photo URL is required</span>
                  )}
                </div>
                {!edit ? (
                  <>
                    <div className="flex gap-1">
                      {" "}
                      <button
                        type="submit"
                        className="btn bg-[#00c194] text-white font-bold mt-5 flex items-center justify-center text-base animate__animated animate__fadeIn"
                      >
                        <FaRegSave className=" " />
                        Save
                      </button>
                      <button
                      onClick={handlecancelBuTton}
                        className="btn bg-error text-white font-bold mt-5 flex items-center justify-center text-base animate__animated animate__fadeIn"
                      >
                        <MdCancel className=" " />
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </form>
            )}

            {edit ? (
              <button
                onClick={handleEditBuTton}
                className="btn bg-[#00c194] text-white font-bold mt-5 flex items-center justify-center text-base animate__animated animate__fadeIn"
              >
                <FaRegEdit className=" " />
                Edit
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
