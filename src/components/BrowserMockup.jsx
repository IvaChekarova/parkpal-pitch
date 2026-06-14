import { SmartImage } from "./Smart";

export default function BrowserMockup({ src, alt, label, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 ${className}`}>
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 flex-1 truncate rounded-full bg-white px-3 py-1 text-center text-xs text-slate-400 ring-1 ring-slate-200">
          parkpal-admin.app
        </span>
      </div>
      <div className="aspect-video w-full">
        <SmartImage src={src} alt={alt} label={label} />
      </div>
    </div>
  );
}
