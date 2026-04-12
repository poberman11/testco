/*
 * TESTCO ContactSection — Neo-Minimalismo Orgánico
 * Formulario de contacto asimétrico con info de contacto
 * Fondo: Navy oscuro para contraste con secciones anteriores
 */

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@testco.com",
    href: "mailto:hola@testco.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 9 11 0000-0000",
    href: "tel:+5491100000000",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Buenos Aires, Argentina",
    href: "#",
  },
];

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const inputStyle = {
    backgroundColor: "oklch(1 0 0 / 0.07)",
    border: "1px solid oklch(1 0 0 / 0.15)",
    color: "white",
    borderRadius: "4px",
    padding: "12px 16px",
    width: "100%",
    fontFamily: "'Nunito Sans', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section
      id="contacto"
      className="py-24 md:py-32"
      style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="fade-in-left">
            <span
              className="inline-block font-sans font-semibold text-xs tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.68 0.16 52)" }}
            >
              Hablemos
            </span>
            <h2
              className="font-sans font-extrabold text-4xl md:text-5xl leading-tight mb-6"
              style={{ color: "white" }}
            >
              ¿Listo para
              <br />
              dar el{" "}
              <span style={{ color: "oklch(0.68 0.16 52)" }}>siguiente paso</span>?
            </h2>
            <p
              className="font-sans text-base leading-relaxed mb-10"
              style={{ color: "oklch(0.75 0.02 260)" }}
            >
              Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas
              con una propuesta sin compromiso. La primera consulta es completamente gratuita.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 group"
                  >
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{
                        backgroundColor: "oklch(1 0 0 / 0.08)",
                        border: "1px solid oklch(1 0 0 / 0.12)",
                      }}
                    >
                      <Icon className="w-4 h-4" style={{ color: "oklch(0.68 0.16 52)" }} />
                    </div>
                    <div>
                      <p
                        className="font-sans text-xs mb-0.5"
                        style={{ color: "oklch(0.6 0.02 260)" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="font-sans font-semibold text-sm group-hover:text-amber transition-colors duration-200"
                        style={{ color: "white" }}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Promise */}
            <div
              className="p-6 rounded-md"
              style={{
                backgroundColor: "oklch(1 0 0 / 0.06)",
                border: "1px solid oklch(1 0 0 / 0.1)",
              }}
            >
              <p
                className="font-sans font-semibold text-sm mb-1"
                style={{ color: "oklch(0.68 0.16 52)" }}
              >
                Nuestra promesa
              </p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "oklch(0.75 0.02 260)" }}>
                Respondemos en menos de 24 horas hábiles. Sin spam, sin presión.
                Solo soluciones reales para tu negocio.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-in-right">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-md"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                <CheckCircle2
                  className="w-16 h-16 mb-6"
                  style={{ color: "oklch(0.68 0.16 52)" }}
                />
                <h3
                  className="font-sans font-bold text-2xl mb-3"
                  style={{ color: "white" }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p className="font-sans text-sm leading-relaxed" style={{ color: "oklch(0.75 0.02 260)" }}>
                  Gracias por contactarnos. Te responderemos en menos de 24 horas
                  con una propuesta personalizada.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-md space-y-5"
                style={{
                  backgroundColor: "oklch(1 0 0 / 0.06)",
                  border: "1px solid oklch(1 0 0 / 0.1)",
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      className="block font-sans text-xs mb-2"
                      style={{ color: "oklch(0.75 0.02 260)" }}
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.16 52)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.15)")}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-sans text-xs mb-2"
                      style={{ color: "oklch(0.75 0.02 260)" }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.16 52)")}
                      onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.15)")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block font-sans text-xs mb-2"
                    style={{ color: "oklch(0.75 0.02 260)" }}
                  >
                    Empresa / Negocio
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.16 52)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.15)")}
                  />
                </div>

                <div>
                  <label
                    className="block font-sans text-xs mb-2"
                    style={{ color: "oklch(0.75 0.02 260)" }}
                  >
                    Servicio de interés *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      backgroundColor: "oklch(0.18 0.06 255)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.16 52)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.15)")}
                  >
                    <option value="" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
                      Selecciona un servicio
                    </option>
                    <option value="web" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
                      Diseño Web Profesional
                    </option>
                    <option value="app" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
                      Aplicación a Medida
                    </option>
                    <option value="electronics" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
                      Electrónica Personalizada
                    </option>
                    <option value="all" style={{ backgroundColor: "oklch(0.18 0.06 255)" }}>
                      Solución Integral
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    className="block font-sans text-xs mb-2"
                    style={{ color: "oklch(0.75 0.02 260)" }}
                  >
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe brevemente qué necesitas para tu negocio..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => (e.target.style.borderColor = "oklch(0.68 0.16 52)")}
                    onBlur={(e) => (e.target.style.borderColor = "oklch(1 0 0 / 0.15)")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-sm font-sans font-semibold text-sm tracking-wide transition-all duration-300"
                  style={{
                    backgroundColor: loading ? "oklch(0.55 0.14 52)" : "oklch(0.68 0.16 52)",
                    color: "white",
                    cursor: loading ? "not-allowed" : "pointer",
                  }}
                >
                  {loading ? (
                    <>
                      <div
                        className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: "white", borderTopColor: "transparent" }}
                      />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Enviar Consulta Gratuita
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
