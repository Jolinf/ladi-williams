import Image from "next/image";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={styles.cta}>
      <div className={styles.iconWrap}>
        <Image
          src="/images/phone-icon.png"
          alt=""
          width={96}
          height={96}
          className={styles.icon}
        />
      </div>

      <h2 className={styles.heading}>
        <span className={styles.dim}>Book a call,</span> and let&apos;s
        create something memorable together.
      </h2>

      <a
        href="https://wa.me/2347035090062"
        target="_blank"
        rel="noopener noreferrer"
        className={`pillButton ${styles.button}`}
      >
        Book a Call
      </a>
    </section>
  );
}
