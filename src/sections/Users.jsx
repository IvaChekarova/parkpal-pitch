import { Car, Check, ShieldCheck, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const roles = [
  {
    icon: Car,
    name: "Возач",
    tagline: "Најди паркинг во секунди",
    color: "from-primary to-primary-dark",
    badge: "bg-primary/10 text-primary",
    benefits: [
      "Пребарување на слободни места во реално време",
      "Резервација однапред, на саканата локација",
      "QR билет за брз и безконтактен влез",
      "Историја на резервации и рецензии",
    ],
  },
  {
    icon: Warehouse,
    name: "Сопственик",
    tagline: "Претвори простор во приход",
    color: "from-secondary to-emerald-600",
    badge: "bg-secondary/10 text-secondary",
    benefits: [
      "Објавување на сопствен паркинг простор",
      "Управување со достапност и цени",
      "Дополнителен извор на приход",
      "Преглед на резервации и статистики",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Администратор",
    tagline: "Контрола и квалитет",
    color: "from-slate-700 to-ink",
    badge: "bg-slate-200 text-slate-700",
    benefits: [
      "Одобрување на нови паркинг простори",
      "Модерирање на содржина и корисници",
      "Преглед на целокупната платформа",
      "Обезбедување доверба и квалитет",
    ],
  },
];

export default function Users() {
  return (
    <section id="users" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="06 · Корисници"
          title="Изграден за секого во екосистемот"
          subtitle="Три улоги, една платформа — секоја со искуство прилагодено според потребите."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {roles.map(({ icon: Icon, name, tagline, color, badge, benefits }, i) => (
            <Reveal key={name} direction="up" delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10">
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${color}`} />
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}>
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{name}</h3>
                <p className={`mt-1 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${badge}`}>
                  {tagline}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
