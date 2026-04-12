/*
 * TESTCO AboutSection — Neo-Minimalismo Orgánico
 * Layout asimétrico: imagen a la izquierda, texto a la derecha
 * Valores de la empresa con iconos
 */

import { Target, Heart, Lightbulb, Shield } from "lucide-react";

const ABOUT_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663547303603/GfrX6UiizCZhN9PnHcLu3w/testco-about-6VpvWt2WDnBdPG44QnEU8T.webp";

const values = [
  {
    icon: Target,
    title: "Enfoque en resultados",
    description: "Cada proyecto tiene objetivos claros y métricas de éxito definidas desde el inicio.",
  },
  {
    icon: Heart,
    title: "Compromiso real",
    description: "Tratamos tu negocio como si fuera el nuestro. Tu éxito es nuestro éxito.",
  },
  {
    icon: Lightbulb,
    title: "Innovación accesible",
    description: "Tecnología de vanguardia adaptada al presupuesto y necesidades de las PyMEs.",
  },
  {
    icon: Shield,
    title: "Transparencia total",
    description: "Sin costos ocultos, sin sorpresas. Comunicación clara en cada etapa del proyecto.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="py-24 md:py-32"
      style={{ backgroundColor: "white" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative fade-in-left">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-md"
              style={{ backgroundColor: "oklch(0.68 0.16 52 / 0.12)", zIndex: 0 }}
            />
            <img
              src={ABOUT_IMAGE}
              alt="Equipo Testco trabajando en proyectos digitales"
              className="relative rounded-md w-full object-cover"
              style={{ zIndex: 1, aspectRatio: "4/3" }}
            />
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 p-5 rounded-md shadow-xl z-10"
              style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
            >
              <p className="font-sans font-bold text-3xl" style={{ color: "oklch(0.68 0.16 52)" }}>
                5+
              </p>
              <p className="font-sans text-xs" style={{ color: "oklch(0.88 0.01 85)" }}>
                años creando
                <br />
                soluciones digitales
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-right">
            <span className="section-label mb-4 block">Quiénes somos</span>
            <h2
              className="font-sans font-extrabold text-4xl md:text-5xl leading-tight mb-6"
              style={{ color: "oklch(0.22 0.07 255)" }}
            >
              Impulsamos negocios
              <br />
              con <span className="accent-underline">tecnología real</span>
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-4"
              style={{ color: "oklch(0.52 0.02 260)" }}
            >
              Testco nació con una misión clara: democratizar el acceso a la tecnología para
              pequeñas y medianas empresas. Sabemos que muchos negocios tienen un enorme
              potencial pero carecen de la presencia digital que merecen.
            </p>
            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.52 0.02 260)" }}
            >
              Nuestro equipo combina experiencia en diseño, desarrollo de software y electrónica
              para ofrecer soluciones completas, sin necesidad de contratar múltiples proveedores.
              Un solo equipo, una sola visión: hacer crecer tu negocio.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div key={value.title} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: "oklch(0.68 0.16 52 / 0.12)" }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "oklch(0.68 0.16 52)" }} />
                    </div>
                    <div>
                      <h4
                        className="font-sans font-semibold text-sm mb-1"
                        style={{ color: "oklch(0.22 0.07 255)" }}
                      >
                        {value.title}
                      </h4>
                      <p className="font-sans text-sm leading-relaxed" style={{ color: "oklch(0.52 0.02 260)" }}>
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
