/* eslint-disable no-unused-vars */

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaLongArrowAltLeft, FaLongArrowAltRight, FaTwitter } from "react-icons/fa";
import Profile from "../../assets/Group.png";
import banner from "../../assets/image.png";
import NavBar from "../NavBar/NavBar";

function Banner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <div className="relative max-w-[120rem] mx-auto bg-white lg:h-[67rem] overflow-hidden">
      <div className="absolute">
        <NavBar />
      </div>
      <div className="mx-auto max-w-screen-5xl lg:flex lg:px-0">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:px-0 lg:py-24 bg-black lg:w-full lg:max-w-[40rem] lg:h-[67rem] ">
          <div className="absolute left-0 bottom-20 hidden lg:block">
            <div className=" flex flex-col space-y-4 ml-12 mb-14 ">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-white hover:text-blue-500" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-white hover:text-blue-700" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-white hover:text-gray-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-white hover:text-blue-400" />
              </a>
              <a
                rel="noopener noreferrer"
                className="w-[2px] h-28 bg-white mx-[10px] mb-8"
              ></a>
            </div>
            <div className="rotate-[270deg] left-0 bottom-0">
              <a href="" className="text-white text-2xl ">
                Flowing Me
              </a>
            </div>
          </div>
        </div>

        {/* image and info section */}
        <div className="absolute sm:w-[1170px] sm:h-[640px] md:h-[640px] h-[640px] lg:top-[257px] lg:left-[375px] lg:px-28 flex flex-col lg:flex-row items-center lg:gap-15 ">
    <div className="flex justify-center lg:justify-start sm:w-full sm:h-full lg:w-auto lg:h-auto  ">
    <AnimatePresence>
            {isVisible && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.5 }}
                className="transition-box"
              >  <img src={Profile} alt="profile" className="lg:w-[490px] lg:h-auto md:w-[220px] md:h-auto w-[150px] h-[200px] mx-29 lg:mx-0  " />
              </motion.div>
            )}
          </AnimatePresence>
    </div>
    <div className="text-white mt-8 sm:mt-0 sm:ml-20 text-center sm:text-left ">
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ x: "200%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.8 }}
                  className="transition-box"
                >
                  <h1 className="lg:text-7xl md:text-3xl text-xl ">HI,</h1>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ x: "200%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, delay: 0.5}}
                  className="transition-box"
                >
                  <h1 className="lg:text-7xl md:text-4xl text-xl ">I’m Jacobson!</h1>
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {isVisible && (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="transition-box"
                >
                  <p className="text-base md:text-lg lg:text-3xl">
                    I am a professional photographer based in LA creating dreamscapes with black, white, and shades in-between.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
</div>


        {/* image and info section */}
        {/* FaLongArrowAltLeft, FaLongArrowAltRight start*/}
        <div className="absolute flex gap-7 justify-between bottom-5 right-10 lg:bottom-20 lg:right-20 text-white  text-xl lg:text-3xl">
          <FaLongArrowAltLeft className="cursor-pointer"/>
          <FaLongArrowAltRight className="cursor-pointer"/>
        </div>
        {/* FaLongArrowAltLeft, FaLongArrowAltRight end*/}
        <div className="">
          
          <img
            className="lg:w-full lg:h-[68rem] md:w-[50rem] h-[28rem] object-cover"
            src={banner}
            alt=""
          />
          
        </div>
      </div>
    </div>
  );
}

export default Banner;
