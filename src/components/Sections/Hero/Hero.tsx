import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";
import { CryptoDataProps } from "@/types";
import { staticData } from "@/utils/staticData";

const HeroSection: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoDataProps[]>([]);
  const filteredSymbols = ["AVAX", "ETH", "BTC", "MATIC", "LINK", "TRX"];

  const getCoinMarketCap = async () => {
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_STAGE == "dev"
          ? "http://localhost:3000"
          : "https://apiv1.buckspay.xyz";
      const response = await fetch(`${baseUrl}/coinmarketcap`);
      const result = await response.json();
      setCryptoData(result.data);
    } catch (error) {
      console.error("Error fetching CoinMarketCap data:", error);
    }
  };

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_STAGE === "dev") {
      setCryptoData(staticData);
    } else {
      getCoinMarketCap();
    }
  }, []);

  const filteredData = cryptoData.filter((crypto) =>
    filteredSymbols.includes(crypto.symbol)
  );
  const { t } = useTranslation(["landing"]);
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.background}>
        <div className={styles.circle} id={styles.circle1}></div>
        <div className={styles.circle} id={styles.circle2}></div>
        <div className={styles.circle} id={styles.circle3}></div>
      </div>
      <div className={styles.content}>
        <h1 className="fade-in">
          {" "}
          {t("heroSection.title")} <br /> {t("heroSection.start")}
        </h1>
        <div className={styles.content_main_table}>
          <div className={`${styles.paragraphContainer} fade-in`}>
            <span></span>
            <p>{t("heroSection.paragraph")}</p>
          </div>
          <div className={`${styles.buttonInfoContainer} fade-in`}>
            {/* <button className={styles.goApp}>{t("heroSection.goApp")}</button> */}
            <div className={styles.infoBox}>
              <table className={styles.cryptoTable}>
                <thead className={styles.contentHead}>
                  <tr>
                    <th>{t("heroSection.infoBox.name")}</th>
                    <th>{t("heroSection.infoBox.price")}</th>
                    <th>{t("heroSection.infoBox.volumeChange24h")}</th>
                  </tr>
                </thead>
                <tbody className={styles.contentBody}>
                  {filteredData.map((crypto) => (
                    <tr key={crypto.id}>
                      <td>
                        <div className={styles.cryptoInfo}>
                          <Image
                            src={`/icons/crypto/${crypto.symbol}.png`}
                            alt={crypto.symbol}
                            width={20}
                            height={20}
                          />
                          <span>
                            {crypto.symbol} {crypto.name}
                          </span>
                        </div>
                      </td>
                      <td>${crypto.quote.USD.price.toFixed(2)}</td>
                      <td
                        style={{
                          color:
                            crypto.quote.USD.volume_change_24h < 0
                              ? "red"
                              : "green",
                        }}
                      >
                        {crypto.quote.USD.volume_change_24h.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
