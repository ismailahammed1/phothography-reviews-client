// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-slate-400  h-96 max-w-[120rem] mx-auto flex justify-center flex-col lg:flex-row">
      <div className=" lg:w-[700px] lg:mt-20 mt-0 lg:text-5xl font-bold mx-0 text-2xl">
        <motion.h1
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{
            duration: "1",
          }}
          className="lg:ml-64 ml-20"
        >
          About Us Jacobson!
        </motion.h1>
      </div>
      <div className=" lg:w-[700px] h-60 ml-20 mt-5 lg:mt-20 lg:text-3xl text-xl font-bold">
        {" "}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="ml-0"
        >
          My greatest ambition is to create powerful images that commemorate,
          across generations, the people we love and the good times we have had.
          Creativity, hard work and experience
        </motion.h1>
        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        className=" border border-black mt-10 p-1 lg:w-[184px] lg:h-[55px] w-[154px] h-[50px]">
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};
export default About;
