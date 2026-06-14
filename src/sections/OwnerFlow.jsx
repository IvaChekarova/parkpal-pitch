import { PlusCircle, Send, Clock, CheckCircle2 } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PhoneMockup from "../components/PhoneMockup";

const steps = [
  {
    icon: PlusCircle,
    key: "add-parking",
    title: "Додавање паркинг",
    desc: "Сопственикот внесува локација, капацитет, цена и фотографии од паркинг просторот.",
    badge: { text: "Чекор 1", className: "bg-primary/10 text-primary" },
  },
  {
    icon: Send,
    key: "submit",
    title: "Поднесување",
    desc: "Внесените податоци се испраќаат за преглед — формата се валидира пред поднесување.",
    badge: { text: "Чекор 2", className: "bg-primary/10 text-primary" },
  },
  {
    icon: Clock,
    key: "pending",
    title: "На чекање",
    desc: "Паркингот добива статус „на чекање“ додека администраторот не го прегледа.",
    badge: { text: "Во преглед", className: "bg-amber-100 text-amber-600" },
  },
  {
    icon: CheckCircle2,
    key: "approved",
    title: "Одобрено",
    desc: "По одобрување, паркингот станува видлив и достапен за резервации од сите возачи.",
    badge: { text: "Одобрено", className: "bg-secondary/10 text-secondary" },
  },
];

export default function OwnerFlow() {
  return (
    <section id="app-owner" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="08 · Сопственик"
          title="Од идеја до објавен паркинг"
          subtitle="Сопствениците на паркинг места ги претвораат своите слободни површини во активен извор на приход — со неколку едноставни чекори."
        />

        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/30 to-secondary/30 lg:block" />

          <div className="flex flex-col gap-16 lg:gap-24">
            {steps.map(({ icon: Icon, key, title, desc, badge }, i) => {
              const reverse = i % 2 === 1;
              return (
                <Reveal key={key} direction="up" delay={i * 0.05}>
                  <div
                    className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                      reverse ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    <div className={`flex flex-col gap-4 ${reverse ? "lg:items-start lg:text-left" : "lg:items-end lg:text-right"} items-center text-center`}>
                      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                        <Icon size={24} strokeWidth={2} />
                      </span>
                      <h3 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h3>
                      <p className="max-w-md text-base leading-relaxed text-slate-500">{desc}</p>
                      <span className={`inline-flex rounded-full px-4 py-1.5 text-xs font-bold ${badge.className}`}>
                        {badge.text}
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <PhoneMockup
                        src={`/assets/owner/${key}.png`}
                        alt={`ParkPal Owner — ${title}`}
                        label={title}
                        size="md"
                      />
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
