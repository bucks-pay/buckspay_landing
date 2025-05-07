import React from "react";

const Benefits: React.FC = () => {
  return (
    <section
      id="benefits"
      className="relative flex items-center justify-start w-full min-h-screen bg-[#08070E] text-white px-80"
    >
      <div className="max-w-3xl">
        <h2 className="text-4xl font-bold mb-6">Benefits of using cCOP</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold">Exclusive Discounts & Perks</h3>
            <p className="mt-2 text-lg">
              Unlock special offers available only for CCOP users.
            </p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold">Support Local Innovation</h3>
            <p className="mt-2 text-lg">
              By paying with cCOP, you're helping boost Colombia’s digital economy.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="text-lg text-blue-400 hover:underline"
          >
            Pay with cCOP now →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;