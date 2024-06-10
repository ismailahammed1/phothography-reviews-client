import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="max-w-[120rem] mx-auto p-8 flex flex-col lg:flex-row justify-between items-center bg-black">
      <div className="flex flex-col lg:flex-row lg:justify-between w-full mx-10 border-t-2">
        <ul className="flex flex-wrap items-center justify-center lg:justify-start lg:-ml-5 text-xl lg:text-2xl">
          <li className="p-5">
            <a className="font-medium text-white hover:text-gray-700" href="#">
              Privacy Policy
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-gray-700" href="#">
              Terms of Service
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-gray-700" href="#">
              Return Policy
            </a>
          </li>
          <li className="p-5">
            <a className="font-medium text-white hover:text-gray-700" href="#">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="mt-5 lg:mt-5 flex gap-5 justify-center lg:justify-start">
          <a href="https://www.facebook.com/ismailahmmedroman1/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a href="https://www.instagram.com/your-instagram-handle/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a href="https://www.twitter.com/your-twitter-handle/" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
          <a href="https://www.youtube.com/your-youtube-channel/" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-3xl cursor-pointer hover:text-cyan-600" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
