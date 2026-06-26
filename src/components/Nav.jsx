import { useCallback, useEffect, useState } from "react";
import { SLIDES } from "../slides";

export default function Nav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const container = document.getElementById("slides");
    if (!container) return;

    const onScroll = () => {
      const idx = Math.round(container.scrollTop / container.clientHeight);
      setActive(Math.min(Math.max(idx, 0), SLIDES.length - 1));
    };
    onScroll();
    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = useCallback((i) => {
    const container = document.getElementById("slides");
    const target = container?.children[i];
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        goTo(Math.min(active + 1, SLIDES.length - 1));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(Math.max(active - 1, 0));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const dark = SLIDES[active].theme !== "light";

  return (
    <>
      <div
        className={`pointer-events-none fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-b transition-colors duration-500 ${
          dark ? "from-ink/60" : "from-bg/80"
        } to-transparent`}
      />

      <header
        className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex items-center px-6 py-5 transition-colors duration-500 sm:px-10 ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        <div className="flex items-center">
          <img
            src="/assets/brand/parkpal-logo.svg"
            alt="ParkPal"
            className={`h-10 w-auto drop-shadow-sm transition duration-500 ${dark ? "brightness-0 invert" : ""}`}
          />
        </div>
      </header>
    </>
  );
}
