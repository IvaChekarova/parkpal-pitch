import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const alignClass = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      {eyebrow && (
        <Reveal direction="up">
          <span className={`section-eyebrow ${light ? "text-blue-300" : ""}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.08}>
        <h2
          className={`font-display font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-[1.08] ${
            light ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal direction="up" delay={0.16}>
          <p
            className={`max-w-2xl text-lg sm:text-xl leading-relaxed ${
              light ? "text-slate-300" : "text-slate-500"
            } ${align === "left" ? "" : "mx-auto"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
