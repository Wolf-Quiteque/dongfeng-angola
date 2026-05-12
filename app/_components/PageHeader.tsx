import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHeader({
  title,
  crumbs,
}: {
  title: string;
  crumbs: Crumb[];
}) {
  return (
    <section
      className="page-header"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="page-header__bg"
        style={{
          backgroundImage: `linear-gradient(rgba(17,17,17,0.7), rgba(17,17,17,0.7)), url(/assets/images/backgrounds/page-header-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="page-header__inner" style={{ color: "#fff", paddingTop: 60 }}>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 14,
              }}
            >
              {title}
            </h2>
            <ul
              className="thm-breadcrumb list-unstyled"
              style={{
                display: "flex",
                gap: 10,
                margin: 0,
                padding: 0,
                color: "#fff",
                listStyle: "none",
                fontSize: 15,
              }}
            >
              {crumbs.map((c, i) => (
                <li key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  {c.href ? (
                    <Link href={c.href} style={{ color: "#fff", opacity: 0.85 }}>
                      {c.label}
                    </Link>
                  ) : (
                    <span style={{ color: "#fff" }}>{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && (
                    <span style={{ opacity: 0.6 }}>/</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
