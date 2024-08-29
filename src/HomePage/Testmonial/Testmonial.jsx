import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    quote: "The best photography gear I have ever used. The clarity and precision are unmatched.",
    name: "Micheal Gough",
    position: "Photographer",
    company: "Gough Photography"
  },
  {
    quote: "This equipment has transformed my photography business. My clients love the results!",
    name: "Jane Doe",
    position: "Photographer",
    company: "Doe Photography Studios"
  },
  {
    quote: "Highly recommended for any photographer looking to take their work to the next level.",
    name: "John Smith",
    position: "Photographer",
    company: "Smith Photography"
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
    }, 4000); // Change slide every 4 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="slider-container max-w-[120rem] mx-auto bg-[#bdb8b8] py-16 overflow-hidden h-[30rem]">
      <h1 className="lg:text-7xl text-3xl font-bold text-center mb-8">What People Say</h1>
      <div className="relative flex justify-center items-center">
        <button onClick={handlePrev} className="absolute left-0 p-2 text-7xl font-bold hidden md:block lg:mx-44">&larr;</button>
        
        <AnimatePresence mode='wait'>
          {testimonials.map((testimonial, index) => (
            index === currentIndex && (
              <motion.div
                key={index}
                className="flex justify-center items-center"
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
                    <p className="lg:text-2xl text-xl font-medium text-gray-900 md:text-2xl">
                      {testimonial.quote}
                    </p>
                  </blockquote>
                  <figcaption className="flex items-center justify-center mt-6 space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500">
                      <div className="pr-3 font-medium text-gray-900 lg:text-3xl text-lg">{testimonial.name}</div>
                      <div className="pl-3 lg:text-xl text-sm font-light text-gray-900">{testimonial.position}</div>
                    </div>
                  </figcaption>
                </figure>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        <button onClick={handleNext} className="absolute right-0 p-2 text-7xl font-bold hidden md:block lg:mx-44">&rarr;</button>
      </div>
    </div>
  );
};

export default Testimonial;
