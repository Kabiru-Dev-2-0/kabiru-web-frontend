"use client";

import React from "react";
import Link from "next/link";
import { ProgressBar } from "../ui/ProgressBar";
import { ModuleData, T_ModuleHead } from "../../types/dashboard";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

export type { T_ModuleHead };

export interface ModuleHeadProps {
  data: Partial<ModuleData> & Partial<T_ModuleHead>;
  className?: string;
  progressVariant?: "primary" | "success" | "warning" | "error" | "disabled";
  progressColor?: string;
}

export default function ModuleHead({ data, className = "", progressVariant = "warning", progressColor }: ModuleHeadProps) {
  const topLabel = data.category ?? "Modul Belajar";
  const mainHeading = data.title ?? "Judul Modul";
  const subDescription = data.description;

  const progressCurrent = data.progressCurrent;
  const progressTotal = data.progressTotal;

  const hasProgressCount = typeof progressCurrent === "number" && typeof progressTotal === "number";

  const rawProgress = hasProgressCount ? (progressTotal > 0 ? (progressCurrent / progressTotal) * 100 : 0) : (data.progressPercentage ?? 0);

  const progress = Math.min(Math.max(rawProgress, 0), 100);

  const targetHref = data.href;
  const moduleFinished = progress >= 100;

  const progressTextColor = progressColor ? undefined : progressVariant === "warning" ? "text-[#FFB200]" : progressVariant === "success" ? "text-success-default" : "text-text-paragraph";

  return (
    <div className={`space-y-3 flex-1 min-w-0 pr-6 ${className}`.trim()}>
      <div className="space-y-1">
        <span className="text-small font-medium text-text-paragraph-75 block">{topLabel}</span>

        <h3 className="text-heading font-bold text-text-heading">{mainHeading}</h3>

        {subDescription && <p className="text-small text-text-paragraph-75 line-clamp-1">{subDescription}</p>}
      </div>

      {/* Progress Bar dan Jumlah Progres */}
      <div className="flex items-center gap-3 w-full">
        <div className="flex-1 min-w-0">
          <ProgressBar value={progress} showPercentage={false} size="xl" width="100%" variant={progressVariant} color={progressColor} />
        </div>

        {hasProgressCount && (
          <span className={`text-paragraph font-semibold shrink-0 ${progressTextColor ?? ""}`} style={progressColor ? { color: progressColor } : undefined}>
            {progressCurrent}/{progressTotal}
          </span>
        )}
      </div>

      {!moduleFinished && targetHref && (
        <div className="pt-4">
          <Link href={targetHref}>
            <Button variant="primary-outline" rightIcon={<ArrowRight size={16} />}>
              Lanjutkan Belajar
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
