import type { CSSProperties } from "react";
import { MORPH, PETAL_COLORS, PETAL_PATHS, RING_LOOK, type Box } from "@/lib/morph";
import type { SlideKind } from "@/lib/presentation";
import { cn } from "@/lib/utils";

function styleOf(b: Box): CSSProperties {
  return {
    left: `${b.x}%`,
    top: `${b.y}%`,
    width: `${b.w}%`,
    height: `${b.h}%`,
    opacity: b.opacity ?? 1,
    transform: b.rot ? `rotate(${b.rot}deg)` : undefined,
  };
}

function IconAtom() {
  return (
    <svg viewBox="0 0 24 24" className="size-[72%] fill-card">
      <circle cx="12" cy="12" r="2.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4.2" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-60 12 12)" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <path d="M7 3c.4 2.6 1.6 4.4 4 5.4C8.6 9.4 7.4 11.2 7 14 6.6 11.2 5.4 9.4 3 8.4 5.4 7.4 6.6 5.6 7 3Z" />
      <path d="M16 8c.35 2.3 1.4 3.9 3.6 4.8-2.2.9-3.25 2.5-3.6 4.8-.35-2.3-1.4-3.9-3.6-4.8 2.2-.9 3.25-2.5 3.6-4.8Z" />
      <circle cx="10.5" cy="18.5" r="1.4" />
    </svg>
  );
}

function IconBank() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <path d="M12 3 3 8.2v1.6h18V8.2L12 3Z" />
      <rect x="5" y="11" width="2.4" height="7" rx="0.4" />
      <rect x="10.8" y="11" width="2.4" height="7" rx="0.4" />
      <rect x="16.6" y="11" width="2.4" height="7" rx="0.4" />
      <rect x="3.2" y="18.6" width="17.6" height="2.2" rx="0.5" />
    </svg>
  );
}

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <rect x="4" y="13" width="4" height="8" rx="0.8" />
      <rect x="10" y="8" width="4" height="13" rx="0.8" />
      <rect x="16" y="4" width="4" height="17" rx="0.8" />
    </svg>
  );
}

function IconBook() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <path d="M5 4.2A2.2 2.2 0 0 1 7.2 2H20v18H7.2A2.2 2.2 0 0 0 5 22.2V4.2Z" />
      <path d="M7.4 2.4v17.2" fill="none" stroke="rgb(2 136 209)" strokeWidth="1.4" />
    </svg>
  );
}

function IconShelf() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <rect x="3" y="4" width="4.2" height="14" rx="0.7" />
      <rect x="8" y="6" width="3.6" height="12" rx="0.7" />
      <rect x="12.4" y="5" width="4" height="13" rx="0.7" />
      <rect x="17" y="7" width="3.6" height="11" rx="0.7" />
      <rect x="2.5" y="18.4" width="19" height="2" rx="0.5" />
    </svg>
  );
}

function IconTarget() {
  return (
    <svg viewBox="0 0 24 24" className="size-[72%] fill-card">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.4" fill="rgb(2 136 209)" />
      <circle cx="12" cy="12" r="2.2" fill="currentColor" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="size-[70%] fill-card">
      <rect x="3" y="3" width="18" height="18" rx="3.2" />
      <path d="M7.2 12.2 10.4 15.4 16.8 8.6" fill="none" stroke="rgb(2 136 209)" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = [IconAtom, IconSpark, IconBank, IconChart, IconBook, IconShelf, IconTarget, IconCheck];

export function MorphLayer({ kind }: { kind: SlideKind }) {
  const s = MORPH[kind];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div
        className={cn("morph-el inset-0 h-full w-full", s.bg === "toc" && "bg-accent-deep")}
        style={{
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
          background:
            s.bg === "seed"
              ? "radial-gradient(circle at 50% 48%, #ffffff 0%, #e8f6fd 42%, #d7effc 100%)"
              : s.bg === "burst"
                ? "radial-gradient(circle at 50% 42%, #ffffff 0%, #e3f4fc 55%, rgb(3 169 244 / 0.18) 100%)"
                : s.bg === "cover"
                  ? "linear-gradient(180deg, #f7fcff 0%, #e7f4fc 100%)"
                  : s.bg === "toc"
                    ? "var(--color-accent-deep)"
                    : s.bg === "thanks"
                      ? "radial-gradient(circle at 50% 46%, #ffffff 0%, #eaf6fd 48%, #d4eefb 100%)"
                      : "var(--color-paper)",
        }}
      />

      <div
        className="morph-el"
        style={{
          ...styleOf(s.card),
          borderRadius: kind === "toc" ? 0 : "2.4cqw",
          background:
            kind === "toc"
              ? "transparent"
              : "linear-gradient(180deg, #03a9f4 0%, #0288d1 100%)",
          boxShadow: kind === "cover" || kind === "burst" ? "var(--shadow-soft)" : "none",
        }}
      />

      <div
        className="morph-el origin-left"
        style={{
          ...styleOf(s.line),
          height: 2,
          background:
            kind === "seed"
              ? "linear-gradient(90deg, rgb(10 37 64 / 0.35), transparent)"
              : "linear-gradient(90deg, rgb(3 169 244 / 0), rgb(3 169 244 / 0.55), transparent)",
        }}
      />

      {s.rings.map((r, i) => {
        const look = RING_LOOK[i];
        const isCore = i === 5 || i === 6;
        return (
          <div
            key={`ring-${i}`}
            className="morph-el rounded-full"
            style={{
              ...styleOf(r),
              border: look.width ? `${look.width * 0.08}cqw solid ${look.color}` : "none",
              background: look.fill,
              boxShadow:
                isCore && (kind === "cover" || kind === "toc" || kind === "burst" || kind === "thanks")
                  ? "0 10px 28px rgb(10 37 64 / 0.22)"
                  : i === 1 || i === 2
                    ? "0 0 18px rgb(3 169 244 / 0.18)"
                    : "none",
            }}
          />
        );
      })}

      {s.diamonds.map((d, i) => (
        <div
          key={`dia-${i}`}
          className="morph-el rounded-[18%]"
          style={{
            ...styleOf(d),
            background: kind === "seed" ? "#cfd8dc" : "var(--color-accent)",
            boxShadow: "var(--shadow-ring)",
          }}
        />
      ))}

      {s.petals.map((p, i) => {
        const path = PETAL_PATHS[i];
        return (
          <svg
            key={`petal-${i}`}
            viewBox={path.vb}
            preserveAspectRatio="xMidYMid meet"
            className="morph-el overflow-visible"
            style={styleOf(p)}
          >
            <path d={path.d} fill={PETAL_COLORS[i]} />
          </svg>
        );
      })}

      {s.icons.map((ic, i) => {
        const Icon = ICONS[i];
        return (
          <div
            key={`ico-${i}`}
            className="morph-el flex items-center justify-center text-card"
            style={styleOf(ic)}
          >
            <Icon />
          </div>
        );
      })}
    </div>
  );
}
