import { Check, Minus, X } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const columns = ["Google Maps", "Јавни паркиралишта", "Други решенија", "ParkPal"];

const rows = [
  { feature: "Преглед на локации во реално време", values: ["yes", "partial", "yes", "yes"] },
  { feature: "Резервација однапред", values: ["no", "no", "partial", "yes"] },
  { feature: "Приватни паркинг места", values: ["no", "no", "no", "yes"] },
  { feature: "QR билет / безконтактна потврда", values: ["no", "partial", "partial", "yes"] },
  { feature: "Рецензии и оценки", values: ["yes", "no", "partial", "yes"] },
  { feature: "Marketplace за сопственици", values: ["no", "no", "no", "yes"] },
  { feature: "Администраторско одобрување", values: ["no", "yes", "partial", "yes"] },
  { feature: "Потенцијал за IoT и AI интеграција", values: ["no", "no", "partial", "yes"] },
];

const icon = {
  yes: <Check className="text-secondary" size={20} strokeWidth={3} />,
  no: <X className="text-slate-300" size={20} strokeWidth={3} />,
  partial: <Minus className="text-amber-400" size={20} strokeWidth={3} />,
};

export default function Competition() {
  return (
    <section id="competition" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="05 · Конкуренција"
          title="Како се издвојува ParkPal"
          subtitle="Постојните решенија покриваат само дел од проблемот. ParkPal ги обединува сите клучни функционалности на едно место."
        />

        <Reveal direction="up" delay={0.1}>
          <div className="mt-16 overflow-x-auto rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 bg-white p-5 font-display text-sm font-bold uppercase tracking-wide text-slate-400 sm:p-6">
                    Функционалност
                  </th>
                  {columns.map((col) => (
                    <th
                      key={col}
                      className={`p-5 text-center font-display text-sm font-bold sm:p-6 ${
                        col === "ParkPal"
                          ? "bg-gradient-to-b from-primary/10 to-transparent text-primary"
                          : "text-slate-500"
                      }`}
                    >
                      {col === "ParkPal" ? (
                        <span className="text-gradient text-base sm:text-lg">{col}</span>
                      ) : (
                        col
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={row.feature} className={ri % 2 === 0 ? "bg-slate-50/60" : ""}>
                    <td className="sticky left-0 z-10 bg-inherit p-5 text-sm font-semibold text-ink sm:p-6">
                      {row.feature}
                    </td>
                    {row.values.map((val, ci) => (
                      <td
                        key={ci}
                        className={`p-5 text-center sm:p-6 ${
                          ci === 3 ? "bg-primary/[0.04]" : ""
                        }`}
                      >
                        <span className="inline-flex">{icon[val]}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-slate-400">
            <Minus className="mb-0.5 inline text-amber-400" size={14} strokeWidth={3} /> делумна
            поддршка &nbsp;·&nbsp;
            <Check className="mb-0.5 inline text-secondary" size={14} strokeWidth={3} /> целосна
            поддршка &nbsp;·&nbsp;
            <X className="mb-0.5 inline text-slate-300" size={14} strokeWidth={3} /> не е поддржано
          </p>
        </Reveal>
      </div>
    </section>
  );
}
