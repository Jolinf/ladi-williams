"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

const honeypotFields = [
  "website",
  "company",
  "message",
  "subject",
  "title",
  "description",
  "feedback",
  "notes",
  "details",
  "remarks",
  "comments",
];

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Honeypot check: if any decoy field was filled in, silently
    // pretend success without sending anything.
    const isBot = honeypotFields.some((name) => data[name]);
    if (isBot) {
      setStatus("sent");
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.Name,
          email: data.Email,
          message: data.Message,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <label className={styles.label} htmlFor="Name">
        Name
      </label>
      <input
        className={styles.input}
        type="text"
        id="Name"
        name="Name"
        placeholder="Jane Smith"
        autoComplete="name"
      />

      <label className={styles.label} htmlFor="Email">
        Email
      </label>
      <input
        className={styles.input}
        type="email"
        id="Email"
        name="Email"
        placeholder="yourname@gmail.com"
        autoComplete="email"
      />

      <label className={styles.label} htmlFor="Message">
        Your Message
      </label>
      <textarea
        className={styles.textarea}
        id="Message"
        name="Message"
        placeholder="Enter your message"
        rows={5}
      />

      {/* Honeypot fields: hidden from real visitors, only a bot filling
          the whole form would populate these. Kept out of tab order and
          off-screen rather than display:none, which some bots skip. */}
      {honeypotFields.map((name) => (
        <input
          key={name}
          type="text"
          name={name}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className={styles.honeypot}
        />
      ))}

      <button type="submit" className={styles.submit} disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {status === "sent" && (
        <p className={styles.status}>Thanks — your message is on its way.</p>
      )}
      {status === "error" && (
        <p className={styles.status}>
          Something went wrong. Please try again or email directly.
        </p>
      )}
    </form>
  );
}
