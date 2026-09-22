import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import WorkCard from "@/components/WorkCard";
import Reveal from "@/components/Reveal";
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
        <Reveal as="h1" className={styles.heading}>
          A track record of impactful journalism, memorable events,<span className={styles.dim}>and
          trusted broadcasting.</span> 
        </Reveal>
      </section>

      <Reveal as="section" className={styles.grid} delay={100}>
        {projects.map((project) => (
          <WorkCard key={project.slug} project={project} />
        ))}
      </Reveal>

      <section id="videos" className={styles.videos}>
        <Reveal as="h2" className={styles.videosHeading}>Watch Ladi in action. From the anchor desk to the main stage,<span className={styles.dim}> every appearance tells a story</span> </Reveal>
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

      <div className="darkFooterWrap">
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
