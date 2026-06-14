import { Car, Check, ShieldCheck, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const roles = [
  {
    icon: Car,
    name: "Возач",
    tagline: "Најди паркинг во секунди",
    benefits: [
      "Пребарување во реално време на мапа",
      "Резервација однапред + QR билет",
      "Историја на резервации и рецензии",
    ],
  },
  {
    icon: Warehouse,
    name: "Сопственик",
    tagline: "Претвори простор во приход",
    benefits: [
      "Објавување на сопствен паркинг простор",
      "Управување со достапност и цени",
      "Преглед на резервации и приходи",
    ],
  },
  {
    icon: ShieldCheck,
    name: "Администратор",
    tagline: "Контрола и квалитет",
    benefits: [
      "Одобрување на нови паркинг простори",
      "Модерирање на содржина и корисници",
      "Целосен преглед на платформата",
    ],
  },
];

export default function TargetUsers() {
  return (
    <SlideShell id="users" theme="dark">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="03 · Корисници"
          title="Три улоги, една платформа"
          subtitle="Секоја улога во ParkPal има искуство прилагодено според своите потреби."
          light
        />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {roles.map(({ icon: Icon, name, tagline, benefits }, i) => (
            <Reveal key={name} direction="up" delay={i * 0.1}>
              <div className="glass-dark flex h-full flex-col gap-2 rounded-2xl p-4 sm:gap-5 sm:rounded-[2rem] sm:p-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon size={18} strokeWidth={2} className="sm:hidden" />
                  <Icon size={26} strokeWidth={2} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white sm:text-2xl">{name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-secondary sm:mt-1 sm:text-sm">{tagline}</p>
                </div>
                <ul className="hidden flex-col gap-1.5 sm:flex sm:gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300 sm:gap-3 sm:text-sm">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary/20 text-secondary sm:h-5 sm:w-5">
                        <Check size={10} strokeWidth={3} className="sm:hidden" />
                        <Check size={12} strokeWidth={3} className="hidden sm:block" />
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
    </SlideShell>
  );
}
