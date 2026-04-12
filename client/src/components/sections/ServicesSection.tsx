/*
 * TESTCO ServicesSection — Neo-Minimalismo Orgánico
 * Grid de 3 servicios con imágenes generadas, iconos y descripción
 * Hover: elevación + borde amber
 */

import { Monitor, Smartphone, Cpu, ArrowRight } from "lucide-react";

const WEB_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663547303603/GfrX6UiizCZhN9PnHcLu3w/testco-web-design-HYKK7LaZTay7hhxt5cpQJB.webp";
const APPS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663547303603/GfrX6UiizCZhN9PnHcLu3w/testco-apps-3ujYinjyDumyzXJ38NJZxz.webp";
const ELECTRONICS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663547303603/GfrX6UiizCZhN9PnHcLu3w/testco-electronics-KCoLnNWNeWjujVp7vSm6Ts.webp";

const services = [
  {
    icon: Monitor,
    title: "Diseño Web Profesional",
    description:
      "Creamos sitios web modernos, rápidos y optimizados para buscadores. Desde landing pages hasta tiendas en línea completas, diseñadas para convertir visitantes en clientes.",
    features: ["Diseño responsivo", "SEO optimizado", "Panel de administración", "Integración con redes sociales"],
    image: WEB_IMAGE,
    delay: "0s",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones a Medida",
    description:
      "Desarrollamos aplicaciones web y móviles que automatizan procesos y mejoran la experiencia de tus clientes. Soluciones escalables que crecen con tu negocio.",
    features: ["Apps web y móviles", "Automatización de procesos", "Integración con sistemas existentes", "Soporte continuo"],
    image: APPS_IMAGE,
    delay: "0.15s",
  },
  {
    icon: Cpu,
    title: "Electrónica Personalizada",
    description:
      "Diseñamos y fabricamos soluciones electrónicas a medida: desde sistemas de control hasta dispositivos IoT. Tecnología hardware adaptada exactamente a tus necesidades.",
    features: ["Diseño de circuitos", "Prototipos y producción", "Sistemas IoT", "Automatización industrial"],
    image: ELECTRONICS_IMAGE,
    delay: "0.3s",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 md:py-32" style={{ backgroundColor: "oklch(0.975 0.012 85)" }}>
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16 fade-in-up">
          <span className="section-label mb-4 block">Lo que hacemos</span>
          <h2
            className="font-sans font-extrabold text-4xl md:text-5xl leading-tight mb-4"
            style={{ color: "oklch(0.22 0.07 255)" }}
          >
            Servicios diseñados
            <br />
            para <span className="accent-underline">hacer crecer</span> tu empresa
          </h2>
          <p className="font-sans text-base md:text-lg leading-relaxed" style={{ color: "oklch(0.52 0.02 260)" }}>
            Combinamos diseño, tecnología y electrónica para ofrecer soluciones integrales
            que impulsan la presencia digital de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="card-service fade-in-up group flex flex-col"
                style={{ transitionDelay: service.delay }}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-sm mb-6 aspect-video">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "oklch(0.22 0.07 255 / 0.15)" }}
                  />
                </div>

                {/* Icon Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "oklch(0.68 0.16 52 / 0.12)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "oklch(0.68 0.16 52)" }} />
                  </div>
                  <h3
                    className="font-sans font-bold text-lg leading-tight"
                    style={{ color: "oklch(0.22 0.07 255)" }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  className="font-sans text-sm leading-relaxed mb-6 flex-grow"
                  style={{ color: "oklch(0.52 0.02 260)" }}
                >
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "oklch(0.68 0.16 52)" }}
                      />
                      <span className="font-sans text-sm" style={{ color: "oklch(0.52 0.02 260)" }}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contacto"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-sm transition-all duration-200 group/link"
                  style={{ color: "oklch(0.22 0.07 255)" }}
                >
                  Saber más
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
