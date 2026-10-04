import type { SlideKind } from "./presentation";

const SW = 12192000;
const SH = 6858000;

export type Box = {
  x: number;
  y: number;
  w: number;
  h: number;
  rot?: number;
  opacity?: number;
};

function box(x: number, y: number, cx: number, cy: number, extra: Partial<Box> = {}): Box {
  return {
    x: (x / SW) * 100,
    y: (y / SH) * 100,
    w: (cx / SW) * 100,
    h: (cy / SH) * 100,
    ...extra,
  };
}

export type MorphState = {
  bg: "seed" | "burst" | "cover" | "toc" | "content" | "thanks";
  line: Box;
  rings: Box[];
  diamonds: Box[];
  petals: Box[];
  icons: Box[];
  card: Box;
  pill: Box;
  titleBox: Box;
};

const HIDDEN: Box = { x: 46, y: 42, w: 8, h: 14, opacity: 0 };

const TOC_PETALS: Box[] = [
  box(6105845, 1560071, 1567583, 1397381, { opacity: 1 }),
  box(4480947, 1560071, 1567583, 1397381, { opacity: 1 }),
  box(3791185, 2249832, 1397381, 1567583, { opacity: 1 }),
  box(6965810, 2249833, 1397378, 1567583, { opacity: 1 }),
  box(3791186, 3874727, 1397381, 1567583, { opacity: 1 }),
  box(6965809, 3874730, 1397380, 1567582, { opacity: 1 }),
  box(6105845, 4734692, 1567582, 1397379, { opacity: 1 }),
  box(4480948, 4734693, 1567582, 1397380, { opacity: 1 }),
];

