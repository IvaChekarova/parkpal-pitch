import { motion } from "framer-motion";
import {
  ArrowLeftRight,
  Bell,
  CalendarCheck,
  Car,
  MapPin,
  QrCode,
  Search,
  ShieldCheck,
  Star,
  Warehouse,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const features = [
  { icon: Search, title: "Пребарување", desc: "Пронајдете слободни паркинг места во реално време, на мапа, во вашата близина." },
  { icon: CalendarCheck, title: "Резервација", desc: "Резервирајте паркинг место однапред, за одредено време, со неколку допири." },
  { icon: QrCode, title: "QR билет", desc: "Секоја резервација генерира уникатен QR код за брза и сигурна потврда на лице место." },
  { icon: Star, title: "Рецензии", desc: "Возачите оставаат оценки и коментари — изградба на доверба во заедницата." },
  { icon: Bell, title: "Нотификации", desc: "Известувања во реално време за статус на резервација, потврди и промени." },
  { icon: ShieldCheck, title: "Администраторско одобрување", desc: "Секој нов паркинг простор се потврдува од администратор пред да биде објавен." },
];

export default function Solution() {
  return (
    <section id="solution" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="03 · Решението"
          title="Еден екосистем, три страни"
          subtitle="ParkPal е дигиталниот мост помеѓу возачите кои бараат паркинг и сопствениците кои имаат слободен простор за понуда."
        />

        {/* Ecosystem diagram */}
        <Reveal direction="up" delay={0.1}>
          <div className="mt-16 grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
            {/* Driver */}
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Car size={28} strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">Возач</h3>
              <p className="text-sm text-slate-500">Бара и резервира паркинг место преку мобилна апликација.</p>
            </div>

            {/* Center connector (mobile: vertical, desktop: horizontal) */}
            <div className="flex flex-col items-center gap-4 py-2 sm:order-none">
              <div className="flex w-full items-center justify-center gap-3 sm:hidden">
                <ArrowLeftRight className="text-primary" size={24} />
              </div>
              <motion.div
                className="relative flex h-28 w-28 items-center justify-center rounded-[2rem] bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl shadow-primary/30 sm:h-32 sm:w-32"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="absolute inset-0 animate-pulse-glow rounded-[2rem] bg-primary/30 blur-xl" />
                <MapPin className="relative" size={40} strokeWidth={2} />
              </motion.div>
              <span className="font-display text-lg font-extrabold text-gradient">ParkPal</span>
              <div className="hidden w-full items-center justify-between sm:flex">
                <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-primary/40" />
                <ArrowLeftRight className="mx-2 shrink-0 text-primary" size={20} />
                <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-secondary/40" />
              </div>
            </div>

            {/* Owner */}
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                <Warehouse size={28} strokeWidth={2} />
              </div>
              <h3 className="font-display text-xl font-bold text-ink">Сопственик</h3>
              <p className="text-sm text-slate-500">Објавува слободен простор и управува со резервациите.</p>
            </div>
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="mt-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} direction="up" delay={i * 0.06}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors duration-500 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white">
                  <Icon size={22} strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
