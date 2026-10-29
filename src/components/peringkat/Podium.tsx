"use client";

import { LeaderboardUser } from "@/types/peringkat";
import { PodiumCard } from "./PodiumCard";

export function Podium({ topUsers }: { topUsers: LeaderboardUser[] }) {
  const [rank2, rank1, rank3] = topUsers;

  return (
    <div className="flex justify-center items-end gap-4 pt-6 pb-2">
      {/* Rank 2 */}
      <PodiumCard user={rank2} color="success" height="short" />
      {/* Rank 1 */}
      <PodiumCard user={rank1} color="warning" height="tall" />
      {/* Rank 3 */}
      <PodiumCard user={rank3} color="danger" height="short" />
    </div>
  );
}