const CountryDisplay = () => {
  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10">
      <div>
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold  pt-20 pb-10   text-center">
          We are available in many <br />
          well-
          <span className="border-b-4 border-[#00c194]">known countries</span>
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-2 gap-3 ">
          <div className="relative border-2 border-transparent shadow-xl duration-500 hover:-translate-y-2 hover:border-[#00c194] rounded-[33px] cursor-pointer">
            <img
              src="https://i.ibb.co/M6G4VH0/Rectangle-12.png"
              className="h-full w-full object-cover object-center rounded-[33px]"
              alt=""
            />
            <div className="absolute top-7 text-center  w-full text-xl font-bold uppercase">
              <p className=" "> France</p>
            </div>
          </div>
          <div className="relative border-2 border-transparent shadow-xl duration-500 hover:-translate-y-2 hover:border-[#00c194] rounded-[33px] cursor-pointer">
            <img
              src="https://i.ibb.co/xF5xCht/Rectangle-11.png"
              className="h-full w-full object-cover object-center rounded-[33px]"
              alt=""
            />
            <div className="absolute top-7 text-center  w-full text-xl font-bold uppercase">
              <p className=" "> London</p>
            </div>
          </div>
          <div className="relative border-2 border-transparent shadow-xl duration-500 hover:-translate-y-2 hover:border-[#00c194] rounded-[33px] cursor-pointer">
            <img
              src="https://i.ibb.co/wwdSQxN/Rectangle-10-2.png"
              className="h-full w-full object-cover object-center rounded-[33px]"
              alt=""
            />
            <div className="absolute top-7 text-center  w-full text-xl font-bold uppercase">
              <p className=" "> Spain</p>
            </div>
          </div>
          <div className="relative border-2 border-transparent shadow-xl duration-500 hover:-translate-y-2 hover:border-[#00c194] rounded-[33px] cursor-pointer">
            <img
              src="https://i.ibb.co/2nF2wFd/Rectangle-9.png"
              className="h-full w-full object-cover object-center rounded-[33px]"
              alt=""
            />
            <div className="absolute top-7 text-center  w-full text-xl font-bold uppercase">
              <p className=" "> America</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDisplay;
