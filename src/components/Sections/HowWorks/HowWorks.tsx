import React from "react";

const HowWorksSection: React.FC = () => {
  return (
    <section
      id="how-works"
      className="relative flex items-start justify-start w-full min-h-screen bg-[#08070E] text-white px-80 py-16"
    >
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold mb-6">How It Works</h2>
        
        <p className="text-lg mb-12">
          Start using Buckspay in just a few taps — no banks, no hassle, no limits.
        </p>

        <div className="grid grid-cols-3 gap-16">

          <div>
            <h3 className="text-2xl font-semibold mb-2">KYC/KYT Verification</h3>
            <p className="text-lg">
              Verify your identity in minutes and start using Buckspay securely.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Connect your wallet</h3>
            <p className="text-lg">
              Deposit your cryptos or make a transfer to pay.
            </p>
          </div>

          <div className="break-words">
            <h3 className="text-2xl font-semibold mb-2">Scan QR & Pay</h3>
            <p className="text-lg whitespace-normal">
              Enjoy the simplicity of a platform that makes every transaction seamless in real-time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorksSection;