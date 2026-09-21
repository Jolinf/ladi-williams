import Link from "next/link";
import styles from "./Footer.module.css";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const connect = [
  { href: "https://www.instagram.com/ladiwilliams/", label: "Instagram" },
  {
    href: "https://www.linkedin.com/in/ladi-williams-1ab00b37/",
    label: "Linkedin",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>
        <div className={styles.column}>
          <span className={styles.columnLabel}>Navigation</span>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </div>
        <div className={styles.column}>
          <span className={styles.columnLabel}>Connect</span>
          {connect.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <p>©{year} Ladi Williams. All rights reserved.</p>
        <p>Senior Presenter · Business Journalist · Channels Television</p>
      </div>
    </footer>
  );
}
