import Image from "next/image"
import styles from "./Services.module.css"
import { useTranslation } from "react-i18next"
const ServicesSection: React.FC = () => {
    const { t } = useTranslation(["landing"])
    return (
        <section id="services" className={styles.servicesSection}>
            <div className={styles.background}>
                <div className={styles.circle} id={styles.circle3}></div>
            </div>
            <div className={styles.content}>
                <h2>{t("servicesSection.title")} <span className={styles.gradient}>{t("servicesSection.increase")}</span>.</h2>
                <p>{t("servicesSection.subtitle")}</p>
                {/* <button className={styles.viewServicesButton}>{t("servicesSection.contact")}</button> */}
            </div>
            <div className={styles.servicesContainer}>
                <span className={styles.servicesContainerTitle}>{t("servicesSection.price")}</span>
                <Image className={`${styles.img} ${styles.imgHorizontal}`} src={"/background/Services.png"} alt='' width={860} height={570} />
                <Image className={`${styles.img} ${styles.imgVertical}`} src={"/background/Services-vertical.png"} alt='' width={800} height={970} />
                <span className={styles.servicesContainerSubtitle}>{t("servicesSection.find")}</span>
            </div>
        </section>
    )
}

export default ServicesSection