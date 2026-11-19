"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { SendHorizontal } from "lucide-react";
import type { ChatMessage } from "@/types/aiAgent";

interface ChatbotPanelProps {
  messages: ChatMessage[];
  isLoading?: boolean;
  onSendMessage?: (message: string) => void;
  inputPlaceholder?: string;
}

export function ChatbotPanel({
  messages,
  isLoading = false,
  onSendMessage,
  inputPlaceholder = "Ketik pesanmu disini...",
}: ChatbotPanelProps) {
  const [draft, setDraft] = useState("");
  const isDisabled = isLoading || !onSendMessage;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = draft.trim();
    if (!trimmed || isDisabled) return;

    onSendMessage(trimmed);
    setDraft("");
  }

  return (
    <div className="flex h-full flex-col gap-2.5">
      <div className="flex min-h-0 flex-1 flex-col gap-2.5 overflow-y-auto px-2 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {messages.map((m) =>
          m.role === "bot" ? (
            <div key={m.id} className="flex items-start gap-2.5">
              <div className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/icons/robot.svg"
                  alt="Robot AI"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative max-w-[82%] rounded-2xl bg-primary-default px-3 py-2 text-small leading-relaxed text-white">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  aria-hidden="true"
                  className="absolute -left-[6px] top-2.5 text-primary-default"
                >
                  <path d="M8 0L0 6L8 12V0Z" fill="currentColor" />
                </svg>
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
            </div>
          ) : (
            <div key={m.id} className="flex justify-end pr-1">
              <div className="relative max-w-[82%] rounded-2xl bg-accent-default px-3 py-2 text-small font-medium leading-relaxed text-white">
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  aria-hidden="true"
                  className="absolute -right-[6px] top-2.5 text-accent-default"
                >
                  <path d="M0 0L8 6L0 12V0Z" fill="currentColor" />
                </svg>
                <p className="whitespace-pre-line">{m.text}</p>
              </div>
            </div>
          )
        )}

        {isLoading && (
          <div className="flex items-start gap-2.5" role="status">
            <div className="relative mt-0.5 h-7 w-7 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/icons/robot.svg"
                alt="Robot AI"
                fill
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl bg-primary-default/10 px-3 py-2 text-small text-text-paragraph-75">
              Mengetik...
            </div>
          </div>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex shrink-0 items-center gap-2 pt-0.5"
      >
        <input
          type="text"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          disabled={isDisabled}
          placeholder={inputPlaceholder}
          aria-label="Pesan untuk chatbot"
          className="min-w-0 flex-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-small text-text-paragraph placeholder:text-text-paragraph-75 focus:border-border-active focus:outline-none disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={isDisabled || !draft.trim()}
          aria-label="Kirim pesan"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-primary-default transition-colors hover:bg-primary-default hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          <SendHorizontal size={15} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}