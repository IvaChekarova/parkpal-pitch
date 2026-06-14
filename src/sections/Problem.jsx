import { Car, Clock, ParkingSquareOff, Home } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const stats = [
  {
    icon: ParkingSquareOff,
    stat: "70%",
    title: "Недостаток на паркинг",
    desc: "Урбаните средини растат побрзо од бројот на паркинг места.",
  },
  {
    icon: Car,
    stat: "1/3",
    title: "Метеж во центрите",
    desc: "Значителен дел од сообраќајот се возила кои само бараат место.",
  },
  {
    icon: Clock,
    stat: "15 мин",
    title: "Губење време",
    desc: "Просечно толку трошат возачите во потрага по слободно место.",
  },
  {
    icon: Home,
    stat: "1000+",
    title: "Неискористен простор",
    desc: "Гаражи и дворови стојат празни додека возачите кружат.",
  },
];

export default function Problem() {
  return (
    <SlideShell id="problem" theme="light">
      <SectionHeading
        eyebrow="01 · Проблемот"
        title="Паркирањето е секојдневна борба"
        subtitle="Во секој поголем град, возачи секојдневно кружат низ улиците барајќи нешто што едноставно недостасува — слободно паркинг место."
      />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-4">
        {stats.map(({ icon: Icon, stat, title, desc }, i) => (
          <Reveal key={title} direction="up" delay={i * 0.08}>
            <div className="group relative flex h-full flex-col gap-1.5 overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 sm:gap-3 sm:rounded-3xl sm:p-6">
              <div className="absolute -right-8 -top-8 hidden h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 sm:block" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon size={18} strokeWidth={2.2} className="sm:hidden" />
                <Icon size={22} strokeWidth={2.2} className="hidden sm:block" />
              </div>
              <p className="relative font-display text-2xl font-extrabold text-gradient sm:text-4xl">{stat}</p>
              <h3 className="relative font-display text-sm font-bold text-ink sm:text-xl">{title}</h3>
              <p className="relative hidden text-xs leading-relaxed text-slate-500 sm:block sm:text-sm">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal direction="up" delay={0.2}>
        <p className="mt-6 text-center font-display text-lg font-bold text-ink sm:mt-8 sm:text-3xl">
          „Како да ги поврземе возачите со слободниот паркинг простор?“
        </p>
      </Reveal>
    </SlideShell>
  );
}
