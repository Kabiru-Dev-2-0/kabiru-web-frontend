"use client";

import React from "react";
import Link from "next/link";
import { AiBannerData } from "../../types/dashboard";
import { Button } from "../ui/Button";

export interface AiBannerProps {
  data?: AiBannerData;
  onActionClick?: () => void;

  className?: string;
}

export default function AIBanner({ data, onActionClick, className = "" }: AiBannerProps) {
  const finalActionLabel = data?.actionLabel ?? "Belajar lagi";
  const finalActionHref = data?.actionHref;
  const finalOnActionClick = onActionClick ?? data?.onActionClick;
  const finalAvatar = data?.avatar ?? "🤖";

  const keywords = data?.highlightedKeywords;
  const textMessage = data?.message;

  const renderMessage = () => {
    if (React.isValidElement(textMessage)) {
      return textMessage;
    }

    if (typeof textMessage === "string" && keywords && keywords.length > 0) {
      // Regex untuk memisahkan kata kunci yang ingin di-highlight
      const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      const regex = new RegExp(`(${escaped.join("|")})`, "gi");
      const parts = textMessage.split(regex);

      return parts.map((part, index) => {
        const isMatch = keywords.some((k) => k.toLowerCase() === part.toLowerCase());
        return isMatch ? (
          <strong key={index} className="underline decoration-[#FFB200]">
            {part}
          </strong>
        ) : (
          part
        );
      });
    }

    if (typeof textMessage === "string") {
      return textMessage;
    }

    // Default fallback content jika belum ada data dari API
    return (
      <>
        Hebat, kamu sudah memahami dasar logika dengan baik! 🎉
        <br />
        Tapi aku lihat kamu masih agak bingung di bagian <strong className="underline decoration-[#FFB200]">looping</strong> dan{" "}
        <strong className="underline decoration-[#FFB200]">efisiensi algoritma</strong>. Yuk, coba ulang latihan di bagian &apos;Simulasi Perulangan&apos;
      </>
    );
  };

  return (
    <div className={`flex items-start gap-4 ${className}`.trim()}>
      {/* Robot Illustration Placeholder */}
      <div className="w-24 h-28 relative shrink-0 flex items-center justify-center">
        <div className="text-6xl animate-bounce select-none">{typeof finalAvatar === "string" ? finalAvatar : finalAvatar}</div>
      </div>

      {/* Bubble Container */}
      <div className="flex-1 bg-[#277BC0] text-white p-6 rounded-2xl relative shadow-md">
        <p className="text-paragraph leading-relaxed">{renderMessage()}</p>

        {/* Action Button inside banner */}
        {finalActionHref ? (
          <Link
            href={finalActionHref}
            className="inline-block mt-4 px-5 py-2 bg-white text-[#277BC0] font-bold text-small rounded-lg border-b-4 border-gray-300 hover:bg-gray-50 active:translate-y-0.5 transition-all text-center"
          >
            {finalActionLabel}
          </Link>
        ) : (
          <button
            type="button"
            onClick={finalOnActionClick}
            className="mt-4 px-5 py-2 bg-white text-[#277BC0] font-bold text-small rounded-lg border-b-4 border-gray-300 hover:bg-gray-50 active:translate-y-0.5 transition-all cursor-pointer"
          >
            {finalActionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
