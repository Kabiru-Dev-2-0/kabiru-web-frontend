"use client";

import type { CSSProperties, ReactNode } from "react";
import { Check, LockKeyhole } from "lucide-react";

export type LessonButtonStatus = "done" | "current" | "locked" | "skeleton";

type LessonButtonProps = {
  status?: LessonButtonStatus;
  number?: number | string;
  size?: number;
  onClick?: () => void;
  ariaLabel?: string;
  topColor?: string;
  sideColor?: string;
  icon?: ReactNode;
  className?: string;
};

const statusColors: Record<LessonButtonStatus, { top: string; side: string }> =
  {
    done: {
      top: "#2B7BC4",
      side: "#1D5A93",
    },
    current: {
      top: "#E8A000",
      side: "#B47D00",
    },
    locked: {
      top: "#8A90A0",
      side: "#636A7B",
    },
    skeleton: {
      top: "#EEF0F3",
      side: "#EEF0F3",
    },
  };

const hexagonPath = "M40 7 L69 24 L69 60 L40 77 L11 60 L11 24 Z";

export function LessonButton({
  status = "current",
  number = 0,
  size = 80,
  onClick,
  ariaLabel,
  topColor,
  sideColor,
  icon,
  className = "",
}: LessonButtonProps) {
  const colors = statusColors[status];
  const isLocked = status === "locked";
  const isSkeleton = status === "skeleton";
  const isDone = status === "done";
  const isCurrent = status === "current";

  const style: CSSProperties = {
    position: "relative",
    display: "inline-flex",
    flexShrink: 0,
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size * 1.05225,
    padding: 0,
    border: 0,
    background: "none",
    cursor: isLocked ? "not-allowed" : isSkeleton ? "default" : "pointer",
    color: "#FFFFFF",
    fontFamily: "inherit",
    fontWeight: 800,
    fontSize: size * 0.3,
    lineHeight: 1,
    WebkitTapHighlightColor: "transparent",
    ...({
      "--lesson-top": topColor ?? colors.top,
      "--lesson-side": sideColor ?? colors.side,
    } as CSSProperties),
  };

  const label =
    ariaLabel ??
    (isDone
      ? "Pelajaran selesai"
      : isCurrent
        ? `Pelajaran ${number}, saat ini`
        : isLocked
          ? "Pelajaran terkunci"
          : "Memuat pelajaran");

  const content = (
    <>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox="0 0 80 84"
        fill="none"
        aria-hidden="true"
      >
        {!isSkeleton && (
          <path
            d={hexagonPath}
            transform="translate(0 4)"
            fill="var(--lesson-side)"
            stroke="var(--lesson-side)"
            strokeWidth="6"
            strokeLinejoin="round"
          />
        )}

        <path
          className={!isSkeleton ? "lesson-button-top" : undefined}
          d={hexagonPath}
          fill="var(--lesson-top)"
          stroke="var(--lesson-top)"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>

      {!isSkeleton && (
        <span className="relative flex items-center justify-center">
          {icon ??
            (isDone ? (
              <Check size={size * 0.4} strokeWidth={4.5} aria-hidden="true" />
            ) : isLocked ? (
              <LockKeyhole
                size={size * 0.4}
                strokeWidth={2.5}
                color="#FFFFFF"
                aria-hidden="true"
              />
            ) : (
              number
            ))}
        </span>
      )}
    </>
  );

  const sharedClassName = [
    "lesson-button",
    `lesson-button--${status}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (isSkeleton) {
    return (
      <span className={sharedClassName} style={style} aria-hidden="true">
        {content}
      </span>
    );
  }

  return (
    <button
      type="button"
      className={sharedClassName}
      style={style}
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      aria-label={label}
      aria-current={isCurrent ? "step" : undefined}
    >
      {content}
    </button>
  );
}
