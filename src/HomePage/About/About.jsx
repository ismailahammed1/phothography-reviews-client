// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
  return (
    <div className="bg-white  h-96 max-w-[120rem] mx-auto flex justify-center flex-col lg:flex-row">
      <div className=" lg:w-[700px] lg:mt-20 mt-0 lg:text-5xl font-bold mx-0 text-2xl">
        {" "}
        <h1 className="lg:ml-64 ml-20">About Us Jacobson!</h1>
      </div>
      <div className=" lg:w-[700px] h-60 ml-20 mt-5 lg:mt-20 lg:text-3xl text-xl font-bold">
        {" "}
        <h1 className="ml-0">
          My greatest ambition is to create powerful images that commemorate,
          across generations, the people we love and the good times we have had.
          Creativity, hard work and experience
        </h1>
        <button className=" border border-black mt-10 p-1 lg:w-[184px] lg:h-[55px] w-[154px] h-[50px]">Contact Us</button>
      </div>
    </div>
  );
};
export default About;
