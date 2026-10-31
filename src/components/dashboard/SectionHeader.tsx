"use client";

import React from "react";
import Link from "next/link";
import { Star } from "lucide-react";

export interface SectionHeaderProps {
  title?: string;
  icon?: React.ReactNode;
  iconBgColor?: string;
  actionHref?: string;
  actionLabel?: string;
  className?: string;
}

export default function SectionHeader({
  title = "Sedang dipelajari",
  icon,
  iconBgColor = "bg-[#277BC0]",
  actionHref,
  actionLabel,
  className = "",
}: SectionHeaderProps) {
  const renderedIcon = icon ?? <Star size={16} fill="white" className="text-white" />;

  return (
    <div className={`flex items-center justify-between ${className}`.trim()}>
      <div className="flex items-center gap-2">
        <div className={`p-1.5 ${iconBgColor} rounded-lg text-white flex items-center justify-center shrink-0`}>
          {renderedIcon}
        </div>
        <h2 className="text-heading font-bold text-text-heading">{title}</h2>
      </div>

      {actionHref && actionLabel && (
        <Link
          href={actionHref}
          className="text-small font-medium text-text-paragraph-75 hover:text-primary-default hover:underline transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
