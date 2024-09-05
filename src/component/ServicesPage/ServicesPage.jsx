import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import image1 from "./../../assets/image1.png";

const ServicesPage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const services = useLoaderData(); 

  return (
    <div className="max-w-[120rem] mx-auto bg-slate-600 lg:h-[95rem]">
      {/* Banner Section */}
      <div className="h-80 overflow-hidden mt-12 lg:mt-28">
        <img
          src={image1}
          alt="Banner"
          className="w-full h-full object-cover rounded-3xl opacity-70"
        />
      </div>

      {/* Services Grid */}
      <div
        ref={ref}
        className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 px-4 mt-12 lg:mt-32"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="p-4 flex bg-white rounded-md shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
              <div className="relative h-48 sm:h-56 mx-4 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  src={service.image}
                  className="h-full w-full object-cover"
                  alt="card-image"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h5 className="block mb-2 font-sans text-lg sm:text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {service.title}
                </h5>
                <p className="block font-sans text-sm sm:text-base antialiased font-light leading-relaxed text-inherit">
                  {service.description}
                </p>
              </div>
              <div className="p-4 sm:p-6 pt-0">
                <motion.button
                  whileHover={{ scale: 1.1, textShadow: "0px 0px 4px gray" }}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 sm:py-3 sm:px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  <Link to={`${service.id}/reviews`}>Choose your plan</Link>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
