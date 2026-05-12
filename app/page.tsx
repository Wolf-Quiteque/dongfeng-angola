import Link from "next/link";
import HeroSlider from "./_components/HeroSlider";
import SlidingText from "./_components/SlidingText";
import CarCard from "./_components/CarCard";
import WhyChoose from "./_components/WhyChoose";
import IndustryStrip from "./_components/IndustryStrip";
import ProcessSteps from "./_components/ProcessSteps";
import Testimonials from "./_components/Testimonials";
import Gallery from "./_components/Gallery";
import Faq from "./_components/Faq";
import VideoBanner from "./_components/VideoBanner";
import { getFeaturedCars } from "./_data/cars";

export default function HomePage() {
  const featured = getFeaturedCars();

  return (
    <>
      <HeroSlider />
      <SlidingText />

      {/* About brief */}
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
                  src="/img/dealership-signage.jpeg"
                  alt="Concessionária Dongfeng Angola"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div style={{ paddingLeft: 0, marginTop: 40 }}>
                <p
                  style={{
                    color: "#E50012",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    letterSpacing: 2,
                    marginBottom: 12,
                  }}
                >
                  Sobre Nós
                </p>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 44px)",
                    fontWeight: 800,
                    lineHeight: 1.15,
                    marginBottom: 22,
                  }}
                >
                  Representante oficial Dongfeng em{" "}
                  <span style={{ color: "#E50012" }}>Angola</span>
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 18 }}>
                  Somos a concessionária oficial Dongfeng em Angola, oferecendo a
                  gama completa de veículos comerciais da marca chinesa. Mini
                  caminhões, caminhões ligeiros, soluções frigoríficas e veículos
                  especiais — com apoio técnico, peças genuínas e garantia de
                  fábrica.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.7, marginBottom: 30 }}>
                  Trabalhamos para empresas de logística, distribuição alimentar,
                  construção, agricultura e serviços. Cada veículo é entregue com
                  documentação completa e pronto para o trabalho intensivo.
                </p>
                <Link href="/sobre" className="thm-btn">
                  Saber Mais <span className="fas fa-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <IndustryStrip />

      {/* Featured models */}
      <section
        className="car-listing-page-one"
        style={{ padding: "90px 0", background: "#fff" }}
      >
        <div className="container">
          <div className="text-center" style={{ marginBottom: 50 }}>
            <p
              style={{
                color: "#E50012",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 2,
              }}
            >
              Modelos em Destaque
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                marginTop: 8,
              }}
            >
              A linha completa <span style={{ color: "#E50012" }}>Dongfeng</span>
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
            <Link href="/modelos" className="thm-btn">
              Ver Todos os Modelos <span className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>

      <ProcessSteps />
      <VideoBanner />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <Faq />

      {/* Final CTA */}
      <section
        className="cta-one"
        style={{
          padding: "80px 0",
          background:
            "linear-gradient(135deg, rgba(229,0,18,0.95), rgba(150,0,12,0.95))",
          color: "#fff",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 8,
                }}
              >
                Pronto para conhecer o seu próximo Dongfeng?
              </h2>
              <p style={{ fontSize: 17, opacity: 0.95, margin: 0 }}>
                Marque uma visita à nossa concessionária em Luanda e teste o
                veículo que se adapta ao seu negócio.
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link
                href="/agendar-visita"
                className="thm-btn"
                style={{
                  backgroundColor: "#fff",
                  color: "#E50012",
                  marginTop: 24,
                }}
              >
                Marcar Visita Agora
                <span className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
