import { motion } from "framer-motion";
import { BrainCircuit, Camera, LineChart } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const features = [
  { icon: BrainCircuit, title: "Предвидување на побарувачка", desc: "AI модели кои предвидуваат кога и каде ќе има слободни паркинг места." },
  { icon: Camera, title: "Компјутерска визија", desc: "Автоматска детекција на зафатеност на места преку анализа на слика." },
  { icon: LineChart, title: "Динамично одредување на цени", desc: "Цените се прилагодуваат автоматски според побарувачката во реално време." },
];

export default function AIFuture() {
  return (
    <SlideShell id="ai" theme="dark">
      <div className="absolute inset-0">
        <motion.div
          className="absolute left-1/4 top-0 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-[26rem] w-[26rem] rounded-full bg-secondary/20 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="bg-grid absolute inset-0 opacity-[0.05]" />

      <div className="relative">
        <SectionHeading
          eyebrow="09 · Иднина со AI"
          title="Следната генерација на ParkPal"
          subtitle="Темелот веќе е изграден. Овие три насоки водат кон паметна и предвидлива платформа."
          light
        />

        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-5 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} direction="up" delay={i * 0.1}>
              <div className="group relative flex h-full flex-col gap-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 sm:gap-4 sm:rounded-3xl sm:p-6">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <Icon size={18} strokeWidth={2} className="sm:hidden" />
                  <Icon size={24} strokeWidth={2} className="hidden sm:block" />
                </div>
                <h3 className="relative font-display text-base font-bold text-white sm:text-xl">{title}</h3>
                <p className="relative text-xs leading-relaxed text-slate-400 sm:text-sm">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
