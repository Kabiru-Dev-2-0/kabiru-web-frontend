"use client";

import Link from "next/link";
import { ChallengeData } from "../../types/dashboard";
import WidgetItem from "./WidgetItem";
import { Card } from "../ui/Card";

export interface DailyMissionWidgetProps {
  data?: ChallengeData[];
  href?: string;
  loading?: boolean;
  className?: string;
}

export default function ChallengeWidget({ data, href = "/tantangan", loading = false, className = "" }: DailyMissionWidgetProps) {
  if (loading) {
    return (
      <Card padding={12} color="#FFFFFF" border={false} shadow className={`shadow-lg ${className}`.trim()}>
        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-1/2 rounded bg-[#F0F1F3]" />
          <div className="h-8 rounded bg-[#F0F1F3]" />
        </div>
      </Card>
    );
  }

  return (
    <Card padding={14} color="#FFFFFF" border={false} shadow className={`shadow-lg ${className}`.trim()}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold leading-6 text-[#FF2D72]">Misi Harian</h3>

        <Link href={href} className="text-xs font-medium text-primary-default hover:underline">
          Lihat Semua
        </Link>
      </div>

      {/* Content */}
      {!data || data.length === 0 ? (
        <div className="py-2 text-center text-sm text-text-paragraph-75">Kamu belum memiliki misi harian</div>
      ) : (
        <div className="space-y-3">
          {data.map((item, index) => {
            if (item.variant === "percentage") {
              return <WidgetItem key={`${item.title}-${index}`} title={item.title} iconSrc={item.icon} variant="percentage" percentage={item.percentage} progressVariant="error" />;
            }

            return <WidgetItem key={`${item.title}-${index}`} title={item.title} iconSrc={item.icon} variant="fraction" current={item.current} total={item.total} progressVariant="error" />;
          })}
        </div>
      )}
    </Card>
  );
}
