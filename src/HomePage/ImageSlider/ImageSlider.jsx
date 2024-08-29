/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";
import data from "./../../data.json";

const ImageSlider = () => {
  const [dragConstraints, setDragConstraints] = useState({ left: 0, right: 0 });

  const updateDragConstraints = () => {
    if (window.innerWidth < 640) {
      // sm screen
      setDragConstraints({ left: -4080, right: 0 });
    } else if (window.innerWidth < 768) {
      // md screen
      setDragConstraints({ left: -2100, right: 0 });
    } else if (window.innerWidth < 1024) {
      // lg screen
      setDragConstraints({ left: -2580, right: 0 });
    } else {
      // xl and above
      setDragConstraints({ left: -2580, right: 0 });
    }
  };

  useLayoutEffect(() => {
    updateDragConstraints();
    window.addEventListener('resize', updateDragConstraints);
    return () => {
      window.removeEventListener('resize', updateDragConstraints);
    };
  }, []);

  return (
    <div className="slider-container max-w-[120rem] mx-auto bg-slate-500">
      <motion.div className="cursor-grab overflow-hidden ">
        <motion.div
          className="inner-carousel flex"
          drag="x"
          dragConstraints={dragConstraints}
          style={{ display: 'flex' }} // Ensure flex is applied correctly
        >
          {data.map((item, index) => (
            <motion.div
              className="relative h-[40rem] w-[28rem]  p-10 flex-shrink-0 " // 
              key={index}
            >
              <motion.img
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
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
                className="w-[30rem] h-full rounded bg-slate-200 pointer-events-none object-cover"
                src={item.Person_image}
                alt={item.name}
                onError={(e) => console.error('Image failed to load:', e.target.src)} // Log error if image fails to load
              />
              <div 
               
              className="absolute left-1/2 transform -translate-x-1/2 w-[23rem] bg-gradient-to-b from-slate-50 to-slate-600 bottom-10">
                <h1 className="text-3xl font-semibold text-black text-center">
                  {item.name}
                </h1>
                <p className="mt-2 text-2xl text-black text-center">
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
