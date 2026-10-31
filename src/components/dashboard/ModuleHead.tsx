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
}

export default function ModuleHead({ data, className = "" }: ModuleHeadProps) {
  // Normalisasi data dari props langsung atau data object API
  const topLabel = data.category ?? "Modul Belajar";
  const mainHeading = data.title ?? "Judul Modul";
  const subDescription = data.description;
  const rawProgress = data.progressPercentage ?? 0;
  const progress = Math.min(Math.max(rawProgress, 0), 100);
  const targetHref = data.href;
  const moduleFinished = progress >= 100;

  return (
    <div className={`space-y-3 flex-1 pr-6 ${className}`.trim()}>
      <div className="space-y-1">
        <span className="text-small font-medium text-text-paragraph-75 block">{topLabel}</span>
        <h3 className="text-heading font-bold text-text-heading">{mainHeading}</h3>

        {subDescription && <p className="text-small text-text-paragraph-75 line-clamp-1">{subDescription}</p>}
      </div>

      <div className="w-full">
        <ProgressBar value={progress} showPercentage={false} size="xl" width="100%" variant={moduleFinished ? "success" : "primary"} />
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
