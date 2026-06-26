import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import PhoneMockup from "../components/PhoneMockup";
import Reveal from "../components/Reveal";
import SlideShell from "../components/SlideShell";

export default function Hero() {
  return (
    <SlideShell id="hero" theme="light" className="pt-12 sm:pt-16">
      {/* Background decoration */}
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_30%,transparent_100%)]" />
      <motion.div
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-secondary/15 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Text content */}
        <div className="flex flex-col items-start gap-4 text-left sm:gap-6">
          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              Дипломска презентација · Софтверско инженерство и иновации
            </span>
          </Reveal>

          <Reveal direction="up" delay={0.08}>
            <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl">
              <span className="text-gradient">ParkPal</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.16}>
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-2xl">
              Паметна апликација за <span className="font-semibold text-ink">наоѓање</span>,{" "}
              <span className="font-semibold text-ink">резервирање</span> и{" "}
              <span className="font-semibold text-ink">споделување</span> паркинг.
            </p>
          </Reveal>

          <Reveal direction="up" delay={0.24}>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-sm">
              {["Најди", "Резервирај", "Паркирај"].map((word, i) => (
                <span key={word} className="flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-ink sm:text-xl">{word}</span>
                  {i < 2 && <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.32}>
            <div className="mt-1 flex flex-col gap-1">
              <span className="font-display text-lg font-bold text-ink">Ива Чекарова</span>
              <span className="text-sm text-slate-500">Софтверско инженерство и иновации</span>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.4}>
            <div className="mt-1 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/75 px-3 py-2 shadow-sm backdrop-blur">
              <img
                src="/assets/college/brainster-next-symbol.svg"
                alt="Brainster Next"
                className="h-8 w-8"
              />
              <img
                src="/assets/college/brainster-next-wordmark.png"
                alt="Brainster Next"
                className="h-8 w-auto rounded-lg"
              />
            </div>
          </Reveal>
        </div>

        {/* Phone mockups */}
        <div className="relative flex h-[260px] items-center justify-center sm:h-[460px] lg:h-[560px]">
          <motion.div
            className="absolute left-1/2 top-1/2 z-10"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="animate-float">
              <div className="-translate-x-1/2 -translate-y-1/2 -rotate-3">
                <PhoneMockup
                  src="/assets/cover/home-latest.png"
                  alt="ParkPal почетен екран со мапа"
                  label="ParkPal · Почетен екран"
                  size="lg"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-[2%] bottom-[2%] z-20 sm:right-[-2%]"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
          >
            <div className="animate-float-slow">
              <div className="rotate-6">
                <PhoneMockup
                  src="/assets/cover/qr-ticket-latest.png"
                  alt="QR билет за паркирање"
                  label="ParkPal · QR билет"
                  size="sm"
                />
              </div>
            </div>
          </motion.div>

          {/* Floating chips */}
          <motion.div
            className="glass absolute left-0 top-[18%] z-30 hidden items-center gap-2 rounded-2xl px-4 py-2.5 shadow-lg sm:left-[-2%] sm:flex"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <MapPin size={16} />
            </span>
            <div className="text-left">
              <p className="text-xs font-bold text-ink">128 слободни места</p>
              <p className="text-[11px] text-slate-500">во близина</p>
            </div>
          </motion.div>

          <motion.div
            className="glass absolute right-[8%] bottom-[28%] z-30 hidden items-center gap-2 rounded-2xl px-4 py-2.5 shadow-lg sm:right-[6%] sm:flex"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Navigation size={16} />
            </span>
            <div className="text-left">
              <p className="text-xs font-bold text-ink">2 мин. до целта</p>
              <p className="text-[11px] text-slate-500">резервирано</p>
            </div>
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
}
