import { Brain, Cpu, QrCode, Smartphone, Store, Warehouse, Check } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const points = [
  { icon: Store, title: "Marketplace модел", desc: "Поврзува понуда и побарувачка на паркинг простор — на начин на кој Airbnb го направи за сместување." },
  { icon: Warehouse, title: "Приватни и јавни паркинзи", desc: "Гаражи, дворови и јавни паркиралишта — сите достапни на едно место, во една апликација." },
  { icon: QrCode, title: "QR билети", desc: "Секоја резервација добива уникатен код за брза, безбедна и безконтактна потврда." },
  { icon: Cpu, title: "IoT потенцијал", desc: "Сензори и микроконтролери за автоматска детекција на зафатеност на местата во реално време." },
  { icon: Brain, title: "AI потенцијал", desc: "Препораки, предвидувања на побарувачка и динамично одредување на цени во иднина." },
  { icon: Smartphone, title: "Мобилна апликација", desc: "Целосно функционална мобилна апликација, изградена со React Native за iOS и Android." },
];

export default function WhyParkPal() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div className="bg-grid absolute inset-0 opacity-[0.06]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="04 · Зошто ParkPal?"
          title="Вредност која се разликува"
          subtitle="ParkPal не е само уште една мапа со паркинзи — тоа е платформа изградена со јасна визија за иднината на урбаната мобилност."
          light
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} direction="up" delay={i * 0.07}>
              <div className="glass-dark group relative flex h-full flex-col gap-4 rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-primary">
                    <Icon size={22} strokeWidth={2.2} />
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                    <Check size={15} strokeWidth={3} />
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
