import { motion } from "framer-motion";
import { FileText, Eye, GitBranch, BellRing } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import BrowserMockup from "../components/BrowserMockup";

const flow = [
  { icon: FileText, title: "Ново барање", desc: "Сопственик поднесува нов паркинг простор за преглед." },
  { icon: Eye, title: "Преглед", desc: "Администраторот ги проверува податоците, локацијата и фотографиите." },
  { icon: GitBranch, title: "Одлука", desc: "Паркингот се одобрува или се враќа за дополнителни информации." },
  { icon: BellRing, title: "Известување", desc: "Сопственикот добива нотификација за статусот на барањето." },
];

export default function AdminFlow() {
  return (
    <section id="app-admin" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="09 · Администратор"
          title="Контролна табла со целосен преглед"
          subtitle="Администраторскиот панел овозможува брз преглед, одобрување и следење на сите паркинг простори на платформата."
        />

        <Reveal direction="up" delay={0.1}>
          <BrowserMockup
            src="/assets/admin/dashboard.png"
            alt="ParkPal — администраторска контролна табла"
            label="Admin · Контролна табла"
            className="mx-auto mt-16 max-w-4xl"
          />
        </Reveal>

        {/* Approval workflow animation */}
        <Reveal direction="up" delay={0.2}>
          <div className="relative mt-24 rounded-[2.5rem] border border-slate-200 bg-white p-8 sm:p-14">
            <h3 className="mb-12 text-center font-display text-2xl font-bold text-ink">
              Тек на одобрување
            </h3>
            <div className="relative">
              {/* connecting line */}
              <div className="absolute left-0 right-0 top-7 hidden h-[2px] bg-slate-100 sm:block">
                <motion.div
                  className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/40"
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-6">
                {flow.map(({ icon: Icon, title, desc }, i) => (
                  <div key={title} className="flex flex-col items-center text-center">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-primary ring-2 ring-primary/15">
                      <Icon size={22} strokeWidth={2} />
                    </div>
                    <h4 className="mt-4 font-display text-base font-bold text-ink">{title}</h4>
                    <p className="mt-2 max-w-[200px] text-xs leading-relaxed text-slate-500">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-10 flex justify-center">
            <BrowserMockup
              src="/assets/admin/approval-queue.png"
              alt="ParkPal — листа за одобрување"
              label="Admin · Барања за одобрување"
              className="max-w-3xl"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
