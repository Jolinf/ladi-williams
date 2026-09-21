import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WorkCard from "@/components/WorkCard";
import { projects, videos, videosHeading } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Work | Ladi Williams",
  description:
    "Broadcast coverage, panel moderation, and corporate hosting work by Ladi Williams.",
};

export default function WorksPage() {
  return (
    <>
      <Header />

      <section className={styles.intro}>
        <h1 className={styles.heading}>
          A track record of impactful journalism, memorable events, and
          trusted broadcasting.
        </h1>
      </section>

      <section className={styles.grid}>
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </section>

      <section id="videos" className={styles.videos}>
        <h2 className={styles.videosHeading}>{videosHeading}</h2>
        <div className={styles.videoGrid}>
          {videos.map((videoId) => (
            <div key={videoId} className={styles.videoWrap}>
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`Ladi Williams broadcast clip ${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