export const MORPH: Record<SlideKind, MorphState> = {
  seed: {
    bg: "seed",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 1 }),
    rings: [
      box(5697563, 3030563, 796874, 796874, { opacity: 0.9 }),
      box(5697563, 3030563, 796874, 796874, { opacity: 1 }),
      box(5588688, 2921688, 1014624, 1014624, { opacity: 1 }),
      box(5697563, 3030563, 796874, 796874, { opacity: 0.8 }),
      box(5821546, 3154546, 548908, 548908, { opacity: 1 }),
      box(5588688, 2921688, 1014624, 1014624, { opacity: 1 }),
      box(5588688, 2893572, 1014624, 1014624, { opacity: 1 }),
    ],
    diamonds: [
      box(6204893, 3065621, 830726, 830726, { rot: 45, opacity: 1 }),
      box(5156381, 3065621, 830726, 830726, { rot: 45, opacity: 1 }),
    ],
    petals: Array.from({ length: 8 }, () => ({ ...HIDDEN, w: 3.7, h: 5.9 })),
    icons: Array.from({ length: 8 }, () => ({ ...HIDDEN, opacity: 0 })),
    card: box(829448, 7431929, 10533104, 5846324, { opacity: 0 }),
    pill: box(4273685, 11224918, 3644630, 901971, { opacity: 0 }),
    titleBox: box(2438304, 9841682, 7293424, 1077218, { opacity: 0 }),
  },
  burst: {
    bg: "burst",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 0.4 }),
    rings: [
      box(1077686, -1589314, 10036628, 10036628, { opacity: 0.55 }),
      box(3559629, 892629, 5072742, 5072742, { opacity: 1 }),
      box(4288971, 1621971, 3614058, 3614058, { opacity: 1 }),
      box(2667000, 0, 6858000, 6858000, { opacity: 0.7 }),
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.45 }),
      box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
      box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
    ],
    diamonds: [
      box(11004213, 3065621, 830726, 830726, { rot: 45.7, opacity: 1 }),
      box(423301, 3065621, 830726, 830726, { rot: 45.7, opacity: 1 }),
    ],
    petals: Array.from({ length: 8 }, () => ({ x: 48, y: 28, w: 3.7, h: 5.9, opacity: 0 })),
    icons: Array.from({ length: 8 }, () => ({ x: 48, y: 40, w: 5.4, h: 9.6, opacity: 0 })),
    card: box(829448, 7431929, 10533104, 5846324, { opacity: 1 }),
    pill: box(4273685, 11224918, 3644630, 901971, { opacity: 1 }),
    titleBox: box(2438304, 9841682, 7293424, 1077218, { opacity: 1 }),
  },
  cover: {
    bg: "cover",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 0.25 }),
    rings: [
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.35 }),
      box(-3255523, -5922523, 18703046, 18703046, { opacity: 0.5 }),
      box(5316885, 1003926, 1558230, 1558230, { opacity: 1 }),
      box(-2049294, -4716294, 16290588, 16290588, { opacity: 0.35 }),
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.3 }),
      box(5316885, 1003926, 1558230, 1558230, { opacity: 1 }),
      box(5316885, 1003926, 1558230, 1558230, { opacity: 1 }),
    ],
    diamonds: [
      box(12740830, 3065668, 830726, 830726, { rot: 45, opacity: 1 }),
      box(-1278085, 3065621, 830726, 830726, { rot: 45, opacity: 1 }),
    ],
    petals: [
      box(5634716, 2031752, 453003, 403818, { opacity: 1 }),
      box(6104282, 2031752, 453003, 403818, { opacity: 1 }),
      box(6352796, 1783238, 403818, 453003, { opacity: 1 }),
      box(5435388, 1783238, 403817, 453003, { opacity: 1 }),
      box(6352796, 1313673, 403818, 453003, { opacity: 1 }),
      box(5435388, 1313673, 403817, 453003, { opacity: 1 }),
      box(5634717, 1114344, 453003, 403817, { opacity: 1 }),
      box(6104282, 1114344, 453003, 403817, { opacity: 1 }),
    ],
    icons: Array.from({ length: 8 }, () => ({ x: 48, y: 18, w: 5.4, h: 9.6, opacity: 0 })),
    card: box(829448, 505838, 10533104, 5846324, { opacity: 1 }),
    pill: box(3251200, 4298827, 5689600, 901971, { opacity: 1 }),
    titleBox: box(2438304, 2915591, 7293424, 1077218, { opacity: 1 }),
  },
  toc: {
    bg: "toc",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 0.2 }),
    rings: [
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.2 }),
      box(-3255523, -5922523, 18703046, 18703046, { opacity: 0.25 }),
      box(5298071, 3118940, 1558230, 1558230, { opacity: 1 }),
      box(-2049294, -4716294, 16290588, 16290588, { opacity: 0.18 }),
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.16 }),
      box(5298071, 3118940, 1558230, 1558230, { opacity: 1 }),
      box(5298071, 3118940, 1558230, 1558230, { opacity: 1 }),
    ],
    diamonds: [
      box(12740830, 3065668, 830726, 830726, { rot: 45, opacity: 0.5 }),
      box(-1278085, 3065621, 830726, 830726, { rot: 45, opacity: 0.5 }),
    ],
    petals: TOC_PETALS,
    icons: [
      box(5158373, 1922399, 658454, 658454, { opacity: 1 }),
      box(6419941, 1863087, 658454, 658454, { opacity: 1 }),
      box(4161541, 2822530, 658454, 658454, { opacity: 1 }),
      box(7375373, 2902112, 658454, 658454, { opacity: 1 }),
      box(4216369, 4177949, 658454, 658454, { opacity: 1 }),
      box(7327724, 4097179, 658454, 658454, { opacity: 1 }),
      box(5096024, 5111289, 658454, 658454, { opacity: 1 }),
      box(6392188, 5104154, 658454, 658454, { opacity: 1 }),
    ],
    card: box(0, 0, 12192000, 6858000, { opacity: 1 }),
    pill: box(3885472, -1053010, 4421056, 2322094, { opacity: 1 }),
    titleBox: box(4573789, 155088, 3191899, 830997, { opacity: 1 }),
  },
  content: {
    bg: "content",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 0 }),
    rings: [
      box(-2800000, -3200000, 6200000, 6200000, { opacity: 0.22 }),
      box(9800000, -1800000, 4200000, 4200000, { opacity: 0.18 }),
      box(10800000, 5200000, 1800000, 1800000, { opacity: 0.35 }),
      box(-900000, 5400000, 2600000, 2600000, { opacity: 0.2 }),
      box(11000000, -900000, 2200000, 2200000, { opacity: 0.16 }),
      box(11200000, 5600000, 900000, 900000, { opacity: 0.5 }),
      box(11240000, 5640000, 820000, 820000, { opacity: 0.9 }),
    ],
    diamonds: [
      box(11800000, 200000, 520000, 520000, { rot: 45, opacity: 0.55 }),
      box(-200000, 200000, 520000, 520000, { rot: 45, opacity: 0.35 }),
    ],
    petals: Array.from({ length: 8 }, () => ({ x: 92, y: 4, w: 2.2, h: 3.8, opacity: 0 })),
    icons: Array.from({ length: 8 }, () => ({ x: 92, y: 8, w: 3, h: 5, opacity: 0 })),
    card: box(0, 0, 12192000, 6858000, { opacity: 0 }),
    pill: box(4000000, -800000, 4000000, 900000, { opacity: 0 }),
    titleBox: box(2000000, -800000, 7000000, 900000, { opacity: 0 }),
  },
  thanks: {
    bg: "thanks",
    line: box(-590550, 3429000, 13730995, 0, { opacity: 0 }),
    rings: [
      box(1077686, -1589314, 10036628, 10036628, { opacity: 0.28 }),
      box(3559629, 892629, 5072742, 5072742, { opacity: 0.45 }),
      box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
      box(2667000, 0, 6858000, 6858000, { opacity: 0.35 }),
      box(-1504950, -4171950, 15201900, 15201900, { opacity: 0.2 }),
      box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
      box(4909457, 2110000, 2373086, 2373086, { opacity: 1 }),
    ],
    diamonds: [
      box(11004213, 3065621, 830726, 830726, { rot: 45.7, opacity: 0.7 }),
      box(423301, 3065621, 830726, 830726, { rot: 45.7, opacity: 0.7 }),
    ],
    petals: TOC_PETALS.map((p) => ({
      ...p,
      w: p.w * 0.72,
      h: p.h * 0.72,
      x: p.x + p.w * 0.14,
      y: p.y + p.h * 0.08,
      opacity: 0.95,
    })),
    icons: Array.from({ length: 8 }, () => ({ x: 47, y: 42, w: 5.4, h: 9.6, opacity: 0 })),
    card: box(0, 0, 12192000, 6858000, { opacity: 0 }),
    pill: box(3885472, 5200000, 4421056, 900000, { opacity: 0 }),
    titleBox: box(2438304, 2915591, 7293424, 1077218, { opacity: 0 }),
  },
};

