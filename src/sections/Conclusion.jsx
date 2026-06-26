import { ArrowRight, Cpu, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SlideShell from "../components/SlideShell";

const demoParts = [
  { icon: Smartphone, label: "Мобилна апликација" },
  { icon: Cpu, label: "IoT прототип" },
];

export default function Conclusion() {
  return (
    <SlideShell id="conclusion" theme="dark" className="bg-gradient-to-br from-[#1B579D] via-[#214A83] to-[#10213D]">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal direction="up">
          <img
            src="/assets/brand/parkpal-logo.svg"
            alt="ParkPal"
            className="mx-auto h-16 w-auto brightness-0 invert drop-shadow-2xl sm:h-20"
          />
        </Reveal>
        <Reveal direction="up" delay={0.12}>
          <h2 className="mx-auto mt-7 max-w-4xl font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            ParkPal е повеќе од концепт.
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.2}>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-blue-50/85 sm:text-xl">
            Во продолжение ќе ви демонстрирам како ParkPal функционира во реални услови преку
            мобилната апликација и IoT прототипот.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.28}>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <div className="glass-dark flex min-w-[220px] items-center justify-center gap-3 rounded-2xl px-5 py-4 text-white shadow-xl shadow-ink/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white">
                <Smartphone size={20} strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold sm:text-lg">{demoParts[0].label}</span>
            </div>
            <ArrowRight className="hidden text-white/40 sm:block" size={24} strokeWidth={2} />
            <div className="glass-dark flex min-w-[220px] items-center justify-center gap-3 rounded-2xl px-5 py-4 text-white shadow-xl shadow-ink/10">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/12 text-white">
                <Cpu size={20} strokeWidth={2.2} />
              </span>
              <span className="font-display text-base font-bold sm:text-lg">{demoParts[1].label}</span>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.35}>
          <div className="mt-8 flex flex-col items-center gap-2 sm:mt-12 sm:gap-3">
            <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-bold text-blue-100 backdrop-blur sm:text-base">
              Следува демонстрација во живо на ParkPal.
            </p>
          </div>
        </Reveal>
      </div>
    </SlideShell>
  );
}
