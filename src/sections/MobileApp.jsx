import { CalendarCheck, MapPinned, QrCode, Search } from "lucide-react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";
import PhoneMockup from "../components/PhoneMockup";

const screens = [
  { src: "/assets/app-flow/01-home.png", icon: MapPinned, label: "Почетен екран" },
  { src: "/assets/app-flow/02-search.png", icon: Search, label: "Пребарување" },
  { src: "/assets/app-flow/03-reservation.png", icon: CalendarCheck, label: "Резервација" },
  { src: "/assets/app-flow/04-qr-ticket.png", icon: QrCode, label: "QR билет" },
];

export default function MobileApp() {
  return (
    <SlideShell id="app" theme="light">
      <SectionHeading
        eyebrow="04 · Апликацијата"
        title="Целосниот пат на возачот"
        subtitle="Од пребарување до влез на паркингот — секој екран е брз, јасен и интуитивен."
      />

      <div className="mt-2 grid grid-cols-2 gap-2 sm:mt-8 sm:gap-6 sm:grid-cols-4">
        {screens.map(({ src, icon: Icon, label }, i) => (
          <Reveal key={label} direction="up" delay={i * 0.1}>
            <div className="flex flex-col items-center gap-1 sm:gap-3">
              <PhoneMockup src={src} alt={label} label={label} size="xs" />
              <div className="flex items-center gap-1.5 text-xs font-semibold text-ink sm:gap-2 sm:text-sm">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-7 sm:w-7">
                  <Icon size={12} strokeWidth={2.2} className="sm:hidden" />
                  <Icon size={14} strokeWidth={2.2} className="hidden sm:block" />
                </span>
                {label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SlideShell>
  );
}
