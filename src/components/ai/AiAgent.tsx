"use client";

import { useState } from "react";
import Image from "next/image";
import type { AgentTab, AIAgentProps, ChatMessage } from "@/types/aiAgent";
import { ChatbotPanel } from "./chatbot/ChatbotPanel";
import { HintPanel } from "./hint/HintPanel";
import { CHATBOT_PLACEHOLDER } from "@/data/aiAgentMock";

const TABS: { id: AgentTab; label: string }[] = [
  { id: "chatbot", label: "Chatbot" },
  { id: "hint", label: "Hint" },
];

interface ExtendedAIAgentProps extends AIAgentProps {
  isExpanded?: boolean;
  onToggleExpand?: () => void;
  chatMessages?: ChatMessage[];
  isChatLoading?: boolean;
  onSendMessage?: (message: string) => void;
}

export function AIAgent({
  isOpen,
  onClose,
  defaultTab = "chatbot",
  isExpanded,
  onToggleExpand,
  chatMessages = CHATBOT_PLACEHOLDER.messages,
  isChatLoading = false,
  onSendMessage,
  ...hintProps
}: ExtendedAIAgentProps) {
  const [activeTab, setActiveTab] = useState<AgentTab>(defaultTab);

  if (!isOpen) return null;

  return (
    <section
      aria-label="AI Chat"
      className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-[1.5px] border-b-[5px] border-gray-200 bg-white shadow-sm"
    >
      <header className="flex shrink-0 items-center justify-between border-b border-gray-200 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <Image
            src="/icons/robotlaptop.svg"
            alt="Robot AI"
            width={24}
            height={24}
            className="h-6 w-6 object-contain"
          />
          <h2 className="text-paragraph font-semibold text-primary-default">AI Chat</h2>
        </div>

        <div className="flex items-center gap-1 text-text-paragraph-75">
          {onToggleExpand && (
            <button
              type="button"
              onClick={onToggleExpand}
              aria-label={isExpanded ? "Perkecil AI Chat" : "Perbesar AI Chat"}
              className="rounded-md p-1 transition-colors hover:bg-bg-light hover:text-text-paragraph focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-active"
            >
              {isExpanded ? (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="4" y="4" width="12" height="12" rx="2" ry="2" />
                  <path d="M8 4v-1c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-1v-4" />
                </svg>
              ) : (
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              )}
            </button>
          )}

          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup AI Chat"
            className="rounded-md p-1 transition-colors hover:bg-bg-light hover:text-text-paragraph focus-visible:outline focus-visible:outline-2 focus-visible:outline-border-active"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M5 12h14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      <div role="tablist" aria-label="Fitur AI Chat" className="flex shrink-0 px-4">
        {TABS.map((tab) => {
          const selected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`ai-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls={`ai-panel-${tab.id}`}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 border-b-2 py-1.5 text-small font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-active ${
                selected
                  ? "border-primary-default text-primary-default"
                  : "border-gray-200 text-text-paragraph-75 hover:text-text-paragraph"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="relative min-h-0 flex-1 text-paragraph">
        <div
          role="tabpanel"
          id="ai-panel-chatbot"
          aria-labelledby="ai-tab-chatbot"
          className={`h-full p-3.5 ${activeTab === "chatbot" ? "block" : "hidden"}`}
        >
          <ChatbotPanel
            messages={chatMessages}
            isLoading={isChatLoading}
            onSendMessage={onSendMessage}
            inputPlaceholder={CHATBOT_PLACEHOLDER.inputPlaceholder}
          />
        </div>

        <div
          role="tabpanel"
          id="ai-panel-hint"
          aria-labelledby="ai-tab-hint"
          className={`h-full overflow-y-auto p-3.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${activeTab === "hint" ? "block" : "hidden"}`}
        >
          <HintPanel key={hintProps.questionId} {...hintProps} />
        </div>
      </div>
    </section>
  );
}