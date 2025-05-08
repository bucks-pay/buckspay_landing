"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      text: "I use Buckspay every time I travel and forget about currency exchange. I can pay local merchants straight from my phone, hassle-free. It's fast, secure, and helps me stay on top of my expenses at all times.",
      name: "Camila",
      role: "Digital Entrepreneur",
    },
    {
      text: "With Buckspay, I was able to pay with crypto at a local store in Colombia without any hassle.",
      name: "Lucas M.",
      role: "Web3 Community",
    },
    {
      text: "Tried Buckspay in Medellín and paid with cCop straight from my wallet. No conversions, no friction. It just works.",
      name: "Juan José",
      role: "Blockchain enthusiast",
    },
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const testimonialVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  return (
    <motion.section
      id="testimonials"
      className="font-display relative flex flex-col items-center justify-center w-full min-h-screen bg-[#08070E] text-white py-12 md:py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center mb-8 md:mb-16" variants={textVariants}>
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4"
          variants={textVariants}
        >
          Buckspay Community Worldwide
        </motion.h2>
        <motion.p
          className="text-base md:text-lg text-gray-400"
          variants={textVariants}
        >
          Join a growing community who choose Buckspay.
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full max-w-6xl mx-auto flex flex-col items-center"
        variants={testimonialVariants}
      >
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_100%] min-w-0"
                variants={testimonialVariants}
              >
                <div className="relative mx-2 p-6 md:p-12 lg:p-16 rounded-xl bg-black/20">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-black/20"></div>
                  </div>
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 md:mb-6">
                      {testimonial.text}:
                    </p>
                    <div className="flex flex-col items-start">
                      <span className="text-base md:text-lg font-semibold">
                        {testimonial.name}
                      </span>
                      <span className="text-sm md:text-base text-gray-400">
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-6 px-4">
          <button
            onClick={scrollPrev}
            className="flex items-center text-md md:text-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="mr-3 w-6 h-6 md:w-8 md:h-8" /> Previous
          </button>
          <button
            onClick={scrollNext}
            className="flex items-center text-md md:text-lg text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            Next <FaChevronRight className="ml-3 w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default TestimonialsSection;
