import { useTranslation } from "react-i18next";
import Image from "next/image";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="services"
      className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[60vh] bg-[#08070E] p-4 md:p-8 lg:p-30"
    >
      <div className="relative z-10 max-w-3xl text-center md:text-left text-white mb-8 md:mb-0 md:ml-8 lg:ml-40">
        <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
          {t("servicesSection.title-1")}
        </h2>
      </div>
      
      <div className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] aspect-square">
        <Image 
          src={"/phone.png"} 
          alt="services" 
          fill
          className="object-contain"
          sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 600px"
          priority
        />
      </div>
    </section>
  );
};

export default ServicesSection;