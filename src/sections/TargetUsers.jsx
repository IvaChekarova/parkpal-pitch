import { Car, Check, ShieldCheck, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const roles = [
  {
    icon: Car,
    name: "Возач",
    tagline: "Најди паркинг во секунди",
    accent: {
      icon: "from-[#1B579D] to-primary-dark shadow-[#1B579D]/25",
      text: "text-[#60A5FA]",
      check: "bg-[#1B579D]/20 text-[#60A5FA]",
      card: "border-[#1B579D]/25 bg-[#1B579D]/12 ring-[#1B579D]/20 shadow-[#1B579D]/10",
    },
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
    accent: {
      icon: "from-[#16A34A] to-emerald-700 shadow-[#16A34A]/25",
      text: "text-[#4ADE80]",
      check: "bg-[#16A34A]/20 text-[#4ADE80]",
      card: "border-[#16A34A]/25 bg-[#16A34A]/12 ring-[#16A34A]/20 shadow-[#16A34A]/10",
    },
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
    accent: {
      icon: "from-[#F59E0B] to-orange-600 shadow-[#F59E0B]/25",
      text: "text-[#FBBF24]",
      check: "bg-[#F59E0B]/20 text-[#FBBF24]",
      card: "border-[#F59E0B]/25 bg-[#F59E0B]/12 ring-[#F59E0B]/20 shadow-[#F59E0B]/10",
    },
    benefits: [
      "Одобрување на нови паркинг простори",
      "Модерирање на содржина и корисници",
      "Целосен преглед на платформата",
    ],
  },
];

export default function TargetUsers() {
  return (
    <SlideShell id="users" theme="dark" className="bg-gradient-to-br from-[#1B579D] via-[#214A83] to-[#10213D]">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="03 · Корисници"
          title="Три улоги, една платформа"
          subtitle="Секоја улога во ParkPal има искуство прилагодено според своите потреби."
          light
        />

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-3">
          {roles.map(({ icon: Icon, name, tagline, accent, benefits }, i) => (
            <Reveal key={name} direction="up" delay={i * 0.1}>
              <div className={`flex h-full flex-col gap-2 rounded-2xl border p-4 shadow-xl ring-1 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 sm:gap-5 sm:rounded-[2rem] sm:p-8 ${accent.card}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${accent.icon} text-white shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl`}>
                  <Icon size={18} strokeWidth={2} className="sm:hidden" />
                  <Icon size={26} strokeWidth={2} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white sm:text-2xl">{name}</h3>
                  <p className={`mt-0.5 text-xs font-semibold ${accent.text} sm:mt-1 sm:text-sm`}>{tagline}</p>
                </div>
                <ul className="hidden flex-col gap-1.5 sm:flex sm:gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs leading-relaxed text-slate-300 sm:gap-3 sm:text-sm">
                      <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${accent.check} sm:h-5 sm:w-5`}>
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
