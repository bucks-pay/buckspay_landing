"use client";

import { useTranslation } from "react-i18next";
import "@/i18n";
import styles from "./privacy.module.css";

const SUPPORT_EMAIL = "support@buckspay.xyz";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation(["privacy"]);

  const introParagraphs = t("intro", { returnObjects: true }) as string[];
  const accountItems = t("dataCollected.account.items", {
    returnObjects: true,
  }) as string[];
  const financialItems = t("dataCollected.financial.items", {
    returnObjects: true,
  }) as string[];
  const permissionItems = t("dataCollected.permissions.items", {
    returnObjects: true,
  }) as string[];
  const deviceItems = t("dataCollected.device.items", {
    returnObjects: true,
  }) as string[];
  const communicationsItems = t("dataCollected.communications.items", {
    returnObjects: true,
  }) as string[];
  const purposeItems = t("purposes.items", {
    returnObjects: true,
  }) as string[];
  const legalBaseItems = t("legalBases.items", {
    returnObjects: true,
  }) as string[];
  const providerItems = t("sharing.providers", {
    returnObjects: true,
  }) as string[];
  const otherSharingItems = t("sharing.others", {
    returnObjects: true,
  }) as string[];
  const securityItems = t("security.items", {
    returnObjects: true,
  }) as string[];
  const rightsItems = t("rights.items", {
    returnObjects: true,
  }) as string[];

  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.meta}>
          <strong>{t("lastUpdatedLabel")}:</strong> {t("lastUpdatedValue")}
          <br />
          <strong>{t("effectiveDateLabel")}:</strong> {t("effectiveDateValue")}
        </p>
      </header>

      <section className={styles.section}>
        {introParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section className={styles.section}>
        <h2>{t("whoWeAre.title")}</h2>
        <p>
          {t("whoWeAre.bodyBefore")}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          {t("whoWeAre.bodyAfter")}
        </p>
      </section>

      <section className={styles.section}>
        <h2>{t("dataCollected.title")}</h2>
        <p>{t("dataCollected.intro")}</p>

        <h3>{t("dataCollected.account.title")}</h3>
        <ul>
          {accountItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t("dataCollected.financial.title")}</h3>
        <ul>
          {financialItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t("dataCollected.permissions.title")}</h3>
        <p>{t("dataCollected.permissions.intro")}</p>
        <ul>
          {permissionItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t("dataCollected.device.title")}</h3>
        <ul>
          {deviceItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>{t("dataCollected.communications.title")}</h3>
        <ul>
          {communicationsItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("purposes.title")}</h2>
        <ul>
          {purposeItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("legalBases.title")}</h2>
        <p>{t("legalBases.intro")}</p>
        <ul>
          {legalBaseItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("sharing.title")}</h2>
        <p>{t("sharing.intro")}</p>
        <ul>
          <li>
            {t("sharing.providersTitle")}
            <ul>
              {providerItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </li>
          {otherSharingItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2>{t("transfers.title")}</h2>
        <p>{t("transfers.body")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("retention.title")}</h2>
        <p>{t("retention.body1")}</p>
        <p>{t("retention.body2")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("security.title")}</h2>
        <ul>
          {securityItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t("security.footer")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("rights.title")}</h2>
        <p>{t("rights.intro")}</p>
        <ul>
          {rightsItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>
          {t("rights.footerBefore")}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          {t("rights.footerAfter")}
        </p>
      </section>

      <section className={styles.section}>
        <h2>{t("minors.title")}</h2>
        <p>{t("minors.body")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("cookies.title")}</h2>
        <p>{t("cookies.body")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("changes.title")}</h2>
        <p>{t("changes.body")}</p>
      </section>

      <section className={styles.section}>
        <h2>{t("contact.title")}</h2>
        <p>{t("contact.intro")}</p>
        <ul>
          <li>
            {t("contact.supportLabel")}:{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </li>
          <li>
            {t("contact.webLabel")}:{" "}
            <a href="https://buckspay.xyz">buckspay.xyz</a>
          </li>
        </ul>
      </section>
    </article>
  );
}
