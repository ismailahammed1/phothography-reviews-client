/* eslint-disable no-unused-vars */
import React from "react";
import Sprint from "../../assets/client/Sprint.png";
import aircell from "../../assets/client/aircell.png";
import airways from "../../assets/client/brand-etihad-airways.png";
import cisco from "../../assets/client/cisco.png";
import emirates from "../../assets/client/emirates.png";
import etihad from "../../assets/client/etihad.png";
import indiegogo from "../../assets/client/indiegogo.png";
import nasa from "../../assets/client/nasa.png";

const OurClient = () => {
  const postCard = [
    {
      src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: "15. 04. 2021 -  Life Style",
      description: "Best Wedding Ritual for Photo Graphy Themes",
    },
    {
      src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: "15. 04. 2021 -  Life Style",
      description: "Our Experience in Finland & things you need to know",
    },
    {
      src: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
      date: "15. 04. 2021 -  Life Style",
      description: "How to take amazing photos in not so very good?",
    },
  ];
  const clientLogo = [
    { src: etihad, alt: "etihad" },
    { src: Sprint, alt: "Sprint" },
    { src: aircell, alt: "aircell" },
    { src: cisco, alt: "cisco" },
    { src: emirates, alt: "emirates" },
    { src: indiegogo, alt: "indiegogo" },
    { src: nasa, alt: "nasa" },
    { src: airways, alt: "airways" },
  ];
  return (
    <div className="relative max-w-[120rem] mx-auto bg-[#f5eeeb] lg:h-[85rem] overflow-hidden">
      <div className="mt-28 flex justify-center items-center">
       
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {clientLogo.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center border-2 border-gray-400 border-t-0 border-l-0 lg:h-56 lg:w-80 h-44 w-40"
            >
              <img src={client.src} alt={client.alt} />
            </div>
          ))}
        </div>
      </div>

      {/* Latest Posts & News */}
      <div className="mt-24 text-center">
        <h1 className="lg:text-7xl font-bold text-3xl mb-8">
          Latest Posts & News
        </h1>
        <div className="flex flex-col sm:flex-col md:flex-row justify-center items-center gap-8 mt-10">
          {postCard.map((post, index) => (
            <div key={index} className="w-[370px] lg:h-[680px] md:h-[680px] h-auto mt-12">
              <img
                src={post.src}
                alt={post.title}
                className="h-[300px] w-full object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg text-left">{post.date}</h1>
                <p className="mt-3 text-3xl font-bold text-left text-gray-600">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
