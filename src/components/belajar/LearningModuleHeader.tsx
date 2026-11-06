"use client";

import React from "react";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "../ui/ProgressBar";
import { LearningModuleData } from "@/types/belajar";

interface LearningModuleHeaderProps extends LearningModuleData {
  onBack?: () => void;
  onChangeModule?: () => void;
}

export default function LearningModuleHeader({ moduleNumber, title, progress, completedMaterials, totalMaterials, onBack, onChangeModule }: LearningModuleHeaderProps) {
  return (
    <div
      className="
        box-border
        rounded-lg
        border-[3px] border-primary-default
        bg-white
        p-5
        shadow-[0_6px_0_0_var(--color-primary-hover)]
      "
    >
      <div className="flex items-start gap-4">
        {/* Tombol Kembali */}
        <button
          type="button"
          onClick={onBack}
          aria-label="Kembali"
          className="
            mt-1 shrink-0
            text-primary-default
            transition-transform
            hover:scale-90
          "
        >
          <ArrowLeft size={24} strokeWidth={2.5} />
        </button>

        {/* Informasi Modul */}
        <div className="min-w-0 flex-1">
          <p className="text-small text-text-paragraph-75">Modul {moduleNumber}</p>

          <h1 className="mt-1 text-heading font-bold text-text-heading">{title}</h1>

          <div className="mt-3 flex items-center justify-between gap-4">
            <span className="text-small text-text-heading">{progress}%</span>

            <span className="text-small text-text-paragraph-75">
              {completedMaterials}/{totalMaterials}
            </span>
          </div>

          <ProgressBar value={progress} width="100%" size="md" variant="primary" showPercentage={false} />
        </div>

        {/* Tombol Ganti Modul */}
        <div className="shrink-0 self-end">
          <Button variant="primary" leftIcon={<RefreshCw size={14} />} onClick={onChangeModule}>
            Ganti Modul
          </Button>
        </div>
      </div>
    </div>
  );
}
