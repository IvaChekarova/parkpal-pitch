import { Bell, CalendarCheck, Globe, QrCode, ShieldCheck, Star, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const features = [
  { icon: QrCode, title: "QR билети", desc: "Безбеден, безконтактен влез и потврда на резервацијата." },
  { icon: Warehouse, title: "Сопственички панел", desc: "Листинзи, достапност, цени и приходи на едно место." },
  { icon: ShieldCheck, title: "Админ одобрување", desc: "Секој нов простор се потврдува пред да биде објавен." },
  { icon: Star, title: "Рецензии", desc: "Оценки и коментари кои градат доверба во заедницата." },
  { icon: Bell, title: "Известувања", desc: "Статус на резервации и промени во реално време." },
  { icon: Globe, title: "Мултијазичност", desc: "Целосна поддршка за македонски и англиски јазик." },
];

export default function KeyFeatures() {
  return (
    <SlideShell id="features" theme="light">
      <SectionHeading
        eyebrow="05 · Клучни карактеристики"
        title="Сè што е потребно, на едно место"
        subtitle="Платформа дизајнирана за возачи, сопственици и администратори — со фокус на брзина и доверба."
      />

      <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-5 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }, i) => (
          <Reveal key={title} direction="up" delay={i * 0.07}>
            <div className="group flex h-full flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 sm:gap-4 sm:rounded-3xl sm:p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                <Icon size={18} strokeWidth={2.2} className="sm:hidden" />
                <Icon size={22} strokeWidth={2.2} className="hidden sm:block" />
              </div>
              <h3 className="font-display text-sm font-bold text-ink sm:text-lg">{title}</h3>
              <p className="hidden text-sm leading-relaxed text-slate-500 sm:block">{desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
