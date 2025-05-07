import { useTranslation } from "react-i18next";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  return (
    <section
      id="services"
      className="relative flex items-center justify-start w-full min-h-[60vh] bg-[#08070E] p-30"
    >
      <div className="relative z-10 max-w-3xl text-center text-white ml-40">
        <h2 className="font-sans text-3xl font-semibold leading-tight lg:text-4xl">
          {t("servicesSection.title-1")}
        </h2>
        <p className="mt-4 text-base lg:text-lg">
          {t("servicesSection.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;