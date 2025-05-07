import { useTranslation } from "react-i18next";
import { 
  FaWallet, 
  FaGlobeAmericas, 
  FaExchangeAlt, 
  FaMobileAlt 
} from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);

  const features = [
    {
      icon: FaWallet,
      title: t("Blockchain technology"),
      description: t("This infrastructure reduces the risk of fraud and maintains a reliable record of your financial transactions."),
    },
    {
      icon: FaGlobeAmericas,
      title: t("International payments"),
      description: t("Buckspay offers a practical and secure solution to manage your payments and personal finances from anywhere in the world."),
    },
    {
      icon: FaExchangeAlt,
      title: t("Currency conversion"),
      description: t("Buckspay makes currency conversion easy. It lets you store your balance digitally and pay using any local payment method."),
    },
    {
      icon: FaMobileAlt,
      title: t("Mobile website"),
      description: t("Manage your finances from any mobile device and keep constant track of your expenses and transactions—wherever you are."),
    },
  ];

  return (
    <section
      id="about"
      className="font-display relative flex flex-col items-center justify-center w-full min-h-[70vh] bg-[#08070E] text-white p-6"
    >
      <div className="max-w-7xl mx-auto w-full px-4">
        <h2 className="text-3xl font-semibold text-center lg:text-4xl mb-6">
          {t("aboutSection.title")}
        </h2>
        <p className="text-base text-center max-w-3xl mx-auto lg:text-lg mb-12">
          {t("aboutSection.description")}
        </p>
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left space-y-4"
            >
              <div className="relative flex items-center justify-center w-14 h-14">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-md"></div>
                <div className="relative z-10 flex items-center justify-center w-full h-full rounded-full bg-[#090812] border border-white/10">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-base font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;