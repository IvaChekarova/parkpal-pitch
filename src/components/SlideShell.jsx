const THEMES = {
  light: "bg-bg text-ink",
  dark: "bg-ink text-white",
  gradient: "bg-gradient-to-br from-primary-dark via-primary to-secondary text-white",
};

export default function SlideShell({ id, theme = "light", className = "", contentClassName = "", children }) {
  return (
    <section id={id} data-theme={theme} className={`slide overflow-hidden ${THEMES[theme]} ${className}`}>
      <div className={`relative mx-auto w-full max-w-7xl px-6 sm:px-10 py-10 sm:py-16 ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
}
