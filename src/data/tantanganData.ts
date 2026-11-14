import { TantanganAPIResponse, TantanganStage } from "@/types/tantangan";
import { mockDashboardWidgets } from "./dashboardData";

export const TANTANGAN_STAGES: TantanganStage[] = [
  {
    key: "bronze",
    label: "Tahap 1",
    isUnlocked: true,
    missions: [
      { id: "bronze-login", type: "login_harian", title: "Login harian", progress: 3, total: 3, expReward: 10, isClaimed: true },
      { id: "bronze-unit", type: "quiz_beruntun", title: "Selesaikan unit pembelajaran", progress: 3, total: 3, expReward: 30, isClaimed: false },
      { id: "bronze-latihan", type: "quiz_sempurna", title: "Kerjakan latihan soal tanpa salah", progress: 1, total: 1, expReward: 50, isClaimed: false },
      { id: "bronze-semua", type: "semua_tahap", title: "Selesaikan semua pada tahap ini", progress: 3, total: 3, expReward: 100, isClaimed: false },
    ],
  },
  {
    key: "silver",
    label: "Tahap 2",
    isUnlocked: true,
    missions: [
      { id: "silver-login", type: "login_harian", title: "Login harian", progress: 4, total: 7, expReward: 30, isClaimed: false },
      { id: "silver-unit", type: "quiz_beruntun", title: "Selesaikan unit pembelajaran", progress: 2, total: 5, expReward: 70, isClaimed: false },
      { id: "silver-latihan", type: "quiz_sempurna", title: "Kerjakan latihan soal tanpa salah", progress: 0, total: 3, expReward: 100, isClaimed: false },
      { id: "silver-semua", type: "semua_tahap", title: "Selesaikan semua pada tahap ini", progress: 0, total: 3, expReward: 150, isClaimed: false },
    ],
  },
  {
    key: "gold",
    label: "Tahap 3",
    isUnlocked: false,
    missions: [
      { id: "gold-login", type: "login_harian", title: "Login harian", progress: 0, total: 14, expReward: 50, isClaimed: false },
      { id: "gold-unit", type: "quiz_beruntun", title: "Selesaikan unit pembelajaran", progress: 0, total: 10, expReward: 100, isClaimed: false },
      { id: "gold-latihan", type: "quiz_sempurna", title: "Kerjakan latihan soal tanpa salah", progress: 0, total: 5, expReward: 150, isClaimed: false },
      { id: "gold-semua", type: "semua_tahap", title: "Selesaikan semua pada tahap ini", progress: 0, total: 3, expReward: 200, isClaimed: false },
    ],
  },
];

export const tantanganData: TantanganAPIResponse = {
  activeStage: "bronze",
  stages: TANTANGAN_STAGES,
  widgets: mockDashboardWidgets,
};