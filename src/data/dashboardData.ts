import { AiBannerData, ModuleData, RankingData, JourneyData, DashboardWidgetsData, DashboardApiResponse, ChallengeData } from "@/types/dashboard";

/**
 * Data rekomendasi AI pada banner dashboard
 */
export const mockAiBannerData: AiBannerData = {
  message:
    "Hebat, kamu sudah memahami dasar logika dengan baik! 🎉 Tapi aku lihat kamu masih agak bingung di bagian looping dan efisiensi algoritma. Yuk, coba ulang latihan di bagian 'Simulasi Perulangan'",
  highlightedKeywords: ["looping", "efisiensi algoritma"],
  actionLabel: "Belajar lagi",
  actionHref: "/practice/looping",
  avatar: "🤖",
};

/**
 * Data daftar modul yang sedang dipelajari
 */
export const mockInProgressModules: ModuleData[] = [
  {
    id: "mod-in-progress-1",
    category: "Modul 1: Dasar Pemrograman",
    title: "Pengenalan Algoritma & Logika Komputasi",
    description: "Memahami alur logika, variabel, tipe data, dan operasi aritmatika dasar.",
    progressPercentage: 65,
    href: "/belajar/dasar-pemrograman",
    showIllustration: true,
    speechBubbleText: "Aku ingin mengenal lebih dalam tentang AI",
    illustrationIcon: "🤖",
  },
  {
    id: "mod-in-progress-2",
    category: "Modul 2: Struktur Kontrol",
    title: "Percabangan & Logika Kondisional Lanjut",
    description: "Mempelajari if-else bercabang, switch-case, dan evaluasi kondisi boolean.",
    progressPercentage: 35,
    href: "/belajar/struktur-kontrol",
    showIllustration: false,
  },
];

/**
 * Data daftar modul yang telah selesai dipelajari
 */
export const mockCompletedModules: ModuleData[] = [
  {
    id: "mod-completed-1",
    category: "Pra-Syarat: Berpikir Komputasional",
    title: "Konsep Dasar Dekomposisi & Pola",
    description: "Memecah masalah kompleks menjadi langkah-langkah terstruktur dan mudah dipahami.",
    progressPercentage: 100,
    href: "/belajar/konsep-dekomposisi",
    showIllustration: false,
  },
];

/**
 * Data widget peringkat pengguna
 */
export const mockRankingData: RankingData = {
  rank: 17,
};

/**
 * Data widget misi harian pengguna
 */
export const mockChallenge: ChallengeData[] = [
  {
    title: "Dapatkan 10 XP",
    current: 8,
    total: 10,
    icon: "⭐",
    variant: "fraction",
  },
  {
    title: "Selesaikan 3 pelajaran",
    current: 1,
    total: 3,
    icon: "📚",
    variant: "fraction",
  },
  {
    title: "Jawab benar 5 soal berturut-turut",
    current: 3,
    total: 5,
    icon: "🎯",
    variant: "fraction",
  },
  {
    title: "Belajar 15 menit hari ini",
    percentage: 15,
    icon: "⏱️",
    variant: "percentage",
  },
  {
    title: "Dapatkan 30 Exp hari ini",
    percentage: 30,
    icon: "🔥",
    variant: "percentage",
  },
  {
    title: "Ajak 1 teman belajar",
    current: 0,
    total: 1,
    icon: "🤝",
    variant: "fraction",
  },
];

/**
 * Data widget tingkat / perjalanan pengguna
 */
export const mockJourneyData: JourneyData[] = [
  {
    level: "Pemula",
    icon: "🐾",
    percentage: 40,
  },
];

/**
 * Gabungan data seluruh widgets pada sidebar
 */
export const mockDashboardWidgets: DashboardWidgetsData = {
  ranking: mockRankingData,
  challenge: mockChallenge,
  journey: mockJourneyData,
};

/**
 * Objek terpusat API response untuk halaman dashboard
 * (Dapat langsung digunakan atau dijadikan mock response API backend)
 */
export const dashboardData: DashboardApiResponse = {
  aiBanner: mockAiBannerData,
  inProgressSection: {
    id: "section-in-progress",
    title: "Sedang Dipelajari",
    modules: mockInProgressModules,
  },
  completedSection: {
    id: "section-completed",
    title: "Selesai Dipelajari",
    modules: mockCompletedModules,
    emptyMessage: "Belum ada modul yang selesai kamu pelajari. Ayo selesaikan modul pertamamu!",
  },
  widgets: mockDashboardWidgets,
};

/**
 * Simulasi helper fungsi fetch data dashboard (asynchronous)
 * Sangat berguna ketika ingin mensimulasikan pemanggilan API dengan React Server Component atau TanStack Query
 */
export async function getDashboardData(): Promise<DashboardApiResponse> {
  // Simulasi network delay jika diperlukan
  return Promise.resolve(dashboardData);
}
