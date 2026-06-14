import { Fragment } from "react";
import { ArrowRight, Car, Cpu, Lightbulb, ScanLine } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const workflow = [
  { icon: Car, label: "Возило пристигнува" },
  { icon: ScanLine, label: "IR сензор детектира" },
  { icon: Cpu, label: "Arduino обработува сигнал" },
  { icon: Lightbulb, label: "Servo мотор + LED реагираат" },
];

export default function IoT() {
  return (
    <SlideShell id="iot" theme="light">
      <SectionHeading
        eyebrow="08 · IoT прототип"
        title="Од софтвер до физички свет"
        subtitle="Физички прототип со Arduino кој детектира возило и автоматски реагира — рампа и статусни LED индикатори."
      />

      <Reveal direction="up" delay={0.1}>
        <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:mt-16 sm:flex-row sm:justify-between sm:gap-2 sm:rounded-[2.5rem] sm:p-10">
          {workflow.map(({ icon: Icon, label }, i) => (
            <Fragment key={label}>
              <div className="flex items-center gap-4 sm:flex-col sm:gap-4 sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary sm:h-20 sm:w-20 sm:rounded-2xl">
                  <Icon size={20} strokeWidth={2} className="sm:hidden" />
                  <Icon size={32} strokeWidth={2} className="hidden sm:block" />
                </div>
                <p className="max-w-[160px] text-sm font-semibold text-ink sm:text-base">{label}</p>
              </div>
              {i < workflow.length - 1 && (
                <ArrowRight className="hidden shrink-0 text-slate-300 sm:block" size={26} />
              )}
            </Fragment>
          ))}
        </div>
      </Reveal>
    </SlideShell>
  );
}
