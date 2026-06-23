import Link from "next/link";
import HeroSlider from "./_components/HeroSlider";
import SlidingText from "./_components/SlidingText";
import CarCard from "./_components/CarCard";
import WhyChoose from "./_components/WhyChoose";
import IndustryStrip from "./_components/IndustryStrip";
import ProcessSteps from "./_components/ProcessSteps";
import Gallery from "./_components/Gallery";
import Faq from "./_components/Faq";
import VideoBanner from "./_components/VideoBanner";
import { getCarsContent, getContent } from "@/lib/data";
import { home as homeDefaults } from "@/lib/content/pages";

type HomeContent = typeof homeDefaults;

export default async function HomePage() {
  const [home, catalog] = await Promise.all([
    getContent("home") as Promise<HomeContent>,
    getCarsContent(),
  ]);
  const featured = catalog.cars.filter((car) => car.destaque);

  return (
    <>
      <HeroSlider slides={home.heroSlides} />
      <SlidingText words={home.slidingWords} />

      <section className="about-one" style={{ padding: "100px 0 60px" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                style={{
                  position: "relative",
                  borderRadius: 12,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
                }}
              >
                <img
                  src={home.about.image}
                  alt={home.about.imageAlt}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ paddingLeft: 0, marginTop: 40 }}>
                <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>
                  {home.about.eyebrow}
                </p>
                <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, lineHeight: 1.15, marginBottom: 22 }}>
                  {home.about.title} <span style={{ color: "#E50012" }}>{home.about.titleAccent}</span>
                </h2>
                {home.about.paragraphs.map((paragraph, i) => (
                  <p key={i} style={{ fontSize: 16, lineHeight: 1.7, marginBottom: i === home.about.paragraphs.length - 1 ? 30 : 18 }}>
                    {paragraph}
                  </p>
                ))}
                <Link href={home.about.ctaHref} className="thm-btn">
                  {home.about.ctaLabel} <span className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryStrip content={home.sectors} />

      <section className="car-listing-page-one" style={{ padding: "90px 0", background: "#fff" }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 50 }}>
            <p style={{ color: "#E50012", textTransform: "uppercase", fontWeight: 700, letterSpacing: 2 }}>
              {home.featured.eyebrow}
            </p>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, marginTop: 8 }}>
              {home.featured.title} <span style={{ color: "#E50012" }}>{home.featured.titleAccent}</span>
            </h2>
          </div>
          <div className="row">
            {featured.map((car, i) => (
              <div key={car.slug} className="col-xl-4 col-lg-4 col-md-6">
                <CarCard car={car} delay={100 + i * 100} />
              </div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 30 }}>
            <Link href={home.featured.ctaHref} className="thm-btn">
              {home.featured.ctaLabel} <span className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps content={home.process} />
      <VideoBanner />
      <WhyChoose content={home.whyChoose} />
      <Gallery content={home.gallery} />
      <Faq content={home.faq} />

      <section
        className="cta-one"
        style={{
          padding: "80px 0",
          background: "linear-gradient(135deg, rgba(229,0,18,0.95), rgba(150,0,12,0.95))",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                {home.finalCta.title}
              </h2>
              <p style={{ fontSize: 17, opacity: 0.95, margin: 0 }}>{home.finalCta.text}</p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link href={home.finalCta.ctaHref} className="thm-btn" style={{ backgroundColor: "#fff", color: "#E50012", marginTop: 24 }}>
                {home.finalCta.ctaLabel}
                <span className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
