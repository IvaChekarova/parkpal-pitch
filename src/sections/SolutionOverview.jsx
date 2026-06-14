import { motion } from "framer-motion";
import { ArrowLeftRight, Car, Home, MapPin, Warehouse } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

export default function SolutionOverview() {
  return (
    <SlideShell id="solution" theme="light">
      <SectionHeading
        eyebrow="02 · Решението"
        title="Еден екосистем, две страни"
        subtitle="ParkPal е дигиталниот мост помеѓу возачите кои бараат паркинг и сопствениците кои имаат слободен простор за понуда — во реално време."
      />

      <Reveal direction="up" delay={0.1}>
        <div className="mt-4 grid grid-cols-2 items-center gap-3 sm:mt-8 sm:gap-6 sm:grid-cols-3">
          {/* Driver */}
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:gap-3 sm:rounded-3xl sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-16 sm:w-16 sm:rounded-2xl">
              <Car size={20} strokeWidth={2} className="sm:hidden" />
              <Car size={28} strokeWidth={2} className="hidden sm:block" />
            </div>
            <h3 className="font-display text-sm font-bold text-ink sm:text-xl">Возач</h3>
            <p className="text-[11px] text-slate-500 sm:text-sm">Бара и резервира паркинг место преку мобилна апликација.</p>
          </div>

          {/* Owner */}
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm sm:order-3 sm:gap-3 sm:rounded-3xl sm:p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary sm:h-16 sm:w-16 sm:rounded-2xl">
              <Warehouse size={20} strokeWidth={2} className="sm:hidden" />
              <Warehouse size={28} strokeWidth={2} className="hidden sm:block" />
            </div>
            <h3 className="font-display text-sm font-bold text-ink sm:text-xl">Сопственик</h3>
            <p className="text-[11px] text-slate-500 sm:text-sm">Објавува слободен простор и управува со резервациите.</p>
          </div>

          {/* Center connector */}
          <div className="col-span-2 flex flex-col items-center gap-2 py-1 sm:order-2 sm:col-span-1 sm:gap-3 sm:py-2">
            <div className="flex w-full items-center justify-center gap-3 sm:hidden">
              <ArrowLeftRight className="text-primary" size={18} />
            </div>
            <motion.div
              className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-2xl shadow-primary/30 sm:h-24 sm:w-24 sm:rounded-[2rem]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="absolute inset-0 animate-pulse-glow rounded-2xl bg-primary/30 blur-xl sm:rounded-[2rem]" />
              <MapPin className="relative" size={20} strokeWidth={2} />
              <MapPin className="relative hidden sm:block" size={40} strokeWidth={2} />
            </motion.div>
            <span className="font-display text-sm font-extrabold text-gradient sm:text-lg">ParkPal</span>
            <div className="hidden w-full items-center justify-between sm:flex">
              <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent to-primary/40" />
              <ArrowLeftRight className="mx-2 shrink-0 text-primary" size={20} />
              <div className="h-[2px] flex-1 bg-gradient-to-l from-transparent to-secondary/40" />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal direction="up" delay={0.25}>
        <div className="mt-4 hidden grid-cols-1 items-center gap-3 overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-5 sm:grid sm:gap-6 sm:rounded-[2.5rem] sm:p-6 lg:grid-cols-[auto_1fr]">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary/10 text-secondary sm:h-14 sm:w-14 sm:rounded-3xl">
            <Home size={20} strokeWidth={2} className="sm:hidden" />
            <Home size={26} strokeWidth={2} className="hidden sm:block" />
          </div>
          <div>
            <span className="section-eyebrow text-secondary">Инспирација</span>
            <h3 className="mt-1 font-display text-base font-bold text-ink sm:mt-1 sm:text-2xl">
              „Airbnb за паркинг места“
            </h3>
            <p className="mt-1 max-w-3xl text-xs leading-relaxed text-slate-500 sm:mt-2 sm:text-base">
              Секое празно паркинг место — јавно или приватно — станува ресурс кој може да се
              пронајде и резервира за неколку допири.
            </p>
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}
