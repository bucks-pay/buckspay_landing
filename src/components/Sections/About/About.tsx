import Image from "next/image";
import styles from "./About.module.css";
import { useTranslation } from "react-i18next";
const AboutSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);
  return (
    <section id="about" className={styles.aboutUsSection}>
     <div className={styles.animatedBackground}></div>
      <h2 className={styles.tittle}>{t("aboutSection.title")}</h2>
      <p>{t("aboutSection.description")}</p>
      <div className={styles.imagesContainer}>
        <div className={styles.imageBox}>
          <Image
            className={styles.img}
            src="/background/Seguridad.png"
            alt="Security"
            width={127.5}
            height={150}
          />
          <span className={styles.imageLabel}>
            {t("aboutSection.imageDescriptions.security")}
          </span>
        </div>
        <div className={styles.imageBox}>
          <Image
            className={styles.img}
            src="/background/Velocidad.png"
            alt="Speed"
            width={150}
            height={150}
          />
          <span className={styles.imageLabel}>
            {t("aboutSection.imageDescriptions.speed")}
          </span>
        </div>
        <div className={styles.imageBox}>
          <Image
            className={styles.img}
            src="/background/Eficiencia.png"
            alt="Efficiency"
            width={150}
            height={150}
          />
          <span className={styles.imageLabel}>
            {t("aboutSection.imageDescriptions.efficiency")}
          </span>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
