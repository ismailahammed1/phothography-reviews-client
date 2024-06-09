// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
    name: "Micheal Gough",
    position: "CEO at Google"
  },
  {
    quote: "This is an excellent product that has streamlined our workflow and improved our productivity significantly.",
    name: "Jane Doe",
    position: "CTO at Amazon"
  },
  {
    quote: "Highly recommended for any business looking to enhance their digital presence with modern tools.",
    name: "John Smith",
    position: "Head of Development at Facebook"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container max-w-[120rem] mx-auto bg-white py-16">
      <h1 className="text-7xl font-bold text-center mb-8">What People Say</h1>
      <div className="relative flex justify-center items-center">
        <button onClick={handlePrev} className="absolute left-0 p-2 mx-10 text-7xl font-bold ">&larr;</button>
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            className="flex justify-center items-center h-64"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <figure className="max-w-screen-md mx-auto flex-shrink-0 w-full px-4 text-center">
              <svg className="h-12 mx-auto mb-3 text-gray-400" viewBox="0 0 24 27" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                  fill="currentColor"></path>
              </svg>
              <blockquote>
                <p className="text-xl font-medium text-gray-900 md:text-2xl">
                  {testimonials[currentIndex].quote}
                </p>
              </blockquote>
              <figcaption className="flex items-center justify-center mt-6 space-x-3">
                <div className="flex items-center divide-x-2 divide-gray-500">
                  <div className="pr-3 font-medium text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="pl-3 text-sm font-light text-gray-500">{testimonials[currentIndex].position}</div>
                </div>
              </figcaption>
            </figure>
          </motion.div>
        </AnimatePresence>
        <button onClick={handleNext} className="absolute right-0 p-2 mx-10 text-7xl font-bold ">&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
