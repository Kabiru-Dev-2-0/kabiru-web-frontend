import { LeaderboardUser, PeringkatAPIResponse } from "@/types/peringkat";
import { mockDashboardWidgets } from "./dashboardData";

export const TOP_THREE_USERS: LeaderboardUser[] = [
  {
    rank: 2,
    username: "coupsby",
    exp: 1256,
    avatar: "https://picsum.photos/id/1025/150/150",
  },
  {
    rank: 1,
    username: "annisa.isn",
    exp: 2732,
    avatar: "https://picsum.photos/id/64/150/150",
  },
  {
    rank: 3,
    username: "caica",
    exp: 1034,
    avatar: "https://picsum.photos/id/338/150/150",
  },
];

export const LEADERBOARD_LIST: LeaderboardUser[] = [
  {
    rank: 1,
    username: "annisa.isn",
    exp: 945,
    avatar: "https://picsum.photos/id/64/100/100",
    trend: "up",
  },
  {
    rank: 2,
    username: "coupsby",
    exp: 921,
    avatar: "https://picsum.photos/id/1025/100/100",
    trend: "down",
  },
  {
    rank: 3,
    username: "caica",
    exp: 894,
    avatar: "https://picsum.photos/id/338/100/100",
    trend: "down",
  },
  {
    rank: 4,
    username: "mfputr",
    exp: 743,
    avatar: "https://picsum.photos/id/1005/100/100",
    trend: "up",
  },
  {
    rank: 5,
    username: "yashhthisischa",
    exp: 634,
    avatar: "https://picsum.photos/id/1012/100/100",
    trend: "up",
  },
  {
    rank: 6,
    username: "nadyaptr",
    exp: 589,
    avatar: "https://picsum.photos/id/237/100/100",
    trend: "down",
  },
  {
    rank: 7,
    username: "rizky.dev",
    exp: 512,
    avatar: "https://picsum.photos/id/1001/100/100",
    trend: "up",
  },
  {
    rank: 8,
    username: "putriaraa",
    exp: 467,
    avatar: "https://picsum.photos/id/1006/100/100",
    trend: "down",
  },
  {
    rank: 9,
    username: "dimasjr",
    exp: 389,
    avatar: "https://picsum.photos/id/1009/100/100",
    trend: "up",
  },
  {
    rank: 10,
    username: "fira.n",
    exp: 325,
    avatar: "https://picsum.photos/id/1011/100/100",
    trend: "up",
  },
  {
    rank: 17,
    username: "cacacaica (you)",
    exp: 126,
    avatar: "https://picsum.photos/id/64/100/100",
    trend: "up",
    isCurrentUser: true,
  },
];

export const peringkatData: PeringkatAPIResponse = {
  topThree: TOP_THREE_USERS,
  leaderboards: LEADERBOARD_LIST,
  widgets: mockDashboardWidgets,
};
