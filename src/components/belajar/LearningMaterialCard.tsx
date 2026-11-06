"use client";

import React from "react";
import { Bot, CheckCircle2, Lock } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ProgressBar } from "@/components/ui/ProgressBar";
import ChatBubble from "@/components/ui/ChatBubble";

import type { LearningMaterialData } from "@/types/belajar";

interface LearningMaterialCardProps {
  data: LearningMaterialData;
  onAction?: (id: string | number) => void;
}

export default function LearningMaterialCard({ data, onAction }: LearningMaterialCardProps) {
  const isCompleted = data.completed;
  const isLocked = data.locked ?? false;

  const handleAction = () => {
    if (isLocked) return;
    onAction?.(data.id);
  };

  return (
    <Card padding={20} shadow className={["relative overflow-hidden border-none shadow-lg shadow-border-surface", isLocked ? "bg-[#F0F1F3]" : ""].join(" ")}>
      {/* Overlay kondisi terkunci */}
      {isLocked && <div className="absolute inset-0 z-10 bg-[#BABEC6]/25 pointer-events-none" />}

      <div className={["relative flex flex-col md:flex-row md:items-center gap-5", isLocked ? "opacity-60" : ""].join(" ")}>
        {/* Konten Materi */}
        <div className="min-w-0 flex-1">
          <p className="text-small text-text-paragraph-75">{data.section}</p>

          <h2 className="mt-2 text-heading font-bold text-text-heading">{data.title}</h2>

          {isLocked ? (
            <div className="relative z-20 mt-4 flex items-center gap-2 text-[#F5A524]">
              <Lock size={20} strokeWidth={2.5} className="shrink-0" />
              <span className="text-paragraph font-bold">DIKUNCI</span>
            </div>
          ) : isCompleted ? (
            <div className="mt-4 flex items-center gap-2 text-success-default">
              <CheckCircle2 size={20} strokeWidth={2.5} className="text-success-default" />
              <span className="text-paragraph font-semibold">SELESAI!</span>
            </div>
          ) : (
            <div className="mt-4 flex items-center gap-3">
              <div className="flex-1">
                <ProgressBar value={data.progress ?? 0} width="100%" size="xl" variant="warning" color={data.progressColor ?? "#F5A524"} showPercentage={false} />
              </div>

              <span className="text-paragraph font-bold text-warning-default whitespace-nowrap">
                {data.currentStep ?? 0}/{data.totalSteps ?? 0}
              </span>
            </div>
          )}

          <div className="mt-5">
            <Button variant={isLocked ? "disabled-outline" : "primary-outline"} disabled={isLocked} onClick={handleAction}>
              {isLocked ? "Dikunci" : isCompleted ? "Ulas Materi" : "Lanjutkan Belajar"}
            </Button>
          </div>
        </div>

        {/* Ilustrasi dan Chat Bubble */}
        <div className="flex flex-col items-center justify-center gap-3 w-full md:w-40 shrink-0">
          {data.message && (
            <ChatBubble placement="top" variant="primary" size="small" className="max-w-40">
              {data.message}
            </ChatBubble>
          )}

          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-light/30">
            <Bot size={64} strokeWidth={1.5} className="text-primary-default" />
          </div>
        </div>
      </div>
    </Card>
  );
}
