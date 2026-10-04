import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { ChevronLeft, ChevronRight, Grid2x2, Maximize, X } from "lucide-react";
import { SLIDES, SLIDE_COUNT, TOC } from "@/lib/presentation";
import { Button } from "@/components/ui/button";
import { MorphLayer } from "./MorphLayer";
import { SlideContent } from "./Slides";
import { cn } from "@/lib/utils";

function slideLabel(i: number) {
  const s = SLIDES[i];
  if (s.title) return s.title;
  if (s.layout === "toc") return "Mục lục";
  if (s.layout === "cover") return "Bìa";
  if (s.layout === "thanks") return "Cảm ơn";
  if (s.layout === "team") return "Thành viên";
  return "Mở đầu";
}

export function Deck() {
  const [index, setIndex] = useState(0);
  const [overview, setOverview] = useState(false);
  const [hint, setHint] = useState(true);
  const touchX = useRef<number | null>(null);
  const auto = useRef(true);

  const slide = SLIDES[index];
  const go = useCallback((next: number) => {
    auto.current = false;
    setIndex(Math.max(0, Math.min(SLIDE_COUNT - 1, next)));
    setHint(false);
  }, []);

  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  useEffect(() => {
    if (!auto.current) return;
    if (index >= 3) return;
    const wait = index === 0 ? 1600 : index === 1 ? 1800 : 2400;
    const t = window.setTimeout(() => {
      if (!auto.current) return;
      setIndex((i) => Math.min(3, i + 1));
    }, wait);
    return () => window.clearTimeout(t);
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(SLIDE_COUNT - 1);
      } else if (e.key === "Escape") {
        setOverview(false);
      } else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") {
        setOverview((v) => !v);
      } else if (e.key === "f" || e.key === "F") {
        if (document.fullscreenElement) void document.exitFullscreen();
        else void document.documentElement.requestFullscreen?.();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, next, prev]);

  const onStageClick = (e: MouseEvent<HTMLDivElement>) => {
    const t = e.target as HTMLElement;
    if (t.closest("[data-nav], button, a")) return;
    if (overview) return;
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width * 0.22) prev();
    else next();
  };

  return (
    <div className="relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden bg-ink">
      <div
        className="stage relative isolate overflow-hidden bg-paper shadow-[0_30px_80px_rgb(0_0_0_/_0.45)] h-dvh w-dvw md:h-auto md:w-[min(100vw,calc(100dvh*16/9))] md:rounded-sm md:aspect-video"
        onClick={onStageClick}
        onTouchStart={(e) => {
          touchX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) < 48) return;
          if (dx < 0) next();
          else prev();
        }}
      >
        <MorphLayer kind={slide.kind} />
        <div key={slide.id} className="absolute inset-0 z-10">
          <SlideContent slide={slide} onJump={(i) => go(i)} />
        </div>

        {hint && index === 0 ? (
          <p className="pointer-events-none absolute inset-x-0 bottom-[8%] z-20 text-center font-display text-[1.3cqw] font-semibold tracking-[0.2em] text-ink/50">
            NHÓM 13
          </p>
        ) : null}

        {overview ? (
          <div className="absolute inset-0 z-40 overflow-auto bg-ink/92 p-6" data-nav>
            <div className="mb-4 flex items-center justify-between text-card">
              <p className="font-display text-lg font-bold">Tất cả slide</p>
              <Button variant="ghost" size="icon" onClick={() => setOverview(false)} aria-label="Đóng">
                <X className="size-5" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    go(i);
                    setOverview(false);
                  }}
                  className={cn(
                    "rounded-xl p-3 text-left ring-1 ring-card/15 transition-opacity hover:opacity-90",
                    i === index ? "bg-accent-deep text-card" : "bg-card/8 text-card",
                  )}
                >
                  <p className="font-sans text-[11px] tabular-nums opacity-70">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold leading-tight">{slideLabel(i)}</p>
                </button>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2 md:grid-cols-4">
              {TOC.map((t) => (
                <button
                  key={t.n}
                  type="button"
                  className="rounded-lg bg-card/10 px-3 py-2 text-left text-card"
                  onClick={() => {
                    go(t.slideIndex);
                    setOverview(false);
                  }}
                >
                  <span className="font-display text-xs font-bold">{t.n}. {t.title}</span>
                </button>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-3 px-4 md:bottom-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-ink/70 px-2 py-1.5 text-card ring-1 ring-card/15 backdrop-blur-sm">
          <Button variant="ghost" size="icon" className="size-10" onClick={prev} aria-label="Slide trước" disabled={index === 0}>
            <ChevronLeft className="size-5" />
          </Button>
          <p className="min-w-14 text-center font-display text-xs font-semibold tabular-nums">
            {index + 1} / {SLIDE_COUNT}
          </p>
          <Button variant="ghost" size="icon" className="size-10" onClick={next} aria-label="Slide sau" disabled={index === SLIDE_COUNT - 1}>
            <ChevronRight className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            onClick={() => setOverview(true)}
            aria-label="Mục lục"
          >
            <Grid2x2 className="size-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="size-10"
            onClick={() => {
              if (document.fullscreenElement) void document.exitFullscreen();
              else void document.documentElement.requestFullscreen?.();
            }}
            aria-label="Toàn màn hình"
          >
            <Maximize className="size-4" />
          </Button>
        </div>
      </div>

      <div className="absolute inset-x-0 top-0 z-20 h-1 bg-ink/30">
        <div
          className="h-full bg-accent transition-[width] duration-500 ease-out"
          style={{ width: `${((index + 1) / SLIDE_COUNT) * 100}%` }}
        />
      </div>
    </div>
  );
}
