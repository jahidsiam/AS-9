import { Helmet } from "react-helmet-async";
import SwiperBanner from "../../components/Swiper/Swiper";
import Estates from "../Estates/Estates";
import Info from "../../components/Extra/Info";
import CountryDisplay from "../../components/CountryDisplay/CountryDisplay";
import SimpleContactUs from "../../components/SimpleContactUs/SimpleContactUs";
import FindHome from "../../components/FindHome/FindHome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Elite Estates | Home</title>
      </Helmet>
      <SwiperBanner />
      <FindHome/>
      <CountryDisplay/>
      <Estates />
      <Info />
      <SimpleContactUs/>
    </div>
  );
};

export default Home;
