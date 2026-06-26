import { MessageCircleQuestion } from "lucide-react";
import Reveal from "../components/Reveal";
import SlideShell from "../components/SlideShell";

export default function QASlide() {
  return (
    <SlideShell id="qa" theme="dark" className="bg-gradient-to-br from-[#1B579D] via-[#214A83] to-[#10213D]">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal direction="up" delay={0.08}>
          <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-xl shadow-ink/10 backdrop-blur sm:h-16 sm:w-16">
            <MessageCircleQuestion size={28} strokeWidth={2} />
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.14}>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
            Ви благодарам за вниманието!
          </h2>
        </Reveal>

        <Reveal direction="up" delay={0.22}>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-blue-50/85 sm:text-xl">
            Ви благодарам што одвоивте време да ја проследите презентацијата и демонстрацијата на
            ParkPal.
          </p>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <p className="mt-8 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm font-bold text-blue-100 shadow-xl shadow-ink/10 backdrop-blur sm:text-base">
            Повелете, доколку имате прашања, со задоволство ќе одговорам.
          </p>
        </Reveal>
      </div>
    </SlideShell>
  );
}
