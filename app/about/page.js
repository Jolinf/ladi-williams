import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import Reveal from "@/components/Reveal";
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
        <Reveal as="h1" className={styles.headline}>
          <span className={styles.dim}>The Voice Behind the Story.</span>{" "}
          The Mind Behind the Markets.
        </Reveal>
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
            style={{ objectFit: "cover", objectPosition: "50% 0%" }}
          />
        </div>
      </section>

      <section className={styles.bio}>
        <div className={styles.bioGrid}>
          <span className={styles.sectionLabel}>About Me</span>
          <div className={styles.bioContent}>
            <h2 className={styles.bioHeading}>{aboutSubheading}</h2>
            <div className={styles.bioText}>
              {aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.bioImages}>
          <div className={styles.bioImageLarge}>
            <Image
              src="/images/about-gallery-1.jpeg"
              alt="Ladi Williams"
              fill
              sizes="(max-width: 809px) 100vw, 60vw"
              style={{ objectFit: "cover", objectPosition: "56% 41%" }}
            />
          </div>
          <div className={styles.bioImageSmall}>
            <Image
              src="/images/about-gallery-2.jpeg"
              alt="Ladi Williams"
              fill
              sizes="(max-width: 809px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      <section className={styles.experience}>
        <div className={styles.experienceInner}>
          <span className="sectionLabel">Work experiences</span>
          <div className={styles.experienceList}>
            {workExperience.map((job, index) => (
              <div
                key={job.role}
                className={
                  index === 0
                    ? `${styles.experienceRow} ${styles.experienceRowActive}`
                    : styles.experienceRow
                }
              >
                <h3 className={styles.experienceRole}>{job.role}</h3>
                <div className={styles.experienceMeta}>
                  <span className={styles.experienceCompany}>{job.company}</span>
                  <span className={styles.experienceYears}>{job.years}</span>
                </div>
              </div>
            ))}
          </div>
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
