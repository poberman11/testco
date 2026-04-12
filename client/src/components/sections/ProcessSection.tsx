/*
 * TESTCO ProcessSection — Neo-Minimalismo Orgánico
 * Proceso de trabajo en 4 pasos con línea conectora
 * Fondo: Crema cálido
 */

import { MessageSquare, FileSearch, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consulta Inicial",
    description:
      "Escuchamos tus necesidades, objetivos y presupuesto. Sin compromisos. Te asesoramos para encontrar la solución ideal para tu negocio.",
    delay: "0s",
  },
  {
    number: "02",
    icon: FileSearch,
    title: "Propuesta y Planificación",
    description:
      "Elaboramos una propuesta detallada con alcance, tiempos y costos claros. Definimos juntos el camino hacia tu solución digital.",
    delay: "0.15s",
  },
  {
    number: "03",
    icon: Code2,
    title: "Diseño y Desarrollo",
    description:
      "Nuestro equipo trabaja con metodologías ágiles. Te mantenemos informado en cada etapa con revisiones periódicas y ajustes en tiempo real.",
    delay: "0.3s",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento y Soporte",
    description:
      "Desplegamos tu proyecto y te acompañamos en el lanzamiento. Ofrecemos soporte continuo para que tu solución siempre funcione perfectamente.",
    delay: "0.45s",
  },
];

export default function ProcessSection() {
  return (
    <section
      id="proceso"
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.975 0.012 85)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
          <span className="section-label mb-4 block">Cómo trabajamos</span>
          <h2
            className="font-sans font-extrabold text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: "oklch(0.22 0.07 255)" }}
          >
            Un proceso simple,
            <br />
            <span className="accent-underline">resultados extraordinarios</span>
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "oklch(0.52 0.02 260)" }}>
            Trabajamos de forma transparente y colaborativa para que siempre sepas
            en qué etapa está tu proyecto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden md:block absolute top-16 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, oklch(0.68 0.16 52 / 0.3), oklch(0.68 0.16 52 / 0.3), transparent)",
              zIndex: 0,
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex flex-col items-center md:items-start text-center md:text-left fade-in-up"
                  style={{ transitionDelay: step.delay }}
                >
                  {/* Icon circle */}
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-md"
                    style={{ backgroundColor: "white", border: "2px solid oklch(0.68 0.16 52 / 0.3)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "oklch(0.68 0.16 52)" }} />
                    {/* Number badge */}
                    <span
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-sans font-bold text-xs"
                      style={{
                        backgroundColor: "oklch(0.22 0.07 255)",
                        color: "white",
                      }}
                    >
                      {step.number.replace("0", "")}
                    </span>
                  </div>

                  {/* Step number label */}
                  <span
                    className="font-sans font-bold text-xs tracking-widest mb-2"
                    style={{ color: "oklch(0.68 0.16 52)" }}
                  >
                    PASO {step.number}
                  </span>

                  <h3
                    className="font-sans font-bold text-xl mb-3"
                    style={{ color: "oklch(0.22 0.07 255)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed"
                    style={{ color: "oklch(0.52 0.02 260)" }}
                  >
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 fade-in-up" style={{ transitionDelay: "0.6s" }}>
          <p className="font-sans text-base mb-6" style={{ color: "oklch(0.52 0.02 260)" }}>
            ¿Listo para comenzar tu transformación digital?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-base px-8 py-4"
          >
            Empezar Ahora
          </a>
        </div>
      </div>
    </section>
  );
}
