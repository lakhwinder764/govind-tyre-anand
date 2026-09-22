"use client";

export function AmbientField() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="pulse-glow absolute -left-24 top-24 h-72 w-72 rounded-full bg-copper/20 blur-3xl" />
      <div className="pulse-glow absolute right-0 top-40 h-96 w-96 rounded-full bg-[#5a3a16]/40 blur-3xl [animation-delay:1.4s]" />
      <div className="drift absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-copper/10 blur-3xl" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="particle absolute bottom-0 h-1 w-1 rounded-full bg-copper/70"
          style={{
            left: `${6 + i * 6.5}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}
