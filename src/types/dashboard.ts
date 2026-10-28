import React from "react";
import { VariantWidgetItem } from "../components/dashboard/WidgetItem";

/**
 * Data untuk AI Recommendation Banner di Dashboard
 */
export interface AiBannerData {
  /** Pesan rekomendasi atau evaluasi dari AI */
  message: string;
  /** Daftar kata kunci yang perlu di-highlight dengan garis bawah aksen */
  highlightedKeywords?: string[];
  /** Teks label tombol aksi (misal: "Belajar lagi") */
  actionLabel?: string;
  /** Link tujuan tombol (misal: "/practice/looping") */
  actionHref?: string;
  /** Callback saat tombol diklik (alternatif dari actionHref) */
  onActionClick?: () => void;
  /** Avatar / ikon (emoji atau URL icon) */
  avatar?: string;
}

/**
 * Data per modul dalam section pembelajaran
 */
export interface ModuleData {
  id: string | number;
  /** Kategori atau label bab, misal: "Modul 1" atau "Dasar Pemrograman" */
  category?: string;
  /** Judul modul utama */
  title: string;
  /** Deskripsi singkat atau materi */
  description?: string;
  /** Persentase progres modul: 0 - 100 */
  progressPercentage: number;
  /** Link navigasi saat modul diklik */
  href?: string;
  /** Apakah menampilkan ilustrasi / maskot */
  showIllustration?: boolean;
  /** Teks balon bicara ilustrasi maskot */
  speechBubbleText?: string;
  /** Emoji atau URL icon maskot */
  illustrationIcon?: string;
}

/**
 * Tipe pendukung kompatibilitas ke belakang untuk ModuleHead
 */
export interface T_ModuleHead {
  title: string;
  description: string;
  finishedPercentage: number;
  link?: string;
  category?: string;
}

/**
 * Data untuk satu section/kelompok modul (misal: "Sedang Dipelajari")
 */
export interface ModuleSectionData {
  id?: string | number;
  title: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  modules: ModuleData[];
  emptyMessage?: string;
}

/**
 * Data untuk Widget Peringkat (Leaderboard)
 */
export interface RankingData {
  rank: number;
}

/**
 * Data untuk Widget Misi Harian
 */
interface BaseChallenge {
  title: string;
  icon: string;
}

interface PercentageChallenge extends BaseChallenge {
  variant: "percentage";
  percentage: number; // 0 - 100
}

interface FractionChallenge extends BaseChallenge {
  variant: "fraction";
  current: number;
  total: number;
}

export type ChallengeData = PercentageChallenge | FractionChallenge;

/**
 * Data untuk Widget Perjalananku (Level / Milestone)
 */
export interface JourneyData {
  level: string; // misal: "Pemula", "Menengah"
  icon: string; // misal: "🐾"
  percentage: number; // 0 - 100
}

/**
 * Gabungan data untuk seluruh sidebar widgets di dashboard
 */
export interface DashboardWidgetsData {
  ranking: RankingData;
  challenge: ChallengeData[];
  journey: JourneyData[];
}

/**
 * Struktur standar API Response terpusat untuk Dashboard
 */
export interface DashboardApiResponse {
  aiBanner?: AiBannerData;
  inProgressSection?: ModuleSectionData;
  completedSection?: ModuleSectionData;
  widgets?: DashboardWidgetsData;
}
