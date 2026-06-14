import { useRef } from "react";
import {
  UserPlus,
  LogIn,
  Home as HomeIcon,
  Search,
  ListFilter,
  Info,
  CalendarCheck,
  CreditCard,
  QrCode,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import PhoneMockup from "../components/PhoneMockup";

const steps = [
  { icon: UserPlus, key: "register", title: "Регистрација", desc: "Брзо креирање профил со основни податоци." },
  { icon: LogIn, key: "login", title: "Најава", desc: "Безбедна најава и пристап до сметката." },
  { icon: HomeIcon, key: "home", title: "Почетен екран", desc: "Преглед на мапа со паркинзи во близина." },
  { icon: Search, key: "search", title: "Пребарување", desc: "Пребарување по локација, цена и достапност." },
  { icon: ListFilter, key: "results", title: "Резултати", desc: "Листа и мапа на сите достапни места." },
  { icon: Info, key: "details", title: "Детали за паркинг", desc: "Цена, локација, рецензии и достапност." },
  { icon: CalendarCheck, key: "reservation", title: "Резервација", desc: "Избор на термин и потврда на резервацијата." },
  { icon: CreditCard, key: "payment", title: "Плаќање", desc: "Брзо и безбедно плаќање во апликацијата." },
  { icon: QrCode, key: "qr-ticket", title: "QR билет", desc: "Генерирање билет за влез на паркингот." },
];

export default function AppShowcaseDriver() {
  const scrollerRef = useRef(null);

  const scroll = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="app-driver" className="relative bg-bg py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow="07 · Апликацијата"
            title="Целосниот пат на возачот"
            subtitle="Од регистрација до влез на паркингот — секој екран е дизајниран да биде брз, јасен и интуитивен."
          />
          <div className="flex gap-3">
            <button
              onClick={() => scroll(-1)}
              aria-label="Претходно"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Следно"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-sm transition hover:bg-slate-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <Reveal direction="up" delay={0.1}>
          <div
            ref={scrollerRef}
            className="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map(({ icon: Icon, key, title, desc }, i) => (
              <div
                key={key}
                className="flex w-[260px] shrink-0 snap-start flex-col items-center gap-5 rounded-[2rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-extrabold text-primary">
                  {i + 1}
                </span>
                <PhoneMockup
                  src={`/assets/driver/${key}.png`}
                  alt={`ParkPal — ${title}`}
                  label={title}
                  size="sm"
                />
                <div>
                  <div className="mb-2 flex items-center justify-center gap-2">
                    <Icon size={16} className="text-primary" strokeWidth={2.2} />
                    <h3 className="font-display text-base font-bold text-ink">{title}</h3>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* progress dots */}
        <div className="mt-4 flex justify-center gap-1.5">
          {steps.map((s) => (
            <span key={s.key} className="h-1.5 w-6 rounded-full bg-slate-200" />
          ))}
        </div>
      </div>
    </section>
  );
}
