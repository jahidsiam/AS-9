import CountUp from "react-countup";
import img1 from "/Icon1.svg";
import img2 from "/Icon2.svg";
import img3 from "/Icon3.svg";
const FindHome = () => {
  return (
    <div className="max-w-7xl m-auto px-5 md:px-10">
      <div
        className=" bg-contain md:bg-right bg-right-bottom  md:p-10 p-5 md:pb-0 pb-44 bg-no-repeat bg-[#00c19424] w-full rounded-lg mt-10  "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/LRmR6Wf/undraw-For-sale-re-egkk-removebg-preview.png)",
        }}
      >
        <div className="space-y-5">
          <h1 className="lg:text-4xl text-3xl font-bold">
            The new way to find <br /> your new{" "}
            <span className="border-b-4 border-[#00c194]">home</span>
          </h1>
          <p className="text-gray-700">
            Find your dream place to live in with <br /> more than 10k+
            properties listed.
          </p>
          <div className="lg:w-1/2 md:w-2/3 w-full grid md:grid-cols-3 grid-cols-1 gap-4">
            <div className="flex items-center md:flex-col flex-row space-y-2 md:gap-0 gap-4">
              <img src={img1} alt="" />
              <div className="md:text-center">
                <h1 className="text-black font-bold text-xl">
                  <CountUp end={7.4} duration={3} decimals={2} />%
                </h1>
                <p className="text-gray-500 text-xs">Property Return Rate</p>
              </div>
            </div>
            <div className="flex items-center md:flex-col flex-row space-y-2 md:gap-0 gap-4">
              <img src={img2} alt="" />
              <div className="md:text-center text-left">
                <h1 className="text-black font-bold text-xl">
                  <CountUp end={3856} duration={3}  />
                </h1>
                <p className="text-gray-500 text-xs">Property in Sell & Rent</p>
              </div>
            </div>
            <div className="flex items-center md:flex-col flex-row space-y-2 md:gap-0 gap-4">
              <img src={img3} alt="" />
              <div className="md:text-center">
                <h1 className="text-black font-bold text-xl">
                  <CountUp end={2540} duration={3} />
                </h1>
                <p className="text-gray-500 text-xs">
                  Daily Completed Transactions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindHome;
