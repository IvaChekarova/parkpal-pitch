import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  MapPin,
  QrCode,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SlideShell from "../components/SlideShell";

const achievements = [
  { icon: Smartphone, label: "Мобилна апликација" },
  { icon: Server, label: "Backend систем" },
  { icon: Database, label: "PostgreSQL база" },
  { icon: QrCode, label: "QR резервациски систем" },
  { icon: ShieldCheck, label: "Администраторска контролна табла" },
  { icon: Cpu, label: "IoT прототип" },
];

export default function Conclusion() {
  return (
    <SlideShell id="conclusion" theme="gradient">
      <div className="bg-grid absolute inset-0 opacity-10" />

      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/10"
          style={{ left: `${10 + i * 18}%`, top: `${(i % 3) * 30 + 8}%` }}
          animate={{ y: [0, -24, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        >
          <MapPin size={36 + (i % 3) * 14} />
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal direction="up">
          <span className="section-eyebrow text-blue-200">11 · Заклучок</span>
        </Reveal>
        <Reveal direction="up" delay={0.06}>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            ParkPal е завршен MVP, спремен за реалниот свет
          </h2>
        </Reveal>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {achievements.map(({ icon: Icon, label }, i) => (
            <Reveal key={label} direction="scale" delay={i * 0.07}>
              <div className="glass-dark flex flex-col items-center gap-2 rounded-2xl px-3 py-3 text-center sm:gap-3 sm:py-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-white sm:h-11 sm:w-11">
                  <Icon size={18} strokeWidth={2.2} className="sm:hidden" />
                  <Icon size={20} strokeWidth={2.2} className="hidden sm:block" />
                </span>
                <span className="text-xs font-semibold leading-snug text-white">{label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.35}>
          <div className="mt-6 flex flex-col items-center gap-2 sm:mt-10 sm:gap-3">
            <p className="font-display text-2xl font-extrabold text-white sm:text-4xl md:text-5xl">
              Ви благодарам за вниманието.
            </p>
            <p className="font-display text-xl font-bold text-blue-100 sm:text-2xl">Прашања?</p>
            <p className="mt-2 text-sm text-white/70 sm:mt-4">Ива Чекарова · Софтверско инженерство и иновации</p>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
