// LeaderboardDashboard.tsx
"use client";

import DashboardWidgets from "@/components/dashboard/DashboardWidgets";
import { LeaderboardRow } from "@/components/peringkat/LeaderboardRow";
import { Podium } from "@/components/peringkat/Podium";
import { peringkatData } from "@/data/peringkatData";

export default function LeaderboardDashboard() {
  const { topThree, leaderboards, widgets } = peringkatData
  
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Main Column */}
      <div className="col-span-8 space-y-8">
        <Podium topUsers={topThree} />

        <div className="w-full flex flex-col gap-[14px]">
          {leaderboards.map((item) => (
            <LeaderboardRow key={item.rank + item.username} item={item} />
          ))}
        </div>
      </div>

      {/* Kolom Kanan: Sidebar Widgets */}
      <DashboardWidgets data={widgets} />
    </div>
  );
}
