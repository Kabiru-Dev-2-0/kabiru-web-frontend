"use client";

import { LeaderboardUser } from "@/types/peringkat";

interface Props {
  item: LeaderboardUser;
}

export function LeaderboardRow({ item }: Props) {
  // Posisi Sticky/floating
  const stickyClass = item.isCurrentUser ? "sticky bottom-4 z-20 shadow-xl" : "";

  // Card Class
  const isCurrentUserCardClass = item.isCurrentUser
    ? ["bg-white", "border-3 border-[#3674B5]", "shadow-[0px_6px_0px_0px_#3674B5]", "pl-2", "font-semibold"].join(" ")
    : "bg-white border-2 border-[#E4E4E7] pl-4 font-semibold";

  // Text color
  const nameTextClass = item.isCurrentUser ? "text-[#3674B5]" : "text-[#11181C]";
  const expValueClass = item.isCurrentUser ? "text-[#3674B5]" : "text-[#006FEE]";
  const expLabelClass = item.isCurrentUser ? "text-[#3674B5] opacity-60" : "text-[#D4D4D8]";

  // Card opacity logic
  const cardOpacity = !item.isCurrentUser && item.rank > 6 ? (item.rank === 7 ? 0.7 : item.rank === 8 ? 0.5 : 0.3) : 1;
  return (
    <div className={`w-full flex items-center justify-between p-2 rounded-lg transition-all ${stickyClass} ${isCurrentUserCardClass}`} style={{ opacity: cardOpacity }}>
      {/* Ranking Badge */}
      <div className="flex items-center gap-4">
        <span
          className={`w-[28px] h-[28px] flex items-center justify-center text-xs font-bold rounded-full w-6 text-center ${item.isCurrentUser ? "text-[#3674B5] bg-[#E6F1FE]" : "text-[#71717A] bg-[#EEEEEF]"}`}
        >
          {item.rank}
        </span>
        <img src={item.avatar} alt={item.username} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
        <span className="text-sm font-semibold text-[#171717]">{item.username}</span>
      </div>
      {/* User Info */}
      <div className="flex items-center gap-3">
        <span className={`text-2xl font-extrabold ${expValueClass}`}>
          {item.exp} <span className={`text-2xl font-normal ${expLabelClass}`}>EXP</span>
        </span>
        {/* {item.trend === "up" && <span className="text-emerald-500 text-xs">▲</span>}
        {item.trend === "down" && <span className="text-rose-500 text-xs">▼</span>} */}
      </div>
    </div>
  );
}
