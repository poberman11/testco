/*
 * TESTCO StatsSection — Neo-Minimalismo Orgánico
 * Sección de estadísticas con contadores animados
 * Fondo: Navy oscuro con acento amber
 */

import { useCountUp } from "@/hooks/useScrollAnimation";

function StatCard({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: string;
}) {
  const countRef = useCountUp(value);

  return (
    <div
      className="text-center fade-in-up py-8 px-4"
      style={{ transitionDelay: delay }}
    >
      <div className="flex items-end justify-center gap-1 mb-2">
        <span
          ref={countRef}
          className="font-sans font-extrabold text-5xl md:text-6xl"
          style={{ color: "white" }}
        >
          0
        </span>
        <span
          className="font-sans font-bold text-3xl md:text-4xl pb-1"
          style={{ color: "oklch(0.68 0.16 52)" }}
        >
          {suffix}
        </span>
      </div>
      <p className="font-sans text-sm tracking-wide" style={{ color: "oklch(0.75 0.02 260)" }}>
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-16"
      style={{ backgroundColor: "oklch(0.22 0.07 255)" }}
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0"
          style={{ borderColor: "oklch(1 0 0 / 0.1)" }}
        >
          <StatCard value={50} suffix="+" label="Proyectos entregados" delay="0s" />
          <StatCard value={40} suffix="+" label="Clientes satisfechos" delay="0.1s" />
          <StatCard value={5} suffix="+" label="Años de experiencia" delay="0.2s" />
          <StatCard value={98} suffix="%" label="Tasa de satisfacción" delay="0.3s" />
        </div>
      </div>
    </section>
  );
}
