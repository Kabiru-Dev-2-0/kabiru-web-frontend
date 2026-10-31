"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { ChallengeData } from "../../types/dashboard";
import WidgetItem from "./WidgetItem";

export interface DailyMissionWidgetProps {
  data?: ChallengeData[];
  href?: string;

  loading?: boolean;
  className?: string;
}

export default function ChallengeWidget({ data, href = "/tantangan", loading = false, className = "" }: DailyMissionWidgetProps) {
  if (loading) {
    return <div className="bg-white p-5 rounded-xl border border-border-main shadow-sm animate-pulse h-32" />;
  }

  return (
    <div className={`bg-white p-5 rounded-xl border color-border-main shadow-sm space-y-3 ${className}`.trim()}>
      <div className="flex items-center justify-between">
        <h3 className="text-heading font-bold text-error-default">Tantangan</h3>
        <Link href={href} className="text-small text-text-paragraph-75 hover:text-error-default hover:underline transition-colors">
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-2">
        {!data || data.length < 1 ? (
          <div className="bg-white p-4 rounded-xl text-center text-paragraph text-text-paragraph-75">Kamu belum memiliki Tantangan</div>
        ) : (
          data.map((item) =>
            item.variant === "fraction" ? (
              <WidgetItem key={item.title} variant="fraction" title={item.title} icon={item.icon} current={item.current} total={item.total} />
            ) : (
              <WidgetItem key={item.title} variant="percentage" title={item.title} icon={item.icon} percentage={item.percentage} />
            ),
          )
        )}
      </div>
    </div>
  );
}
