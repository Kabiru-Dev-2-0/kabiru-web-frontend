import React from "react";

/**
 * Data untuk AI Recommendation Banner di Dashboard
 */
export interface AiBannerData {
  message: string;
  highlightedKeywords?: string[];
  actionLabel?: string;
  actionHref?: string;
  onActionClick?: () => void;
  avatar?: string;
}

/**
 * Data per modul dalam section pembelajaran
 */
export interface ModuleData {
  id: string | number;
  category?: string;
  title: string;
  description?: string;
  progressPercentage: number;
  progressCurrent?: number;
  progressTotal?: number;
  href?: string;
  showIllustration?: boolean;
  speechBubbleText?: string;
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
 * Data untuk satu section/kelompok modul
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
 * Data untuk Widget Peringkat
 */
export interface RankingData {
  rank: number;
}

/**
 * Data dasar untuk Misi Harian
 */
interface BaseChallenge {
  title: string;
  /** Path ikon SVG dari folder public, contoh: "/icons/star.svg" */
  icon: string;
}

/**
 * Misi dengan progres berbentuk persentase
 */
interface PercentageChallenge extends BaseChallenge {
  variant: "percentage";
  percentage: number;
}

/**
 * Misi dengan progres berbentuk tahapan
 */
interface FractionChallenge extends BaseChallenge {
  variant: "fraction";
  current: number;
  total: number;
}

export type ChallengeData = PercentageChallenge | FractionChallenge;

/**
 * Data untuk Widget Perjalananku
 */
export interface JourneyData {
  level: string;
  /** Path ikon SVG dari folder public */
  icon: string;
  percentage: number;
}

/**
 * Gabungan data seluruh widgets pada dashboard
 */
export interface DashboardWidgetsData {
  ranking: RankingData;
  challenge: ChallengeData[];
  journey: JourneyData[];
}

/**
 * Struktur standar API Response Dashboard
 */
export interface DashboardApiResponse {
  aiBanner?: AiBannerData;
  inProgressSection?: ModuleSectionData;
  completedSection?: ModuleSectionData;
  widgets?: DashboardWidgetsData;
}
