/*
 * TESTCO HeroSection — Neo-Minimalismo Orgánico
 * Hero asimétrico: texto a la izquierda, imagen flotante a la derecha
 * Fondo: imagen generada con overlay navy oscuro
 * Tipografía: Sora 800 para título, Nunito Sans para subtítulo
 */

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663547303603/GfrX6UiizCZhN9PnHcLu3w/testco-hero-KJQWaqCTcJZECDeaghskYM.webp";

const highlights = [
  "Diseño web profesional",
  "Apps a medida para tu negocio",
  "Electrónica personalizada",
];

export default function HeroSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.07 255 / 0.88) 0%, oklch(0.15 0.06 255 / 0.75) 60%, oklch(0.22 0.07 255 / 0.5) 100%)",
        }}
      />

      {/* Decorative circle */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full opacity-10 translate-x-1/3"
        style={{ background: "oklch(0.68 0.16 52)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-64 h-64 rounded-full opacity-10 -translate-x-1/3"
        style={{ background: "oklch(0.68 0.16 52)" }}
      />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Label */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "0.1s",
            }}
          >
            <span
              className="inline-block font-sans font-semibold text-xs tracking-widest uppercase px-3 py-1.5 rounded-sm mb-6"
              style={{
                backgroundColor: "oklch(0.68 0.16 52 / 0.2)",
                color: "oklch(0.85 0.12 52)",
                border: "1px solid oklch(0.68 0.16 52 / 0.4)",
              }}
            >
              Tecnología para PyMEs
            </span>
          </div>

          {/* Heading */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "0.25s",
            }}
          >
            <h1
              className="font-sans font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
              style={{ color: "white" }}
            >
              Tu negocio
              <br />
              <span style={{ color: "oklch(0.68 0.16 52)" }}>merece</span> estar
              <br />
              en el mundo digital
            </h1>
          </div>

          {/* Subheading */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "0.4s",
            }}
          >
            <p
              className="font-sans text-lg md:text-xl leading-relaxed mb-8 max-w-xl"
              style={{ color: "oklch(0.88 0.01 85 / 0.9)" }}
            >
              En Testco transformamos pequeñas y medianas empresas con soluciones digitales
              profesionales: sitios web, aplicaciones y electrónica a medida. Sin tecnicismos,
              con resultados reales.
            </p>
          </div>

          {/* Highlights */}
          <div
            className="flex flex-col sm:flex-row gap-3 mb-10 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "0.55s",
            }}
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: "oklch(0.68 0.16 52)" }}
                />
                <span
                  className="font-sans text-sm"
                  style={{ color: "oklch(0.88 0.01 85 / 0.85)" }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transitionDelay: "0.7s",
            }}
          >
            <button
              onClick={() => handleScrollTo("#contacto")}
              className="btn-accent flex items-center gap-2 text-base px-8 py-4"
            >
              Solicitar Cotización Gratis
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo("#servicios")}
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm font-sans font-semibold text-base tracking-wide transition-all duration-300 border-2"
              style={{
                borderColor: "white",
                color: "white",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "white";
                (e.currentTarget as HTMLButtonElement).style.color = "oklch(0.22 0.07 255)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "white";
              }}
            >
              Ver Servicios
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700"
        style={{ opacity: visible ? 0.7 : 0, transitionDelay: "1s" }}
      >
        <span className="font-sans text-xs tracking-widest uppercase" style={{ color: "white" }}>
          Explorar
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, white, transparent)" }}
        />
      </div>
    </section>
  );
}
