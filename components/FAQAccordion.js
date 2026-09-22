"use client";

import { useState } from "react";
import styles from "./FAQAccordion.module.css";

export default function FAQAccordion({ heading, highlight, buttonLabel, items }) {
  const [openSet, setOpenSet] = useState(() => new Set([0]));

  let headingContent = heading;
  if (highlight && heading.includes(highlight)) {
    const idx = heading.indexOf(highlight);
    headingContent = (
      <>
        {heading.slice(0, idx)}
        <span className={styles.headingStrong}>{highlight}</span>
        {heading.slice(idx + highlight.length)}
      </>
    );
  }

  function toggle(index) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <section className={styles.section}>
      <div className={styles.headingRow}>
        <span className="sectionLabel">FAQs</span>
        <h2 className={styles.heading}>{headingContent}</h2>
        <a
          href="mailto:ladiwilliamsmedia@gmail.com"
          className={`pillButton ${styles.emailButton}`}
        >
          {buttonLabel}
        </a>
      </div>

      <div className={styles.panel}>
        <span className={styles.helperBadge}>I&apos;m here to help you</span>

        <div className={styles.list}>
          {items.map((item, index) => {
            const isOpen = openSet.has(index);
            return (
              <div key={item.question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  onClick={() => toggle(index)}
                >
                  <span>{item.question}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}>
                    +
                  </span>
                </button>
                <div
                  className={`${styles.answerWrap} ${
                    isOpen ? styles.answerWrapOpen : ""
                  }`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
