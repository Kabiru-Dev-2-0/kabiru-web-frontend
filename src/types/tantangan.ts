import { DashboardWidgetsData } from "./dashboard";

export type TantanganStageKey = "bronze" | "silver" | "gold";

export type TantanganMissionType =
  | "login_harian"
  | "quiz_beruntun"
  | "quiz_sempurna"
  | "semua_tahap";

export interface TantanganMission {
  id: string;
  type: TantanganMissionType;
  title: string;
  progress: number;
  total: number;
  expReward: number;
  isClaimed: boolean;
}

export interface TantanganStage {
  key: TantanganStageKey;
  label: string;
  isUnlocked: boolean;
  missions: TantanganMission[];
}

export interface TantanganAPIResponse {
  activeStage: TantanganStageKey;
  stages: TantanganStage[];
  widgets: DashboardWidgetsData;
}