import { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * SmartImage renders an <img> but falls back to a labelled placeholder
 * if the file does not exist yet. Drop the real asset at `src` and it
 * will automatically replace the placeholder.
 */
export function SmartImage({ src, alt, label, className = "", imgClassName, dark = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const palette = dark
      ? "bg-gradient-to-br from-white/10 to-white/[0.03] text-slate-400"
      : "bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400";
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 text-center p-6 ${palette} ${className}`}
      >
        <ImageOff className="h-8 w-8" strokeWidth={1.5} />
        <p className="text-xs font-medium uppercase tracking-widest">
          {label || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={imgClassName ?? "h-full w-full object-cover"}
    />
  );
}
