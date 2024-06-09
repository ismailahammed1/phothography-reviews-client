/* eslint-disable no-unused-vars */
import React from "react";
import Fashion from "../assets/Fashion.png";
import Lifestyle from "../assets/Lifestyle.png";
import Wedding from "../assets/Wedding Photo.png";
import WildLife from "../assets/sanctuary.png";
import Sports from "../assets/sport-mode.png";
import Products from "../assets/studio.png";
import Feature from "./Feature";

const Services = () => {
  return (
    <>
      <div className="bg-red-50 px-2 py-12 text-[#333] max-w-[120rem] mx-auto">
        <div className="max-w-6xl mx-auto h-auto">
          <h2 className="sm:text-4xl text-2xl lg:text-7xl font-extrabold text-center mb-16">
            What we provide
          </h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-6">
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={Wedding}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Wedding"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Wedding Photo</h3>
                <p className="text-gray-500 text-lg">
                  We also like to fix the place for your amazing photos.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={Lifestyle}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Lifestyle"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Lifestyle Photo</h3>
                <p className="text-gray-500 text-lg">
                  We are here to take photos of your beautiful event.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={Fashion}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Fashion"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Fashion Photo</h3>
                <p className="text-gray-500 text-lg">
                  You will keep the memories forever in an album.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={WildLife}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Wildlife"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Wildlife Photo</h3>
                <p className="text-gray-500 text-lg">
                  Wildlife photography services capturing nature's beauty.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={Sports}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Sports"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Sports Photo</h3>
                <p className="text-gray-500 text-lg">
                  Professional sports photography capturing every thrilling moment.
                </p>
              </div>
            </div>
            <div className="p-4 flex bg-white rounded-md shadow-md">
              <img
                src={Products}
                className="w-12 h-12 mr-6 bg-gray-100 p-3 rounded-md shrink-0"
                alt="Products"
              />
              <div>
                <h3 className="text-3xl font-semibold mb-2">Products Photo</h3>
                <p className="text-gray-500 text-lg">
                  High-quality product photography showcasing your items perfectly.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center m-10">
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-2xl w-80">
              Get Started Now
            </button>
          </div>
        </div>
        <Feature />
      </div>
    </>
  );
};

export default Services;
