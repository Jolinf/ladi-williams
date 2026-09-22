import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
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
        <Reveal as="h1" className={styles.headline}>
          Ready to deliver excellence. Reach out below.
        </Reveal>
      </section>

      <Reveal as="section" className={styles.grid} delay={100}>
        <ContactForm />

        <div className={styles.infoCard}>
          <div className={styles.infoIcon}>
            <Image
              src="/images/contact-avatar.jpeg"
              alt="Book a call with Ladi Williams"
              fill
              sizes="80px"
              style={{ objectFit: "cover" }}
            />
          </div>
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
      </Reveal>

      <div className="darkFooterWrap">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
