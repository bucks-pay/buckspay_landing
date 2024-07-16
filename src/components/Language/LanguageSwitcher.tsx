"use client";
import React, { useState } from "react";
import i18n from "../../i18n";
import styles from "./languageSwitcher.module.css";
import Image from "next/image";

const LanguageSwitcher = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("es");
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLanguage: string) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    setIsOpen(false); // Close the dropdown
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div onClick={toggleDropdown} className={styles.selected}>
        {selectedLanguage === "en" ? (
          <>
            <Image src={"/icons/usa.png"} alt="usa" width={30} height={16} />
            <span className={styles.span}>English</span>
          </>
        ) : (
          <>
            <Image
              src={"/icons/colombia.png"}
              alt="colombia"
              width={30}
              height={16}
            />
            <span className={styles.span}>Español</span>
          </>
        )}
      </div>
      {isOpen && (
        <ul className={styles.dropdown}>
          <li
            onClick={() => handleLanguageChange("en")}
            className={styles.option}
          >
            <Image src={"/icons/usa.png"} alt="usa" width={30} height={16} />
            <span>English</span>
          </li>
          <li
            onClick={() => handleLanguageChange("es")}
            className={styles.option}
          >
            <Image
              src={"/icons/colombia.png"}
              alt="colombia"
              width={30}
              height={16}
            />
            <span>Español</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
