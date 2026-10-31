"use client";

import type { CSSProperties, ReactNode } from "react";

export type ChatBubblePlacement = "top" | "bottom" | "left" | "right";
export type ChatBubbleVariant = "outline" | "primary" | "success" | "warning" | "danger";
export type ChatBubbleSize = "small" | "medium" | "large";

interface ChatBubbleProps {
  children: ReactNode;
  placement?: ChatBubblePlacement;
  variant?: ChatBubbleVariant;
  size?: ChatBubbleSize;
  className?: string;
  contentClassName?: string;
}

const variantStyles: Record<ChatBubbleVariant, { background: string; color: string; border: string }> = {
  outline: {
    background: "#FFFFFF",
    color: "#3A3F48",
    border: "#BABEC6",
  },
  primary: {
    background: "#277BC0",
    color: "#FFFFFF",
    border: "#277BC0",
  },
  success: {
    background: "#00BC7D",
    color: "#FFFFFF",
    border: "#00BC7D",
  },
  warning: {
    background: "#FFB200",
    color: "#3A3F48",
    border: "#FFB200",
  },
  danger: {
    background: "#FB2C36",
    color: "#FFFFFF",
    border: "#FB2C36",
  },
};

const sizeClasses: Record<ChatBubbleSize, string> = {
  small: "p-3 text-xs rounded-lg",
  medium: "p-4 text-sm rounded-xl",
  large: "p-6 text-base rounded-2xl",
};

const arrowPositionClasses: Record<ChatBubblePlacement, string> = {
  top: "top-full left-1/2 -translate-x-1/2",
  bottom: "bottom-full left-1/2 -translate-x-1/2",
  left: "left-full top-1/2 -translate-y-1/2",
  right: "right-full top-1/2 -translate-y-1/2",
};

const outerArrowClasses: Record<ChatBubblePlacement, string> = {
  top: "border-t-[9px] border-x-[9px] border-b-0",
  bottom: "border-b-[9px] border-x-[9px] border-t-0",
  left: "border-l-[9px] border-y-[9px] border-r-0",
  right: "border-r-[9px] border-y-[9px] border-l-0",
};

const innerArrowClasses: Record<ChatBubblePlacement, string> = {
  top: "top-[-9px] left-[-8px] border-t-[8px] border-x-[8px] border-b-0",
  bottom: "bottom-[-9px] left-[-8px] border-b-[8px] border-x-[8px] border-t-0",
  left: "left-[-9px] top-[-8px] border-l-[8px] border-y-[8px] border-r-0",
  right: "right-[-9px] top-[-8px] border-r-[8px] border-y-[8px] border-l-0",
};

export default function ChatBubble({ children, placement = "left", variant = "primary", size = "medium", className = "", contentClassName = "" }: ChatBubbleProps) {
  const colors = variantStyles[variant];

  const bubbleStyle = {
    backgroundColor: colors.background,
    color: colors.color,
    borderColor: colors.border,
  } as CSSProperties;

  return (
    <div className={["relative w-fit", className].filter(Boolean).join(" ")}>
      <div className={["relative border", sizeClasses[size], contentClassName].filter(Boolean).join(" ")} style={bubbleStyle}>
        {children}

        {/* Outer arrow: border */}
        <span
          aria-hidden="true"
          className={["absolute h-0 w-0 border-solid border-transparent", arrowPositionClasses[placement], outerArrowClasses[placement]].join(" ")}
          style={{
            ...(placement === "top" && {
              borderTopColor: colors.border,
            }),
            ...(placement === "bottom" && {
              borderBottomColor: colors.border,
            }),
            ...(placement === "left" && {
              borderLeftColor: colors.border,
            }),
            ...(placement === "right" && {
              borderRightColor: colors.border,
            }),
          }}
        >
          {/* Inner arrow: background */}
          <span
            className={["absolute h-0 w-0 border-solid border-transparent", innerArrowClasses[placement]].join(" ")}
            style={{
              ...(placement === "top" && {
                borderTopColor: colors.background,
              }),
              ...(placement === "bottom" && {
                borderBottomColor: colors.background,
              }),
              ...(placement === "left" && {
                borderLeftColor: colors.background,
              }),
              ...(placement === "right" && {
                borderRightColor: colors.background,
              }),
            }}
          />
        </span>
      </div>
    </div>
  );
}
