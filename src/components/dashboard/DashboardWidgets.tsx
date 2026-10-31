"use client";

import React from "react";
import RankingWidget from "./RankingWidget";
import JourneyWidget from "./JourneyWidget";
import { DashboardWidgetsData, RankingData, JourneyData } from "../../types/dashboard";
import ChallengeWidget from "./ChallengeWidget";

export interface DashboardWidgetsProps {
  data?: DashboardWidgetsData;
  loading?: boolean;
  className?: string;
}

export default function DashboardWidgets({ data, loading = false, className = "col-span-4 space-y-6" }: DashboardWidgetsProps) {
  const rankingData = data?.ranking;
  const challengeData = data?.challenge;
  const journeyData = data?.journey;

  return (
    <aside className={className}>
      {/* Widget 1: Peringkat */}
      <RankingWidget data={rankingData} loading={loading} />

      {/* Widget 2: Misi Harian */}
      <ChallengeWidget data={challengeData} loading={loading} />

      {/* Widget 3: Perjalananku */}
      <JourneyWidget data={journeyData} href="/eksplorasi" loading={loading} />
    </aside>
  );
}
