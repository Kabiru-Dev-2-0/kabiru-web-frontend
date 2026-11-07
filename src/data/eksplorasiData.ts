export type ProgressCourse = {
  moduleLabel: string;
  title: string;
  progress: number;
};

export type ExplorationModule = {
  id: string;
  categoryLabel: string;
  lessonLabel?: string;
  title: string;
  description: string;
  footerText: string;
  image?: string;
  imageBackground: string;
  detailHref?: string;
};

export const progressCourses: ProgressCourse[] = [
  {
    moduleLabel: "Modul 2",
    title: "Logika dan Berpikir Komputasional",
    progress: 36,
  },
  {
    moduleLabel: "Modul 4",
    title: "Dasar Algoritma dan Pemrograman",
    progress: 36,
  },
];

export const explorationModules: ExplorationModule[] = [
  {
    id: "pengenalan-ai",
    categoryLabel: "MODUL 1",
    lessonLabel: "5 Lesson",
    title: "Pengenalan Kecerdasan Artifisial",
    description: "Mengenal konsep dasar kecerdasan artifisial, cara kerjanya, serta peran AI dalam membantu kehidupan manusia.",
    footerText: "Kenali konsep dasar kecerdasan artifisial.",
    imageBackground: "linear-gradient(135deg, #D7F5FF, #8BCBFA)",
  },
  {
    id: "berpikir-komputasional",
    categoryLabel: "NEW",
    lessonLabel: "12 Tracks",
    title: "Logika dan Berpikir Komputasional",
    description: "Memecahkan masalah sehari-hari dengan langkah berpikir komputasional, dari analisis hingga solusi logis dan sistematis.",
    footerText: "Pelajari cara memecahkan masalah.",
    imageBackground: "linear-gradient(135deg, #E0F5ED, #70C6B5)",
  },
  {
    id: "multimedia",
    categoryLabel: "NEW",
    lessonLabel: "12 Tracks",
    title: "Multimedia dan Konten Digital",
    description: "Mengenal multimedia dan membuat konten digital yang informatif, kreatif, dan bertanggung jawab.",
    footerText: "Kembangkan kreativitas digitalmu.",
    imageBackground: "linear-gradient(135deg, #FCE8DD, #F4A77C)",
  },
  {
    id: "dasar-algoritma-dan-pemrograman",
    categoryLabel: "MODUL 4",
    lessonLabel: "7 Lesson",
    title: "Dasar Algoritma dan Pemrograman",
    description: "Mempelajari logika dan menulis kode sederhana untuk membuat program atau aplikasi mini.",
    footerText: "Mulai belajar algoritma dan pemrograman.",
    imageBackground: "linear-gradient(135deg, #DFEAFE, #789DEB)",
    detailHref: "/eksplorasi/dasar-algoritma-dan-pemrograman",
  },
  {
    id: "basis-data",
    categoryLabel: "MODUL 5",
    title: "Dasar Basis Data",
    description: "Mengenal dasar basis data dan mengolah data sederhana sebagai fondasi kecerdasan buatan.",
    footerText: "Kenali cara mengelola data.",
    imageBackground: "linear-gradient(135deg, #E9E2FF, #A993E8)",
  },
  {
    id: "etika-ai",
    categoryLabel: "MODUL 6",
    lessonLabel: "11 Lesson",
    title: "Cerdas dan Etis Bersama AI",
    description: "Memahami cara kerja dan peran AI dalam kehidupan, serta pentingnya tanggung jawab dan etika dalam penggunaannya.",
    footerText: "Gunakan teknologi dengan bijak.",
    imageBackground: "linear-gradient(135deg, #FFF2D7, #F4C66D)",
  },
  {
    id: "ai-generatif",
    categoryLabel: "NEW",
    lessonLabel: "11 Lesson",
    title: "Berinovasi dengan AI Generatif",
    description: "Menerapkan prompt engineering dan memahami dasar desain sistem AI melalui pendekatan kreatif dan analitis.",
    footerText: "Eksplorasi kreativitas dengan AI.",
    imageBackground: "linear-gradient(135deg, #F9DDEC, #D992C2)",
  },
];

export const algorithmLessons = [
  {
    number: "01",
    title: "Apa itu Algoritma dan Mengapa Penting?",
    description: "Mengenal berbagai cara penyusunan algoritma (linear, branching, looping).",
  },
  {
    number: "02",
    title: "Mengenal Jenis-Jenis Algoritma",
    description: "Mengenal berbagai jenis algoritma (pencarian, pengurutan, pengambilan keputusan).",
  },
  {
    number: "03",
    title: "Bentuk Representasi Algoritma",
    description: "Belajar menulis algoritma dalam format narasi, pseudocode, dan flowchart.",
  },
  {
    number: "04",
    title: "Struktur Kontrol Algoritma",
    description: "Mempelajari struktur kontrol sequence, selection, dan looping.",
  },
  {
    number: "05",
    title: "Percabangan dan Perulangan",
    description: "Mempelajari logika if–else dan loop dalam kode teks.",
  },
  {
    number: "06",
    title: "Perbaikan Kode",
    description: "Mengenali kesalahan umum (syntax & logic error) dan memperbaikinya.",
  },
];
