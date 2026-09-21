import Image from "next/image";
import Link from "next/link";
import styles from "./WorkCard.module.css";

export default function WorkCard({ project }) {
  return (
    <Link href={`/works/${project.slug}`} className={styles.card}>
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes="(max-width: 809px) 100vw, 50vw"
        style={{ objectFit: "cover", objectPosition: project.focalPoint || "50% 50%" }}
      />
      <div className={styles.scrim} />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
