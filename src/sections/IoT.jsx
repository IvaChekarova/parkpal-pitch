import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import SlideShell from "../components/SlideShell";

const stages = ["Возило", "IR сензор", "Arduino", "Servo + LED"];

function IoTAnimation() {
  return (
    <svg viewBox="0 0 920 360" className="h-auto w-full" role="img" aria-label="Анимиран IoT процес за ParkPal рампа">
      <style>{`
        .iot-car { animation: car-flow 7.4s ease-in-out infinite; transform-box: fill-box; transform-origin: left center; }
        .iot-sensor-ring { animation: sensor-pulse 7.4s ease-in-out infinite; transform-box: fill-box; transform-origin: center; }
        .iot-signal-one { animation: signal-one 7.4s ease-in-out infinite; stroke-dasharray: 18 260; stroke-dashoffset: 260; }
        .iot-signal-two { animation: signal-two 7.4s ease-in-out infinite; stroke-dasharray: 18 260; stroke-dashoffset: 260; }
        .iot-board-glow { animation: board-glow 7.4s ease-in-out infinite; }
        .iot-gate-arm { animation: gate-open 7.4s ease-in-out infinite; transform-box: fill-box; transform-origin: 24px 16px; }
        .iot-led-red { animation: led-red 7.4s ease-in-out infinite; }
        .iot-led-green { animation: led-green 7.4s ease-in-out infinite; }

        @keyframes car-flow {
          0%, 8% { transform: translateX(0) scale(0.82); opacity: 1; }
          18%, 72% { transform: translateX(78px) scale(0.82); opacity: 1; }
          88%, 92% { transform: translateX(664px) scale(0.82); opacity: 1; }
          94%, 97% { transform: translateX(664px) scale(0.82); opacity: 0; }
          98%, 100% { transform: translateX(0) scale(0.82); opacity: 1; }
        }

        @keyframes sensor-pulse {
          0%, 17%, 31%, 100% { opacity: 0; transform: scale(0.8); }
          21% { opacity: 0.8; transform: scale(1.25); }
          26% { opacity: 0.25; transform: scale(1.65); }
        }

        @keyframes signal-one {
          0%, 28% { stroke-dashoffset: 260; opacity: 0; }
          31% { opacity: 1; }
          40% { stroke-dashoffset: 0; opacity: 1; }
          45%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes board-glow {
          0%, 39%, 52%, 100% { opacity: 0.12; }
          44%, 49% { opacity: 0.75; }
        }

        @keyframes signal-two {
          0%, 50% { stroke-dashoffset: 260; opacity: 0; }
          53% { opacity: 1; }
          63% { stroke-dashoffset: 0; opacity: 1; }
          68%, 100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes gate-open {
          0%, 62% { transform: rotate(0deg); }
          72%, 87% { transform: rotate(-62deg); }
          96%, 100% { transform: rotate(0deg); }
        }

        @keyframes led-red {
          0%, 62%, 96%, 100% { opacity: 1; }
          68%, 90% { opacity: 0.2; }
        }

        @keyframes led-green {
          0%, 62%, 96%, 100% { opacity: 0.2; }
          68%, 90% { opacity: 1; }
        }
      `}</style>

      <defs>
        <linearGradient id="iotBlue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#1B579D" />
          <stop offset="100%" stopColor="#1B579D" />
        </linearGradient>
        <linearGradient id="iotGreen" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#16A34A" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-30%" width="140%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#0F172A" floodOpacity="0.14" />
        </filter>
      </defs>

      <rect x="26" y="54" width="868" height="218" rx="34" fill="#F8FAFC" stroke="#E2E8F0" />
      <g transform="translate(412 22)" filter="url(#softShadow)">
        <rect x="0" y="0" width="96" height="40" rx="20" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
        <circle className="iot-led-red" cx="31" cy="20" r="11" fill="#EF4444" />
        <circle className="iot-led-green" cx="65" cy="20" r="11" fill="#16A34A" />
      </g>
      <path d="M92 222H806" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" strokeDasharray="12 16" />

      <g className="iot-car" filter="url(#softShadow)">
        <rect x="70" y="168" width="102" height="42" rx="18" fill="url(#iotBlue)" />
        <path d="M82 168l20-28h40l22 28" fill="#3B82F6" />
        <rect x="100" y="147" width="20" height="17" rx="4" fill="#DBEAFE" />
        <rect x="126" y="147" width="20" height="17" rx="4" fill="#DBEAFE" />
        <circle cx="97" cy="213" r="10" fill="#0F172A" />
        <circle cx="151" cy="213" r="10" fill="#0F172A" />
        <circle cx="97" cy="213" r="4" fill="#94A3B8" />
        <circle cx="151" cy="213" r="4" fill="#94A3B8" />
      </g>

      <g transform="translate(252 124)">
        <circle className="iot-sensor-ring" cx="42" cy="50" r="34" fill="none" stroke="#1B579D" strokeWidth="4" />
        <rect x="18" y="14" width="48" height="72" rx="18" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="3" />
        <circle cx="42" cy="38" r="10" fill="#1B579D" />
        <path d="M29 62h26M35 72h14" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </g>

      <path d="M344 173 C392 128 435 128 484 173" fill="none" stroke="#1B579D" strokeWidth="5" strokeLinecap="round" opacity="0.16" />
      <path className="iot-signal-one" d="M344 173 C392 128 435 128 484 173" fill="none" stroke="#1B579D" strokeWidth="5" strokeLinecap="round" />

      <g transform="translate(488 106)" filter="url(#softShadow)">
        <rect className="iot-board-glow" x="-10" y="-10" width="154" height="112" rx="28" fill="#1B579D" />
        <rect x="0" y="0" width="134" height="92" rx="24" fill="#FFFFFF" stroke="#BFDBFE" strokeWidth="3" />
        <rect x="23" y="24" width="46" height="36" rx="8" fill="#1B579D" />
        <path d="M88 24h22M88 40h22M88 56h22M20 72h94" stroke="#60A5FA" strokeWidth="5" strokeLinecap="round" />
        <circle cx="28" cy="18" r="4" fill="#16A34A" />
        <circle cx="44" cy="18" r="4" fill="#F59E0B" />
      </g>

      <path d="M632 173 C676 128 720 128 760 173" fill="none" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" opacity="0.16" />
      <path className="iot-signal-two" d="M632 173 C676 128 720 128 760 173" fill="none" stroke="#16A34A" strokeWidth="5" strokeLinecap="round" />

      <g transform="translate(760 132)" filter="url(#softShadow)">
        <rect x="0" y="48" width="32" height="88" rx="10" fill="#1B579D" />
        <g className="iot-gate-arm">
          <rect x="20" y="0" width="126" height="18" rx="9" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
          <rect x="42" y="4" width="18" height="10" rx="5" fill="#EF4444" />
          <rect x="78" y="4" width="18" height="10" rx="5" fill="#F59E0B" />
          <rect x="114" y="4" width="18" height="10" rx="5" fill="#EF4444" />
        </g>
      </g>
    </svg>
  );
}

export default function IoT() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const slide = document.getElementById("iot");
    if (!slide) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimationKey((key) => key + 1);
        }
      },
      { threshold: 0.65 }
    );

    observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  return (
    <SlideShell id="iot" theme="light">
      <SectionHeading
        eyebrow="07 · IoT прототип"
        title="Од софтвер до физички свет"
        subtitle="Физички прототип со Arduino кој детектира возило и автоматски реагира — рампа и статусни LED индикатори."
      />

      <Reveal direction="up" delay={0.1}>
        <div className="mx-auto mt-6 max-w-5xl rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:mt-12 sm:rounded-[2.5rem] sm:p-8">
          <IoTAnimation key={animationKey} />
          <div className="mt-2 grid grid-cols-4 gap-2 text-center text-[10px] font-semibold text-slate-500 sm:text-sm">
            {stages.map((stage) => (
              <span key={stage}>{stage}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </SlideShell>
  );
}
