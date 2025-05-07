import { useTranslation } from "react-i18next";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const features = [
    {
      icon: "/icons/Phone.png",
      title: t("Blockchain technology"),
      description: t("This infrastructure reduces the risk of fraud and maintains a reliable record of your financial transactions."),
    },
    {
      icon: "/icons/speed.svg",
      title: t("International payments"),
      description: t("Buckspay offers a practical and secure solution to manage your payments and personal finances from anywhere in the world."),
    },
    {
      icon: "/icons/efficiency.svg",
      title: t("Currency conversion"),
      description: t("Buckspay makes currency conversion easy. It lets you store your balance digitally and pay using any local payment method."),
    },
    {
      icon: "/icons/mobile.svg",
      title: t("Mobile website"),
      description: t("Manage your finances from any mobile device and keep constant track of your expenses and transactions—wherever you are."),
    },
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full min-h-[70vh] bg-[#08070E] text-white p-6"
    >
      <h2 className="text-3xl font-semibold text-center lg:text-4xl mb-6">
        {t("aboutSection.title")}
      </h2>
      <p className="text-base text-center max-w-3xl lg:text-lg mb-12 truncate">
        {t("aboutSection.description")}
      </p>
      <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start text-left space-y-4"
          >
            <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#090812] overflow-hidden">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-md z-0"></div>
              <Image
                className="relative z-10"
                src={feature.icon}
                alt={feature.title}
                width={28}
                height={28}
              />
            </div>
            <h3 className="text-base font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;