"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JourneyData } from "../../types/dashboard";
import { ProgressBar } from "../ui/ProgressBar";
import WidgetItem from "./WidgetItem";

export interface JourneyWidgetProps {
  data?: JourneyData[];
  href?: string;

  loading?: boolean;
  className?: string;
}

export default function JourneyWidget({ data, href = "/eksplorasi", loading = false, className = "" }: JourneyWidgetProps) {
  const journeyData = data ?? [{ level: "Pemula", icon: "🐾", percentage: 0 }];
  if (loading) return <div className="bg-white p-5 rounded-xl border border-border-main shadow-sm animate-pulse h-32" />;

  return (
    <div className={`bg-white p-5 rounded-xl border color-border-main shadow-sm space-y-3 ${className}`.trim()}>
      <div className="flex items-center justify-between">
        <h3 className="text-heading font-bold text-success-default">Perjalananku</h3>
        <Link href={href} className="text-small text-text-paragraph-75 hover:text-error-default hover:underline transition-colors">
          Lihat Semua
        </Link>
      </div>
      <div className="space-y-2">
        {journeyData.map((item) => (
          <WidgetItem variant="percentage" title={item.level} icon={item.icon} percentage={item.percentage} />
        ))}
      </div>
      <div className="space-y-2"></div>
    </div>
  );
}
