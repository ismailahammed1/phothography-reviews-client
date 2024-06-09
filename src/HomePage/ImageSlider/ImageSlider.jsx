/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";
import data from "../../data.json";

const ImageSlider = () => {
  console.log(data);

  return (
    <div className="slider-container max-w-[120rem] mx-auto bg-slate-900">
      <motion.div className="cursor-grab  overflow-hidden">
        <motion.div
          className="inner-carousel flex "
          drag="x"
          dragConstraints={{ right: 0, left: -2850 }} // Adjust as necessary
        >
          {data.map((item, index) => (
            <motion.div
              className="relative h-[40rem] w-[30rem] p-10"
              key={index}
            >
              <img
                className="w-[30rem] h-full rounded  bg-slate-200 pointer-events-none object-cover"
                src={item.image_url}
                alt={item.profession}
              />
        
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[20rem]">
  <h1 className="text-3xl font-semibold text-black text-center">{item.name}</h1>
  <p className="mt-2 text-2xl text-black  text-center">
    {item.profession}
  </p>
</div>
         
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ImageSlider;
