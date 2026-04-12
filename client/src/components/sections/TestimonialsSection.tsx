/*
 * TESTCO TestimonialsSection — Neo-Minimalismo Orgánico
 * Testimonios de clientes PyMEs con cards y estrellas
 * Fondo: Blanco con separadores sutiles
 */

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    role: "Dueña",
    company: "Panadería El Trigo Dorado",
    content:
      "Testco nos hizo un sitio web increíble. Antes no teníamos presencia en internet y ahora recibimos pedidos en línea todos los días. El proceso fue muy sencillo y el equipo nos explicó todo con paciencia.",
    rating: 5,
    avatar: "MG",
    delay: "0s",
  },
  {
    name: "Carlos Mendoza",
    role: "Gerente",
    company: "Ferretería Industrial Mendoza",
    content:
      "Necesitábamos un sistema para gestionar nuestro inventario y Testco nos desarrolló exactamente lo que pedimos. Rápido, profesional y a un precio justo. Los recomiendo sin dudarlo.",
    rating: 5,
    avatar: "CM",
    delay: "0.15s",
  },
  {
    name: "Ana Rodríguez",
    role: "Directora",
    company: "Clínica Dental Sonrisas",
    content:
      "La app de turnos que nos crearon cambió completamente cómo manejamos las citas. Los pacientes están felices y nosotros también. Testco entiende las necesidades de los negocios pequeños.",
    rating: 5,
    avatar: "AR",
    delay: "0.3s",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 fade-in-up">
          <span className="section-label mb-4 block">Testimonios</span>
          <h2
            className="font-sans font-extrabold text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: "oklch(0.22 0.07 255)" }}
          >
            Lo que dicen
            <br />
            nuestros <span className="accent-underline">clientes</span>
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "oklch(0.52 0.02 260)" }}>
            Empresas reales que transformaron su presencia digital con Testco.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative p-8 rounded-md fade-in-up"
              style={{
                backgroundColor: "oklch(0.975 0.012 85)",
                border: "1px solid oklch(0.88 0.02 85)",
                transitionDelay: t.delay,
              }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 w-8 h-8 opacity-20"
                style={{ color: "oklch(0.68 0.16 52)" }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: "oklch(0.68 0.16 52)" }}
                  />
                ))}
              </div>

              {/* Content */}
              <p
                className="font-sans text-sm leading-relaxed mb-6 italic"
                style={{ color: "oklch(0.42 0.02 260)" }}
              >
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm flex-shrink-0"
                  style={{
                    backgroundColor: "oklch(0.22 0.07 255)",
                    color: "white",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p
                    className="font-sans font-semibold text-sm"
                    style={{ color: "oklch(0.22 0.07 255)" }}
                  >
                    {t.name}
                  </p>
                  <p className="font-sans text-xs" style={{ color: "oklch(0.52 0.02 260)" }}>
                    {t.role} — {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
