"use client"

import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation(["header"])
    return (
        <footer className={styles.container}>
            <Link href={"/"} className={`${styles.logo} ${styles.linkLogo}`}>
                <Image className={styles.fullLogo} src={"/logos/buckspay-text-light.png"} alt='logo' width={190} height={50} />
            </Link>
            <div className={styles.null}></div>
            <div className={styles.null}></div>
            <div className={styles.containerSocial}>
                <div className={styles.contaimerMenu}>
                    <ul className={styles.menu}>
                        <li>
                            <Link className={styles.link} href={"#services"}>
                                {t("services")}
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href={"#about"}>
                                {t("about")}
                            </Link>
                        </li>
                        <li>
                            <Link className={styles.link} href={"#contact"}>
                                {t("contact")}
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.button}>
                    <Link href={"https://x.com/buckspay_"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                        <Image src={"/social/x.png"} alt="logo" width={25} height={25} />
                    </Link>
                    <Link href={"https://www.instagram.com/buckspay_"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                        <Image src={"/social/instagram.png"} alt="logo" width={25} height={25} />
                    </Link>
                    <Link href={"https://warpcast.com/buckspay"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                        <Image src={"/social/warpcast.png"} alt="logo" width={25} height={25} />
                    </Link>
                    <Link href={"https://t.me/buckspay"} className={styles.logo} target="_blank" rel="noopener noreferrer">
                        <Image src={"/social/telegram.png"} alt="logo" width={25} height={25} />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
