"use client";

import { ArrowLeft } from "lucide-react";
import { Card } from "@/components/ui/Card";
import type { JourneySectionData } from "@/types/learningJourney";

interface LearningJourneyHeaderProps {
  activeSection: JourneySectionData;
  progress?: number;
  onBack?: () => void;
}

export default function LearningJourneyHeader({ activeSection, progress = 25, onBack }: LearningJourneyHeaderProps) {
  return (
    <Card
      shadow
      padding={16}
      className="
        fixed mt-6 top-20 w-[750px] z-30
        flex items-center gap-4
        border-none shadow-border-surface
        shadow-lg
      "
    >
      <button type="button" onClick={onBack} aria-label="Kembali" className="shrink-0 text-primary-default transition-transform hover:scale-90">
        <ArrowLeft size={24} strokeWidth={2.5} />
      </button>

      <div className="min-w-0 flex-1">
        <p className="text-small text-text-paragraph-75">{activeSection.section}</p>

        <h1 className="text-paragraph font-bold text-text-heading">{activeSection.title}</h1>
      </div>

      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
        style={{
          background: `conic-gradient(#F5A524 ${progress}%, #E5E5E5 ${progress}% 100%)`,
        }}
      >
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
          <span className="text-xs font-bold text-warning-default">{progress}%</span>
        </div>
      </div>
    </Card>
  );
}
