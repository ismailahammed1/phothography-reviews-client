import About from "./HomePage/About/About";
import Banner from "./HomePage/Banner/Banner";
import Footer from "./HomePage/Footer/Footer";
import ImageSlider from "./HomePage/ImageSlider/ImageSlider";
import OurClient from "./HomePage/OurClient/OurClient";
import Servises from "./HomePage/Servises/Servises";
import Testmonial from "./HomePage/Testmonial/Testmonial";

function App() {
  return (
    <>
      <Banner />
      <About />
      <ImageSlider />
      <Servises />
      <Testmonial />
      <OurClient />
      <Footer />
    </>
  );
}

export default App;
