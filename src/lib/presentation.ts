export const COURSE = "Môn Công nghệ chuyển đổi số";
export const GROUP = "Nhóm 13";
export const TITLE = "Tìm hiểu về AI";
export const SUBTITLE =
  "Những hướng ứng dụng trong lĩnh vực ngành của sinh viên đang học và nghiên cứu";
export const FIELD = "Công nghệ thực phẩm · An toàn thực phẩm";

export const TEAM = [
  { name: "Nguyễn Gia Bảo", id: "25688891" },
  { name: "Phạm Nguyễn Bảo Nhi", id: "25677521" },
  { name: "Đinh Hoàng Minh Hiếu", id: "25685841" },
  { name: "Ngô Hoàng Gia Bảo", id: "25654391" },
  { name: "Nguyễn Phúc Hào", id: "25694561" },
] as const;

export type TocIcon =
  | "atom"
  | "spark"
  | "bank"
  | "chart"
  | "book"
  | "library"
  | "target"
  | "check";

export type TocItem = {
  n: number;
  title: string;
  blurb: string;
  icon: TocIcon;
  slideIndex: number;
};

export type SlideKind = "seed" | "burst" | "cover" | "toc" | "content" | "thanks";

export type Slide = {
  id: string;
  kind: SlideKind;
  section?: number;
  kicker?: string;
  title?: string;
  layout:
    | "blank"
    | "cover"
    | "toc"
    | "team"
    | "define"
    | "nested"
    | "evolve"
    | "daily"
    | "recommend"
    | "calories"
    | "standards"
    | "lab"
    | "haccp"
    | "camera"
    | "raw"
    | "sensors"
    | "risk"
    | "deepfake"
    | "close"
    | "thanks";
};

export const SLIDES: Slide[] = [
  { id: "seed", kind: "seed", layout: "blank" },
  { id: "burst", kind: "burst", layout: "blank" },
  { id: "cover", kind: "cover", layout: "cover" },
  { id: "toc", kind: "toc", layout: "toc" },
  {
    id: "team",
    kind: "content",
    kicker: "Thành viên",
    title: "Nhóm 13",
    layout: "team",
  },
  {
    id: "define",
    kind: "content",
    section: 1,
    kicker: "01  ·  Khái niệm",
    title: "Trí tuệ nhân tạo là gì?",
    layout: "define",
  },
  {
    id: "nested",
    kind: "content",
    section: 1,
    kicker: "01  ·  Bản chất",
    title: "AI hoạt động như thế nào?",
    layout: "nested",
  },
  {
    id: "evolve",
    kind: "content",
    section: 2,
    kicker: "02  ·  Tiến hóa",
    title: "Phân loại AI theo mức độ",
    layout: "evolve",
  },
  {
    id: "daily",
    kind: "content",
    section: 3,
    kicker: "03  ·  Đời sống",
    title: "AI trong sinh hoạt hàng ngày",
    layout: "daily",
  },
  {
    id: "recommend",
    kind: "content",
    section: 3,
    kicker: "03  ·  Cá nhân hóa",
    title: "Thuật toán gợi ý nội dung",
    layout: "recommend",
  },
  {
    id: "calories",
    kind: "content",
    section: 4,
    kicker: "04  ·  Sức khỏe",
    title: "Tính calories & theo dõi dinh dưỡng",
    layout: "calories",
  },
  {
    id: "standards",
    kind: "content",
    section: 5,
    kicker: "05  ·  Học thuật",
    title: "Đọc, dịch & tóm tắt tiêu chuẩn quốc tế",
    layout: "standards",
  },
  {
    id: "lab",
    kind: "content",
    section: 5,
    kicker: "05  ·  Phòng thí nghiệm",
    title: "Xử lý số liệu vi sinh / hóa sinh",
    layout: "lab",
  },
  {
    id: "haccp",
    kind: "content",
    section: 5,
    kicker: "05  ·  Quản lý chất lượng",
    title: "Lập bảng phân tích mối nguy HACCP",
    layout: "haccp",
  },
  {
    id: "camera",
    kind: "content",
    section: 6,
    kicker: "06  ·  Nhà máy",
    title: "Camera AI phát hiện lỗi trên dây chuyền",
    layout: "camera",
  },
  {
    id: "raw",
    kind: "content",
    section: 6,
    kicker: "06  ·  Nguyên liệu",
    title: "Chuẩn hóa chất lượng đầu vào",
    layout: "raw",
  },
  {
    id: "sensors",
    kind: "content",
    section: 7,
    kicker: "07  ·  Kho lạnh",
    title: "Cảm biến AI hợp nhất dữ liệu thời gian thực",
    layout: "sensors",
  },
  {
    id: "risk",
    kind: "content",
    section: 8,
    kicker: "08  ·  Cảnh báo",
    title: "Rủi ro khi phụ thuộc AI trong an toàn thực phẩm",
    layout: "risk",
  },
  {
    id: "deepfake",
    kind: "content",
    section: 8,
    kicker: "08  ·  Đời sống",
    title: "Deepfake & lừa đảo giả mạo",
    layout: "deepfake",
  },
  {
    id: "close",
    kind: "content",
    kicker: "Kết luận",
    title: "AI hỗ trợ — con người quyết định",
    layout: "close",
  },
  {
    id: "thanks",
    kind: "thanks",
    layout: "thanks",
  },
];

export const TOC: TocItem[] = [
  {
    n: 1,
    title: "Trí tuệ nhân tạo",
    blurb: "Định nghĩa, nguồn gốc, AI · ML · DL",
    icon: "atom",
    slideIndex: 5,
  },
  {
    n: 2,
    title: "Phân loại theo tiến hóa",
    blurb: "Narrow AI, AGI và siêu trí tuệ",
    icon: "spark",
    slideIndex: 7,
  },
  {
    n: 3,
    title: "AI trong đời sống",
    blurb: "Trợ lý ảo, FaceID, bản đồ định tuyến",
    icon: "bank",
    slideIndex: 8,
  },
  {
    n: 4,
    title: "Gợi ý & dinh dưỡng",
    blurb: "Cá nhân hóa trải nghiệm và calories",
    icon: "chart",
    slideIndex: 9,
  },
  {
    n: 5,
    title: "Tiêu chuẩn & HACCP",
    blurb: "Codex, ISO 22000, số liệu thí nghiệm",
    icon: "book",
    slideIndex: 11,
  },
  {
    n: 6,
    title: "Camera AI nhà máy",
    blurb: "Phát hiện lỗi bao bì và dị vật",
    icon: "library",
    slideIndex: 14,
  },
  {
    n: 7,
    title: "Cảm biến kho lạnh",
    blurb: "Hạn sử dụng động, cảnh báo vi sinh",
    icon: "target",
    slideIndex: 16,
  },
  {
    n: 8,
    title: "Rủi ro & kết luận",
    blurb: "FAO, QA/QC, deepfake, trách nhiệm",
    icon: "check",
    slideIndex: 17,
  },
];

export const SLIDE_COUNT = SLIDES.length;
