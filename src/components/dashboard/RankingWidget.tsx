"use client";

import Link from "next/link";
import { RankingData } from "../../types/dashboard";
import WidgetItem from "./WidgetItem";
import { Card } from "../ui/Card";

export interface RankingWidgetProps {
  data?: RankingData;
  loading?: boolean;
  href?: string;
  className?: string;
}

export default function RankingWidget({ data, href = "/peringkat", loading = false, className = "" }: RankingWidgetProps) {
  if (loading) {
    return (
      <Card padding={12} color="#FFFFFF" border={false} shadow className={(className = `shadow-lg`)}>
        <div className="h-16 animate-pulse rounded-md bg-[#F0F1F3]" />
      </Card>
    );
  }

  return (
    <Card padding={14} color="#FFFFFF" border={false} shadow className={(className = `shadow-lg`)}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-bold leading-6 text-[#9333EA]">Peringkat</h3>

        <Link href={href} className="text-xs font-medium text-primary-default hover:underline">
          Lihat Semua
        </Link>
      </div>

      {/* Content */}
      {!data ? (
        <div className="py-2 text-center text-sm text-text-paragraph-75">Mulai belajar untuk masuk podium</div>
      ) : (
        <WidgetItem title="Saat ini kamu di peringkat" iconSrc="/icons/trophy.svg" variant="rank" current={data.rank} />
      )}
    </Card>
  );
}
