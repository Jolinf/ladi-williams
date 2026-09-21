import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WorkCard from "@/components/WorkCard";
import { projects } from "@/lib/data";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} | Ladi Williams`,
    description: project.overview,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <>
      <section className={styles.hero}>
        <Image
          src={project.cover}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />

        <div className={styles.panel}>
          <div className={styles.panelHeader}>
            <h1 className={styles.title}>{project.title}</h1>
            <Link
              href="/works"
              className={styles.close}
              aria-label="Close and return to works"
            >
              ×
            </Link>
          </div>

          <div className={styles.meta}>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Overview</span>
              <p className={styles.metaValue}>{project.overview}</p>
            </div>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Categories</span>
              <p className={styles.metaValue}>
                {project.categories.join(", ")}
              </p>
            </div>
            <div className={styles.metaCol}>
              <span className={styles.metaLabel}>Date</span>
              <p className={styles.metaValue}>{project.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.gallery}>
        {project.gallery.map((src) => (
          <div key={src} className={styles.galleryImage}>
            <Image
              src={src}
              alt={project.title}
              fill
              sizes="(max-width: 809px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </section>

      <section className={styles.related}>
        <span className="sectionLabel">More works</span>
        <div className={styles.relatedGrid}>
          {related.map((item) => (
            <WorkCard key={item.slug} project={item} />
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
