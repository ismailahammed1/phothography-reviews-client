// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(null);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuItemHover = (index) => {
    setHoveredMenuItem(index);
  };

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className={`fixed inset-x-0 top-0 z-10 transition-all duration-300 ${scrolled ? 'bg-gray-800 shadow-lg top-0' : 'bg-transparent lg:top-10'}`}>
     
      <div className="mx-auto flex md:max-w-[100rem] justify-between px-4 py-2 sm:px-6 lg:px-8">
        <h1 className="lg:text-3xl px-4 py-2 cursor-pointer leading-normalactive:border-neutral-900 focus:bg-neutral-100 hover:text-amber-400 font-medium uppercase tracking-wide leading-normalactive:border-neutral-900 text-slate-100 transition duration-150 ease-in-out">
      <Link to="/">Capture To You</Link>
        </h1>
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          </button>
        </div>
        <ul className="text-white hidden lg:flex gap-5 items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-2 focus:bg-neutral-100 font-medium uppercase leading-normalactive:border-neutral-900 text-slate-100 transition duration-150 ease-in-out cursor-pointer tracking-wide text-2xl ${
                hoveredMenuItem === index ? "hover:text-amber-400" : ""
              }`}
              onMouseEnter={() => handleMenuItemHover(index)}
              onMouseLeave={() => setHoveredMenuItem(null)}
            >
              <Link to={item.href} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            </li>
          ))}
          <button className="bg-transparent hover:bg-slate-800 text-white font-semibold hover:text-amber-400 py-2 px-4 border border-black hover:border-transparent rounded tracking-wide text-2xl">
           <Link to="/signup"> Sign Up</Link>
          </button>
          <button className="bg-transparent hover:bg-slate-800 text-white font-semibold hover:text-amber-400 py-2 px-4 border border-black hover:border-transparent rounded tracking-wide text-2xl">
          <Link to="/login"> Sign In</Link>
          </button>
        </ul>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden z-0">
          <ul className="text-white flex flex-col gap-5 items-center bg-slate-600">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 focus:bg-neutral-100 font-medium uppercase leading-normalactive:border-neutral-900 text-slate-100 transition duration-150 ease-in-out cursor-pointer ${
                  hoveredMenuItem === index ? "hover:text-amber-400" : "hover:bg-slate-400"
                }`}
                onClick={closeMobileMenu}
                onMouseEnter={() => handleMenuItemHover(index)}
                onMouseLeave={() => setHoveredMenuItem(null)}
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <button className="bg-transparent hover:bg-slate-800 text-white font-semibold hover:text-amber-400 py-2 px-4 border border-black hover:border-transparent rounded tracking-wide text-xl">
              Sign Up
            </button>
            <button className="bg-transparent hover:bg-slate-800 text-white font-semibold hover:text-amber-400 py-2 px-4 border border-black hover:border-transparent rounded tracking-wide text-xl">
              Sign In
            </button>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;
