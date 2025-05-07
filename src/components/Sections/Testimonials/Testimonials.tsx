import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#08070E] text-white"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Buckspay Community Worldwide</h2>
        <p className="text-lg text-gray-400">
          Join a growing community who choose Buckspay.
        </p>
      </div>
    </section>
  );
};

export default TestimonialsSection;