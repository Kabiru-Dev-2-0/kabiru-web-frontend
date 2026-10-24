import * as React from "react";

export type ProgressTrackerVariant = "pie" | "donut" | "skeleton";

export interface ProgressTrackerProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> {
  /** Persentase progress, dari 0 sampai 100 */
  value?: number;

  /** Bentuk tracker: pie atau donut */
  variant?: "pie" | "donut";

  /** Ukuran lingkaran dalam pixel */
  size?: number;

  /** Ketebalan ring untuk variant donut */
  ringWidth?: number;

  /** Warna progress */
  color?: string;

  /** Warna track atau bagian yang belum terisi */
  trackColor?: string;

  /** Menampilkan persentase di tengah donut */
  showLabel?: boolean;

  /** Mengaktifkan tampilan skeleton/loading */
  loading?: boolean;
}

export function ProgressTracker({
  value = 0,
  variant = "pie",
  size = 100,
  ringWidth = 9,
  color = "#277BC0",
  trackColor = "#E8F1FA",
  showLabel = true,
  loading = false,
  className = "",
  style,
  ...props
}: ProgressTrackerProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));
  const isLoading = loading;
  const fillColor = isLoading ? "#F0F1F3" : color;
  const backgroundColor = isLoading ? "#F0F1F3" : trackColor;

  const trackerStyle: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: "50%",
    background: `conic-gradient(${fillColor} ${normalizedValue * 3.6}deg, ${backgroundColor} 0deg)`,
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...style,
  };

  return (
    <div
      {...props}
      role="progressbar"
      aria-label={props["aria-label"] ?? "Progress"}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalizedValue}
      aria-valuetext={`${normalizedValue}%`}
      aria-busy={isLoading || undefined}
      className={["box-border", className].filter(Boolean).join(" ")}
      style={trackerStyle}
    >
      {variant === "donut" && (
        <div
          aria-hidden="true"
          className="absolute rounded-full"
          style={{
            inset: ringWidth,
            backgroundColor: backgroundColor,
          }}
        />
      )}

      {variant === "donut" && showLabel && (
        <span
          className="relative whitespace-nowrap font-sans text-xs font-medium leading-normal"
          style={{
            color: isLoading ? "#F0F1F3" : "#000000",
          }}
        >
          {normalizedValue}%
        </span>
      )}
    </div>
  );
}
