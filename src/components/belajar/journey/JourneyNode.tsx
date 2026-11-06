"use client";

import type { JourneyNodeData } from "@/types/learningJourney";
import { LessonButton } from "@/components/ui/LessonButton";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";
import ChatBubble from "@/components/ui/ChatBubble";

interface JourneyNodeProps {
  data: JourneyNodeData;
  isOpen?: boolean;
  onSelect?: (id: string | number) => void;
  onClick?: (id: string | number) => void;
}

const statusMap = {
  completed: "done",
  current: "current",
  locked: "locked",
} as const;

export default function JourneyNode({ data, isOpen = false, onSelect, onClick }: JourneyNodeProps) {
  const isLocked = data.status === "locked";
  const isCompleted = data.status === "completed";

  const bubbleVariant = isCompleted ? "primary" : "warning";

  return (
    <div className={["relative flex flex-col items-center", isOpen ? "z-50" : "z-10"].join(" ")}>
      {/* Lesson Node */}
      <LessonButton
        status={statusMap[data.status]}
        number={data.id}
        size={64}
        ariaLabel={data.title}
        onClick={() => {
          if (!isLocked) {
            onSelect?.(data.id);
          }
        }}
      />

      {/* Popup hanya muncul ketika node dipilih dan tidak terkunci */}
      {isOpen && !isLocked && (
        <div className="absolute left-1/2 top-[calc(100%+14px)] z-50 w-[376px] max-w-[calc(100vw-40px)] -translate-x-1/2">
          <ChatBubble placement="bottom" variant={bubbleVariant} size="large">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-0.5 text-white">
                <p className="text-small">Unit {data.id}</p>

                <h3 className="text-paragraph font-semibold">{data.title}</h3>
              </div>

              <Button variant="primary-outline" fullWidth leftIcon={<Play size={20} fill="currentColor" />} onClick={() => onClick?.(data.id)} className="!h-[52px] !bg-white !text-primary-default">
                Mulai
              </Button>
            </div>
          </ChatBubble>
        </div>
      )}
    </div>
  );
}
