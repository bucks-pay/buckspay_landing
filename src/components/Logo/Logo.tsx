"use client"
import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "./Logo.module.css";
const Logo = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('ThemeToggle must be used within a ThemeContextProvider');
    }

    const { theme } = context;

    const icon = theme === "dark"
        ? <div>
            <Image className={styles.fullLogo} src="/logos/buckspay-text-light.png" alt="buckspay-text-light.png" width={190} height={60} />
            <Image className={styles.icon} src="/logos/icon-white.png" alt="icon-dark.png" width={60} height={60} />
        </div>
        : <div>
            <Image className={styles.fullLogo} src="/logos/buckspay-text-dark.png" alt="buckspay-text-dark.png" width={190} height={60} />
            <Image className={styles.icon} src="/logos/icon-dark.png" alt="icon-dark.png" width={60} height={60} />
        </div>

    return icon;
};

export default Logo;