export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-medium uppercase tracking-[0.25em] ${
            light ? "text-stone" : "text-clay-dark"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl leading-tight sm:text-4xl ${light ? "text-paper" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? "text-stone" : "text-slate"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