export const PETAL_PATHS = [
  {
    vb: "0 0 1863 1661",
    d: "M0 0 L244 12 C792 68 1293 287 1695 619 L1863 772 L974 1661 L895 1590 C859 1560 822 1532 783 1505 L775 1501 L421 1617 L254 1285 L115 1263 L0 1258 Z",
  },
  {
    vb: "0 0 1863 1661",
    d: "M1863 0 L1863 1258 L1748 1263 L1609 1285 L1442 1617 L1088 1501 L1080 1505 C1041 1532 1004 1560 968 1590 L889 1661 L0 772 L168 619 C571 287 1071 68 1619 12 Z",
  },
  {
    vb: "0 0 1661 1863",
    d: "M772 0 L1661 889 L1590 968 C1560 1004 1532 1041 1505 1080 L1501 1088 L1617 1442 L1285 1609 L1263 1748 L1258 1863 L0 1863 L12 1619 C68 1071 287 571 619 168 Z",
  },
  {
    vb: "0 0 1661 1863",
    d: "M889 0 L1042 168 C1374 571 1593 1071 1649 1619 L1661 1863 L403 1863 L398 1748 L376 1609 L44 1442 L160 1088 L156 1080 C129 1041 101 1004 71 968 L0 889 Z",
  },
  {
    vb: "0 0 1661 1863",
    d: "M0 0 L1258 0 L1263 115 L1285 254 L1617 421 L1501 775 L1505 783 C1532 822 1560 859 1590 895 L1661 974 L772 1863 L619 1695 C287 1293 68 792 12 244 Z",
  },
  {
    vb: "0 0 1661 1863",
    d: "M1661 0 L1649 244 C1593 792 1374 1293 1042 1695 L889 1863 L0 974 L71 895 C101 859 129 822 156 783 L160 775 L44 421 L376 254 L398 115 L403 0 Z",
  },
  {
    vb: "0 0 1863 1661",
    d: "M974 0 L1863 889 L1695 1042 C1293 1374 792 1593 244 1649 L0 1661 L0 403 L115 398 L254 376 L421 44 L775 160 L783 156 C822 129 859 101 895 71 Z",
  },
  {
    vb: "0 0 1863 1661",
    d: "M889 0 L968 71 C1004 101 1041 129 1080 156 L1088 160 L1442 44 L1609 376 L1748 398 L1863 403 L1863 1661 L1619 1649 C1071 1593 571 1374 168 1042 L0 889 Z",
  },
];

export const PETAL_COLORS = [
  "var(--color-petal-1)",
  "var(--color-petal-2)",
  "var(--color-petal-3)",
  "var(--color-petal-4)",
  "var(--color-petal-5)",
  "var(--color-petal-6)",
  "var(--color-petal-7)",
  "var(--color-petal-8)",
];

export const RING_LOOK = [
  { kind: "stroke" as const, color: "rgb(3 169 244 / 0.5)", width: 8, fill: "transparent" },
  { kind: "stroke" as const, color: "#03A9F4", width: 6, fill: "transparent" },
  {
    kind: "fill" as const,
    color: "transparent",
    width: 2,
    fill: "linear-gradient(180deg,#f4fbff 0%,rgb(3 169 244 / 0.38) 100%)",
  },
  { kind: "stroke" as const, color: "rgb(3 169 244 / 0.7)", width: 6, fill: "transparent" },
  { kind: "stroke" as const, color: "rgb(255 255 255 / 0.85)", width: 5, fill: "transparent" },
  { kind: "fill" as const, color: "#ffffff", width: 0, fill: "#ffffff" },
  { kind: "fill" as const, color: "#ffffff", width: 0, fill: "#ffffff" },
];
