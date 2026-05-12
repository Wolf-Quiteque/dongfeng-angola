import Link from "next/link";

export default function VideoBanner() {
  return (
    <section
      className="video-one"
      style={{
        position: "relative",
        minHeight: "min(85vh, 780px)",
        backgroundImage:
          "linear-gradient(to right, rgba(17,17,17,0.78) 0%, rgba(17,17,17,0.45) 45%, rgba(17,17,17,0.15) 75%, transparent 100%), url(/img/cars/dfac-light-truck-01.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        padding: "120px 0",
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <p
              style={{
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                letterSpacing: 3,
                marginBottom: 12,
                opacity: 0.85,
              }}
            >
              Dongfeng — Veículos comerciais 2026
            </p>
            <h2
              style={{
                fontSize: "clamp(30px, 5vw, 52px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 18,
                lineHeight: 1.1,
              }}
            >
              Feitos para <span style={{ color: "#fff" }}>trabalhar</span>.
              <br />
              Pensados para <span style={{ color: "#ffd1d5" }}>durar</span>.
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.7,
                opacity: 0.95,
                maxWidth: 640,
                marginBottom: 28,
              }}
            >
              Mais de 50 anos de engenharia chinesa, ajustada às exigências do mercado
              africano — mecânica simples, peças abundantes e custo total de
              propriedade dos mais baixos do segmento.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/modelos" className="thm-btn">
                Explorar Linha 2026
                <span className="fas fa-arrow-right" />
              </Link>
              <Link
                href="/agendar-visita"
                className="thm-btn"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#fff",
                }}
              >
                Marcar Test Drive
              </Link>
            </div>
          </div>
          <div className="col-lg-4 text-lg-center">
            <a
              href="https://www.youtube.com/results?search_query=dongfeng+commercial"
              target="_blank"
              rel="noopener noreferrer"
              className="video-popup"
              aria-label="Ver vídeo institucional Dongfeng"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "#fff",
                color: "#E50012",
                fontSize: 36,
                marginTop: 30,
                position: "relative",
                textDecoration: "none",
              }}
            >
              <span className="fas fa-play" style={{ marginLeft: 6 }} />
            </a>
            <p
              style={{
                marginTop: 14,
                fontSize: 14,
                opacity: 0.9,
                textTransform: "uppercase",
                letterSpacing: 2,
              }}
            >
              Ver vídeo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
