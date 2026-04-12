/*
 * TESTCO Navbar — Neo-Minimalismo Orgánico
 * Navbar con transición de transparente a sólido al hacer scroll
 * Fuente: Sora | Colores: Navy #1A2744, Amber #E8823A, Cream #F7F4EF
 */

import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Proceso", href: "#proceso" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navTextColor = scrolled ? "oklch(0.22 0.07 255)" : "white";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "oklch(0.975 0.012 85 / 0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 0 oklch(0.88 0.02 85)" : "none",
      }}
    >
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
            className="flex items-center gap-2 group"
          >
            <div
              className="w-8 h-8 rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
            >
              <Zap className="w-4 h-4" style={{ color: "oklch(0.68 0.16 52)" }} />
            </div>
            <span
              className="font-sans text-xl tracking-tight"
              style={{ color: navTextColor, fontWeight: 800 }}
            >
              test<span style={{ color: "oklch(0.68 0.16 52)" }}>co</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-sans text-sm tracking-wide transition-colors duration-200 relative group"
                  style={{ color: navTextColor, fontWeight: 600 }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                    style={{ backgroundColor: "oklch(0.68 0.16 52)" }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="btn-accent text-sm"
            >
              Solicitar Cotización
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-sm transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            style={{ color: navTextColor }}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "oklch(0.975 0.012 85)",
            borderColor: "oklch(0.88 0.02 85)",
          }}
        >
          <div className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-sans text-base py-2 transition-colors duration-200"
                style={{ color: "oklch(0.22 0.07 255)", fontWeight: 600 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contacto"); }}
              className="btn-accent text-sm mt-2 text-center"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
