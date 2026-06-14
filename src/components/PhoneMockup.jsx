import { SmartImage } from "./Smart";

export default function PhoneMockup({ src, alt, label, className = "", size = "md" }) {
  const sizes = {
    xs: "max-w-[110px] sm:max-w-[200px]",
    sm: "max-w-[150px] sm:max-w-[200px]",
    md: "max-w-[170px] sm:max-w-[260px]",
    lg: "max-w-[220px] sm:max-w-[320px]",
    xl: "max-w-[260px] sm:max-w-[380px]",
  };

  return (
    <div className={`phone-frame w-full ${sizes[size]} ${className}`}>
      <div className="phone-frame__notch" />
      <div className="phone-frame__screen">
        <SmartImage src={src} alt={alt} label={label} />
      </div>
    </div>
  );
}
