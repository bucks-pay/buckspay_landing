import Image from "next/image";
import styles from "./Services.module.css";
import { useTranslation } from "react-i18next";
const ServicesSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.background}>
        <video autoPlay loop muted className={styles.videoBackground}>
          <source src="/World 2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.content}>
        <h2>{t("servicesSection.title-1")}</h2>
        <p>{t("servicesSection.subtitle")}</p>
      </div>
    </section>
  );
};

export default ServicesSection;
