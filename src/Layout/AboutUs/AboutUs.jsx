import { useLoaderData } from "react-router-dom";
import img from "../../assets/about banner.jpg";
import logo from "../../assets/logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  AOS.init();
  const datas = useLoaderData();
  console.log(datas);
  return (
    <div>
          <Helmet>
        <title>Elite Estates | About Us</title>
      </Helmet>
      <div
        className="hero bg-cover bg-center "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="  text-left w-full">
          <div className="text-5xl font bold text-white lg:pl-10  p-5 py-20 bg-center text-left w-full ">
            Abou
            <span className="border-b-4 rounded-lg border-[#00c194] ">t U</span>
            s
          </div>
        </div>
      </div>
      <div className="container  p-3 w-full m-auto ">
        <h1
          className="text-3xl py-5 border-l-8 pl-3 border-[#00c194] mt-10 font-bold animate__fadeInLeft animate__animated"
          
        >
          Company History
        </h1>
        <div className="hero   w-full  items-center lg:py-10 ">
          <div className="hero-content flex-col lg:flex-row w-full gap-5 h-full">
            <div className="h-full animate__fadeInLeft animate__animated">
              <img
                src="https://homepress.stylemixthemes.com/main/wp-content/uploads/sites/3/2018/12/about-1-1024x1024.jpg"
                className="max-w-sm rounded-lg shadow-2xl w-full h-full object-cover object-center"
              />
            </div>
            <div className="lg:w-1/2 h-full animate__fadeInRight animate__animated">
              <div to="/" className="  h-12 min-h-12 text-xl mb-5">
                <img className="h-full" src={logo} alt="" />
              </div>
              <div className="space-y-10">
                <p className="text-xl font-bold">
                  At Property Real Estate Company, we believe that when it comes
                  to finding a home what’s outside the front door is just as
                  important as what’s behind it.
                </p>
                <p className="text-xl ">
                  That’s why we go beyond the typical listings, by sourcing
                  insights straight from locals and offering over 34
                  neighborhood map overlays, to give people a deeper
                  understanding of what living in a home and neighborhood is
                  really like.
                </p>
                <p className="text-xl ">
                  We’re committed to helping them discover a place where they
                  will love to live and where they will feel more connected to
                  the community and to each other. It’s why we strive every day
                  to help build a more neighborly world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-[#23334a42] py-10 px-20 flex justify-between md:flex-row flex-col  gap-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex items-center gap-5 ">
          <div className="md:h-20 h-10 md:w-20    w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="blog"
            >
              <path d="M3 7v20a3 3 0 0 0 3 3h15v-2H6a1 1 0 0 1-1-1V7Z"></path>
              <path d="M29 24a3 3 0 0 0-3-3h-1V5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1h2V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v22a3 3 0 0 0 .18 1H22v2h4a3 3 0 0 0 3-3Zm-2 3a1 1 0 0 1-2 0v-4h1a1 1 0 0 1 1 1Z"></path>
              <path d="M7 16h14v2H7zM7 20h14v2H7zM7 24h14v2H7zM20 14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1ZM9 8h10v4H9Z"></path>
            </svg>
          </div>
          <p className="text-2xl font-bold">Our Bolgs</p>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="md:h-20 h-10 md:w-20    w-10   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              id="customer-service"
            >
              <path d="M16,1A15,15,0,0,0,1,16v6a.5.5,0,0,0,.5.5H4v-5H2V16a14,14,0,0,1,28,0v1.54H28v5h2v4A3.5,3.5,0,0,1,26.5,30H19V28.5A1.5,1.5,0,0,0,17.5,27h-3A1.5,1.5,0,0,0,13,28.5v1A1.5,1.5,0,0,0,14.5,31h12A4.51,4.51,0,0,0,31,26.5V16A15,15,0,0,0,16,1Z"></path>
              <path d="M7.5 13h-2a1.64 1.64 0 0 0-.5.09V25.91a1.64 1.64 0 0 0 .5.09h2A1.5 1.5 0 0 0 9 24.5v-10A1.5 1.5 0 0 0 7.5 13zM26.5 26a1.64 1.64 0 0 0 .5-.09V13.09a1.64 1.64 0 0 0-.5-.09h-2A1.5 1.5 0 0 0 23 14.5v10A1.5 1.5 0 0 0 24.5 26z"></path>
            </svg>
          </div>
          <p className="text-2xl font-bold">Our Services</p>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="md:h-20 h-10 md:w-20    w-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              strokeLinejoin="round"
              strokeMiterlimit="2"
              clipRule="evenodd"
              viewBox="0 0 32 32"
              id="mail-send"
            >
              <path d="M6.204,17.965c-0.548,-0.593 -1.333,-0.965 -2.204,-0.965c-1.656,0 -3,1.344 -3,3l0,7c0,1.656 1.344,3 3,3c1.08,0 2.027,-0.571 2.555,-1.428l1.386,0.924c0.493,0.329 1.072,0.504 1.665,0.504l9.394,0c0.205,0 0.405,-0.063 0.573,-0.18l10.363,-7.243c0.038,-0.027 0.074,-0.056 0.108,-0.088c1.212,-1.127 1.281,-3.027 0.153,-4.239c-1.096,-1.179 -2.922,-1.277 -4.137,-0.245c0.003,-0.003 -9.311,4.995 -9.311,4.995c-0,0 -4.249,-0 -4.249,-0c-0.276,-0 -0.5,-0.224 -0.5,-0.5c0,-0.239 0.214,-0.5 0.5,-0.5c1.473,0 3.5,-0 3.5,-0c1.656,0 3,-1.344 3,-3c0,-1.656 -1.344,-3 -3,-3l-6.056,0c-0.948,-0 -2.507,0.632 -3.74,1.965Zm0.796,8.5l2.051,1.367c0.164,0.11 0.357,0.168 0.555,0.168c-0,-0 9.079,0 9.079,-0c0,-0 10.038,-7.016 10.04,-7.018c0.362,-0.379 0.37,-0.981 0.008,-1.37c-0.376,-0.404 -1.01,-0.427 -1.414,-0.051c-0.063,0.058 -0.133,0.108 -0.208,0.149l-9.638,5.171c-0.146,0.078 -0.308,0.119 -0.473,0.119l-4.5,-0c-1.381,-0 -2.5,-1.119 -2.5,-2.5c0,-1.197 1.069,-2.5 2.5,-2.5c1.473,0 3.5,0 3.5,0c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1l-6.056,-0c-0.789,-0 -2.138,0.796 -2.944,2.247l0,6.218Zm22.764,-22.633l-7.124,5.936c-0.371,0.309 -0.909,0.309 -1.28,0l-7.124,-5.936c-0.152,0.359 -0.236,0.754 -0.236,1.168c0,0 0,6 0,6c0,1.656 1.344,3 3,3c0,0 10,0 10,0c1.656,0 3,-1.344 3,-3l0,-6c0,-0.414 -0.084,-0.809 -0.236,-1.168Zm-14.177,-1.478l6.413,5.344l6.413,-5.344c-0.421,-0.226 -0.902,-0.354 -1.413,-0.354l-10,0c-0.511,0 -0.992,0.128 -1.413,0.354Z"></path>
            </svg>
          </div>
          <p className="text-2xl font-bold">Contact Us</p>
        </div>
      </div>
      <div className="container m-auto p-3">
        <h1
          className="text-3xl py-5 border-l-8 pl-3 border-[#00c194] mt-10 font-bold"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          Our Leadership
        </h1>
        <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {datas.map((data, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay="50"
              className="card bg-base-100 shadow-xl rounded-none m-3"
            >
              <figure>
                <img src={data.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.name}</h2>
                <h1 className="text-sm">{data.position}</h1>
                <div className="flex gap-2">
                  <FaPhoneAlt />
                  <div className="text-sm">
                    <table>
                      <tr>
                        <td>Mobile:</td>
                        <td className="pl-2">{data.contact.Mobile}</td>
                      </tr>
                      <tr>
                        <td>Office:</td>
                        <td className="pl-2">{data.contact.Office}</td>
                      </tr>
                      <tr>
                        <td>Fax:</td>
                        <td className="pl-2">{data.contact.Fax}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
