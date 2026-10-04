import type { ReactNode } from "react";
import {
  Brain,
  Camera,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Mic,
  ShieldAlert,
  Sparkles,
  Thermometer,
  User,
  ScanFace,
  MapPinned,
  Utensils,
  ShoppingBag,
  Eye,
  Cpu,
  AlertTriangle,
  PhoneOff,
  Quote,
} from "lucide-react";
import { COURSE, FIELD, GROUP, SUBTITLE, TEAM, TITLE, TOC } from "@/lib/presentation";
import { cn } from "@/lib/utils";
import type { Slide } from "@/lib/presentation";

function Copy({ delay, className, children }: { delay: 0 | 1 | 2 | 3 | 4 | 5; className?: string; children: ReactNode }) {
  return (
    <div className={cn(delay === 0 ? "fade-copy" : `fade-copy fade-copy-${delay}`, className)}>
      {children}
    </div>
  );
}

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("rounded-xl bg-card p-4 shadow-[var(--shadow-soft)] ring-1 ring-ink/6 md:p-5", className)}>
      {children}
    </div>
  );
}

function Photo({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-xl shadow-[var(--shadow-soft)] ring-1 ring-ink/8", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export function CoverCopy() {
  return (
    <div className="absolute inset-0 z-10 text-card">
      <div className="hidden h-full md:block">
        <Copy delay={1} className="absolute left-[8%] top-[16%] flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-card/15 ring-1 ring-card/40">
            <User className="size-5" />
          </span>
          <span>
            <span className="block font-sans text-[1.1cqw] font-semibold tracking-wide opacity-80">{GROUP}</span>
            <span className="block font-display text-[1.35cqw] font-bold uppercase tracking-[0.14em]">Thuyết trình</span>
          </span>
        </Copy>
        <Copy delay={1} className="absolute right-[8%] top-[16%] flex items-center gap-3 text-right">
          <span>
            <span className="block font-sans text-[1.1cqw] font-semibold tracking-wide opacity-80">Học phần</span>
            <span className="block font-display text-[1.35cqw] font-bold uppercase tracking-[0.08em]">CN chuyển đổi số</span>
          </span>
          <span className="flex size-10 items-center justify-center rounded-full bg-card/15 ring-1 ring-card/40">
            <GraduationCap className="size-5" />
          </span>
        </Copy>

        <Copy delay={2} className="absolute inset-x-[10%] top-[38%] text-center">
          <p className="font-display text-[3.4cqw] font-extrabold leading-[1.12] tracking-tight uppercase">{TITLE}</p>
          <p className="mx-auto mt-3 max-w-[70%] font-sans text-[1.35cqw] font-semibold leading-snug text-card/90">
            {SUBTITLE}
          </p>
        </Copy>

        <Copy delay={3} className="absolute inset-x-[16%] top-[64%] rounded-full bg-card px-6 py-3 text-center text-ink shadow-[var(--shadow-soft)]">
          <p className="font-display text-[1.05cqw] font-bold leading-tight">
            {TEAM.map((m) => m.name).join("  ·  ")}
          </p>
        </Copy>
        <Copy delay={4} className="absolute inset-x-[12%] bottom-[9%] text-center font-sans text-[1.05cqw] text-card/80">
          {FIELD}
        </Copy>
      </div>

      <div className="flex h-full flex-col justify-center gap-5 px-6 py-16 md:hidden">
        <Copy delay={1}>
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-card/80">{COURSE}</p>
          <p className="mt-2 font-display text-3xl font-extrabold uppercase leading-tight">{TITLE}</p>
          <p className="mt-3 font-sans text-sm leading-relaxed text-card/90">{SUBTITLE}</p>
        </Copy>
        <Copy delay={2} className="rounded-2xl bg-card px-4 py-3 text-ink">
          <p className="font-display text-xs font-bold uppercase tracking-[0.12em] text-accent-deep">{GROUP}</p>
          <ul className="mt-2 space-y-1">
            {TEAM.map((m) => (
              <li key={m.id} className="flex justify-between gap-3 font-sans text-sm">
                <span className="font-semibold">{m.name}</span>
                <span className="tabular-nums text-muted">{m.id}</span>
              </li>
            ))}
          </ul>
        </Copy>
        <Copy delay={3}>
          <p className="font-sans text-xs text-card/80">{FIELD}</p>
        </Copy>
      </div>
    </div>
  );
}

export function TocCopy({ onJump }: { onJump: (i: number) => void }) {
  const left = TOC.slice(0, 4);
  const right = TOC.slice(4);

  return (
    <div className="absolute inset-0 z-10 text-card">
      <Copy delay={1} className="absolute inset-x-0 top-[3.5%] text-center max-md:top-4">
        <p className="font-display text-[clamp(1.4rem,3.2cqw,3.2rem)] font-extrabold tracking-[0.18em]">MỤC LỤC</p>
      </Copy>

      <div className="absolute top-[16%] left-[3.5%] hidden w-[28%] flex-col gap-[4.8%] md:flex">
        {left.map((item, idx) => (
          <Copy key={item.n} delay={(idx + 1) as 1 | 2 | 3 | 4}>
            <button
              type="button"
              data-nav
              onClick={() => onJump(item.slideIndex)}
              className="w-full rounded-lg px-1 py-1 text-left transition-opacity hover:opacity-80"
            >
              <p className="font-display text-[2.4cqw] font-extrabold leading-none">{item.n}.</p>
              <p className="mt-1 font-display text-[1.25cqw] font-bold leading-tight">{item.title}</p>
              <p className="mt-1 font-sans text-[0.95cqw] leading-snug text-card/80">{item.blurb}</p>
            </button>
          </Copy>
        ))}
      </div>

      <div className="absolute top-[16%] right-[3.5%] hidden w-[28%] flex-col gap-[4.8%] text-right md:flex">
        {right.map((item, idx) => (
          <Copy key={item.n} delay={(idx + 1) as 1 | 2 | 3 | 4}>
            <button
              type="button"
              data-nav
              onClick={() => onJump(item.slideIndex)}
              className="ml-auto w-full rounded-lg px-1 py-1 text-right transition-opacity hover:opacity-80"
            >
              <p className="font-display text-[2.4cqw] font-extrabold leading-none">{item.n}.</p>
              <p className="mt-1 font-display text-[1.25cqw] font-bold leading-tight">{item.title}</p>
              <p className="mt-1 font-sans text-[0.95cqw] leading-snug text-card/80">{item.blurb}</p>
            </button>
          </Copy>
        ))}
      </div>

      <div className="absolute inset-x-4 top-16 bottom-20 overflow-y-auto md:hidden">
        <div className="grid grid-cols-1 gap-2">
          {TOC.map((item) => (
            <button
              key={item.n}
              type="button"
              data-nav
              onClick={() => onJump(item.slideIndex)}
              className="rounded-xl bg-card/12 px-4 py-3 text-left ring-1 ring-card/20"
            >
              <p className="font-display text-base font-bold">
                {item.n}. {item.title}
              </p>
              <p className="mt-0.5 font-sans text-xs text-card/80">{item.blurb}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Shell({
  kicker,
  title,
  children,
}: {
  kicker?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <div className="absolute inset-0 z-10 flex flex-col overflow-y-auto px-[4.5%] py-[4.2%] pb-16 text-ink max-md:px-4 max-md:pb-20 max-md:pt-5">
      {kicker ? (
        <Copy delay={0}>
          <p className="font-display text-[clamp(0.7rem,1.15cqw,0.95rem)] font-bold uppercase tracking-[0.18em] text-accent-deep">
            {kicker}
          </p>
        </Copy>
      ) : null}
      {title ? (
        <Copy delay={1}>
          <h2 className="mt-1 font-display text-[clamp(1.25rem,2.55cqw,2.7rem)] font-extrabold leading-[1.15] tracking-tight">
            {title}
          </h2>
        </Copy>
      ) : null}
      <div className="mt-[2.2%] min-h-0 flex-1">{children}</div>
    </div>
  );
}

function TeamSlide() {
  return (
    <Shell kicker="Thành viên" title="Nhóm 13">
      <div className="grid h-full grid-cols-1 gap-3 md:grid-cols-5">
        {TEAM.map((m, i) => (
          <Copy key={m.id} delay={(Math.min(i + 1, 5) as 1 | 2 | 3 | 4 | 5)} className="h-full">
            <Card className="flex h-full flex-col items-center justify-center text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-mist font-display text-[1.6cqw] font-extrabold text-accent-deep">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 font-display text-[1.25cqw] font-bold leading-tight">{m.name}</p>
              <p className="mt-2 font-sans text-[1.05cqw] tabular-nums text-muted">{m.id}</p>
            </Card>
          </Copy>
        ))}
      </div>
    </Shell>
  );
}

function DefineSlide() {
  const caps = [
    { icon: GraduationCap, t: "Học tập", d: "Thu nhận & tiếp thu mẫu dữ liệu" },
    { icon: Brain, t: "Suy nghĩ & giải quyết", d: "Phân tích logic và bài toán" },
    { icon: Eye, t: "Nhận thức", d: "Thị giác, giọng nói và ngôn ngữ" },
    { icon: Cpu, t: "Tự động hóa", d: "Vận hành liên tục, chính xác cao" },
  ];
  return (
    <Shell kicker="01  ·  Khái niệm" title="Trí tuệ nhân tạo là gì?">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <Copy delay={2} className="md:col-span-7">
          <Card className="h-full">
            <p className="font-display text-[1.05cqw] font-bold uppercase tracking-[0.14em] text-accent-deep">
              Định nghĩa cốt lõi
            </p>
            <p className="mt-3 font-sans text-[1.35cqw] leading-relaxed text-ink-soft">
              Trí tuệ nhân tạo (AI) là ngành khoa học máy tính hướng đến việc tạo ra hệ thống máy móc có khả
              năng mô phỏng tư duy con người: tiếp nhận dữ liệu, học hỏi quy luật, suy luận logic và tự đưa ra
              quyết định.
            </p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-lg bg-mist px-4 py-3">
                <p className="font-display text-[1.05cqw] font-bold text-navy">1950 · Turing</p>
                <p className="mt-1 font-sans text-[1.05cqw] leading-snug text-muted">
                  “Máy móc có suy nghĩ được không?” — phép thử Turing Test.
                </p>
              </div>
              <div className="rounded-lg bg-mist px-4 py-3">
                <p className="font-display text-[1.05cqw] font-bold text-navy">1956 · Dartmouth</p>
                <p className="mt-1 font-sans text-[1.05cqw] leading-snug text-muted">
                  John McCarthy chính thức đặt thuật ngữ Artificial Intelligence.
                </p>
              </div>
            </div>
          </Card>
        </Copy>
        <div className="grid grid-rows-4 gap-2.5 md:col-span-5">
          {caps.map((c, i) => (
            <Copy key={c.t} delay={(Math.min(i + 2, 5) as 2 | 3 | 4 | 5)}>
              <div className="flex h-full items-center gap-3 rounded-xl bg-card px-4 ring-1 ring-ink/6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-mist text-accent-deep">
                  <c.icon className="size-5" />
                </span>
                <div>
                  <p className="font-display text-[1.25cqw] font-bold">{c.t}</p>
                  <p className="font-sans text-[1.05cqw] text-muted">{c.d}</p>
                </div>
              </div>
            </Copy>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function NestedSlide() {
  return (
    <Shell kicker="01  ·  Bản chất" title="AI hoạt động như thế nào?">
      <div className="grid h-full grid-cols-1 items-center gap-6 md:grid-cols-12">
        <Copy delay={2} className="flex items-center justify-center md:col-span-5">
          <div className="relative mx-auto aspect-square w-[min(86%,400px)]">
            <div className="absolute inset-0 rounded-full bg-accent/20 ring-[0.55cqw] ring-accent/35" />
            <div className="absolute inset-[16%] rounded-full bg-navy/20 ring-[0.55cqw] ring-navy/40" />
            <div className="absolute inset-[36%] flex items-center justify-center rounded-full bg-navy-deep text-card shadow-[var(--shadow-soft)]">
              <span className="text-center">
                <p className="font-display text-[clamp(0.95rem,1.7cqw,1.7rem)] font-extrabold leading-none">DL</p>
                <p className="mt-1 font-sans text-[clamp(0.6rem,0.85cqw,0.85rem)] text-card/75">Học sâu</p>
              </span>
            </div>
            <p className="absolute left-1/2 top-[6%] -translate-x-1/2 font-display text-[clamp(0.65rem,1cqw,1rem)] font-bold text-accent-deep">
              AI
            </p>
            <p className="absolute left-1/2 top-[22%] -translate-x-1/2 font-display text-[clamp(0.6rem,0.9cqw,0.9rem)] font-bold text-navy">
              ML
            </p>
          </div>
        </Copy>
        <div className="flex flex-col gap-3 md:col-span-7">
          {[
            {
              tag: "AI",
              t: "Artificial Intelligence",
              d: "Vòng tròn lớn nhất — khái niệm chung về máy móc thông minh.",
            },
            {
              tag: "ML",
              t: "Machine Learning",
              d: "Tập con của AI — máy tự học từ dữ liệu mà không cần lập trình từng dòng lệnh.",
            },
            {
              tag: "DL",
              t: "Deep Learning",
              d: "Tập con của ML — mạng nơ-ron nhân tạo nhiều lớp, xử lý ảnh, giọng nói, video.",
            },
          ].map((row, i) => (
            <Copy key={row.t} delay={(i + 2) as 2 | 3 | 4}>
              <Card className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-mist font-display text-[1.15cqw] font-extrabold text-accent-deep">
                  {row.tag}
                </span>
                <div>
                  <p className="font-display text-[1.4cqw] font-bold">{row.t}</p>
                  <p className="mt-1 font-sans text-[1.15cqw] leading-snug text-ink-soft">{row.d}</p>
                </div>
              </Card>
            </Copy>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function EvolveSlide() {
  const cols = [
    {
      lv: "Cấp 1 · Hiện nay",
      t: "Narrow AI",
      d: "Thực hiện tốt một nhiệm vụ cụ thể đã được lập trình trước.",
      ex: "FaceID, Google Dịch, gợi ý YouTube",
      tone: "bg-accent text-card",
    },
    {
      lv: "Cấp 2 · Nghiên cứu",
      t: "General AI / AGI",
      d: "Hiểu, tự học và giải quyết bất kỳ nhiệm vụ nào con người làm được.",
      ex: "Chưa đạt — đích OpenAI, DeepMind theo đuổi",
      tone: "bg-navy text-card",
    },
    {
      lv: "Cấp 3 · Lý thuyết",
      t: "Superintelligence",
      d: "Năng lực trí tuệ vượt xa bộ não người trên mọi phương diện.",
      ex: "Kỳ vọng đột phá khoa học, quản trị, triết học",
      tone: "bg-navy-deep text-card",
    },
  ];
  return (
    <Shell kicker="02  ·  Tiến hóa" title="Phân loại AI theo mức độ">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
        {cols.map((c, i) => (
          <Copy key={c.t} delay={(i + 2) as 2 | 3 | 4} className="h-full">
            <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-ink/6">
              <div className={cn("px-5 py-4", c.tone)}>
                <p className="font-sans text-[0.95cqw] font-semibold uppercase tracking-[0.12em] opacity-80">
                  {c.lv}
                </p>
                <p className="mt-1 font-display text-[1.8cqw] font-extrabold">{c.t}</p>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="font-sans text-[1.2cqw] leading-relaxed text-ink-soft">{c.d}</p>
                <p className="mt-auto pt-4 font-sans text-[1.05cqw] font-semibold text-muted">{c.ex}</p>
              </div>
            </div>
          </Copy>
        ))}
      </div>
    </Shell>
  );
}

function DailySlide() {
  const rows = [
    {
      icon: Mic,
      t: "Trợ lý ảo cá nhân",
      d: "Siri, Google Assistant — đặt báo thức, nhắc lịch, mở nhạc, tra thời tiết bằng giọng nói.",
    },
    {
      icon: ScanFace,
      t: "Nhận diện sinh trắc học",
      d: "FaceID quét hàng nghìn điểm đặc trưng trên khuôn mặt để mở khóa máy, ngân hàng, thanh toán.",
    },
    {
      icon: MapPinned,
      t: "Định tuyến & tránh kẹt xe",
      d: "Google Maps phân tích vị trí và tốc độ thời gian thực, đề xuất lộ trình nhanh nhất.",
    },
  ];
  return (
    <Shell kicker="03  ·  Đời sống" title="AI trong sinh hoạt hàng ngày">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-3">
        {rows.map((r, i) => (
          <Copy key={r.t} delay={(i + 2) as 2 | 3 | 4} className="h-full">
            <Card className="flex h-full flex-col">
              <span className="flex size-12 items-center justify-center rounded-xl bg-mist text-accent-deep">
                <r.icon className="size-6" />
              </span>
              <p className="mt-4 font-display text-[1.55cqw] font-bold leading-tight">{r.t}</p>
              <p className="mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">{r.d}</p>
            </Card>
          </Copy>
        ))}
      </div>
    </Shell>
  );
}

function RecommendSlide() {
  return (
    <Shell kicker="03  ·  Cá nhân hóa" title="Thuật toán gợi ý nội dung">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
        <Copy delay={2} className="h-full">
          <Card className="flex h-full flex-col">
            <span className="flex size-11 items-center justify-center rounded-xl bg-mist text-accent-deep">
              <Utensils className="size-5" />
            </span>
            <p className="mt-3 font-display text-[1.6cqw] font-bold">Đặt đồ ăn thông minh</p>
            <p className="mt-2 font-sans text-[1.2cqw] leading-relaxed text-ink-soft">
              ShopeeFood, GrabFood phân tích lịch sử đặt món và thói quen theo khung giờ — gợi ý ăn sáng, cà
              phê xế, cơm trưa — kèm quán gần nhất để tối ưu giao nhận.
            </p>
            <p className="mt-auto pt-4 font-display text-[1.05cqw] font-bold text-navy">
              Đúng món · Đúng thời điểm · Đúng cự ly
            </p>
          </Card>
        </Copy>
        <Copy delay={3} className="h-full">
          <Card className="flex h-full flex-col">
            <span className="flex size-11 items-center justify-center rounded-xl bg-mist text-accent-deep">
              <ShoppingBag className="size-5" />
            </span>
            <p className="mt-3 font-display text-[1.6cqw] font-bold">Thương mại điện tử</p>
            <p className="mt-2 font-sans text-[1.2cqw] leading-relaxed text-ink-soft">
              Shopee tự đề xuất sản phẩm liên quan từ từ khóa vừa tìm hoặc mặt hàng vừa thêm vào giỏ, tạo
              trải nghiệm mua sắm liền mạch.
            </p>
            <p className="mt-auto pt-4 font-display text-[1.05cqw] font-bold text-navy">
              Học máy theo dõi hành vi từng người dùng
            </p>
          </Card>
        </Copy>
      </div>
    </Shell>
  );
}

function CaloriesSlide() {
  return (
    <Shell kicker="04  ·  Sức khỏe" title="Tính calories & theo dõi dinh dưỡng">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-12">
        <Copy delay={2} className="md:col-span-5">
          <Photo src="/slides/food.jpg" alt="Chụp ảnh món ăn để tính calories" className="h-full min-h-40" />
        </Copy>
        <div className="flex flex-col gap-3 md:col-span-7">
          <Copy delay={2}>
            <Card>
              <p className="font-display text-[1.4cqw] font-bold">Chụp ảnh / quét món ăn</p>
              <p className="mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                Cal AI, MyFitnessPal, Lose It! — chỉ cần chụp đĩa thức ăn. Computer Vision nhận diện món, ước
                tính khối lượng và tính Calories, Carbs, đạm, béo, xơ.
              </p>
            </Card>
          </Copy>
          <Copy delay={3}>
            <Card>
              <p className="font-display text-[1.4cqw] font-bold">Lời khuyên cá nhân hóa</p>
              <p className="mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                So sánh calo nạp với BMR và mục tiêu (tăng / giảm / giữ dáng). Nhắc nhở cân bằng khẩu phần theo
                ngày.
              </p>
            </Card>
          </Copy>
        </div>
      </div>
    </Shell>
  );
}

function StandardsSlide() {
  return (
    <Shell kicker="05  ·  Học thuật" title="Đọc, dịch & tóm tắt tiêu chuẩn quốc tế">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-7">
          <Copy delay={2} className="h-full">
            <Card className="h-full">
              <p className="font-display text-[1.5cqw] font-bold">Dịch thuật ngữ đa ngôn ngữ</p>
              <p className="mt-1 font-sans text-[1.05cqw] font-semibold text-accent-deep">
                SciSpace · DeepL · ChatGPT
              </p>
              <p className="mt-3 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                Hiểu ngữ cảnh kỹ thuật: dịch chuẩn Codex Alimentarius, ISO 22000:2018, FSSC 22000 v6, BRCGS mà
                không sai nghĩa từ chuyên ngành.
              </p>
            </Card>
          </Copy>
          <Copy delay={3} className="h-full">
            <Card className="h-full">
              <p className="font-display text-[1.5cqw] font-bold">Tóm tắt điều khoản & so sánh</p>
              <p className="mt-1 font-sans text-[1.05cqw] font-semibold text-accent-deep">
                ChatPDF · Claude
              </p>
              <p className="mt-3 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                Tải tài liệu hàng trăm trang; AI trích bảng chỉ tiêu vi sinh, kim loại nặng, phụ gia — đối chiếu
                QCVN/TCVN với FDA / EFSA. Giảm hơn 75% thời gian tra cứu.
              </p>
            </Card>
          </Copy>
        </div>
        <Copy delay={3} className="md:col-span-5">
          <Photo src="/slides/lab.jpg" alt="Phòng thí nghiệm vi sinh thực phẩm" className="h-full min-h-40" />
        </Copy>
      </div>
    </Shell>
  );
}

function LabSlide() {
  return (
    <Shell kicker="05  ·  Phòng thí nghiệm" title="Xử lý số liệu vi sinh / hóa sinh">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-2">
        <Copy delay={2} className="h-full">
          <Card className="flex h-full flex-col">
            <FlaskConical className="size-6 text-accent-deep" />
            <p className="mt-3 font-display text-[1.5cqw] font-bold">Thống kê tự động & ANOVA</p>
            <p className="mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
              Nhập số đếm khuẩn lạc (CFU/g), OD600, đường khử hoặc polyphenol. AI tính Mean, SD, loại ngoại
              lai, chạy One-way ANOVA (p dưới 0.05) và phân nhóm a, b, c.
            </p>
            <p className="mt-auto pt-3 font-sans text-[1cqw] font-semibold text-muted">
              Code Interpreter · Julius AI
            </p>
          </Card>
        </Copy>
        <Copy delay={3} className="h-full">
          <Card className="flex h-full flex-col">
            <Sparkles className="size-6 text-accent-deep" />
            <p className="mt-3 font-display text-[1.5cqw] font-bold">Vẽ đồ thị & gợi ý thảo luận</p>
            <p className="mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
              Đường cong sinh trưởng Lag → Log → Stationary → Death, biểu đồ cột có error bar theo định dạng
              xuất bản. Gợi ý đoạn nhận xét cơ chế sinh hóa cho báo cáo thực hành.
            </p>
            <p className="mt-auto pt-3 font-sans text-[1cqw] font-semibold text-muted">
              Python Seaborn · Excel AI
            </p>
          </Card>
        </Copy>
      </div>
    </Shell>
  );
}

function HaccpSlide() {
  const letters = [
    { l: "H", s: "Hazard", c: "bg-navy-deep" },
    { l: "A", s: "Analysis", c: "bg-navy" },
    { l: "C", s: "Critical", c: "bg-accent-deep" },
    { l: "C", s: "Control", c: "bg-accent" },
    { l: "P", s: "Points", c: "bg-petal-6" },
  ];
  return (
    <Shell kicker="05  ·  Quản lý chất lượng" title="Lập bảng phân tích mối nguy HACCP">
      <div className="flex h-full flex-col gap-4">
        <Copy delay={2}>
          <div className="grid grid-cols-5 gap-1 md:gap-2">
            {letters.map((x) => (
              <div key={x.s} className={cn("rounded-xl px-3 py-4 text-center text-card", x.c)}>
                <p className="font-display text-[2.4cqw] font-extrabold leading-none">{x.l}</p>
                <p className="mt-2 font-sans text-[0.95cqw] font-semibold uppercase tracking-[0.08em] opacity-90">
                  {x.s}
                </p>
              </div>
            ))}
          </div>
        </Copy>
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          <Copy delay={3} className="h-full">
            <Card className="h-full">
              <p className="font-display text-[1.35cqw] font-bold">Ba nhóm mối nguy</p>
              <ul className="mt-3 space-y-2 font-sans text-[1.1cqw] text-ink-soft">
                <li>
                  <span className="font-bold text-danger">Sinh học (B)</span> — E. coli, Salmonella, nấm men
                </li>
                <li>
                  <span className="font-bold text-warn">Hóa học (C)</span> — mycotoxin, kim loại nặng, dị nguyên
                </li>
                <li>
                  <span className="font-bold text-navy">Vật lý (P)</span> — dị vật, mảnh vỡ, kim loại
                </li>
              </ul>
            </Card>
          </Copy>
          <Copy delay={4} className="h-full">
            <Card className="h-full">
              <p className="font-display text-[1.35cqw] font-bold">Cây quyết định CCP</p>
              <p className="mt-2 font-sans text-[1.1cqw] leading-relaxed text-ink-soft">
                Bốn câu hỏi Codex xác định Điểm kiểm soát tới hạn, Critical Limits (nhiệt độ, thời gian, pH)
                và thủ tục giám sát ISO 22000. AI hỗ trợ Gantt chart, phân công và hạn chót đồ án.
              </p>
            </Card>
          </Copy>
        </div>
      </div>
    </Shell>
  );
}

function CameraSlide() {
  const items = [
    { t: "Thay thế kiểm tra thủ công", d: "Loại bỏ sai sót do mỏi mắt khi dây chuyền chạy tốc độ cao." },
    { t: "Hàng trăm sản phẩm / phút", d: "Rách màng, xì mép nhiệt, hở seal, lệch nhãn — phát hiện tức thì." },
    { t: "Dị vật ngoại lai", d: "Vụn kim loại, thủy tinh, tóc, côn trùng." },
    { t: "Loại bỏ tự động", d: "Vòi khí nén hoặc tay gạt đẩy sản phẩm lỗi khỏi băng chuyền." },
  ];
  return (
    <Shell kicker="06  ·  Nhà máy" title="Camera AI phát hiện lỗi trên dây chuyền">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <div className="grid grid-cols-1 gap-2.5 md:col-span-6">
          {items.map((it, i) => (
            <Copy key={it.t} delay={(Math.min(i + 2, 5) as 2 | 3 | 4 | 5)}>
              <Card>
                <div className="flex items-start gap-3">
                  <Camera className="mt-0.5 size-5 shrink-0 text-accent-deep" />
                  <div>
                    <p className="font-display text-[1.25cqw] font-bold">{it.t}</p>
                    <p className="mt-1 font-sans text-[1.05cqw] leading-snug text-ink-soft">{it.d}</p>
                  </div>
                </div>
              </Card>
            </Copy>
          ))}
        </div>
        <Copy delay={3} className="md:col-span-6">
          <Photo src="/slides/camera.jpg" alt="Dây chuyền đóng gói với camera AI" className="h-full min-h-40" />
        </Copy>
      </div>
    </Shell>
  );
}

function RawSlide() {
  const steps = [
    { n: "01", t: "Quét 3D", d: "Đo kích thước và hình dáng, loại nguyên liệu méo mó hoặc dị tật." },
    { n: "02", t: "Phổ màu quang học", d: "Nhận diện độ chín (xanh, chín vừa, chín tới) để đồng đều lô hàng." },
    { n: "03", t: "Khuyết tật ẩn", d: "Đốm sâu bệnh, sẹo, vết dập thâm dưới vỏ mà mắt thường khó thấy." },
  ];
  return (
    <Shell kicker="06  ·  Nguyên liệu" title="Chuẩn hóa chất lượng đầu vào">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-6">
          {steps.map((s, i) => (
            <Copy key={s.n} delay={(i + 2) as 2 | 3 | 4}>
              <Card className="flex items-start gap-4">
                <p className="font-display text-[1.6cqw] font-extrabold text-accent-deep">{s.n}</p>
                <div>
                  <p className="font-display text-[1.3cqw] font-bold">{s.t}</p>
                  <p className="mt-1 font-sans text-[1.05cqw] leading-snug text-ink-soft">{s.d}</p>
                </div>
              </Card>
            </Copy>
          ))}
        </div>
        <Copy delay={3} className="md:col-span-6">
          <Photo src="/slides/apples.jpg" alt="Máy phân loại táo bằng quét quang học" className="h-full min-h-40" />
        </Copy>
      </div>
    </Shell>
  );
}

function SensorsSlide() {
  return (
    <Shell kicker="07  ·  Kho lạnh" title="Cảm biến AI hợp nhất dữ liệu thời gian thực">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col gap-3 md:col-span-5">
          {[
            { t: "Sensor fusion", d: "Nhiệt độ, độ ẩm, hoạt độ nước (aw), CO₂ / O₂ — đo liên tục." },
            { t: "Mô hình động học", d: "Dự báo hạn sử dụng thực tế (Dynamic Shelf-life)." },
            { t: "Cảnh báo sớm vi sinh", d: "Nhận điều kiện nấm mốc / vi khuẩn bùng phát để khử trùng kịp thời." },
          ].map((r, i) => (
            <Copy key={r.t} delay={(i + 2) as 2 | 3 | 4}>
              <Card>
                <p className="font-display text-[1.3cqw] font-bold">{r.t}</p>
                <p className="mt-1 font-sans text-[1.05cqw] text-ink-soft">{r.d}</p>
              </Card>
            </Copy>
          ))}
        </div>
        <Copy delay={3} className="md:col-span-7">
          <div className="relative h-full min-h-44 overflow-hidden rounded-xl">
            <Photo src="/slides/cold.jpg" alt="Kho lạnh với cảm biến IoT" className="absolute inset-0 h-full" />
            <div className="absolute inset-x-3 bottom-3 rounded-lg bg-ink/78 p-3 text-card backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <p className="font-display text-[1cqw] font-bold tracking-wide">COLD STORAGE · LIVE</p>
                <span className="rounded-full bg-ok/20 px-2 py-0.5 font-sans text-[0.8cqw] font-semibold text-ok">
                  ONLINE
                </span>
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {[
                  { l: "Nhiệt độ", v: "−20.4°C" },
                  { l: "Độ ẩm", v: "88.7%" },
                  { l: "aw", v: "0.928" },
                  { l: "CO₂", v: "412 ppm" },
                ].map((m) => (
                  <div key={m.l}>
                    <p className="font-sans text-[0.75cqw] text-card/60">{m.l}</p>
                    <p className="font-display text-[1.15cqw] font-extrabold tabular-nums">{m.v}</p>
                  </div>
                ))}
              </div>
              <p className="mt-2 flex items-center gap-2 font-sans text-[0.8cqw] text-card/70">
                <Thermometer className="size-3.5" /> Bốn chỉ số kích hoạt mô hình dự báo AI
              </p>
            </div>
          </div>
        </Copy>
      </div>
    </Shell>
  );
}

function RiskSlide() {
  return (
    <Shell kicker="08  ·  Cảnh báo" title="Rủi ro khi phụ thuộc AI trong an toàn thực phẩm">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <Copy delay={2} className="md:col-span-7">
          <Card className="h-full ring-1 ring-danger/25">
            <div className="flex items-center gap-2 text-danger">
              <ShieldAlert className="size-5" />
              <p className="font-display text-[1.4cqw] font-bold">Rủi ro thuật toán & dữ liệu</p>
            </div>
            <p className="mt-3 font-sans text-[1.2cqw] leading-relaxed text-ink-soft">
              AI có thể bỏ sót độc tố và vi khuẩn nếu dữ liệu huấn luyện kém chất lượng — dẫn đến ngộ độc và
              thu hồi sản phẩm trên diện rộng.
            </p>
            <p className="mt-5 font-display text-[1.15cqw] font-bold text-navy">Khuyến nghị FAO</p>
            <p className="mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
              AI chỉ là công cụ hỗ trợ, không thể thay thế kết luận phòng kiểm nghiệm QA/QC. Mọi kết quả bắt
              buộc do con người giám sát và kiểm chứng.
            </p>
          </Card>
        </Copy>
        <Copy delay={3} className="md:col-span-5">
          <div className="flex h-full flex-col justify-center rounded-2xl bg-ink p-6 text-card shadow-[var(--shadow-soft)]">
            <CheckCircle2 className="size-7 text-accent" />
            <p className="mt-4 font-display text-[1.5cqw] font-bold leading-snug">
              Quy trình kiểm định bắt buộc
            </p>
            <p className="mt-3 font-sans text-[1.15cqw] leading-relaxed text-card/80">
              Đối chiếu kết quả AI với đĩa petri và mẫu thực tế bởi chuyên viên phòng lab trước khi xuất xưởng.
            </p>
          </div>
        </Copy>
      </div>
    </Shell>
  );
}

function DeepfakeSlide() {
  const risks = [
    { t: "Deepfake video & ảnh", d: "Cắt ghép tinh vi, thao túng tâm lý bằng nội dung giả như thật." },
    { t: "Voice cloning", d: "Tái tạo giọng, âm điệu, cảm xúc từ mẫu ghi âm vài giây trên internet." },
    { t: "Rò rỉ dữ liệu cá nhân", d: "Thu thập thói quen và danh bạ công khai để dựng kịch bản lừa đảo." },
  ];
  return (
    <Shell kicker="08  ·  Đời sống" title="Deepfake & lừa đảo giả mạo">
      <div className="grid h-full grid-cols-1 gap-4 md:grid-cols-12">
        <div className="flex flex-col gap-2.5 md:col-span-6">
          {risks.map((r, i) => (
            <Copy key={r.t} delay={(i + 2) as 2 | 3 | 4}>
              <Card>
                <div className="flex gap-3">
                  <AlertTriangle className="mt-0.5 size-4 shrink-0 text-danger" />
                  <div>
                    <p className="font-display text-[1.25cqw] font-bold">{r.t}</p>
                    <p className="mt-1 font-sans text-[1.05cqw] text-ink-soft">{r.d}</p>
                  </div>
                </div>
              </Card>
            </Copy>
          ))}
        </div>
        <Copy delay={3} className="md:col-span-6">
          <div className="flex h-full flex-col rounded-2xl bg-danger p-5 text-card">
            <p className="font-display text-[1.1cqw] font-bold uppercase tracking-[0.14em] opacity-80">
              Cảnh báo đỏ từ FTC
            </p>
            <p className="mt-3 font-sans text-[1.2cqw] leading-relaxed">
              Ủy ban Thương mại Liên bang Mỹ cảnh báo thủ đoạn dùng AI giả giọng người thân gặp nạn (tai nạn,
              bắt giam) để tạo bối cảnh khẩn cấp và tống tiền.
            </p>
            <div className="mt-auto flex items-start gap-2 rounded-xl bg-card/12 p-3">
              <PhoneOff className="mt-0.5 size-4 shrink-0" />
              <p className="font-sans text-[1.05cqw] leading-snug">
                Không chỉ tin giọng nói. Ngắt máy và gọi lại số đã lưu để xác minh.
              </p>
            </div>
          </div>
        </Copy>
      </div>
    </Shell>
  );
}

function CloseSlide() {
  return (
    <Shell>
      <div className="flex h-full flex-col">
        <Copy delay={1}>
          <div className="flex gap-3">
            <Quote className="size-7 shrink-0 text-accent-deep" />
            <h2 className="font-display text-[clamp(1.15rem,2.2cqw,2.3rem)] font-extrabold leading-[1.2] tracking-tight">
              AI là công cụ hỗ trợ đắc lực, nhưng quyết định an toàn thực phẩm cuối cùng thuộc về chuyên viên
              QA/QC.
            </h2>
          </div>
        </Copy>
        <div className="mt-6 grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2">
          <Copy delay={2} className="h-full">
            <Card className="h-full border-l-4 border-l-ok">
              <p className="font-display text-[1.5cqw] font-bold text-ok">Vai trò của AI</p>
              <ul className="mt-3 space-y-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                <li>Tự động hóa tác vụ lặp trong kiểm định</li>
                <li>Xử lý Big Data cảm biến và chuỗi cung ứng</li>
                <li>Dự báo rủi ro an toàn thực phẩm sớm</li>
              </ul>
            </Card>
          </Copy>
          <Copy delay={3} className="h-full">
            <Card className="h-full border-l-4 border-l-danger">
              <p className="font-display text-[1.5cqw] font-bold text-danger">Trách nhiệm con người</p>
              <ul className="mt-3 space-y-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft">
                <li>Tư duy phản biện, kiểm tra chéo số liệu</li>
                <li>Lương tâm nghề nghiệp và trách nhiệm pháp lý — máy móc không thay thế được</li>
              </ul>
            </Card>
          </Copy>
        </div>
      </div>
    </Shell>
  );
}

function ThanksSlide() {
  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-[8%] text-center text-ink">
      <Copy delay={1}>
        <p className="font-display text-[clamp(1.8rem,4.2cqw,4.2rem)] font-extrabold tracking-tight">Cảm ơn thầy cô và các bạn</p>
      </Copy>
      <Copy delay={2}>
        <p className="mt-3 font-sans text-[clamp(0.85rem,1.4cqw,1.4rem)] text-muted">{COURSE} · {GROUP}</p>
      </Copy>
      <Copy delay={3} className="mt-8 w-full max-w-[82%]">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5">
          {TEAM.map((m) => (
            <div key={m.id} className="rounded-xl bg-card/80 px-2 py-3 ring-1 ring-ink/6 backdrop-blur-sm">
              <p className="font-display text-[clamp(0.8rem,1.05cqw,1.05rem)] font-bold leading-tight">{m.name}</p>
              <p className="mt-1 font-sans text-[clamp(0.7rem,0.9cqw,0.9rem)] tabular-nums text-muted">{m.id}</p>
            </div>
          ))}
        </div>
      </Copy>
    </div>
  );
}

export function SlideContent({
  slide,
  onJump,
}: {
  slide: Slide;
  onJump: (i: number) => void;
}) {
  switch (slide.layout) {
    case "blank":
      return null;
    case "cover":
      return <CoverCopy />;
    case "toc":
      return <TocCopy onJump={onJump} />;
    case "team":
      return <TeamSlide />;
    case "define":
      return <DefineSlide />;
    case "nested":
      return <NestedSlide />;
    case "evolve":
      return <EvolveSlide />;
    case "daily":
      return <DailySlide />;
    case "recommend":
      return <RecommendSlide />;
    case "calories":
      return <CaloriesSlide />;
    case "standards":
      return <StandardsSlide />;
    case "lab":
      return <LabSlide />;
    case "haccp":
      return <HaccpSlide />;
    case "camera":
      return <CameraSlide />;
    case "raw":
      return <RawSlide />;
    case "sensors":
      return <SensorsSlide />;
    case "risk":
      return <RiskSlide />;
    case "deepfake":
      return <DeepfakeSlide />;
    case "close":
      return <CloseSlide />;
    case "thanks":
      return <ThanksSlide />;
    default:
      return null;
  }
}
