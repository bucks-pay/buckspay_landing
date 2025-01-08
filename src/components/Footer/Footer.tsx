"use client"

import React, { useState } from 'react'; // Asegúrate de importar useState
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation(["landing"]);
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
    const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
    const [howToStartMenuOpen, setHowToStartMenuOpen] = useState(false);

    return (
        <footer className={styles.container}>
            <div className={styles.leftSide}>
                <Link href={"/"} className={`${styles.logo} ${styles.linkLogo}`}>
                    <Image className={styles.fullLogo} src={"/logos/buckspay-text-light.png"} alt='logo' width={190} height={50} />
                </Link>
                <div className={styles.socialMedia}>
                    <span>{t("socialMedia.titulo")}</span>
                    <div className={styles.socialIcons}>
                        <Link href={"https://x.com/buckspay_"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                            <Image src={"/social/x.png"} alt="X logo" width={25} height={25} />
                        </Link>
                        <Link href={"https://www.instagram.com/buckspay_"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                            <Image src={"/social/instagram.png"} alt="Instagram logo" width={25} height={25} />
                        </Link>
                        <Link href={"https://warpcast.com/buckspay"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                            <Image src={"/social/warpcast.png"} alt="Warpcast logo" width={25} height={25} />
                        </Link>
                        <Link href={"https://t.me/buckspay"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                            <Image src={"/social/telegram.png"} alt="Telegram logo" width={25} height={25} />
                        </Link> 
                    </div>
                </div>
                <p className={styles.description}>
                    Expertly trained, battle-tested, elite <br />software developers on demand
                </p>
                <div className={styles.contactInfo}>
                    <div className={styles.contactItem}>
                        <Image src={"/icons/Phone.png"} alt="Phone" width={25} height={25} />
                        <span>+94 713249222</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Image src={"/icons/Email.png"} alt="Email" width={25} height={25} />
                        <span>hello@courtney.lk</span>
                    </div>
                    <div className={styles.contactItem}>
                        <Image src={"/icons/Address.png"} alt="Location" width={25} height={25} />
                        <span>
                            Courtney Lanka (Private) Limited<br />
                            Level 35<br />
                            World Trade Center<br />
                            Colombo 01
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.columns}>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle} onClick={() => setCompanyMenuOpen(!companyMenuOpen)}>{t("Company")}</h3>
                        {companyMenuOpen && (
                            <ul className={styles.menu}>
                                <li><Link className={styles.link} href={"/about"}>{t("About Us")}</Link></li>
                                <li><Link className={styles.link} href={"/success-stories"}>{t("Success Stories")}</Link></li>
                                <li><Link className={styles.link} href={"/privacy-policy"}>{t("Privacy Policy")}</Link></li>
                                <li><Link className={styles.link} href={"/terms"}>{t("Terms Conditions")}</Link></li>
                                <li><Link className={styles.link} href={"/contact"}>{t("Contact Us")}</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle} onClick={() => setServicesMenuOpen(!servicesMenuOpen)}>{t("Services")}</h3>
                        {servicesMenuOpen && (
                            <ul className={styles.menu}>
                                <li><Link className={styles.link} href={"/hire-permanent-staff"}>{t("Hire Permanent Staff")}</Link></li>
                                <li><Link className={styles.link} href={"/staff-augmentation"}>{t("Staff Augmentation")}</Link></li>
                                <li><Link className={styles.link} href={"/software-outsourcing"}>{t("Software Outsourcing")}</Link></li>
                                <li><Link className={styles.link} href={"/build-remote-office"}>{t("Build Remote Office")}</Link></li>
                            </ul>
                        )}
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle} onClick={() => setHowToStartMenuOpen(!howToStartMenuOpen)}>{t("How To Start")}</h3>
                        {howToStartMenuOpen && (
                            <ul className={styles.menu}>
                                <li><Link className={styles.link} href={"/you-asked"}>{t("You Asked")}</Link></li>
                                <li><Link className={styles.link} href={"/we-proceed"}>{t("We Proceed")}</Link></li>
                                <li><Link className={styles.link} href={"/negotiate"}>{t("Negotiate")}</Link></li>
                                <li><Link className={styles.link} href={"/you-get"}>{t("You Get")}</Link></li>
                            </ul>
                        )}
                    </div>
                </div>
                
            </div>
        </footer>
    );
}