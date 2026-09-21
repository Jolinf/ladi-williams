import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import WorkCard from "@/components/WorkCard";
import Reveal from "@/components/Reveal";
import {
  services,
  processSteps,
  projects,
  faqsHome,
  heroRoles,
  heroHeading,
  servicesHeading,
  processHeading,
} from "@/lib/data";
import styles from "./page.module.css";

const serviceIcons = [
  <svg key="mic" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="2" width="6" height="12" rx="3" fill="currentColor" />
    <path
      d="M5 11a7 7 0 0 0 14 0M12 18v4"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>,
  <svg key="pilcrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 3h7M10.5 3a4.5 4.5 0 0 0 0 9H12M15 3v18M9 12v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>,
  <svg key="podium" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19h16M6 19V9l6-3 6 3v10M6 19v-6h12v6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>,
];

const bookIcon = (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 17 17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true">
          <Image
            src="/images/glow-blur.png"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <Reveal as="p" className={styles.heroName}>
          Ladi Williams
        </Reveal>

        <Reveal
          className={styles.heroImageWrap}
          hiddenStyle={{ opacity: 0.2, transform: "scale(1.08) translateY(40px)" }}
          visibleStyle={{ opacity: 1, transform: "scale(1) translateY(0)" }}
          duration={900}
        >
          <Image
            src="/images/hero-portrait.png"
            alt="Ladi Williams"
            fill
            priority
            sizes="120vw"
            style={{ objectFit: "contain" }}
          />
        </Reveal>

        <Reveal className={styles.heroRoles} delay={150}>
          {heroRoles.map((role) => (
            <span key={role}>{role}</span>
          ))}
        </Reveal>
        <Reveal as="h1" className={styles.heroHeading} delay={250}>
          {heroHeading}
        </Reveal>
        <Reveal className={styles.heroActions} delay={350}>
          <Link href="/about" className="pillButton">
            Know Ladi
          </Link>
          <Link href="/works#videos" className="pillButton">
            Watch Showreel
          </Link>
        </Reveal>
      </section>

      <section className={styles.works}>
        <Reveal className={styles.sectionHead}>
          <span className="sectionLabel">Featured works</span>
          <Link href="/works" className={styles.viewAll}>
            All Works
          </Link>
        </Reveal>
        <div className={styles.worksGrid}>
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 100}>
              <WorkCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.services}>
        <div className={styles.servicesHeader}>
          <Reveal as="span" className="sectionLabel">
            Services
          </Reveal>
          <Reveal as="h2" className={styles.servicesHeading} delay={100}>
            {servicesHeading}
          </Reveal>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => {
            const accentClass =
              service.accent === "yellow"
                ? styles.accentYellow
                : service.accent === "green"
                ? styles.accentGreen
                : styles.accentPurple;
            return (
              <Reveal
                key={service.title}
                className={`${styles.serviceCard} ${
                  index === 1 ? styles.serviceCardDark : ""
                }`}
                delay={index * 120}
              >
                <Link href="/contact" className={styles.serviceCardHeader}>
                  <span className={styles.serviceTitleFlip}>
                    <span className={styles.serviceTitleDefault}>
                      {service.title}
                    </span>
                    <span className={styles.serviceTitleHover}>Book Me</span>
                  </span>
                  <span
                    className={`${styles.serviceIconBadge} ${
                      index === 1 ? "" : accentClass
                    }`}
                  >
                    <span className={styles.serviceIconDefault}>
                      {serviceIcons[index]}
                    </span>
                    <span className={styles.serviceIconHover}>{bookIcon}</span>
                  </span>
                </Link>
                <div className={styles.serviceCardBody}>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <div className={styles.serviceTags}>
                    {service.tags.map((tag) => (
                      <span key={tag} className={styles.serviceTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className={styles.process}>
        <div className={styles.processInner}>
          <Reveal as="span" className={styles.processLabel}>
            How it works
          </Reveal>
          <Reveal as="h2" className={styles.processHeading} delay={100}>
            {processHeading}
          </Reveal>
          <div className={styles.processList}>
            {processSteps.map((step, index) => (
              <Reveal
                key={step.number}
                className={styles.processStep}
                delay={index * 120}
              >
                <span className={styles.processNumber}>{step.number}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDescription}>
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <FAQAccordion
          heading={faqsHome.heading}
          highlight="working with Ladi Williams"
          buttonLabel={faqsHome.buttonLabel}
          items={faqsHome.items}
        />
      </Reveal>

      <div className={styles.darkFooterWrap}>
        <Reveal>
          <CTASection />
        </Reveal>
        <Footer />
      </div>
    </>
  );
}
