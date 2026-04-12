/*
 * TESTCO CTABanner — Neo-Minimalismo Orgánico
 * Banner de llamada a la acción entre secciones
 * Fondo: Amber con texto navy
 */

import { ArrowRight, Sparkles } from "lucide-react";

export default function CTABanner() {
  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "oklch(0.68 0.16 52)" }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-20"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      />
      <div
        className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-15"
        style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
      />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <Sparkles className="w-8 h-8 flex-shrink-0 mt-1" style={{ color: "oklch(0.22 0.07 255 / 0.6)" }} />
            <div>
              <h3
                className="font-sans font-extrabold text-2xl md:text-3xl mb-2"
                style={{ color: "oklch(0.22 0.07 255)" }}
              >
                ¿Tu negocio no aparece en Google?
              </h3>
              <p
                className="font-sans text-base"
                style={{ color: "oklch(0.22 0.07 255 / 0.8)" }}
              >
                El 97% de los consumidores busca productos y servicios en internet antes de comprar.
                No pierdas más clientes.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <button
              onClick={() => handleScrollTo("#contacto")}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-sm font-sans font-bold text-base tracking-wide transition-all duration-300"
              style={{
                backgroundColor: "oklch(0.22 0.07 255)",
                color: "white",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.28 0.08 255)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 24px oklch(0.22 0.07 255 / 0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "oklch(0.22 0.07 255)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
              }}
            >
              Quiero mi sitio web ahora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
