const SimpleContactUs = () => {
  return (
    <div className="max-w-7xl m-auto py-10 px-5  ">
      <div
        className=" rounded-3xl bg-cover lg:bg-center bg-right-top  "
        style={{
          backgroundImage: "url(https://i.ibb.co/VSZLqyW/Section-4.png)",
        }}
      >
        <div className="px-5 md:px-10 lg:py-10 bg-white/30 md:bg-transparent py-5 w-full h-full">
          <div className="h-full space-y-7">
            <h1 className="text-4xl font-bold">
              Find your best <br />
              Real <span className="border-b-4 border-[#00c194]">Estate</span>
            </h1>
            <p className="text-gray-700">
              We provide a complete service for the sale, <br />
              purchase or rental of real estate.
            </p>
            <button
              style={{ letterSpacing: "3px" }}
              className="btn  px-3 text-white border-none bg-[#00c194]"
            >
              {" "}
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleContactUs;
