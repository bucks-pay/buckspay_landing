import React from "react";
import Image from "next/image";

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="font-display relative flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-[#08070E] text-white p-4 md:p-8 lg:px-20 xl:px-80"
    >
      <div className="max-w-3xl text-center md:text-left mb-12 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of using cCOP</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Exclusive Discounts & Perks</h3>
            <p className="mt-2 text-base md:text-lg">
              Unlock special offers available only for CCOP users.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Support Local Innovation</h3>
            <p className="mt-2 text-base md:text-lg">
              By paying with cCOP, you're helping boost Colombia's digital economy.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="https://app.buckspay.xyz/" 
            target="_blank"
            className="inline-block text-base md:text-lg text-blue-400 hover:underline"
          >
            Pay with cCOP now →
          </a>
        </div>
      </div>

      <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px]">
        <div className="hidden lg:block absolute -top-0 -right-0 w-[200px] h-[200px] z-10">
          <Image 
            src={"/ccop.png"} 
            alt="ccop small" 
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>

        <div className="relative w-full aspect-square">
          <Image 
            src={"/ccop.png"} 
            alt="ccop large" 
            fill
            className="object-contain"
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;