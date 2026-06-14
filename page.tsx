@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-paper text-slate antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-display text-ink;
  }

  :focus-visible {
    @apply outline-2 outline-offset-2 outline-clay;
  }
}

/* Signature architectural grid — used sparingly behind dark hero/section panels */
.bg-blueprint {
  background-image: linear-gradient(rgba(250, 248, 244, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(250, 248, 244, 0.05) 1px, transparent 1px);
  background-size: 56px 56px;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
