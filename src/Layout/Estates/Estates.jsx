import { Link, useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { BsCashCoin } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";

const Estates = () => {
  AOS.init();
  const estates = useLoaderData();

  return (
    <div className=" m-auto  mt-16 bg-[#23334A] py-20 mb-20 ">
      <h1 className="text-5xl font-bold  text-center text-white pb-10">
        Es<span className="border-b-2 ">ta</span>tes
      </h1>

      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 max-w-7xl m-auto md:px-10 px-5 md:gap-5 gap-3">
          {estates.slice(0, 8).map((data) => (
            <Link
              key={data.id}
              to={`details/${data.id}`}
              className="grid grid-cols-3 md:h-52 hover:-translate-y-2 duration-500 cursor-pointer shadow-lg border border-white hover:border-[#00c194] w-full bg-white p-5 md:gap-4 gap-2 rounded-[30px]"
            >
              <div className=" h-full   ">
                <img
                  src={data.image}
                  alt=""
                  className="rounded-[20px]  h-full  object-cover object-center"
                />
              </div>
              <div className="col-span-2 py-2">
                <div className="flex h-full flex-col justify-between gap-3 ">
                  <h1 className="lg:text-2xl md:text-xl text-base font-bold ">{data.estate_title}</h1>
                  <div className="text-gray-500 font-bold   items-center text-sm lg:text-base   flex flex-row justify-between">
                    <p className="">{data.bedrooms} Bedrooms </p>
                    <p>{data.area} </p>
                    <p className="px-3 capitalize text-white py-1 bg-[#00c194] rounded-full">
                      {data.status}
                    </p>
                  </div>
                  <div className="flex md:flex-row justify-between md:text-base text-xs text-gray-500">
                    <div className="flex items-center gap-2 lg:text-sm md:text-sm  text-xs">
                      {" "}
                      <CiLocationOn className="" />
                      <p>{data.location}</p>
                    </div>
                    <p className="text-white md:px-3 px-1 bg-gray-600/30 rounded-lg p-1">
                      {data.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estates;
