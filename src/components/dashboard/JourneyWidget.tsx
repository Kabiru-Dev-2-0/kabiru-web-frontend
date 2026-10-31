"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JourneyData } from "../../types/dashboard";
import WidgetItem from "./WidgetItem";
import { Card } from "../ui/Card";

export interface JourneyWidgetProps {
  data?: JourneyData[];
  href?: string;
  loading?: boolean;
  className?: string;
}

export default function JourneyWidget({ data, href = "/eksplorasi", loading = false, className = "" }: JourneyWidgetProps) {
  const journeyData: JourneyData[] = data ?? [
    {
      level: "Pemula",
      icon: "/icons/paw.svg",
      percentage: 30,
    },
  ];

  if (loading) {
    return (
      <Card padding={12} color="#FFFFFF" border={false} shadow className={(className = `shadow-lg`)}>
        <div className="space-y-3 animate-pulse">
          <div className="h-5 w-1/2 rounded bg-[#F0F1F3]" />
          <div className="h-8 rounded bg-[#F0F1F3]" />
        </div>
      </Card>
    );
  }

  return (
    <Card padding={14} color="#FFFFFF" border={false} shadow className={(className = `shadow-lg`)}>
      {/* Header */}
      <Link href={href} className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold leading-6 text-success-default">Perjalananku</h3>

        <ChevronRight size={20} strokeWidth={2} className="text-primary-default" aria-hidden="true" />
      </Link>

      {/* Content */}
      <div className="space-y-3">
        {journeyData.map((item, index) => (
          <WidgetItem key={`${item.level}-${index}`} title={item.level} iconSrc={item.icon} variant="percentage" percentage={item.percentage} showPercentage={false} progressVariant="success" />
        ))}
      </div>
    </Card>
  );
}
