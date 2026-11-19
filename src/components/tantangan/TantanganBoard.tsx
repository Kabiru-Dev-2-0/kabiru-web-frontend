"use client";

import { useState, ReactNode } from "react";
import { Flag, Paintbrush, Settings, Star } from "lucide-react";
import { TantanganMissionType, TantanganStage, TantanganStageKey } from "@/types/tantangan";
import MissionCard from "./MissionCard";
import StageTabs from "./StageTabs";
import { Card } from "../ui/Card";

interface TantanganBoardProps {
  stages: TantanganStage[];
  initialStage: TantanganStageKey;
}

const MISSION_ICONS: Record<TantanganMissionType, ReactNode> = {
  login_harian: <Star className="h-[42px] w-[42px] fill-accent-default text-accent-default" />,
  quiz_beruntun: <Flag className="h-[42px] w-[42px] fill-primary-default text-primary-default" />,
  quiz_sempurna: <Paintbrush className="h-[42px] w-[42px] text-warning-default" />,
  semua_tahap: <Settings className="h-[42px] w-[42px] fill-[#06B6D4] text-[#06B6D4]" />,
};

export default function TantanganBoard({ stages, initialStage }: TantanganBoardProps) {
  const [activeKey, setActiveKey] = useState<TantanganStageKey>(initialStage);
  const activeStage = stages.find((s) => s.key === activeKey) ?? stages[0];

  const handleClaim = (missionId: string) => {
    console.log("Klaim misi:", missionId);
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl shadow-sm border bg-white p-5">
      <StageTabs tabs={stages.map(({ key, label }) => ({ key, label }))} activeKey={activeKey} onChange={setActiveKey} />

      <div className="mt-2 flex flex-col gap-5">
        {activeStage.missions.map((mission) => (
          <MissionCard
            key={mission.id}
            icon={MISSION_ICONS[mission.type]}
            title={mission.title}
            progress={mission.progress}
            total={mission.total}
            expReward={mission.expReward}
            isClaimed={mission.isClaimed}
            isDisabled={!activeStage.isUnlocked}
            onClaim={() => handleClaim(mission.id)}
          />
        ))}
      </div>
    </div>
  );
}
