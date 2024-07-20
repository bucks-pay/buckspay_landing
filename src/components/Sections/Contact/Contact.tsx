import Image from "next/image";
import styles from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";

interface IContactSection {
  isLoading: boolean;
  setIsLoading: any;
  setTextLoading: any;
}

const ContactSection: React.FC<IContactSection> = ({
  isLoading,
  setIsLoading,
  setTextLoading,
}) => {
  const { t } = useTranslation(["landing"]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessages, setModalMessages] = useState<string[]>([]);
  const formEmpty = {
    fullName: "",
    phone: "",
    email: "",
    message: "",
    terms: false,
  };
  const [form, setForm] = useState(formEmpty);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTextLoading("Enviando tus datos para contacto");
    setIsLoading(true);
    const data = {
      name: form.fullName,
      phone: form.phone,
      email: form.email,
      message: form.message,
    };
    try {
      const baseUrl =
        process.env.NEXT_PUBLIC_STAGE == "dev"
          ? "http://localhost:3000"
          : "https://apiv1.buckspay.xyz";
      console.log({ baseUrl });
      const result = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (result.status === 201) {
        setIsSuccess(true);
        setModalTitle(t("contactSection.modal.successTitle"));
        setModalMessages([
          t("contactSection.modal.successMessage1"),
          t("contactSection.modal.successMessage2"),
        ]);
      } else {
        setIsSuccess(false);
        setModalTitle(t("contactSection.modal.userExistsTitle"));
        setModalMessages([
          t("contactSection.modal.userExistsMessage1"),
          t("contactSection.modal.userExistsMessage2"),
        ]);
      }
      setIsModalOpen(true);
      setForm(formEmpty);
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
      setModalTitle(t("contactSection.modal.errorTitle"));
      setModalMessages([
        t("contactSection.modal.errorMessage1"),
        t("contactSection.modal.errorMessage2"),
      ]);
    } finally {
      setIsLoading(false);
      setIsFormValid(false);
    }
  };

  const handleInputChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value, type } = e.target;
      const fieldValue =
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: fieldValue,
      }));
    },
    []
  );

  useEffect(() => {
    const isValid =
      form.fullName !== "" &&
      form.phone !== "" &&
      form.email !== "" &&
      form.message !== "" &&
      form.terms !== false;
    setIsFormValid(isValid);
  }, [form.email, form.fullName, form.message, form.phone, form.terms]);

  return (
    <>
      <section id="contact" className={styles.contactSection}>
        <h2>{t("contactSection.title")}</h2>
        <p>
          {t("contactSection.titleFirst")}
          <span className={styles.liquidator}>
            {" "}
            {t("contactSection.liquidator")}{" "}
          </span>
          {t("contactSection.or")}{" "}
          <span className={styles.user}>{t("contactSection.user")} </span>
          {t("contactSection.titleSecond")}
        </p>
        <form
          onSubmit={handleSubmit}
          method="post"
          className={styles.contactForm}
        >
          <div className={styles.leftPanel}>
            <div className={styles.iconContainer}>
              <Image
                src="/contact-us.png"
                alt="ContactUs"
                width={300}
                height={300}
              />
            </div>
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.formHeader}></div>
            <div className={styles.formGroup}>
              <label htmlFor="fullName">
                {t("contactSection.form.fullName")}
              </label>
              <input
                type="text"
                id="fullName"
                required
                name="fullName"
                placeholder={t("contactSection.form.fullNamePlaceholder")}
                onChange={handleInputChange}
                value={form.fullName}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">{t("contactSection.form.phone")}</label>
              <input
                type="text"
                id="phone"
                required
                name="phone"
                placeholder={t("contactSection.form.phonePlaceholder")}
                onChange={handleInputChange}
                value={form.phone}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">{t("contactSection.form.email")}</label>
              <input
                type="email"
                id="email"
                required
                name="email"
                placeholder={t("contactSection.form.emailPlaceholder")}
                onChange={handleInputChange}
                value={form.email}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">
                {t("contactSection.form.message")}
              </label>
              <textarea
                rows={5}
                id="message"
                required
                name="message"
                placeholder={t("contactSection.form.messagePlaceholder")}
                onChange={handleInputChange}
                value={form.message}
              />
            </div>
            <div className={styles.term}>
              <input
                type="checkbox"
                id="terms"
                required
                name="terms"
                onChange={handleInputChange}
                checked={form.terms}
              />
              <label htmlFor="terms">
                {t("contactSection.form.agree")}
                <Link href="/" className={styles.terms}>
                  {" "}
                  {t("contactSection.form.terms")}
                </Link>
              </label>
            </div>
            <div className={styles.formGroup}>
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={styles.submitButton}
              >
                {t("contactSection.form.submit")}
              </button>
            </div>
          </div>
        </form>
      </section>
      {isModalOpen && (
        <Modal
          title={modalTitle}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div
            className={`${styles.contentModal} ${isSuccess ? styles.modalSuccess : styles.modalError
              }`}
          >
            {modalMessages.map((message, index) => (
              <p className={styles.message} key={index}>
                {message}
              </p>
            ))}
            <div
              className={styles.modalClose}
              onClick={() => setIsModalOpen(false)}
            >
              <span>{t("contactSection.modal.accept")}</span>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ContactSection;
