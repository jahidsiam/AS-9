import { useLoaderData, useParams } from "react-router-dom";
import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";
import { Helmet } from "react-helmet-async";
const Details = () => {
  AOS.init();
  const estates = useLoaderData();
  const id = parseInt(useParams().id);

  const estate = estates?.find((estate) => estate.id === id);
  return (
    <div className="container m-auto mb-20 mt-10 p-2 lg:p-2 ">
      <Helmet>
        <title>Elite Estates |  {estate.estate_title}</title>
      </Helmet>
      <h1 className="text-4xl mb-10 animate__animated animate__fadeInLeft">
        <span className="font-bold ">Details for : </span> {estate.estate_title}
      </h1>
      <div className="grid lg:grid-cols-4  grid-cols-1 gap-5  lg:pl-0">
        <div className="lg:col-span-3  ">
          <div className="h-96 lg:h-[100vh] animate__animated animate__fadeInLeft">
            <img src={estate.image} className="h-full rounded-lg" />
          </div>
        </div>
        <div className="lg:col-span-1 space-y-5">
          <h1 className="text-[#00c194] text-3xl border-b-2 border-[#00c194]  animate__animated animate__fadeInDown">
            Details :
          </h1>
          <div className="space-y-4 animate__animated animate__fadeInRight pl-5">
            <h1>
              <span className="font-bold text-base">Segment Name : </span>
              {estate.segment_name}
            </h1>
            <h1>
              <span className="font-bold text-base">Name : </span>
              {estate.estate_title}
            </h1>
            <h1>
              <span className="font-bold text-base">Location : </span>
              {estate.location}
            </h1>
            <h1>
              <span className="font-bold text-base capitalize">
                Current status :{" "}
              </span>
              {estate.status}
            </h1>
            <h1>
              <span className="font-bold text-base">Area : </span>
              {estate.area}
            </h1>
            <h1 className="flex gap-4">
              <span className="font-bold text-base">facilities : </span>
              <div className="">
                {estate.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </div>
            </h1>
            <h1>
              <span className="font-bold text-base">Bedrooms : </span>
              {estate.bedrooms}
            </h1>
            <h1>
              <span className="font-bold text-base">Bathrooms : </span>
              {estate.bathrooms}
            </h1>
            <h1>
              <span className="font-bold text-base">Balcony : </span>
              {estate.balcony ? "Yes" : "No"}
            </h1>
            <h1>
              <span className="font-bold text-base">Swimming Pool : </span>
              {estate.swimming_pool ? "Yes" : "No"}
            </h1>
            <h1>
              <span className="font-bold text-base">Occupancy Capacity : </span>
              {estate.occupancy_capacity}
            </h1>
          </div>
        </div>
      </div>
      <div
        className="mt-10  pl-5 lg:pl-0 "
        data-aos="zoom-in"
        data-aos-duration="800"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
      >
        <h1>
          <span className="font-bold text-2xl">Description : </span>
          {estate.description}
        </h1>
      </div>
      <div>{/* <Leapletmap/> */}</div>
    </div>
  );
};

export default Details;
