import React from "react";
import Image from "next/image";

const HowWorksSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      image: "/kyc.png",
      title: "KYC/KYT Verification",
      description: "Verify your identity in minutes and start using Buckspay securely."
    },
    {
      number: "2",
      image: "/wallet.png",
      title: "Connect your wallet",
      description: "Deposit your cryptos or make a transfer to pay."
    },
    {
      number: "3",
      image: "/qr.png",
      title: "Scan QR & Pay",
      description: "Enjoy the simplicity of a platform that makes every transaction seamless in real-time."
    }
  ];

  return (
    <section
      id="how-works"
      className="font-display relative flex items-start justify-start w-full min-h-screen bg-[#08070E] text-white p-4 md:p-8 lg:px-20 xl:px-80 py-16"
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center md:text-left">
          How It Works
        </h2>
        
        <p className="text-base md:text-lg mb-8 md:mb-12 text-center md:text-left">
          Start using Buckspay in just a few taps — no banks, no hassle, no limits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="relative aspect-square w-full mb-4 md:mb-6 overflow-hidden rounded-lg">
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                />

                <div className="absolute inset-0">
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/2 to-black"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/2"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
                  </div>

                  <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-1/2 h-1/2">
                      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/10 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                    </div>
                    
                    <div className="absolute top-0 right-0 w-1/2 h-1/2">
                      <div className="absolute inset-0 bg-gradient-to-bl from-black via-black/10 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-bl from-white/5 to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/10 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2">
                      <div className="absolute inset-0 bg-gradient-to-tl from-black via-black/10 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent"></div>
                    </div>
                  </div>

                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.2)_70%)]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
                  </div>
                </div>

                <div className="absolute top-4 md:top-6 left-4 md:left-6 z-20">
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16">
                    <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#090812] border border-white/20">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                      <span className="text-xl md:text-2xl font-bold text-white relative z-10">{step.number}</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-center md:text-left">{step.title}</h3>
              <p className="text-base md:text-lg text-gray-300 text-center md:text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWorksSection;