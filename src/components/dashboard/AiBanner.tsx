"use client";

import React from "react";
import Link from "next/link";
import { AiBannerData } from "../../types/dashboard";
import ChatBubble from "../ui/ChatBubble";

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

    if (typeof textMessage === "string" && keywords?.length) {
      const escaped = keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));

      const regex = new RegExp(`(${escaped.join("|")})`, "gi");
      const parts = textMessage.split(regex);

      return parts.map((part, index) => {
        const isMatch = keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase());

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

    return (
      <>
        Hebat, kamu sudah memahami dasar logika dengan baik! 🎉
        <br />
        Tapi aku lihat kamu masih agak bingung di bagian <strong className="underline decoration-[#FFB200]">looping</strong> dan{" "}
        <strong className="underline decoration-[#FFB200]">efisiensi algoritma</strong>. Yuk, coba ulang latihan di bagian &apos;Simulasi Perulangan&apos;.
      </>
    );
  };

  return (
    <div className={`flex items-start gap-4 ${className}`.trim()}>
      {/* Robot Illustration */}
      <div className="w-24 h-28 shrink-0 flex items-center justify-center">
        <div className="text-6xl animate-bounce select-none">{finalAvatar}</div>
      </div>

      {/* AI Chat Bubble */}
      <ChatBubble variant="primary" placement="right" size="large" className="flex-1 min-w-0" contentClassName="w-full shadow-md">
        <div>
          <p className="text-paragraph leading-relaxed">{renderMessage()}</p>

          {/* Action Button */}
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
      </ChatBubble>
    </div>
  );
}
