/* eslint-disable no-unused-vars */
import React from 'react';
import Features from '../../assets/Our Features Image.png';
import ourvalue from '../../assets/Our Values Image.png';

const Feature = () => {
  return (
    <>
      <div className="flex flex-col md:flex-col lg:flex-row items-center lg:w-[110rem] relative mx-auto overflow-hidden ">
        <div className="lg:h-[50rem] lg:w-[50rem] h-auto w-auto py-20 px-5 gap-4 md:py-40 lg:mx-7">
          <h3 className="text-3xl md:text-5xl py-2 md:py-5">Our Features</h3>
          <h1 className="text-4xl md:text-6xl font-bold py-2 md:py-5">The creative spark you need for your success</h1>
          <p className="text-lg md:text-2xl mx-4 md:mx-8 py-2 md:py-5">
            Korem ipsum dolor sit amet, consectetur adipisicing elit, sed do se eiusmod temps incididunt ut labore et sa dolore si magna aliqua. Ut enim ad minim veniam, inant quis nostrud.
          </p>
          <p className="text-xl md:text-3xl font-semibold py-2"> &#10003; At vero eos et accusamus et iusto odio dignissimos</p>
          <p className="text-xl md:text-3xl font-semibold"> &#10003; Similique sunt in culpa qui officia</p>
          <div className="flex justify-center m-5 md:m-10">
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-xl md:text-2xl w-64 md:w-80">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:h-[50rem] lg:w-[55rem] h-56 w-80 sm:w-80 md:h-auto md:w-auto md:ml-32 md:mx-32  lg:mx-14 ">
          <img src={Features} alt="Our Features" className="h-56 w-full object-cover  lg:h-full md:h-full " />
        </div>
      </div>
      
      <div className="flex flex-col-reverse md:flex-col-reverse  items-center lg:w-[110rem] relative mx-auto mt-10 overflow-hidden lg:flex-row">
        <div className="lg:h-[50rem] lg:w-[50rem] h-56 w-80 sm:w-80 md:h-auto md:w-auto md:mr-32 md:mx-32 lg:mx-7 ">
          <img src={ourvalue} alt="Our Values" className="h-56 lg:h-full w-full object-cover md:h-full " />
        </div>
        <div className="lg:h-[50rem] lg:w-[50rem] h-auto w-auto py-20 px-5 gap-4 md:py-40">
          <h3 className="text-3xl md:text-5xl py-2 md:py-5">Our Values</h3>
          <h1 className="text-4xl md:text-6xl font-bold py-2 md:py-5">Your product will stand out from the rest</h1>
          <p className="text-lg md:text-2xl mx-4 md:mx-8 py-2 md:py-5">
            Explore stunning galleries featuring breathtaking moments captured by professional photographers. Discover a wide range of services, from weddings and events to nature and product photography.
          </p>
          <p className="text-xl md:text-3xl font-semibold py-2"> &#10003; Professional quality and artistic vision to capture your most memorable moments.</p>
          <p className="text-xl md:text-3xl font-semibold"> &#10003; Wide range of photography services tailored to meet your specific needs, from weddings to commercial shoots.</p>
          <div className="flex justify-center m-5 md:m-10">
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-xl md:text-2xl w-64 md:w-80">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
