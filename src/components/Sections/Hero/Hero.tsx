import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { CryptoDataProps } from "@/types";
import { staticData } from "@/utils/staticData";

const HeroSection: React.FC = () => {
  const { t } = useTranslation(["landing"]);
  const [cryptoData, setCryptoData] = useState<CryptoDataProps[]>([]);

  const getCoinMarketCap = async () => {
    let dataToShow;
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_STAGE == "dev"
          ? "http://localhost:3000"
          : "https://apiv1.buckspay.xyz";
      const response = await fetch(`${baseUrl}/coinmarketcap`);
      const result = await response.json();
      setCryptoData(result);
    } catch (error) {
      console.error("Error fetching CoinMarketCap data:", error);
      dataToShow = staticData;
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STAGE === "dev") {
      setCryptoData(staticData);
    } else {
    }
    getCoinMarketCap();
  }, []);

  const formatPrice = (price: number) => {
    return price?.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <h1 className="fade-in">
          {t("heroSection.title")} <br /> {t("heroSection.start")}{" "}
          <span className={styles.highlight}>{t("heroSection.recolor")}</span>
        </h1>
        <div className={styles.content_main_table}>
          <div className={`${styles.paragraphContainer} fade-in`}>
            <span></span>
            <p>{t("heroSection.paragraph")}</p>
          </div>
        </div>
      </div>
      <div className={styles.vectors}>
        <img src="/Vector.png" alt="Vector 1" className={styles.vector1} />
        <img src="/Vector 2.png" alt="Vector 2" className={styles.vector2} />
      </div>
    </section>
  );
};

export default HeroSection;
