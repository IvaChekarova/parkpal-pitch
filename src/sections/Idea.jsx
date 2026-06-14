import { AlertTriangle, Lightbulb, Search, Rocket, Home } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const steps = [
  {
    icon: AlertTriangle,
    title: "Проблем",
    desc: "Возачите губат време барајќи паркинг, додека приватни места стојат празни и неискористени.",
  },
  {
    icon: Lightbulb,
    title: "Идеја",
    desc: "Платформа која во реално време ги поврзува возачите со достапни паркинг места — јавни и приватни.",
  },
  {
    icon: Search,
    title: "Истражување",
    desc: "Анализа на корисничките потреби, постоечки решенија и технологии — мобилни, IoT и cloud системи.",
  },
  {
    icon: Rocket,
    title: "ParkPal",
    desc: "Функционален MVP — паметна marketplace платформа за паркинг простор, спремна за реален свет.",
  },
];

export default function Idea() {
  return (
    <section id="idea" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="02 · Идејата"
          title="Од проблем до решение"
          subtitle="Патот до ParkPal започна со едно прашање и заврши со конкретна, функционална платформа."
        />

        <div className="relative mt-20">
          {/* connecting line */}
          <div className="absolute left-1/2 top-10 hidden h-[2px] w-[calc(100%-8rem)] -translate-x-1/2 bg-gradient-to-r from-primary/10 via-primary/40 to-secondary/40 lg:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} direction="up" delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-xl shadow-primary/25">
                    <Icon size={30} strokeWidth={2} />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-extrabold text-primary shadow-md">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink">{title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal direction="up" delay={0.3}>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-10 shadow-sm sm:p-14 lg:grid-cols-[auto_1fr] lg:gap-16">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-secondary/10 text-secondary">
              <Home size={34} strokeWidth={2} />
            </div>
            <div>
              <span className="section-eyebrow text-secondary">Инспирација</span>
              <h3 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
                „Airbnb за паркинг места“
              </h3>
              <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-500 sm:text-lg">
                Airbnb го промени светот овозможувајќи секој дом да стане достапен за издавање.
                ParkPal го применува истиот marketplace принцип на паркинг просторот — секое
                празно место, јавно или приватно, станува ресурс кој може да се пронајде и
                резервира во неколку допири.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
