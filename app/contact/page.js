import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact | Ladi Williams",
  description:
    "Get in touch with Ladi Williams for bookings, moderation, and media training enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />

      <section className={styles.intro}>
        <h1 className={styles.headline}>
          Ready to deliver excellence. Reach out below.
        </h1>
      </section>

      <section className={styles.grid}>
        <ContactForm />

        <div className={styles.infoCard}>
          <div className={styles.infoIcon} aria-hidden="true" />
          <p className={styles.infoText}>
            Enquiries are responded to within 48 hours. For urgent bookings,
            please indicate in your message.
          </p>
          <span className={styles.infoBadge}>approximately 15 minutes</span>
          <a
            href="https://wa.me/2347035090062"
            target="_blank"
            rel="noopener noreferrer"
            className={`pillButtonOutlineDark ${styles.callButton}`}
          >
            Book a Call
          </a>
        </div>
      </section>

      <div className="darkFooterWrap">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
