"use client";

import React from "react";
import ModuleHead from "./ModuleHead";
import { ModuleData, T_ModuleHead } from "../../types/dashboard";

export interface ModuleItemProps {
  /** Data modul yang datang langsung dari API response */
  data: ModuleData;
  /** Dukungan backward compatibility untuk kode lama */
  header?: T_ModuleHead;
  /** Mengaktifkan ilustrasi maskot di sebelah kanan */
  illustration?: boolean | string;
  /** Teks bubble balon bicara untuk ilustrasi */
  speechBubbleText?: string;
  /** Emoji atau gambar maskot (default: '🤖') */
  illustrationIcon?: string;
  /** Handler saat item diklik */
  onClick?: () => void;
  className?: string;
}

export default function ModuleItem({ data, header, illustration, speechBubbleText, illustrationIcon, onClick, className = "" }: ModuleItemProps) {
  // Normalisasi data dari prop `data` atau `header`
  const moduleData = data ?? header;

  const hasIllustration = Boolean(illustration) || Boolean(data?.showIllustration);

  const bubbleContent = speechBubbleText ?? data?.speechBubbleText ?? "Aku ingin mengenal lebih dalam tentang AI";

  const iconContent = (typeof illustration === "string" ? illustration : undefined) ?? illustrationIcon ?? data?.illustrationIcon ?? "🤖";

  return (
    <div
      onClick={onClick}
      className={`bg-white p-6 rounded-xl border color-border-main shadow-sm flex items-center justify-between gap-4 transition-all hover:border-primary-default 
        ${onClick ? "cursor-pointer" : ""} ${className}`.trim()}
    >
      <ModuleHead data={moduleData} />

      {hasIllustration && (
        <div className="shrink-0 flex flex-col items-center">
          <div className="bg-primary-default text-white text-small px-3 py-1.5 rounded-xl max-w-40 text-center mb-2 font-medium shadow-sm">{bubbleContent}</div>
          <div className="text-5xl select-none">{iconContent}</div>
        </div>
      )}
    </div>
  );
}
