import About from "./About/About";
import Banner from "./Banner/Banner";
import ImageSlider from "./ImageSlider/ImageSlider";
import OurClient from "./OurClient/OurClient";
import Servises from "./Servises/Servises";
import Testimonial from "./Testmonial/Testmonial";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <ImageSlider />
      <Servises />
      <Testimonial />
      <OurClient />
    </>
  );
};

export default Home;
