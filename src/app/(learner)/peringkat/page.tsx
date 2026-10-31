"use client";

import ChatBubble from "@/components/ui/ChatBubble";
import ChallengeWidget from "@/components/dashboard/ChallengeWidget";
import JourneyWidget from "@/components/dashboard/JourneyWidget";
import { LeaderboardRow } from "@/components/peringkat/LeaderboardRow";
import { Podium } from "@/components/peringkat/Podium";
import { peringkatData } from "@/data/peringkatData";
import { dashboardData } from "@/data";
import { DashboardWidgetsData } from "@/types/dashboard";

export interface LeaderboardProps {
  data?: DashboardWidgetsData;
  loading?: boolean;
  className?: string;
}

export default function Leaderboard({ data, loading = false, className = "" }: LeaderboardProps) {
  // Mengambil data dari dashboardData sebagai sumber utama.
  // Props data tetap dapat digunakan untuk override jika diperlukan.
  const widgetsData = data ?? dashboardData.widgets;

  const challengeData = widgetsData?.challenge;
  const journeyData = widgetsData?.journey;

  const { topThree, leaderboards } = peringkatData;

  return (
    <div className="grid grid-cols-12 gap-x-8 gap-y-8 items-start">
      {/* Baris 1: Podium */}
      <div className="col-span-8 row-start-1 min-w-0">
        <Podium topUsers={topThree} />
      </div>

      {/* Baris 1: AI Banner */}
      <div className="col-span-4 row-start-1 min-w-0">
        <div className="flex items-center gap-3">
          <ChatBubble variant="primary" placement="left" size="small" className="flex-1 min-w-0" contentClassName="w-full shadow-md">
            <p className="text-sm leading-relaxed">Semangat! Terus kumpulkan EXP dan selesaikan tantanganmu untuk meningkatkan peringkatmu. 🚀</p>
          </ChatBubble>

          <div className="w-32 h-32 shrink-0 flex items-center justify-center">
            <span className="text-5xl select-none">🤖</span>
          </div>
        </div>
      </div>

      {/* Baris 2: Leaderboard */}
      <div className="col-span-8 row-start-2 min-w-0">
        <div className="w-full flex flex-col gap-[14px]">
          {leaderboards.map((item) => (
            <LeaderboardRow key={item.rank + item.username} item={item} />
          ))}
        </div>
      </div>

      {/* Baris 2: Sidebar Widgets */}
      <aside className={["col-span-4 row-start-2 min-w-0 space-y-6", className].filter(Boolean).join(" ")}>
        <ChallengeWidget data={challengeData} loading={loading} />
        <JourneyWidget data={journeyData} href="/eksplorasi" loading={loading} />
      </aside>
    </div>
  );
}
