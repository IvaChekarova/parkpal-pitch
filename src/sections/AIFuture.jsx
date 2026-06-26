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
    <SlideShell id="ai" theme="dark" className="bg-gradient-to-br from-[#1B579D] via-[#214A83] to-[#10213D]">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="08 · Иднина со AI"
          title="Следната генерација на ParkPal"
          subtitle="Темелот веќе е изграден. Овие три насоки водат кон паметна и предвидлива платформа."
          light
        />

        <div className="mt-4 grid grid-cols-1 gap-3 sm:mt-8 sm:gap-5 sm:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} direction="up" delay={i * 0.1}>
              <div className="group relative flex h-full flex-col gap-2 overflow-hidden rounded-2xl border border-white/12 bg-white/10 p-4 shadow-xl shadow-primary/10 ring-1 ring-white/10 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/15 sm:gap-4 sm:rounded-3xl sm:p-6">
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
