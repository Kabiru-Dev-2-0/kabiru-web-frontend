"use client";

import Image from "next/image";
import { ProgressBar } from "../ui/ProgressBar";

export type VariantWidgetItem = "percentage" | "fraction" | "rank";

export type WidgetProgressVariant = "primary" | "success" | "error" | "warning" | "disabled";

interface BaseProps {
  /** Path ikon SVG dari folder public */
  iconSrc: string;

  /** Judul atau keterangan item */
  title: string;

  /** Menampilkan atau menyembunyikan label progres */
  showPercentage?: boolean;
}

interface PercentageProps extends BaseProps {
  variant: "percentage";
  percentage: number;
  progressVariant?: WidgetProgressVariant;
}

interface FractionProps extends BaseProps {
  variant: "fraction";
  current: number;
  total: number;
  progressVariant?: WidgetProgressVariant;
}

interface RankProps extends BaseProps {
  variant: "rank";
  current: number;
}

export type WidgetItemProps = PercentageProps | FractionProps | RankProps;

export default function WidgetItem(props: WidgetItemProps) {
  const { iconSrc, title, showPercentage = true } = props;

  let progress = 0;
  let progressLabel = "";

  if (props.variant === "percentage") {
    progress = Math.min(100, Math.max(0, props.percentage));
    progressLabel = `${progress}%`;
  } else if (props.variant === "fraction") {
    const total = Math.max(0, props.total);
    const current = Math.min(Math.max(0, props.current), total);

    progress = total > 0 ? (current / total) * 100 : 0;
    progressLabel = `${current}/${total}`;
  }

  return (
    <div className="flex w-full items-center gap-3">
      {/* Icon */}
      <div className="relative h-7 w-7 shrink-0">
        <Image src={iconSrc} alt="" fill sizes="28px" className="object-contain" />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        {props.variant === "rank" ? (
          <>
            <span className="text-sm font-normal leading-5 text-text-heading">{title}</span>

            <span className="text-sm font-bold leading-5 text-primary-default">#{props.current}</span>
          </>
        ) : (
          <>
            {/* Title dan label progres */}
            <div className="flex items-center justify-between gap-2">
              <span className="min-w-0 text-sm font-normal leading-5 text-text-heading">{title}</span>

              {showPercentage && <span className={`shrink-0 text-sm font-medium leading-5 ${props.variant === "percentage" ? "text-error-default" : "text-text-heading"}`}>{progressLabel}</span>}
            </div>

            {/* Progress bar */}
            <ProgressBar className="w-full" width="100%" value={progress} variant={props.progressVariant ?? "primary"} size="xl" showPercentage={false} showDetail={false} />
          </>
        )}
      </div>
    </div>
  );
}
