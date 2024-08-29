/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Feature from "./Feature";
import ImageGrid from "./ImageGrid";



const Services = () => {
  
  const [services, setSerives]=useState([])

  useEffect(()=>{
    fetch('/src/service.json')
    .then(res=>res.json())
    .then(data=>
      setSerives(data)
  )
  },[])
  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2 
  });

  return (
    <>
      <div className="bg-red-50 px-2 py-12 text-[#333] max-w-[120rem] mx-auto overflow-hidden">
        <div className="max-w-6xl mx-auto h-auto">
          <h2 className="sm:text-4xl text-2xl lg:text-7xl font-extrabold text-center mb-16">
            What we provide
          </h2>
          <div
            ref={ref}
            className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="p-4 flex bg-white rounded-md shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.2, duration: 0.5 }} // Staggered animation with a delay
              >
                <img
                  src={service.logo}
                  className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                  alt={service.title}
                />
                <div>
                  <h3 className="text-4xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-lg">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center m-10">
            <motion.button
                    
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                          type: "spring",
                          damping: 5,
                          stiffness: 100,
                          restDelta: 0.001
                        }
                      }}
              className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-2xl w-80"
            >
             <Link to="/services">Get Started Now</Link>
            </motion.button>
          </div>
        </div>
        <Feature className="mb-16"  />
        <div className=" mt-20">
      <ImageGrid/>
      </div>
      </div>
    </>
  );
};

export default Services;
