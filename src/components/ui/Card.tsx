import * as React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number;
  color?: string;
  border?: boolean;
  shadow?: boolean;
}

export function Card({
  padding = 20,
  color = "#FFFFFF",
  border = true,
  shadow = false,
  className = "",
  style,
  children,
  ...props
}: CardProps) {
  return (
    <div
      {...props}
      style={{
        padding,
        backgroundColor: color,
        ...style,
      }}
      className={[
        "rounded-lg",
        border ? "border border-border-surface" : "border-0",
        shadow ? "shadow-md" : "shadow-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
