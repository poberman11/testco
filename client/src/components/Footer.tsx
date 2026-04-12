/*
 * TESTCO Footer — Neo-Minimalismo Orgánico
 * Footer con links de navegación, redes sociales y copyright
 * Fondo: Navy muy oscuro
 */

import { Zap, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const footerLinks = {
  Servicios: [
    { label: "Diseño Web", href: "#servicios" },
    { label: "Aplicaciones", href: "#servicios" },
    { label: "Electrónica", href: "#servicios" },
    { label: "Consultoría Digital", href: "#contacto" },
  ],
  Empresa: [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Testimonios", href: "#" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href === "#") return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "oklch(0.15 0.06 255)" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-sm flex items-center justify-center"
                style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
              >
                <Zap className="w-4 h-4" style={{ color: "oklch(0.68 0.16 52)" }} />
              </div>
              <span className="font-sans font-extrabold text-xl" style={{ color: "white" }}>
                test<span style={{ color: "oklch(0.68 0.16 52)" }}>co</span>
              </span>
            </div>
            <p
              className="font-sans text-sm leading-relaxed max-w-xs mb-6"
              style={{ color: "oklch(0.6 0.02 260)" }}
            >
              Impulsamos la presencia digital de pequeñas y medianas empresas con diseño web,
              aplicaciones y electrónica personalizada.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 rounded-sm flex items-center justify-center transition-all duration-200"
                    style={{
                      backgroundColor: "oklch(1 0 0 / 0.07)",
                      border: "1px solid oklch(1 0 0 / 0.1)",
                      color: "oklch(0.6 0.02 260)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(0.68 0.16 52)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "white";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(0.68 0.16 52)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "oklch(1 0 0 / 0.07)";
                      (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.6 0.02 260)";
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "oklch(1 0 0 / 0.1)";
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4
                className="font-sans font-semibold text-sm mb-4"
                style={{ color: "white" }}
              >
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                      className="font-sans text-sm transition-colors duration-200"
                      style={{ color: "oklch(0.6 0.02 260)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.68 0.16 52)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "oklch(0.6 0.02 260)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 0.08)" }}
        >
          <p className="font-sans text-xs" style={{ color: "oklch(0.5 0.02 260)" }}>
            © {new Date().getFullYear()} Testco. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs" style={{ color: "oklch(0.5 0.02 260)" }}>
            Diseñado y desarrollado con{" "}
            <span style={{ color: "oklch(0.68 0.16 52)" }}>♥</span> por Testco
          </p>
        </div>
      </div>
    </footer>
  );
}
