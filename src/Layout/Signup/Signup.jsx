import { useForm } from "react-hook-form";
import svg from "../../assets/register.gif";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "animate.css";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const {
    creatNewUser,
    loading,
    signOutUser,
    setLoading,
    updateUserProfile,
    singInUserByGoogle,
    singInUserByGithub,
  } = useContext(Authcontext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  console.log(location);
  const handleGoogleButton = () => {
    signOutUser();
    singInUserByGoogle()
      .then(() => {
        toast.success("Signin successful ");
        console.log("hello");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        } if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in process was not completed. Please try again.");
          setLoading(false);
        }
      });
  };
  const handleGithubButton = () => {
    signOutUser();
    singInUserByGithub()
      .then(() => {
        toast.success("Sign In successful!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.code);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        } if (error.code === "auth/popup-closed-by-user") {
          toast.error("Sign-in process was not completed. Please try again.");
          setLoading(false);
        }
        
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validatePassword = (value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const lengthRegex = /.{6,}/;

    if (!uppercaseRegex.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!lowercaseRegex.test(value)) {
      return "Password must contain at least one lowercase letter";
    }
    if (!lengthRegex.test(value)) {
      return "Password must be at least 6 characters long";
    }

    return true;
  };
  const onSubmit = (data, e) => {
    signOutUser();
    creatNewUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.username, data.photoURL);
        toast.success("Registration successful!");
        console.log("register sucssesful", result.user);
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/account-exists-with-different-credential" ||
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email alreay exist");
          setLoading(false);
        }
      });
  };

  return (
    <div className="container m-auto">
      <Toaster position="top-center" reverseOrder={false} />
      <Helmet>
        <title>Elite Estates | Signup</title>
      </Helmet>
      <div className="w-4/5 m-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="my-auto animate__animated animate__bounceIn ">
          <img src={svg} alt="" />
        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl border m-auto my-10 border-[#00c194] bg-[#ECF9F6] animate__animated animate__bounceIn  ">
          <h1 className="text-4xl font-bold text-center">Sign Up</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-1 text-sm relative">
              <label htmlFor="email" className="block">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                placeholder="Email"
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.email ? "border-red-500" : "border-[#00c194]"
                } bg-[#ECF9F6]  focus:outline-none`}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block">
                Username
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: true })}
                placeholder="Username"
                className="w-full px-4 py-3 focus:outline-none rounded-md border border-[#00c194] bg-[#ECF9F6]"
              />
              {errors.username && (
                <span className="text-red-500">Username is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", {
                  required: "Password is required",
                  validate: validatePassword,
                })}
                placeholder="Password"
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.password ? "border-red-500" : "border-[#00c194]"
                } bg-[#ECF9F6] pr-10  focus:outline-none`}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="text-gray-600 focus:outline-none"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-5 w-5" />
                  ) : (
                    <FaEye className="h-5 w-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="space-y-1 text-sm relative">
              <label htmlFor="photoURL" className="block">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="w-full px-4 py-3 focus:outline-none rounded-md border border-[#00c194] bg-[#ECF9F6]"
              />
              {errors.photoURL && (
                <span className="text-red-500">Photo URL is required</span>
              )}
            </div>

            <button
              type="submit"
              className="block w-full p-3  text-center rounded-sm text-white font-bold bg-[#00c194]"
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-[#00c194]"></div>
            <p className="px-3 text-sm text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 bg-[#00c194]"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleGoogleButton}
              aria-label="Log in with Google"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-[#00c194]"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>

            <button
              onClick={handleGithubButton}
              aria-label="Log in with GitHub"
              className="p-3 rounded-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current text-[#00c194]"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 ">
            Do you have an account?
            <Link
              to="/login"
              rel="noopener noreferrer"
              href="#"
              className="underline text-info"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
