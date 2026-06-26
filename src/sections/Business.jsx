import { BadgeCheck, Handshake, Percent } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const revenue = [
  { icon: Percent, title: "Провизија", desc: "Платформата задржува мал процент од секоја успешна резервација направена преку апликацијата." },
  { icon: BadgeCheck, title: "Премиум огласи", desc: "Сопствениците можат да платат за истакнато прикажување на нивниот паркинг простор." },
  { icon: Handshake, title: "Партнерства", desc: "Соработка со паркинг куќи, општини и компании за корпоративни решенија." },
];

export default function Business() {
  return (
    <SlideShell id="business" theme="light">
      <SectionHeading
        eyebrow="09 · Бизнис модел"
        title="Модел кој расте со заедницата"
        subtitle="ParkPal е платформа со јасен пат до одржлив приход и растечки пазар."
      />

      <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-6 sm:grid-cols-3">
        {revenue.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} direction="up" delay={i * 0.1}>
            <div className="flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-secondary/10 sm:gap-4 sm:rounded-3xl sm:p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary sm:h-14 sm:w-14 sm:rounded-2xl">
                <Icon size={20} strokeWidth={2.2} className="sm:hidden" />
                <Icon size={26} strokeWidth={2.2} className="hidden sm:block" />
              </div>
              <h3 className="font-display text-base font-bold text-ink sm:text-xl">{title}</h3>
              <p className="text-xs leading-relaxed text-slate-500 sm:text-base">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
