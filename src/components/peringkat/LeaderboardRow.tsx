"use client";

import { Triangle } from "lucide-react";
import { LeaderboardUser } from "@/types/peringkat";

interface Props {
  item: LeaderboardUser;
}

export function LeaderboardRow({ item }: Props) {
  // Posisi sticky untuk pengguna saat ini
  const stickyClass = item.isCurrentUser ? "sticky bottom-4 z-20 shadow-xl" : "";

  // Card style
  const isCurrentUserCardClass = item.isCurrentUser
    ? ["bg-white", "border-3 border-[#3674B5]", "shadow-[0px_6px_0px_0px_#3674B5]", "pl-2", "font-semibold"].join(" ")
    : "bg-white border-2 border-[#E4E4E7] pl-4 font-semibold";

  // Text color
  const nameTextClass = item.isCurrentUser ? "text-[#3674B5]" : "text-[#11181C]";

  const expValueClass = item.isCurrentUser ? "text-[#3674B5]" : "text-[#006FEE]";

  const expLabelClass = item.isCurrentUser ? "text-[#3674B5] opacity-60" : "text-[#D4D4D8]";

  // Card opacity
  const cardOpacity = !item.isCurrentUser && item.rank > 6 ? (item.rank === 7 ? 0.7 : item.rank === 8 ? 0.5 : 0.3) : 1;

  // Trend icon
  const trendColor = item.trend === "up" ? "text-success-default" : item.trend === "down" ? "text-error-default" : "";

  // Background badge peringkat
  const rankBadgeClass = item.isCurrentUser || item.trend === "up" ? "text-[#3674B5] bg-[#E6F1FE]" : "text-[#71717A] bg-[#EEEEEF]";

  return (
    <div className={["w-full flex items-center justify-between py-2 pl-2 pr-5 rounded-lg transition-all", stickyClass, isCurrentUserCardClass].join(" ")} style={{ opacity: cardOpacity }}>
      {/* Ranking Badge dan User Info */}
      <div className="flex items-center gap-4">
        <span className={["w-7 h-7 flex shrink-0 items-center justify-center", "text-xs font-bold rounded-full text-center", rankBadgeClass].join(" ")}>{item.rank}</span>

        <img src={item.avatar} alt={item.username} className="w-10 h-10 rounded-full object-cover border border-slate-200" />

        <span className={`text-sm font-semibold ${nameTextClass}`}>{item.username}</span>
      </div>

      {/* EXP dan Trend */}
      <div className="flex items-center gap-4">
        <span className={`text-display-4 font-extrabold ${expValueClass}`}>
          {item.exp} <span className={`text-display-4 font-normal  ${expLabelClass}`}>EXP</span>
        </span>

        {/* Ranking Trend */}
        {item.trend === "up" && <Triangle size={16} fill="currentColor" strokeWidth={0} className={trendColor} aria-label="Peringkat naik" />}

        {item.trend === "down" && <Triangle size={16} fill="currentColor" strokeWidth={0} className={`rotate-180 ${trendColor}`} aria-label="Peringkat turun" />}
      </div>
    </div>
  );
}
