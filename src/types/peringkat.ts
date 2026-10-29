import { DashboardWidgetsData } from "./dashboard";

export interface LeaderboardUser {
  rank: number;
  username: string;
  exp: number;
  avatar: string;
  trend?: 'up' | 'down' | 'same';
  isCurrentUser?: boolean;
}

export interface PeringkatAPIResponse {
    topThree: LeaderboardUser[],
    leaderboards: LeaderboardUser[],
    widgets: DashboardWidgetsData
}