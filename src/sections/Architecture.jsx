import { ArrowDown, ArrowRight, Database, Server, Smartphone } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const flow = [
  { icon: Smartphone, title: "Mobile App", desc: "React Native апликација за возачи, сопственици и администратори." },
  { icon: Server, title: "Backend API", desc: "Node.js / Express сервер со автентикација и бизнис логика." },
  { icon: Database, title: "PostgreSQL Database", desc: "Релациона база за корисници, паркинзи, резервации и плаќања." },
];

export default function Architecture() {
  return (
    <SlideShell id="architecture" theme="dark" className="bg-gradient-to-br from-[#1B579D] via-[#214A83] to-[#10213D]">
      <div className="bg-grid absolute inset-0 opacity-[0.07]" />
      <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-[#60A5FA]/20 blur-3xl" />
      <div className="absolute -bottom-48 right-[-12rem] h-[34rem] w-[34rem] rounded-full bg-secondary/12 blur-3xl" />

      <div className="relative">
        <SectionHeading
          eyebrow="06 · Архитектура"
          title="Современа, скалабилна архитектура"
          subtitle="Три јасно одделени слоеви — мобилна апликација, сервер и база на податоци."
          light
        />

        <div className="mx-auto mt-4 flex max-w-5xl flex-col items-stretch gap-1.5 sm:mt-20 sm:flex-row sm:items-center sm:gap-4">
          {flow.map(({ icon: Icon, title, desc }, i) => (
            <Reveal
              key={title}
              direction="up"
              delay={i * 0.1}
              className="flex flex-col items-center gap-1.5 sm:flex-1 sm:flex-row sm:gap-4"
            >
              <div className="glass-dark flex w-full flex-col items-center gap-2 rounded-3xl p-3 text-center sm:gap-5 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg sm:h-16 sm:w-16">
                  <Icon size={22} strokeWidth={2} className="sm:hidden" />
                  <Icon size={26} strokeWidth={2} className="hidden sm:block" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white sm:text-xl">{title}</h3>
                  <p className="mt-1 hidden text-sm leading-relaxed text-slate-400 sm:block">{desc}</p>
                </div>
              </div>
              {i < flow.length - 1 && (
                <>
                  <ArrowDown className="text-white/30 sm:hidden" size={18} />
                  <ArrowRight className="hidden shrink-0 text-white/30 sm:block" size={26} />
                </>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </SlideShell>
  );
}
