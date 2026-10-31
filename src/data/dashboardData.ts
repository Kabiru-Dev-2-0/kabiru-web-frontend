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
    progressCurrent: 2,
    progressTotal: 4,
    href: "/belajar/dasar-pemrograman",
    showIllustration: true,
    speechBubbleText: "Aku ingin mengenal lebih dalam tentang AI",
    illustrationIcon: "🤖",
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
 * Data widget Misi Harian pengguna
 *
 * variant percentage:
 * Menampilkan progres dalam bentuk persentase.
 *
 * variant fraction:
 * Menampilkan progres dalam bentuk current/total.
 */
export const mockChallenge: ChallengeData[] = [
  {
    title: "Dapatkan 10 XP",
    percentage: 84,
    icon: "/icons/star.svg",
    variant: "percentage",
  },
];

/**
 * Data widget tingkat / perjalanan pengguna
 */
export const mockJourneyData: JourneyData[] = [
  {
    level: "Pemula",
    icon: "/icons/paw.svg",
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
 * Simulasi helper fungsi fetch data dashboard
 */
export async function getDashboardData(): Promise<DashboardApiResponse> {
  return Promise.resolve(dashboardData);
}
