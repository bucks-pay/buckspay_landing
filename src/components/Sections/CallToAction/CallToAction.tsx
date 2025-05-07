import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CallToAction: React.FC = () => {
  return (
    <section id="call" className="font-display relative w-full py-40 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a2e_0%,#08070E_70%)]"></div>
        

        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-400/10 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to pay with crypto
          </h2>
          <Link href="https://app.buckspay.xyz/" target="_blank">
            <button className="flex items-center justify-center px-8 py-4 bg-[#2194DB] hover:bg-blue-600 text-black font-semibold rounded-full transition-colors duration-300 transform hover:scale-105 cursor-pointer">
              Get started now
              <FaArrowRight className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
