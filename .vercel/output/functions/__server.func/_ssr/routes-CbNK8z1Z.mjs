import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Camera, S as ChevronLeft, _ as FlaskConical, a as Thermometer, b as CircleCheck, c as ShieldAlert, d as PhoneOff, f as Mic, g as GraduationCap, h as Grid2x2, i as TriangleAlert, l as ScanFace, m as MapPinned, n as Utensils, o as Sparkles, p as Maximize, r as User, s as ShoppingBag, t as X, u as Quote, v as Eye, w as Brain, x as ChevronRight, y as Cpu } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CbNK8z1Z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COURSE = "Môn Công nghệ chuyển đổi số";
var GROUP = "Nhóm 13";
var TITLE = "Tìm hiểu về AI";
var SUBTITLE = "Những hướng ứng dụng trong lĩnh vực ngành của sinh viên đang học và nghiên cứu";
var FIELD = "Công nghệ thực phẩm · An toàn thực phẩm";
var TEAM = [
	{
		name: "Nguyễn Gia Bảo",
		id: "25688891"
	},
	{
		name: "Phạm Nguyễn Bảo Nhi",
		id: "25677521"
	},
	{
		name: "Đinh Hoàng Minh Hiếu",
		id: "25685841"
	},
	{
		name: "Ngô Hoàng Gia Bảo",
		id: "25654391"
	},
	{
		name: "Nguyễn Phúc Hào",
		id: "25694561"
	}
];
var SLIDES = [
	{
		id: "seed",
		kind: "seed",
		layout: "blank"
	},
	{
		id: "burst",
		kind: "burst",
		layout: "blank"
	},
	{
		id: "cover",
		kind: "cover",
		layout: "cover"
	},
	{
		id: "toc",
		kind: "toc",
		layout: "toc"
	},
	{
		id: "team",
		kind: "content",
		kicker: "Thành viên",
		title: "Nhóm 13",
		layout: "team"
	},
	{
		id: "define",
		kind: "content",
		section: 1,
		kicker: "01  ·  Khái niệm",
		title: "Trí tuệ nhân tạo là gì?",
		layout: "define"
	},
	{
		id: "nested",
		kind: "content",
		section: 1,
		kicker: "01  ·  Bản chất",
		title: "AI hoạt động như thế nào?",
		layout: "nested"
	},
	{
		id: "evolve",
		kind: "content",
		section: 2,
		kicker: "02  ·  Tiến hóa",
		title: "Phân loại AI theo mức độ",
		layout: "evolve"
	},
	{
		id: "daily",
		kind: "content",
		section: 3,
		kicker: "03  ·  Đời sống",
		title: "AI trong sinh hoạt hàng ngày",
		layout: "daily"
	},
	{
		id: "recommend",
		kind: "content",
		section: 3,
		kicker: "03  ·  Cá nhân hóa",
		title: "Thuật toán gợi ý nội dung",
		layout: "recommend"
	},
	{
		id: "calories",
		kind: "content",
		section: 4,
		kicker: "04  ·  Sức khỏe",
		title: "Tính calories & theo dõi dinh dưỡng",
		layout: "calories"
	},
	{
		id: "standards",
		kind: "content",
		section: 5,
		kicker: "05  ·  Học thuật",
		title: "Đọc, dịch & tóm tắt tiêu chuẩn quốc tế",
		layout: "standards"
	},
	{
		id: "lab",
		kind: "content",
		section: 5,
		kicker: "05  ·  Phòng thí nghiệm",
		title: "Xử lý số liệu vi sinh / hóa sinh",
		layout: "lab"
	},
	{
		id: "haccp",
		kind: "content",
		section: 5,
		kicker: "05  ·  Quản lý chất lượng",
		title: "Lập bảng phân tích mối nguy HACCP",
		layout: "haccp"
	},
	{
		id: "camera",
		kind: "content",
		section: 6,
		kicker: "06  ·  Nhà máy",
		title: "Camera AI phát hiện lỗi trên dây chuyền",
		layout: "camera"
	},
	{
		id: "raw",
		kind: "content",
		section: 6,
		kicker: "06  ·  Nguyên liệu",
		title: "Chuẩn hóa chất lượng đầu vào",
		layout: "raw"
	},
	{
		id: "sensors",
		kind: "content",
		section: 7,
		kicker: "07  ·  Kho lạnh",
		title: "Cảm biến AI hợp nhất dữ liệu thời gian thực",
		layout: "sensors"
	},
	{
		id: "risk",
		kind: "content",
		section: 8,
		kicker: "08  ·  Cảnh báo",
		title: "Rủi ro khi phụ thuộc AI trong an toàn thực phẩm",
		layout: "risk"
	},
	{
		id: "deepfake",
		kind: "content",
		section: 8,
		kicker: "08  ·  Đời sống",
		title: "Deepfake & lừa đảo giả mạo",
		layout: "deepfake"
	},
	{
		id: "close",
		kind: "content",
		kicker: "Kết luận",
		title: "AI hỗ trợ — con người quyết định",
		layout: "close"
	},
	{
		id: "thanks",
		kind: "thanks",
		layout: "thanks"
	}
];
var TOC = [
	{
		n: 1,
		title: "Trí tuệ nhân tạo",
		blurb: "Định nghĩa, nguồn gốc, AI · ML · DL",
		icon: "atom",
		slideIndex: 5
	},
	{
		n: 2,
		title: "Phân loại theo tiến hóa",
		blurb: "Narrow AI, AGI và siêu trí tuệ",
		icon: "spark",
		slideIndex: 7
	},
	{
		n: 3,
		title: "AI trong đời sống",
		blurb: "Trợ lý ảo, FaceID, bản đồ định tuyến",
		icon: "bank",
		slideIndex: 8
	},
	{
		n: 4,
		title: "Gợi ý & dinh dưỡng",
		blurb: "Cá nhân hóa trải nghiệm và calories",
		icon: "chart",
		slideIndex: 9
	},
	{
		n: 5,
		title: "Tiêu chuẩn & HACCP",
		blurb: "Codex, ISO 22000, số liệu thí nghiệm",
		icon: "book",
		slideIndex: 11
	},
	{
		n: 6,
		title: "Camera AI nhà máy",
		blurb: "Phát hiện lỗi bao bì và dị vật",
		icon: "library",
		slideIndex: 14
	},
	{
		n: 7,
		title: "Cảm biến kho lạnh",
		blurb: "Hạn sử dụng động, cảnh báo vi sinh",
		icon: "target",
		slideIndex: 16
	},
	{
		n: 8,
		title: "Rủi ro & kết luận",
		blurb: "FAO, QA/QC, deepfake, trách nhiệm",
		icon: "check",
		slideIndex: 17
	}
];
var SLIDE_COUNT = SLIDES.length;
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-display text-sm font-semibold transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent-deep text-card hover:opacity-90",
			ghost: "bg-card/12 text-card hover:bg-card/20",
			outline: "border border-card/30 bg-transparent text-card hover:bg-card/10",
			paper: "bg-card text-ink hover:bg-mist"
		},
		size: {
			default: "h-10 px-4",
			sm: "h-9 px-3 text-xs",
			icon: "size-11 rounded-full"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
var SW = 12192e3;
var SH = 6858e3;
function box(x, y, cx, cy, extra = {}) {
	return {
		x: x / SW * 100,
		y: y / SH * 100,
		w: cx / SW * 100,
		h: cy / SH * 100,
		...extra
	};
}
var HIDDEN = {
	x: 46,
	y: 42,
	w: 8,
	h: 14,
	opacity: 0
};
var TOC_PETALS = [
	box(6105845, 1560071, 1567583, 1397381, { opacity: 1 }),
	box(4480947, 1560071, 1567583, 1397381, { opacity: 1 }),
	box(3791185, 2249832, 1397381, 1567583, { opacity: 1 }),
	box(6965810, 2249833, 1397378, 1567583, { opacity: 1 }),
	box(3791186, 3874727, 1397381, 1567583, { opacity: 1 }),
	box(6965809, 3874730, 1397380, 1567582, { opacity: 1 }),
	box(6105845, 4734692, 1567582, 1397379, { opacity: 1 }),
	box(4480948, 4734693, 1567582, 1397380, { opacity: 1 })
];
var MORPH = {
	seed: {
		bg: "seed",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: 1 }),
		rings: [
			box(5697563, 3030563, 796874, 796874, { opacity: .9 }),
			box(5697563, 3030563, 796874, 796874, { opacity: 1 }),
			box(5588688, 2921688, 1014624, 1014624, { opacity: 1 }),
			box(5697563, 3030563, 796874, 796874, { opacity: .8 }),
			box(5821546, 3154546, 548908, 548908, { opacity: 1 }),
			box(5588688, 2921688, 1014624, 1014624, { opacity: 1 }),
			box(5588688, 2893572, 1014624, 1014624, { opacity: 1 })
		],
		diamonds: [box(6204893, 3065621, 830726, 830726, {
			rot: 45,
			opacity: 1
		}), box(5156381, 3065621, 830726, 830726, {
			rot: 45,
			opacity: 1
		})],
		petals: Array.from({ length: 8 }, () => ({
			...HIDDEN,
			w: 3.7,
			h: 5.9
		})),
		icons: Array.from({ length: 8 }, () => ({
			...HIDDEN,
			opacity: 0
		})),
		card: box(829448, 7431929, 10533104, 5846324, { opacity: 0 }),
		pill: box(4273685, 11224918, 3644630, 901971, { opacity: 0 }),
		titleBox: box(2438304, 9841682, 7293424, 1077218, { opacity: 0 })
	},
	burst: {
		bg: "burst",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: .4 }),
		rings: [
			box(1077686, -1589314, 10036628, 10036628, { opacity: .55 }),
			box(3559629, 892629, 5072742, 5072742, { opacity: 1 }),
			box(4288971, 1621971, 3614058, 3614058, { opacity: 1 }),
			box(2667e3, 0, 6858e3, 6858e3, { opacity: .7 }),
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .45 }),
			box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
			box(4909457, 2242457, 2373086, 2373086, { opacity: 1 })
		],
		diamonds: [box(11004213, 3065621, 830726, 830726, {
			rot: 45.7,
			opacity: 1
		}), box(423301, 3065621, 830726, 830726, {
			rot: 45.7,
			opacity: 1
		})],
		petals: Array.from({ length: 8 }, () => ({
			x: 48,
			y: 28,
			w: 3.7,
			h: 5.9,
			opacity: 0
		})),
		icons: Array.from({ length: 8 }, () => ({
			x: 48,
			y: 40,
			w: 5.4,
			h: 9.6,
			opacity: 0
		})),
		card: box(829448, 7431929, 10533104, 5846324, { opacity: 1 }),
		pill: box(4273685, 11224918, 3644630, 901971, { opacity: 1 }),
		titleBox: box(2438304, 9841682, 7293424, 1077218, { opacity: 1 })
	},
	cover: {
		bg: "cover",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: .25 }),
		rings: [
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .35 }),
			box(-3255523, -5922523, 18703046, 18703046, { opacity: .5 }),
			box(5316885, 1003926, 1558230, 1558230, { opacity: 1 }),
			box(-2049294, -4716294, 16290588, 16290588, { opacity: .35 }),
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .3 }),
			box(5316885, 1003926, 1558230, 1558230, { opacity: 1 }),
			box(5316885, 1003926, 1558230, 1558230, { opacity: 1 })
		],
		diamonds: [box(12740830, 3065668, 830726, 830726, {
			rot: 45,
			opacity: 1
		}), box(-1278085, 3065621, 830726, 830726, {
			rot: 45,
			opacity: 1
		})],
		petals: [
			box(5634716, 2031752, 453003, 403818, { opacity: 1 }),
			box(6104282, 2031752, 453003, 403818, { opacity: 1 }),
			box(6352796, 1783238, 403818, 453003, { opacity: 1 }),
			box(5435388, 1783238, 403817, 453003, { opacity: 1 }),
			box(6352796, 1313673, 403818, 453003, { opacity: 1 }),
			box(5435388, 1313673, 403817, 453003, { opacity: 1 }),
			box(5634717, 1114344, 453003, 403817, { opacity: 1 }),
			box(6104282, 1114344, 453003, 403817, { opacity: 1 })
		],
		icons: Array.from({ length: 8 }, () => ({
			x: 48,
			y: 18,
			w: 5.4,
			h: 9.6,
			opacity: 0
		})),
		card: box(829448, 505838, 10533104, 5846324, { opacity: 1 }),
		pill: box(3251200, 4298827, 5689600, 901971, { opacity: 1 }),
		titleBox: box(2438304, 2915591, 7293424, 1077218, { opacity: 1 })
	},
	toc: {
		bg: "toc",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: .2 }),
		rings: [
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .2 }),
			box(-3255523, -5922523, 18703046, 18703046, { opacity: .25 }),
			box(5298071, 3118940, 1558230, 1558230, { opacity: 1 }),
			box(-2049294, -4716294, 16290588, 16290588, { opacity: .18 }),
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .16 }),
			box(5298071, 3118940, 1558230, 1558230, { opacity: 1 }),
			box(5298071, 3118940, 1558230, 1558230, { opacity: 1 })
		],
		diamonds: [box(12740830, 3065668, 830726, 830726, {
			rot: 45,
			opacity: .5
		}), box(-1278085, 3065621, 830726, 830726, {
			rot: 45,
			opacity: .5
		})],
		petals: TOC_PETALS,
		icons: [
			box(5158373, 1922399, 658454, 658454, { opacity: 1 }),
			box(6419941, 1863087, 658454, 658454, { opacity: 1 }),
			box(4161541, 2822530, 658454, 658454, { opacity: 1 }),
			box(7375373, 2902112, 658454, 658454, { opacity: 1 }),
			box(4216369, 4177949, 658454, 658454, { opacity: 1 }),
			box(7327724, 4097179, 658454, 658454, { opacity: 1 }),
			box(5096024, 5111289, 658454, 658454, { opacity: 1 }),
			box(6392188, 5104154, 658454, 658454, { opacity: 1 })
		],
		card: box(0, 0, 12192e3, 6858e3, { opacity: 1 }),
		pill: box(3885472, -1053010, 4421056, 2322094, { opacity: 1 }),
		titleBox: box(4573789, 155088, 3191899, 830997, { opacity: 1 })
	},
	content: {
		bg: "content",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: 0 }),
		rings: [
			box(-28e5, -32e5, 62e5, 62e5, { opacity: .22 }),
			box(98e5, -18e5, 42e5, 42e5, { opacity: .18 }),
			box(108e5, 52e5, 18e5, 18e5, { opacity: .35 }),
			box(-9e5, 54e5, 26e5, 26e5, { opacity: .2 }),
			box(11e6, -9e5, 22e5, 22e5, { opacity: .16 }),
			box(112e5, 56e5, 9e5, 9e5, { opacity: .5 }),
			box(1124e4, 564e4, 82e4, 82e4, { opacity: .9 })
		],
		diamonds: [box(118e5, 2e5, 52e4, 52e4, {
			rot: 45,
			opacity: .55
		}), box(-2e5, 2e5, 52e4, 52e4, {
			rot: 45,
			opacity: .35
		})],
		petals: Array.from({ length: 8 }, () => ({
			x: 92,
			y: 4,
			w: 2.2,
			h: 3.8,
			opacity: 0
		})),
		icons: Array.from({ length: 8 }, () => ({
			x: 92,
			y: 8,
			w: 3,
			h: 5,
			opacity: 0
		})),
		card: box(0, 0, 12192e3, 6858e3, { opacity: 0 }),
		pill: box(4e6, -8e5, 4e6, 9e5, { opacity: 0 }),
		titleBox: box(2e6, -8e5, 7e6, 9e5, { opacity: 0 })
	},
	thanks: {
		bg: "thanks",
		line: box(-590550, 3429e3, 13730995, 0, { opacity: 0 }),
		rings: [
			box(1077686, -1589314, 10036628, 10036628, { opacity: .28 }),
			box(3559629, 892629, 5072742, 5072742, { opacity: .45 }),
			box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
			box(2667e3, 0, 6858e3, 6858e3, { opacity: .35 }),
			box(-1504950, -4171950, 15201900, 15201900, { opacity: .2 }),
			box(4909457, 2242457, 2373086, 2373086, { opacity: 1 }),
			box(4909457, 211e4, 2373086, 2373086, { opacity: 1 })
		],
		diamonds: [box(11004213, 3065621, 830726, 830726, {
			rot: 45.7,
			opacity: .7
		}), box(423301, 3065621, 830726, 830726, {
			rot: 45.7,
			opacity: .7
		})],
		petals: TOC_PETALS.map((p) => ({
			...p,
			w: p.w * .72,
			h: p.h * .72,
			x: p.x + p.w * .14,
			y: p.y + p.h * .08,
			opacity: .95
		})),
		icons: Array.from({ length: 8 }, () => ({
			x: 47,
			y: 42,
			w: 5.4,
			h: 9.6,
			opacity: 0
		})),
		card: box(0, 0, 12192e3, 6858e3, { opacity: 0 }),
		pill: box(3885472, 52e5, 4421056, 9e5, { opacity: 0 }),
		titleBox: box(2438304, 2915591, 7293424, 1077218, { opacity: 0 })
	}
};
var PETAL_PATHS = [
	{
		vb: "0 0 1863 1661",
		d: "M0 0 L244 12 C792 68 1293 287 1695 619 L1863 772 L974 1661 L895 1590 C859 1560 822 1532 783 1505 L775 1501 L421 1617 L254 1285 L115 1263 L0 1258 Z"
	},
	{
		vb: "0 0 1863 1661",
		d: "M1863 0 L1863 1258 L1748 1263 L1609 1285 L1442 1617 L1088 1501 L1080 1505 C1041 1532 1004 1560 968 1590 L889 1661 L0 772 L168 619 C571 287 1071 68 1619 12 Z"
	},
	{
		vb: "0 0 1661 1863",
		d: "M772 0 L1661 889 L1590 968 C1560 1004 1532 1041 1505 1080 L1501 1088 L1617 1442 L1285 1609 L1263 1748 L1258 1863 L0 1863 L12 1619 C68 1071 287 571 619 168 Z"
	},
	{
		vb: "0 0 1661 1863",
		d: "M889 0 L1042 168 C1374 571 1593 1071 1649 1619 L1661 1863 L403 1863 L398 1748 L376 1609 L44 1442 L160 1088 L156 1080 C129 1041 101 1004 71 968 L0 889 Z"
	},
	{
		vb: "0 0 1661 1863",
		d: "M0 0 L1258 0 L1263 115 L1285 254 L1617 421 L1501 775 L1505 783 C1532 822 1560 859 1590 895 L1661 974 L772 1863 L619 1695 C287 1293 68 792 12 244 Z"
	},
	{
		vb: "0 0 1661 1863",
		d: "M1661 0 L1649 244 C1593 792 1374 1293 1042 1695 L889 1863 L0 974 L71 895 C101 859 129 822 156 783 L160 775 L44 421 L376 254 L398 115 L403 0 Z"
	},
	{
		vb: "0 0 1863 1661",
		d: "M974 0 L1863 889 L1695 1042 C1293 1374 792 1593 244 1649 L0 1661 L0 403 L115 398 L254 376 L421 44 L775 160 L783 156 C822 129 859 101 895 71 Z"
	},
	{
		vb: "0 0 1863 1661",
		d: "M889 0 L968 71 C1004 101 1041 129 1080 156 L1088 160 L1442 44 L1609 376 L1748 398 L1863 403 L1863 1661 L1619 1649 C1071 1593 571 1374 168 1042 L0 889 Z"
	}
];
var PETAL_COLORS = [
	"var(--color-petal-1)",
	"var(--color-petal-2)",
	"var(--color-petal-3)",
	"var(--color-petal-4)",
	"var(--color-petal-5)",
	"var(--color-petal-6)",
	"var(--color-petal-7)",
	"var(--color-petal-8)"
];
var RING_LOOK = [
	{
		kind: "stroke",
		color: "rgb(3 169 244 / 0.5)",
		width: 8,
		fill: "transparent"
	},
	{
		kind: "stroke",
		color: "#03A9F4",
		width: 6,
		fill: "transparent"
	},
	{
		kind: "fill",
		color: "transparent",
		width: 2,
		fill: "linear-gradient(180deg,#f4fbff 0%,rgb(3 169 244 / 0.38) 100%)"
	},
	{
		kind: "stroke",
		color: "rgb(3 169 244 / 0.7)",
		width: 6,
		fill: "transparent"
	},
	{
		kind: "stroke",
		color: "rgb(255 255 255 / 0.85)",
		width: 5,
		fill: "transparent"
	},
	{
		kind: "fill",
		color: "#ffffff",
		width: 0,
		fill: "#ffffff"
	},
	{
		kind: "fill",
		color: "#ffffff",
		width: 0,
		fill: "#ffffff"
	}
];
function styleOf(b) {
	return {
		left: `${b.x}%`,
		top: `${b.y}%`,
		width: `${b.w}%`,
		height: `${b.h}%`,
		opacity: b.opacity ?? 1,
		transform: b.rot ? `rotate(${b.rot}deg)` : void 0
	};
}
function IconAtom() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[72%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "10",
				ry: "4.2",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "10",
				ry: "4.2",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				transform: "rotate(60 12 12)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
				cx: "12",
				cy: "12",
				rx: "10",
				ry: "4.2",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "2",
				transform: "rotate(-60 12 12)"
			})
		]
	});
}
function IconSpark() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M7 3c.4 2.6 1.6 4.4 4 5.4C8.6 9.4 7.4 11.2 7 14 6.6 11.2 5.4 9.4 3 8.4 5.4 7.4 6.6 5.6 7 3Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 8c.35 2.3 1.4 3.9 3.6 4.8-2.2.9-3.25 2.5-3.6 4.8-.35-2.3-1.4-3.9-3.6-4.8 2.2-.9 3.25-2.5 3.6-4.8Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "10.5",
				cy: "18.5",
				r: "1.4"
			})
		]
	});
}
function IconBank() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 3 3 8.2v1.6h18V8.2L12 3Z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "5",
				y: "11",
				width: "2.4",
				height: "7",
				rx: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10.8",
				y: "11",
				width: "2.4",
				height: "7",
				rx: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16.6",
				y: "11",
				width: "2.4",
				height: "7",
				rx: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.2",
				y: "18.6",
				width: "17.6",
				height: "2.2",
				rx: "0.5"
			})
		]
	});
}
function IconChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4",
				y: "13",
				width: "4",
				height: "8",
				rx: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "10",
				y: "8",
				width: "4",
				height: "13",
				rx: "0.8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "16",
				y: "4",
				width: "4",
				height: "17",
				rx: "0.8"
			})
		]
	});
}
function IconBook() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 4.2A2.2 2.2 0 0 1 7.2 2H20v18H7.2A2.2 2.2 0 0 0 5 22.2V4.2Z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7.4 2.4v17.2",
			fill: "none",
			stroke: "rgb(2 136 209)",
			strokeWidth: "1.4"
		})]
	});
}
function IconShelf() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "4",
				width: "4.2",
				height: "14",
				rx: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: "6",
				width: "3.6",
				height: "12",
				rx: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.4",
				y: "5",
				width: "4",
				height: "13",
				rx: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "17",
				y: "7",
				width: "3.6",
				height: "11",
				rx: "0.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.5",
				y: "18.4",
				width: "19",
				height: "2",
				rx: "0.5"
			})
		]
	});
}
function IconTarget() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[72%] fill-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "5.4",
				fill: "rgb(2 136 209)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "2.2",
				fill: "currentColor"
			})
		]
	});
}
function IconCheck() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className: "size-[70%] fill-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "3",
			y: "3",
			width: "18",
			height: "18",
			rx: "3.2"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M7.2 12.2 10.4 15.4 16.8 8.6",
			fill: "none",
			stroke: "rgb(2 136 209)",
			strokeWidth: "2.3",
			strokeLinecap: "round",
			strokeLinejoin: "round"
		})]
	});
}
var ICONS = [
	IconAtom,
	IconSpark,
	IconBank,
	IconChart,
	IconBook,
	IconShelf,
	IconTarget,
	IconCheck
];
function MorphLayer({ kind }) {
	const s = MORPH[kind];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("morph-el inset-0 h-full w-full", s.bg === "toc" && "bg-accent-deep"),
				style: {
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					background: s.bg === "seed" ? "radial-gradient(circle at 50% 48%, #ffffff 0%, #e8f6fd 42%, #d7effc 100%)" : s.bg === "burst" ? "radial-gradient(circle at 50% 42%, #ffffff 0%, #e3f4fc 55%, rgb(3 169 244 / 0.18) 100%)" : s.bg === "cover" ? "linear-gradient(180deg, #f7fcff 0%, #e7f4fc 100%)" : s.bg === "toc" ? "var(--color-accent-deep)" : s.bg === "thanks" ? "radial-gradient(circle at 50% 46%, #ffffff 0%, #eaf6fd 48%, #d4eefb 100%)" : "var(--color-paper)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "morph-el",
				style: {
					...styleOf(s.card),
					borderRadius: kind === "toc" ? 0 : "2.4cqw",
					background: kind === "toc" ? "transparent" : "linear-gradient(180deg, #03a9f4 0%, #0288d1 100%)",
					boxShadow: kind === "cover" || kind === "burst" ? "var(--shadow-soft)" : "none"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "morph-el origin-left",
				style: {
					...styleOf(s.line),
					height: 2,
					background: kind === "seed" ? "linear-gradient(90deg, rgb(10 37 64 / 0.35), transparent)" : "linear-gradient(90deg, rgb(3 169 244 / 0), rgb(3 169 244 / 0.55), transparent)"
				}
			}),
			s.rings.map((r, i) => {
				const look = RING_LOOK[i];
				const isCore = i === 5 || i === 6;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "morph-el rounded-full",
					style: {
						...styleOf(r),
						border: look.width ? `${look.width * .08}cqw solid ${look.color}` : "none",
						background: look.fill,
						boxShadow: isCore && (kind === "cover" || kind === "toc" || kind === "burst" || kind === "thanks") ? "0 10px 28px rgb(10 37 64 / 0.22)" : i === 1 || i === 2 ? "0 0 18px rgb(3 169 244 / 0.18)" : "none"
					}
				}, `ring-${i}`);
			}),
			s.diamonds.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "morph-el rounded-[18%]",
				style: {
					...styleOf(d),
					background: kind === "seed" ? "#cfd8dc" : "var(--color-accent)",
					boxShadow: "var(--shadow-ring)"
				}
			}, `dia-${i}`)),
			s.petals.map((p, i) => {
				const path = PETAL_PATHS[i];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					viewBox: path.vb,
					preserveAspectRatio: "none",
					className: "morph-el overflow-visible",
					style: styleOf(p),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: path.d,
						fill: PETAL_COLORS[i]
					})
				}, `petal-${i}`);
			}),
			s.icons.map((ic, i) => {
				const Icon = ICONS[i];
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "morph-el flex items-center justify-center text-card",
					style: styleOf(ic),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {})
				}, `ico-${i}`);
			})
		]
	});
}
function Copy({ delay, className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn(delay === 0 ? "fade-copy" : `fade-copy fade-copy-${delay}`, className),
		children
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-xl bg-card p-4 shadow-[var(--shadow-soft)] ring-1 ring-ink/6 md:p-5", className),
		children
	});
}
function Photo({ src, alt, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden rounded-xl shadow-[var(--shadow-soft)] ring-1 ring-ink/8", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "h-full w-full object-cover"
		})
	});
}
function CoverCopy() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-10 text-card",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hidden h-full md:block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, {
					delay: 1,
					className: "absolute left-[8%] top-[16%] flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-full bg-card/15 ring-1 ring-card/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-sans text-[1.1cqw] font-semibold tracking-wide opacity-80",
						children: GROUP
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-[1.35cqw] font-bold uppercase tracking-[0.14em]",
						children: "Thuyết trình"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, {
					delay: 1,
					className: "absolute right-[8%] top-[16%] flex items-center gap-3 text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-sans text-[1.1cqw] font-semibold tracking-wide opacity-80",
						children: "Học phần"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-[1.35cqw] font-bold uppercase tracking-[0.08em]",
						children: "CN chuyển đổi số"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-10 items-center justify-center rounded-full bg-card/15 ring-1 ring-card/40",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "size-5" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, {
					delay: 2,
					className: "absolute inset-x-[10%] top-[38%] text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[3.4cqw] font-extrabold leading-[1.12] tracking-tight uppercase",
						children: TITLE
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-[70%] font-sans text-[1.35cqw] font-semibold leading-snug text-card/90",
						children: SUBTITLE
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 3,
					className: "absolute inset-x-[16%] top-[64%] rounded-full bg-card px-6 py-3 text-center text-ink shadow-[var(--shadow-soft)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.05cqw] font-bold leading-tight",
						children: TEAM.map((m) => m.name).join("  ·  ")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 4,
					className: "absolute inset-x-[12%] bottom-[9%] text-center font-sans text-[1.05cqw] text-card/80",
					children: FIELD
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col justify-center gap-5 px-6 py-16 md:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, {
					delay: 1,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-xs font-semibold uppercase tracking-[0.16em] text-card/80",
							children: COURSE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-3xl font-extrabold uppercase leading-tight",
							children: TITLE
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-sm leading-relaxed text-card/90",
							children: SUBTITLE
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Copy, {
					delay: 2,
					className: "rounded-2xl bg-card px-4 py-3 text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xs font-bold uppercase tracking-[0.12em] text-accent-deep",
						children: GROUP
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-2 space-y-1",
						children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 font-sans text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-semibold",
								children: m.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums text-muted",
								children: m.id
							})]
						}, m.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs text-card/80",
						children: FIELD
					})
				})
			]
		})]
	});
}
function TocCopy({ onJump }) {
	const left = TOC.slice(0, 4);
	const right = TOC.slice(4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-10 text-card",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 1,
				className: "absolute inset-x-0 top-[3.5%] text-center max-md:top-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[clamp(1.4rem,3.2cqw,3.2rem)] font-extrabold tracking-[0.18em]",
					children: "MỤC LỤC"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[16%] left-[3.5%] hidden w-[28%] flex-col gap-[4.8%] md:flex",
				children: left.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: idx + 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-nav": true,
						onClick: () => onJump(item.slideIndex),
						className: "w-full rounded-lg px-1 py-1 text-left transition-opacity hover:opacity-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-[2.4cqw] font-extrabold leading-none",
								children: [item.n, "."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-[1.25cqw] font-bold leading-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-[0.95cqw] leading-snug text-card/80",
								children: item.blurb
							})
						]
					})
				}, item.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-[16%] right-[3.5%] hidden w-[28%] flex-col gap-[4.8%] text-right md:flex",
				children: right.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: idx + 1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-nav": true,
						onClick: () => onJump(item.slideIndex),
						className: "ml-auto w-full rounded-lg px-1 py-1 text-right transition-opacity hover:opacity-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-[2.4cqw] font-extrabold leading-none",
								children: [item.n, "."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-[1.25cqw] font-bold leading-tight",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-[0.95cqw] leading-snug text-card/80",
								children: item.blurb
							})
						]
					})
				}, item.n))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-4 top-16 bottom-20 overflow-y-auto md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2",
					children: TOC.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"data-nav": true,
						onClick: () => onJump(item.slideIndex),
						className: "rounded-xl bg-card/12 px-4 py-3 text-left ring-1 ring-card/20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-display text-base font-bold",
							children: [
								item.n,
								". ",
								item.title
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 font-sans text-xs text-card/80",
							children: item.blurb
						})]
					}, item.n))
				})
			})
		]
	});
}
function Shell({ kicker, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-10 flex flex-col overflow-y-auto px-[4.5%] py-[4.2%] pb-16 text-ink max-md:px-4 max-md:pb-20 max-md:pt-5",
		children: [
			kicker ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 0,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[clamp(0.7rem,1.15cqw,0.95rem)] font-bold uppercase tracking-[0.18em] text-accent-deep",
					children: kicker
				})
			}) : null,
			title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-1 font-display text-[clamp(1.25rem,2.55cqw,2.7rem)] font-extrabold leading-[1.15] tracking-tight",
					children: title
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-[2.2%] min-h-0 flex-1",
				children
			})
		]
	});
}
function TeamSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "Thành viên",
		title: "Nhóm 13",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full grid-cols-1 gap-3 md:grid-cols-5",
			children: TEAM.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: Math.min(i + 1, 5),
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col items-center justify-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-full bg-mist font-display text-[1.6cqw] font-extrabold text-accent-deep",
							children: String(i + 1).padStart(2, "0")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-[1.25cqw] font-bold leading-tight",
							children: m.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.05cqw] tabular-nums text-muted",
							children: m.id
						})
					]
				})
			}, m.id))
		})
	});
}
function DefineSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "01  ·  Khái niệm",
		title: "Trí tuệ nhân tạo là gì?",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.05cqw] font-bold uppercase tracking-[0.14em] text-accent-deep",
							children: "Định nghĩa cốt lõi"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[1.35cqw] leading-relaxed text-ink-soft",
							children: "Trí tuệ nhân tạo (AI) là ngành khoa học máy tính hướng đến việc tạo ra hệ thống máy móc có khả năng mô phỏng tư duy con người: tiếp nhận dữ liệu, học hỏi quy luật, suy luận logic và tự đưa ra quyết định."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-mist px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.05cqw] font-bold text-navy",
									children: "1950 · Turing"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-sans text-[1.05cqw] leading-snug text-muted",
									children: "“Máy móc có suy nghĩ được không?” — phép thử Turing Test."
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-mist px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.05cqw] font-bold text-navy",
									children: "1956 · Dartmouth"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-sans text-[1.05cqw] leading-snug text-muted",
									children: "John McCarthy chính thức đặt thuật ngữ Artificial Intelligence."
								})]
							})]
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-rows-4 gap-2.5 md:col-span-5",
				children: [
					{
						icon: GraduationCap,
						t: "Học tập",
						d: "Thu nhận & tiếp thu mẫu dữ liệu"
					},
					{
						icon: Brain,
						t: "Suy nghĩ & giải quyết",
						d: "Phân tích logic và bài toán"
					},
					{
						icon: Eye,
						t: "Nhận thức",
						d: "Thị giác, giọng nói và ngôn ngữ"
					},
					{
						icon: Cpu,
						t: "Tự động hóa",
						d: "Vận hành liên tục, chính xác cao"
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: Math.min(i + 2, 5),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full items-center gap-3 rounded-xl bg-card px-4 ring-1 ring-ink/6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-mist text-accent-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.25cqw] font-bold",
							children: c.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[1.05cqw] text-muted",
							children: c.d
						})] })]
					})
				}, c.t))
			})]
		})
	});
}
function NestedSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "01  ·  Bản chất",
		title: "AI hoạt động như thế nào?",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 items-center gap-6 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "flex items-center justify-center md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto aspect-square w-[min(86%,400px)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full bg-accent/20 ring-[0.55cqw] ring-accent/35" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-[16%] rounded-full bg-navy/20 ring-[0.55cqw] ring-navy/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-[36%] flex items-center justify-center rounded-full bg-navy-deep text-card shadow-[var(--shadow-soft)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[clamp(0.95rem,1.7cqw,1.7rem)] font-extrabold leading-none",
									children: "DL"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-sans text-[clamp(0.6rem,0.85cqw,0.85rem)] text-card/75",
									children: "Học sâu"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "absolute left-1/2 top-[6%] -translate-x-1/2 font-display text-[clamp(0.65rem,1cqw,1rem)] font-bold text-accent-deep",
							children: "AI"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "absolute left-1/2 top-[22%] -translate-x-1/2 font-display text-[clamp(0.6rem,0.9cqw,0.9rem)] font-bold text-navy",
							children: "ML"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3 md:col-span-7",
				children: [
					{
						tag: "AI",
						t: "Artificial Intelligence",
						d: "Vòng tròn lớn nhất — khái niệm chung về máy móc thông minh."
					},
					{
						tag: "ML",
						t: "Machine Learning",
						d: "Tập con của AI — máy tự học từ dữ liệu mà không cần lập trình từng dòng lệnh."
					},
					{
						tag: "DL",
						t: "Deep Learning",
						d: "Tập con của ML — mạng nơ-ron nhân tạo nhiều lớp, xử lý ảnh, giọng nói, video."
					}
				].map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: i + 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 shrink-0 items-center justify-center rounded-lg bg-mist font-display text-[1.15cqw] font-extrabold text-accent-deep",
							children: row.tag
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.4cqw] font-bold",
							children: row.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[1.15cqw] leading-snug text-ink-soft",
							children: row.d
						})] })]
					})
				}, row.t))
			})]
		})
	});
}
function EvolveSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "02  ·  Tiến hóa",
		title: "Phân loại AI theo mức độ",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-3",
			children: [
				{
					lv: "Cấp 1 · Hiện nay",
					t: "Narrow AI",
					d: "Thực hiện tốt một nhiệm vụ cụ thể đã được lập trình trước.",
					ex: "FaceID, Google Dịch, gợi ý YouTube",
					tone: "bg-accent text-card"
				},
				{
					lv: "Cấp 2 · Nghiên cứu",
					t: "General AI / AGI",
					d: "Hiểu, tự học và giải quyết bất kỳ nhiệm vụ nào con người làm được.",
					ex: "Chưa đạt — đích OpenAI, DeepMind theo đuổi",
					tone: "bg-navy text-card"
				},
				{
					lv: "Cấp 3 · Lý thuyết",
					t: "Superintelligence",
					d: "Năng lực trí tuệ vượt xa bộ não người trên mọi phương diện.",
					ex: "Kỳ vọng đột phá khoa học, quản trị, triết học",
					tone: "bg-navy-deep text-card"
				}
			].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: i + 2,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] ring-1 ring-ink/6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("px-5 py-4", c.tone),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.95cqw] font-semibold uppercase tracking-[0.12em] opacity-80",
							children: c.lv
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-[1.8cqw] font-extrabold",
							children: c.t
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 flex-col p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[1.2cqw] leading-relaxed text-ink-soft",
							children: c.d
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-4 font-sans text-[1.05cqw] font-semibold text-muted",
							children: c.ex
						})]
					})]
				})
			}, c.t))
		})
	});
}
function DailySlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "03  ·  Đời sống",
		title: "AI trong sinh hoạt hàng ngày",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-3",
			children: [
				{
					icon: Mic,
					t: "Trợ lý ảo cá nhân",
					d: "Siri, Google Assistant — đặt báo thức, nhắc lịch, mở nhạc, tra thời tiết bằng giọng nói."
				},
				{
					icon: ScanFace,
					t: "Nhận diện sinh trắc học",
					d: "FaceID quét hàng nghìn điểm đặc trưng trên khuôn mặt để mở khóa máy, ngân hàng, thanh toán."
				},
				{
					icon: MapPinned,
					t: "Định tuyến & tránh kẹt xe",
					d: "Google Maps phân tích vị trí và tốc độ thời gian thực, đề xuất lộ trình nhanh nhất."
				}
			].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: i + 2,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-xl bg-mist text-accent-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.icon, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-[1.55cqw] font-bold leading-tight",
							children: r.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
							children: r.d
						})
					]
				})
			}, r.t))
		})
	});
}
function RecommendSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "03  ·  Cá nhân hóa",
		title: "Thuật toán gợi ý nội dung",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-xl bg-mist text-accent-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Utensils, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-[1.6cqw] font-bold",
							children: "Đặt đồ ăn thông minh"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.2cqw] leading-relaxed text-ink-soft",
							children: "ShopeeFood, GrabFood phân tích lịch sử đặt món và thói quen theo khung giờ — gợi ý ăn sáng, cà phê xế, cơm trưa — kèm quán gần nhất để tối ưu giao nhận."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-4 font-display text-[1.05cqw] font-bold text-navy",
							children: "Đúng món · Đúng thời điểm · Đúng cự ly"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-11 items-center justify-center rounded-xl bg-mist text-accent-deep",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-[1.6cqw] font-bold",
							children: "Thương mại điện tử"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.2cqw] leading-relaxed text-ink-soft",
							children: "Shopee tự đề xuất sản phẩm liên quan từ từ khóa vừa tìm hoặc mặt hàng vừa thêm vào giỏ, tạo trải nghiệm mua sắm liền mạch."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-4 font-display text-[1.05cqw] font-bold text-navy",
							children: "Học máy theo dõi hành vi từng người dùng"
						})
					]
				})
			})]
		})
	});
}
function CaloriesSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "04  ·  Sức khỏe",
		title: "Tính calories & theo dõi dinh dưỡng",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-5 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/slides/food.jpg",
					alt: "Chụp ảnh món ăn để tính calories",
					className: "h-full min-h-40"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.4cqw] font-bold",
						children: "Chụp ảnh / quét món ăn"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
						children: "Cal AI, MyFitnessPal, Lose It! — chỉ cần chụp đĩa thức ăn. Computer Vision nhận diện món, ước tính khối lượng và tính Calories, Carbs, đạm, béo, xơ."
					})] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.4cqw] font-bold",
						children: "Lời khuyên cá nhân hóa"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
						children: "So sánh calo nạp với BMR và mục tiêu (tăng / giảm / giữ dáng). Nhắc nhở cân bằng khẩu phần theo ngày."
					})] })
				})]
			})]
		})
	});
}
function StandardsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "05  ·  Học thuật",
		title: "Đọc, dịch & tóm tắt tiêu chuẩn quốc tế",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 2,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[1.5cqw] font-bold",
								children: "Dịch thuật ngữ đa ngôn ngữ"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-[1.05cqw] font-semibold text-accent-deep",
								children: "SciSpace · DeepL · ChatGPT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
								children: "Hiểu ngữ cảnh kỹ thuật: dịch chuẩn Codex Alimentarius, ISO 22000:2018, FSSC 22000 v6, BRCGS mà không sai nghĩa từ chuyên ngành."
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 3,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[1.5cqw] font-bold",
								children: "Tóm tắt điều khoản & so sánh"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-sans text-[1.05cqw] font-semibold text-accent-deep",
								children: "ChatPDF · Claude"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
								children: "Tải tài liệu hàng trăm trang; AI trích bảng chỉ tiêu vi sinh, kim loại nặng, phụ gia — đối chiếu QCVN/TCVN với FDA / EFSA. Giảm hơn 75% thời gian tra cứu."
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/slides/lab.jpg",
					alt: "Phòng thí nghiệm vi sinh thực phẩm",
					className: "h-full min-h-40"
				})
			})]
		})
	});
}
function LabSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "05  ·  Phòng thí nghiệm",
		title: "Xử lý số liệu vi sinh / hóa sinh",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "size-6 text-accent-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-[1.5cqw] font-bold",
							children: "Thống kê tự động & ANOVA"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
							children: "Nhập số đếm khuẩn lạc (CFU/g), OD600, đường khử hoặc polyphenol. AI tính Mean, SD, loại ngoại lai, chạy One-way ANOVA (p dưới 0.05) và phân nhóm a, b, c."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-3 font-sans text-[1cqw] font-semibold text-muted",
							children: "Code Interpreter · Julius AI"
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "flex h-full flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-6 text-accent-deep" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-[1.5cqw] font-bold",
							children: "Vẽ đồ thị & gợi ý thảo luận"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
							children: "Đường cong sinh trưởng Lag → Log → Stationary → Death, biểu đồ cột có error bar theo định dạng xuất bản. Gợi ý đoạn nhận xét cơ chế sinh hóa cho báo cáo thực hành."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto pt-3 font-sans text-[1cqw] font-semibold text-muted",
							children: "Python Seaborn · Excel AI"
						})
					]
				})
			})]
		})
	});
}
function HaccpSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "05  ·  Quản lý chất lượng",
		title: "Lập bảng phân tích mối nguy HACCP",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-5 gap-1 md:gap-2",
					children: [
						{
							l: "H",
							s: "Hazard",
							c: "bg-navy-deep"
						},
						{
							l: "A",
							s: "Analysis",
							c: "bg-navy"
						},
						{
							l: "C",
							s: "Critical",
							c: "bg-accent-deep"
						},
						{
							l: "C",
							s: "Control",
							c: "bg-accent"
						},
						{
							l: "P",
							s: "Points",
							c: "bg-petal-6"
						}
					].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("rounded-xl px-3 py-4 text-center text-card", x.c),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[2.4cqw] font-extrabold leading-none",
							children: x.l
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[0.95cqw] font-semibold uppercase tracking-[0.08em] opacity-90",
							children: x.s
						})]
					}, x.s))
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 3,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.35cqw] font-bold",
							children: "Ba nhóm mối nguy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-3 space-y-2 font-sans text-[1.1cqw] text-ink-soft",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-danger",
									children: "Sinh học (B)"
								}), " — E. coli, Salmonella, nấm men"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-warn",
									children: "Hóa học (C)"
								}), " — mycotoxin, kim loại nặng, dị nguyên"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-navy",
									children: "Vật lý (P)"
								}), " — dị vật, mảnh vỡ, kim loại"] })
							]
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: 4,
					className: "h-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.35cqw] font-bold",
							children: "Cây quyết định CCP"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-sans text-[1.1cqw] leading-relaxed text-ink-soft",
							children: "Bốn câu hỏi Codex xác định Điểm kiểm soát tới hạn, Critical Limits (nhiệt độ, thời gian, pH) và thủ tục giám sát ISO 22000. AI hỗ trợ Gantt chart, phân công và hạn chót đồ án."
						})]
					})
				})]
			})]
		})
	});
}
function CameraSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "06  ·  Nhà máy",
		title: "Camera AI phát hiện lỗi trên dây chuyền",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-2.5 md:col-span-6",
				children: [
					{
						t: "Thay thế kiểm tra thủ công",
						d: "Loại bỏ sai sót do mỏi mắt khi dây chuyền chạy tốc độ cao."
					},
					{
						t: "Hàng trăm sản phẩm / phút",
						d: "Rách màng, xì mép nhiệt, hở seal, lệch nhãn — phát hiện tức thì."
					},
					{
						t: "Dị vật ngoại lai",
						d: "Vụn kim loại, thủy tinh, tóc, côn trùng."
					},
					{
						t: "Loại bỏ tự động",
						d: "Vòi khí nén hoặc tay gạt đẩy sản phẩm lỗi khỏi băng chuyền."
					}
				].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: Math.min(i + 2, 5),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Camera, { className: "mt-0.5 size-5 shrink-0 text-accent-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.25cqw] font-bold",
							children: it.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[1.05cqw] leading-snug text-ink-soft",
							children: it.d
						})] })]
					}) })
				}, it.t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/slides/camera.jpg",
					alt: "Dây chuyền đóng gói với camera AI",
					className: "h-full min-h-40"
				})
			})]
		})
	});
}
function RawSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "06  ·  Nguyên liệu",
		title: "Chuẩn hóa chất lượng đầu vào",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3 md:col-span-6",
				children: [
					{
						n: "01",
						t: "Quét 3D",
						d: "Đo kích thước và hình dáng, loại nguyên liệu méo mó hoặc dị tật."
					},
					{
						n: "02",
						t: "Phổ màu quang học",
						d: "Nhận diện độ chín (xanh, chín vừa, chín tới) để đồng đều lô hàng."
					},
					{
						n: "03",
						t: "Khuyết tật ẩn",
						d: "Đốm sâu bệnh, sẹo, vết dập thâm dưới vỏ mà mắt thường khó thấy."
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: i + 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
						className: "flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.6cqw] font-extrabold text-accent-deep",
							children: s.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.3cqw] font-bold",
							children: s.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[1.05cqw] leading-snug text-ink-soft",
							children: s.d
						})] })]
					})
				}, s.n))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
					src: "/slides/apples.jpg",
					alt: "Máy phân loại táo bằng quét quang học",
					className: "h-full min-h-40"
				})
			})]
		})
	});
}
function SensorsSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "07  ·  Kho lạnh",
		title: "Cảm biến AI hợp nhất dữ liệu thời gian thực",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-3 md:col-span-5",
				children: [
					{
						t: "Sensor fusion",
						d: "Nhiệt độ, độ ẩm, hoạt độ nước (aw), CO₂ / O₂ — đo liên tục."
					},
					{
						t: "Mô hình động học",
						d: "Dự báo hạn sử dụng thực tế (Dynamic Shelf-life)."
					},
					{
						t: "Cảnh báo sớm vi sinh",
						d: "Nhận điều kiện nấm mốc / vi khuẩn bùng phát để khử trùng kịp thời."
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: i + 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.3cqw] font-bold",
						children: r.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-sans text-[1.05cqw] text-ink-soft",
						children: r.d
					})] })
				}, r.t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full min-h-44 overflow-hidden rounded-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Photo, {
						src: "/slides/cold.jpg",
						alt: "Kho lạnh với cảm biến IoT",
						className: "absolute inset-0 h-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-x-3 bottom-3 rounded-lg bg-ink/78 p-3 text-card backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1cqw] font-bold tracking-wide",
									children: "COLD STORAGE · LIVE"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-ok/20 px-2 py-0.5 font-sans text-[0.8cqw] font-semibold text-ok",
									children: "ONLINE"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4",
								children: [
									{
										l: "Nhiệt độ",
										v: "−20.4°C"
									},
									{
										l: "Độ ẩm",
										v: "88.7%"
									},
									{
										l: "aw",
										v: "0.928"
									},
									{
										l: "CO₂",
										v: "412 ppm"
									}
								].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[0.75cqw] text-card/60",
									children: m.l
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-[1.15cqw] font-extrabold tabular-nums",
									children: m.v
								})] }, m.l))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex items-center gap-2 font-sans text-[0.8cqw] text-card/70",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thermometer, { className: "size-3.5" }), " Bốn chỉ số kích hoạt mô hình dự báo AI"]
							})
						]
					})]
				})
			})]
		})
	});
}
function RiskSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "08  ·  Cảnh báo",
		title: "Rủi ro khi phụ thuộc AI trong an toàn thực phẩm",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "md:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-full ring-1 ring-danger/25",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-danger",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[1.4cqw] font-bold",
								children: "Rủi ro thuật toán & dữ liệu"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[1.2cqw] leading-relaxed text-ink-soft",
							children: "AI có thể bỏ sót độc tố và vi khuẩn nếu dữ liệu huấn luyện kém chất lượng — dẫn đến ngộ độc và thu hồi sản phẩm trên diện rộng."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-[1.15cqw] font-bold text-navy",
							children: "Khuyến nghị FAO"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
							children: "AI chỉ là công cụ hỗ trợ, không thể thay thế kết luận phòng kiểm nghiệm QA/QC. Mọi kết quả bắt buộc do con người giám sát và kiểm chứng."
						})
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col justify-center rounded-2xl bg-ink p-6 text-card shadow-[var(--shadow-soft)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-7 text-accent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-[1.5cqw] font-bold leading-snug",
							children: "Quy trình kiểm định bắt buộc"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[1.15cqw] leading-relaxed text-card/80",
							children: "Đối chiếu kết quả AI với đĩa petri và mẫu thực tế bởi chuyên viên phòng lab trước khi xuất xưởng."
						})
					]
				})
			})]
		})
	});
}
function DeepfakeSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		kicker: "08  ·  Đời sống",
		title: "Deepfake & lừa đảo giả mạo",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid h-full grid-cols-1 gap-4 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-2.5 md:col-span-6",
				children: [
					{
						t: "Deepfake video & ảnh",
						d: "Cắt ghép tinh vi, thao túng tâm lý bằng nội dung giả như thật."
					},
					{
						t: "Voice cloning",
						d: "Tái tạo giọng, âm điệu, cảm xúc từ mẫu ghi âm vài giây trên internet."
					},
					{
						t: "Rò rỉ dữ liệu cá nhân",
						d: "Thu thập thói quen và danh bạ công khai để dựng kịch bản lừa đảo."
					}
				].map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
					delay: i + 2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "mt-0.5 size-4 shrink-0 text-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.25cqw] font-bold",
							children: r.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[1.05cqw] text-ink-soft",
							children: r.d
						})] })]
					}) })
				}, r.t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "md:col-span-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col rounded-2xl bg-danger p-5 text-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[1.1cqw] font-bold uppercase tracking-[0.14em] opacity-80",
							children: "Cảnh báo đỏ từ FTC"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-sans text-[1.2cqw] leading-relaxed",
							children: "Ủy ban Thương mại Liên bang Mỹ cảnh báo thủ đoạn dùng AI giả giọng người thân gặp nạn (tai nạn, bắt giam) để tạo bối cảnh khẩn cấp và tống tiền."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex items-start gap-2 rounded-xl bg-card/12 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneOff, { className: "mt-0.5 size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-sans text-[1.05cqw] leading-snug",
								children: "Không chỉ tin giọng nói. Ngắt máy và gọi lại số đã lưu để xác minh."
							})]
						})
					]
				})
			})]
		})
	});
}
function CloseSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
			delay: 1,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "size-7 shrink-0 text-accent-deep" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-[clamp(1.15rem,2.2cqw,2.3rem)] font-extrabold leading-[1.2] tracking-tight",
					children: "AI là công cụ hỗ trợ đắc lực, nhưng quyết định an toàn thực phẩm cuối cùng thuộc về chuyên viên QA/QC."
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid min-h-0 flex-1 grid-cols-1 gap-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-full border-l-4 border-l-ok",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.5cqw] font-bold text-ok",
						children: "Vai trò của AI"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tự động hóa tác vụ lặp trong kiểm định" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Xử lý Big Data cảm biến và chuỗi cung ứng" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dự báo rủi ro an toàn thực phẩm sớm" })
						]
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "h-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					className: "h-full border-l-4 border-l-danger",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-[1.5cqw] font-bold text-danger",
						children: "Trách nhiệm con người"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 font-sans text-[1.15cqw] leading-relaxed text-ink-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Tư duy phản biện, kiểm tra chéo số liệu" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Lương tâm nghề nghiệp và trách nhiệm pháp lý — máy móc không thay thế được" })]
					})]
				})
			})]
		})]
	}) });
}
function ThanksSlide() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-10 flex flex-col items-center justify-center px-[8%] text-center text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 1,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-[clamp(1.8rem,4.2cqw,4.2rem)] font-extrabold tracking-tight",
					children: "Cảm ơn thầy cô và các bạn"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 2,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 font-sans text-[clamp(0.85rem,1.4cqw,1.4rem)] text-muted",
					children: [
						COURSE,
						" · ",
						GROUP
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
				delay: 3,
				className: "mt-8 w-full max-w-[82%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-5",
					children: TEAM.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-card/80 px-2 py-3 ring-1 ring-ink/6 backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-[clamp(0.8rem,1.05cqw,1.05rem)] font-bold leading-tight",
							children: m.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-sans text-[clamp(0.7rem,0.9cqw,0.9rem)] tabular-nums text-muted",
							children: m.id
						})]
					}, m.id))
				})
			})
		]
	});
}
function SlideContent({ slide, onJump }) {
	switch (slide.layout) {
		case "blank": return null;
		case "cover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverCopy, {});
		case "toc": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocCopy, { onJump });
		case "team": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TeamSlide, {});
		case "define": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DefineSlide, {});
		case "nested": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NestedSlide, {});
		case "evolve": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EvolveSlide, {});
		case "daily": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailySlide, {});
		case "recommend": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecommendSlide, {});
		case "calories": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaloriesSlide, {});
		case "standards": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StandardsSlide, {});
		case "lab": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabSlide, {});
		case "haccp": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HaccpSlide, {});
		case "camera": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CameraSlide, {});
		case "raw": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RawSlide, {});
		case "sensors": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SensorsSlide, {});
		case "risk": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RiskSlide, {});
		case "deepfake": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeepfakeSlide, {});
		case "close": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseSlide, {});
		case "thanks": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThanksSlide, {});
		default: return null;
	}
}
function slideLabel(i) {
	const s = SLIDES[i];
	if (s.title) return s.title;
	if (s.layout === "toc") return "Mục lục";
	if (s.layout === "cover") return "Bìa";
	if (s.layout === "thanks") return "Cảm ơn";
	if (s.layout === "team") return "Thành viên";
	return "Mở đầu";
}
function Deck() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [overview, setOverview] = (0, import_react.useState)(false);
	const [hint, setHint] = (0, import_react.useState)(true);
	const touchX = (0, import_react.useRef)(null);
	const auto = (0, import_react.useRef)(true);
	const slide = SLIDES[index];
	const go = (0, import_react.useCallback)((next) => {
		auto.current = false;
		setIndex(Math.max(0, Math.min(SLIDE_COUNT - 1, next)));
		setHint(false);
	}, []);
	const prev = (0, import_react.useCallback)(() => go(index - 1), [go, index]);
	const next = (0, import_react.useCallback)(() => go(index + 1), [go, index]);
	(0, import_react.useEffect)(() => {
		if (!auto.current) return;
		if (index >= 3) return;
		const wait = index === 0 ? 1600 : index === 1 ? 1800 : 2400;
		const t = window.setTimeout(() => {
			if (!auto.current) return;
			setIndex((i) => Math.min(3, i + 1));
		}, wait);
		return () => window.clearTimeout(t);
	}, [index]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			const el = e.target;
			if (el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA")) return;
			if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
				e.preventDefault();
				next();
			} else if (e.key === "ArrowLeft" || e.key === "PageUp") {
				e.preventDefault();
				prev();
			} else if (e.key === "Home") go(0);
			else if (e.key === "End") go(SLIDE_COUNT - 1);
			else if (e.key === "Escape") setOverview(false);
			else if (e.key === "o" || e.key === "O" || e.key === "g" || e.key === "G") setOverview((v) => !v);
			else if (e.key === "f" || e.key === "F") {
				if (document.fullscreenElement) document.exitFullscreen();
				else document.documentElement.requestFullscreen?.();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		go,
		next,
		prev
	]);
	const onStageClick = (e) => {
		if (e.target.closest("[data-nav], button, a")) return;
		if (overview) return;
		const rect = e.currentTarget.getBoundingClientRect();
		if (e.clientX - rect.left < rect.width * .22) prev();
		else next();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-dvh w-dvw flex-col items-center justify-center overflow-hidden bg-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stage relative isolate overflow-hidden bg-paper shadow-[0_30px_80px_rgb(0_0_0_/_0.45)] h-dvh w-dvw md:h-auto md:w-[min(100vw,calc(100dvh*16/9))] md:rounded-sm md:aspect-video",
				onClick: onStageClick,
				onTouchStart: (e) => {
					touchX.current = e.changedTouches[0]?.clientX ?? null;
				},
				onTouchEnd: (e) => {
					if (touchX.current == null) return;
					const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
					touchX.current = null;
					if (Math.abs(dx) < 48) return;
					if (dx < 0) next();
					else prev();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MorphLayer, { kind: slide.kind }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute inset-0 z-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlideContent, {
							slide,
							onJump: (i) => go(i)
						})
					}, slide.id),
					hint && index === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "pointer-events-none absolute inset-x-0 bottom-[8%] z-20 text-center font-display text-[1.3cqw] font-semibold tracking-[0.2em] text-ink/50",
						children: "NHÓM 13"
					}) : null,
					overview ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 z-40 overflow-auto bg-ink/92 p-6",
						"data-nav": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-4 flex items-center justify-between text-card",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-lg font-bold",
									children: "Tất cả slide"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									variant: "ghost",
									size: "icon",
									onClick: () => setOverview(false),
									"aria-label": "Đóng",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 gap-3 md:grid-cols-4",
								children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										go(i);
										setOverview(false);
									},
									className: cn("rounded-xl p-3 text-left ring-1 ring-card/15 transition-opacity hover:opacity-90", i === index ? "bg-accent-deep text-card" : "bg-card/8 text-card"),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-sans text-[11px] tabular-nums opacity-70",
										children: String(i + 1).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-display text-sm font-semibold leading-tight",
										children: slideLabel(i)
									})]
								}, s.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-2 gap-2 md:grid-cols-4",
								children: TOC.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-lg bg-card/10 px-3 py-2 text-left text-card",
									onClick: () => {
										go(t.slideIndex);
										setOverview(false);
									},
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xs font-bold",
										children: [
											t.n,
											". ",
											t.title
										]
									})
								}, t.n))
							})
						]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-3 z-30 flex items-center justify-center gap-3 px-4 md:bottom-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pointer-events-auto flex items-center gap-2 rounded-full bg-ink/70 px-2 py-1.5 text-card ring-1 ring-card/15 backdrop-blur-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10",
							onClick: prev,
							"aria-label": "Slide trước",
							disabled: index === 0,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "min-w-14 text-center font-display text-xs font-semibold tabular-nums",
							children: [
								index + 1,
								" / ",
								SLIDE_COUNT
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10",
							onClick: next,
							"aria-label": "Slide sau",
							disabled: index === SLIDE_COUNT - 1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10",
							onClick: () => setOverview(true),
							"aria-label": "Mục lục",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Grid2x2, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-10",
							onClick: () => {
								if (document.fullscreenElement) document.exitFullscreen();
								else document.documentElement.requestFullscreen?.();
							},
							"aria-label": "Toàn màn hình",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize, { className: "size-4" })
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-x-0 top-0 z-20 h-1 bg-ink/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-full bg-accent transition-[width] duration-500 ease-out",
					style: { width: `${(index + 1) / SLIDE_COUNT * 100}%` }
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Deck, {});
}
//#endregion
export { Home as component };
