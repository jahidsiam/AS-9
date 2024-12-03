import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { Authcontext } from "../../Provider/AuthProvider";
import { RiMenu2Line } from "react-icons/ri";
import toast from "react-hot-toast";

const Navber = () => {
  const { user, signOutUser, loading } = useContext(Authcontext);

  const list = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/properties"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Properties
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Blog
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
        to="/agents"
      >
        Agents
      </NavLink>
      <NavLink
        to="/update-profile"
        className={({ isActive }) =>
          `text-base px-3 p-1  ml-2  font-bold lg:hidden ${
            isActive ? " text-[#00c194]" : "text-black"
          } `
        }
      >
        Update Profile
      </NavLink>
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("Sign-out successful");
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="max-w-7xl m-auto px-5 md:px-10 lg:mt-3">
      <div className="drawer ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar flex-row-reverse lg:flex-row  w-full">
            <div className="flex-none lg:hidden">
              {!user && (
                <Link
                  to="/login"
                  className={`btn border-[#00c194] border-2 mr-2 bg-white text-[#00c194] text-base hover:bg-[#00c194] hover:text-white font-bold hover:border-[#00c194] duration-300`}
                >
                  Login
                </Link>
              )}
              <label
                htmlFor="my-drawer-4"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <RiMenu2Line className=" h-8 w-8 text-[#00c194]" />
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 ">
              <Link to="/" className="  h-12 min-h-12 text-xl">
                <img className="h-full" src={logo} alt="" />
              </Link>
            </div>
            <div className="hidden flex-none lg:block z-50">
              <ul className="menu menu-horizontal">{list}</ul>
              {!user?.photoURL ? (
                <Link
                  to="/login"
                  className="btn border-[#00c194] border-2 bg-white text-[#00c194] text-base hover:bg-[#00c194] hover:text-white font-bold hover:border-[#00c194] duration-300"
                >
                  Login
                </Link>
              ) : (
                <div className="dropdown dropdown-bottom dropdown-end">
                  <div tabIndex={0} role="button" className=" m-1">
                    {" "}
                    <img
                      alt="User avatar"
                      className=" avatar ring-[2px] ring-[#00c194] rounded-full h-10 w-10 object-cover object-center"
                      src={user?.photoURL}
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box border border-[#00c194] z-[1] w-52 p-2 shadow"
                  >
                    <div className="flex flex-col justify-center items-center">
                      <img
                        alt="User avatar"
                        className=" avatar rounded-full h-20 w-20 object-cover object-center"
                        src={user.photoURL}
                      />
                      <p className="text-[#00c194] font-bold text-xl">
                        {user?.displayName}
                      </p>
                      <button
                        onClick={handleSignOut}
                        className="btn bg-[#00c194] mt-3 text-white font-bold"
                      >
                        Logout
                      </button>
                    </div>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="drawer-side z-50 p-0">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu   min-h-full w-80  bg-white">
            {user && (
              <div className="h-40  flex items-center justify-center">
                <div className=" h-full flex items-center justify-center">
                  {loading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    <div className="flex flex-col justify-center items-center">
                      <img
                        alt="User avatar"
                        className=" avatar rounded-full h-20 w-20 object-cover object-center"
                        src={user.photoURL}
                      />
                      <p className="text-[#00c194] font-bold text-xl">
                        {user?.displayName}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {list}
            {user && (
              <button
                onClick={handleSignOut}
                className="btn bg-[#00c194] mt-3 text-white font-bold"
              >
                Logout
              </button>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;
