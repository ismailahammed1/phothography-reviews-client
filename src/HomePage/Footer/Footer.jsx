import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[120rem] mx-auto p-8 bg-black overflow-hidden">
      <div className="mx-20 flex flex-col sm:flex-row justify-between mt-4">
        <div className="mb-20 sm:mb-0 sm:flex-1">
          <h1 className="text-white lg:text-5xl hover:text-amber-400 tracking-wide">
            CAPTURE TO YOU
          </h1>
          <h1 className="text-white lg:text-2xl mt-4">Email Now :</h1>
          <h1 className="text-white lg:text-2xl mt-4">
            ismailahmmedroman@gmail.com
          </h1>
        </div>

        <div className="hidden md:flex lg:h-[450px] md:h-[300px] h-[200px] sm:h-auto w-[200px] md:w-[360px] lg:w-[420px] bg-slate-400 z-10 lg:flex items-center p-10 sm:mt-0 lg:-mt-[225px] md:-mt-[115px] lg:absolute md:absolute lg:ml-[80rem] md:ml-[16rem] xl:flex xl:justify-between">
          <div className="w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h1>
            <div className="w-full h-1 bg-black my-2"></div>
            <h1 className="m-4 text-2xl font-bold flex gap-2">
              <FaMapMarkerAlt className="mt-1" /> 2464 Royal Ln 1 Ave Mesa New
              Jersey USA.
            </h1>
            <h1 className="m-4 text-2xl font-bold">
              <span>&#9742;</span> +880 176 22126 444
            </h1>
          </div>
        </div>
      </div>
      <div className="max-w-[120rem] mx-auto p-8 flex flex-col lg:flex-row justify-between items-center bg-black border-t-2 border-gray-700 mt-20">
        <ul className="flex flex-wrap items-center justify-center lg:justify-start lg:-ml-5 text-xl lg:text-2xl mb-5 lg:mb-0">
          <li className="p-5">
            <a className="font-medium text-white hover:text-orange-400" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-orange-400" href="#">
              Terms of Service
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-orange-400" href="#">
              Return Policy
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-orange-400" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex gap-5 justify-center lg:justify-start">
          <a
            href="https://www.facebook.com/ismailahmmedroman1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a
            href="https://www.instagram.com/ismailahmmedroman1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a
            href="https://x.com/ismailahammedr3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a
            href="https://www.youtube.com/iargaming1390/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
