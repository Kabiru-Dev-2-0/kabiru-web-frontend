"use client";

import React from "react";
import Link from "next/link";
import { RankingData } from "../../types/dashboard";
import WidgetItem from "./WidgetItem";

export interface RankingWidgetProps {
  data?: RankingData;
  loading?: boolean;
  href?: string;
  className?: string;
}

export default function RankingWidget({ data, href = "/peringkat", loading = false, className = "" }: RankingWidgetProps) {
  if (loading) {
    return <div className="bg-white p-5 rounded-xl border border-border-main shadow-sm animate-pulse h-28" />;
  }

  return (
    <div className={`bg-white p-5 rounded-xl border color-border-main shadow-sm ${className}`.trim()}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-heading font-bold text-primary-default">Peringkat</h3>
        <Link href={href} className="text-small text-text-paragraph-75 hover:text-primary-default hover:underline transition-colors">
          Lihat Semua
        </Link>
      </div>
      {!data ? (
        <div className="bg-white p-4 rounded-xl text-center text-paragraph text-text-paragraph-75">Mulai belajar untuk masuk podium</div>
      ) : (
        <div className="space-y-2">
          <WidgetItem title="Saat ini kamu di peringkat" showPercentage={false} icon="🏆" variant="rank" current={data.rank} />
        </div>
      )}
    </div>
  );
}
