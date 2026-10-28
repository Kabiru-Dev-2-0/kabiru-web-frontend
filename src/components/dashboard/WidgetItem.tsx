"use client";

import { ProgressBar } from "../ui/ProgressBar";

export type VariantWidgetItem = "percentage" | "fraction" | "rank";

interface BaseProps {
  icon?: string;
  title?: string;
  showPercentage?: boolean;
}

interface PercentageProps extends BaseProps {
  variant?: "percentage";
  percentage: number;
}

interface FractionProps extends BaseProps {
  variant: "fraction";
  current: number;
  total: number;
}

interface RankProps extends BaseProps {
  variant: "rank";
  current: number;
}

export type WidgetItemProps = PercentageProps | FractionProps | RankProps;

export default function WidgetItem(props: WidgetItemProps) {
  const { icon = "🐾", title = "Judul", showPercentage = true } = props;

  let progress = 0;
  let label = "0%";

  if (props.variant === "fraction") {
    const total = Math.max(props.total, 0);
    const current = Math.min(Math.max(props.current, 0), total);

    progress = total > 0 ? (current / total) * 100 : 0;
    label = `${current}/${total}`;
  } else if (props.variant === "percentage") {
    progress = Math.min(Math.max(props.percentage, 0), 100);
    label = `${progress}%`;
  }

  return (
    <div className="flex items-center gap-2 py-2">
      <span className="text-heading select-none">{icon}</span>
      <div className="flex flex-col w-full gap-2">
        <div className="flex justify-between">
          <div className="font-bold text-paragraph text-text-heading">{title}</div>
          {showPercentage === true && <div className="font-bold text-small text-text-heading">{label}</div>}
        </div>
        {props.variant === "rank" ? (
          <span className="font-bold text-heading text-primary-default">#{props.current}</span>
        ) : (
          <ProgressBar className="w-full" width="100%" value={progress} showPercentage={false} size="lg" />
        )}
      </div>
    </div>
  );
}
