/**
 * CornerMarks — the site's signature device.
 *
 * Four small L-shaped brackets, like the crop/registration marks on an
 * architectural drawing, placed at the corners of a relatively-positioned
 * parent. Used on the hero comparison card, listing cards and feature
 * panels to reinforce the idea of something being measured, reviewed
 * and assessed — Buildify's core role.
 *
 * Usage: wrap the target element in a `relative` container and render
 * <CornerMarks /> as its last child.
 */
export function CornerMarks({ tone = "clay" }: { tone?: "clay" | "stone" }) {
  const colour = tone === "clay" ? "border-clay" : "border-stone/40";
  const base = `pointer-events-none absolute h-3 w-3 ${colour}`;

  return (
    <>
      <span className={`${base} left-0 top-0 border-l border-t`} aria-hidden="true" />
      <span className={`${base} right-0 top-0 border-r border-t`} aria-hidden="true" />
      <span className={`${base} bottom-0 left-0 border-b border-l`} aria-hidden="true" />
      <span className={`${base} bottom-0 right-0 border-b border-r`} aria-hidden="true" />
    </>
  );
}
