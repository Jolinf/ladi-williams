import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  testimonials,
  aboutHeadline,
  aboutSubheading,
  aboutBio,
  workExperience,
  faqsAbout,
} from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "About | Ladi Williams",
  description:
    "TV presenter and business journalist Oladipo Charles Williams — biography and career highlights.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <section className={styles.intro}>
        <h1 className={styles.headline}>
          <span className={styles.dim}>The Voice Behind the Story.</span>{" "}
          The Mind Behind the Markets.
        </h1>
      </section>

      <section className={styles.showcase}>
        <div className={styles.testimonialColumn}>
          <div className={styles.testimonialMask}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialHead}>
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={36}
                    height={36}
                    className={styles.avatar}
                  />
                  <span className={styles.testimonialName}>{t.name}</span>
                </div>
                <p className={styles.testimonialQuote}>&quot;{t.quote}&quot;</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.portraitColumn}>
          <Image
            src="/images/about-portrait.jpeg"
            alt="Ladi Williams"
            fill
            sizes="(max-width: 809px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className={styles.bio}>
        <span className="sectionLabel">About Me</span>
        <h2 className={styles.bioHeading}>{aboutSubheading}</h2>
        <div className={styles.bioText}>
          {aboutBio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className={styles.experience}>
        <span className="sectionLabel">Work experiences</span>
        <div className={styles.experienceList}>
          {workExperience.map((job) => (
            <div key={job.role} className={styles.experienceRow}>
              <h3 className={styles.experienceRole}>{job.role}</h3>
              <span className={styles.experienceCompany}>{job.company}</span>
              <span className={styles.experienceYears}>{job.years}</span>
            </div>
          ))}
        </div>
      </section>

      <FAQAccordion
        heading={faqsAbout.heading}
        buttonLabel={faqsAbout.buttonLabel}
        items={faqsAbout.items}
      />

      <div className="darkFooterWrap">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
