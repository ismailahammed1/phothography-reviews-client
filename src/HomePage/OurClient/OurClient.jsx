/* eslint-disable no-unused-vars */
import React from "react";
import Sprint from '../../assets/client/Sprint.png';
import aircell from '../../assets/client/aircell.png';
import airways from '../../assets/client/brand-etihad-airways.png';
import cisco from '../../assets/client/cisco.png';
import emirates from '../../assets/client/emirates.png';
import etihad from '../../assets/client/etihad.png';
import indiegogo from '../../assets/client/indiegogo.png';
import nasa from '../../assets/client/nasa.png';

const OurClient = () => {
  return (
    <div className="relative max-w-[120rem] mx-auto bg-[#f5eeeb] lg:h-[67rem] overflow-hidden">
      <div className="mt-28 flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 ">
          <div className="flex items-center justify-center  border-2 border-gray-400 border-t-0 border-l-0 lg:h-56 lg:w-80 h-44 w-40">
           <img src={etihad} alt="etihad" />
          </div>
          <div className="flex items-center justify-center  border-gray-400 border-t-0 border-l-0 border-r-0 lg:border-r-2 md:border-r-2 border-2 lg:h-56 lg:w-80 h-44 w-40">
          <img src={Sprint} alt="Sprint" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-2">
          <img src={aircell} alt="aircell" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-r-0 border-2">
          <img src={cisco} alt="cisco" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-2 lg:border-b-0 md:border-b-0">
          <img src={emirates} alt="emirates" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-r-0 border-2 lg:border-r-2 md:border-r-2 lg:border-b-0 md:border-b-0">
           <img src={indiegogo} alt="indiegogo" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-b-0 border-2">
            <img src={nasa} alt="nasa" />
          </div>
          <div className="flex items-center justify-center  lg:h-56 lg:w-80 h-44 w-40 border-gray-400 border-t-0 border-l-0 border-r-0 border-b-0 border-2">
            <img src={airways} alt="airways" />
          </div>
        </div>
      </div>
      <div className="mt-24 text-center"><h1 className="lg:text-7xl  font-bold text-3xl ">Latest Posts & News
      </h1>
      <div className="grid lg:grid-cols-3 "></div>
      <div><h1 className="lg:text-7xl  font-bold text-3xl ">Latest
      </h1></div>
      <div><h1 className="lg:text-7xl  font-bold text-3xl ">Latews
      </h1></div>
      <div><h1 className="lg:text-7xl  font-bold text-3xl ">LatesNews
      </h1></div>
      </div>
    </div>
  );
};

export default OurClient;
