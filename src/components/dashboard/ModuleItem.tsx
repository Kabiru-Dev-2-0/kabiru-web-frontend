"use client";

import React from "react";
import ModuleHead from "./ModuleHead";
import { ModuleData } from "../../types/dashboard";
import { Card } from "../ui/Card";

export interface ModuleItemProps {
  data: ModuleData;
  illustration?: boolean | string;
  speechBubbleText?: string;
  illustrationIcon?: string;
  onClick?: () => void;
  className?: string;
  progressVariant?: "primary" | "success" | "warning" | "error" | "disabled";
  progressColor?: string;
}

export default function ModuleItem({ data, illustration, speechBubbleText, illustrationIcon, onClick, className = "", progressVariant = "warning", progressColor }: ModuleItemProps) {
  const hasIllustration = Boolean(illustration) || Boolean(data?.showIllustration);

  const bubbleContent = speechBubbleText ?? data?.speechBubbleText ?? "Aku ingin mengenal lebih dalam tentang AI";

  const iconContent = (typeof illustration === "string" ? illustration : undefined) ?? illustrationIcon ?? data?.illustrationIcon ?? "🤖";

  return (
    <Card
      padding={24}
      color="#FFFFFF"
      border={false}
      shadow
      onClick={onClick}
      className={`flex shadow-lg shadow-border-surface items-center justify-between gap-4 transition-all
        ${onClick ? "cursor-pointer hover:border-primary-default" : ""}
        ${className}
      `.trim()}
    >
      <ModuleHead data={data} progressVariant={progressVariant} progressColor={progressColor} />

      {hasIllustration && (
        <div className="shrink-0 flex flex-col items-center">
          <div className="bg-primary-default text-white text-small px-3 py-1.5 rounded-xl max-w-40 text-center mb-2 font-medium shadow-sm">{bubbleContent}</div>

          <div className="text-5xl select-none">{iconContent}</div>
        </div>
      )}
    </Card>
  );
}
