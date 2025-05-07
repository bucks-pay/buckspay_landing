import React from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestimonialsSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      text: "I use Buckspay every time I travel and forget about currency exchange. I can pay local merchants straight from my phone, hassle-free. It's fast, secure, and helps me stay on top of my expenses at all times.",
      name: "Camila",
      role: "Digital Entrepreneur"
    },
    {
      text: "With Buckspay, I was able to pay with crypto at a local store in Colombia without any hassle.",
      name: "Lucas M.",
      role: "Web3 Community"
    },
    {
      text: "Tried Buckspay in Medellín and paid with cCop straight from my wallet. No conversions, no friction. It just works.",
      name: "Juan José",
      role: "Blockchain enthusiast"
    }
  ];

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section
      id="testimonials"
      className="font-display relative flex flex-col items-center justify-center w-full min-h-screen bg-[#08070E] text-white py-12 md:py-20"
    >
      <div className="text-center mb-8 md:mb-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Buckspay Community Worldwide</h2>
        <p className="text-base md:text-lg text-gray-400">
          Join a growing community who choose Buckspay.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0">
                <div className="relative mx-2 md:mx-4 p-6 md:p-12 lg:p-24 rounded-xl overflow-hidden">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-black/20"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/2"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
                    </div>

                    <div className="absolute inset-0">
                      <div className="absolute top-0 left-0 w-1/2 h-1/2">
                        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-black/10 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                      </div>
                      
                      <div className="absolute top-0 right-0 w-1/2 h-1/2">
                        <div className="absolute inset-0 bg-gradient-to-bl from-black/20 via-black/10 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent"></div>
                      </div>
                      
                      <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
                        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/10 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                      </div>
                      
                      <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                        <div className="absolute inset-0 bg-gradient-to-tl from-black/20 via-black/10 to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent"></div>
                      </div>
                    </div>

                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_70%)]"></div>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 md:mb-6">"{testimonial.text}"</p>
                    <div className="flex flex-col items-start">
                      <span className="text-base md:text-lg font-semibold">{testimonial.name}</span>
                      <span className="text-sm md:text-base text-gray-400">{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Next testimonial"
        >
          <FaChevronRight className="w-4 h-4 md:w-6 md:h-6" />
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;