"use client";

import * as React from "react";

export type ProgressBarSize = "sm" | "md" | "lg";

export type ProgressBarVariant =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "disabled"
  | "skeleton";

export interface ProgressBarProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "color"
> {
  /** Ukuran ketebalan progress bar */
  size?: ProgressBarSize;

  /** Warna progress bar */
  variant?: ProgressBarVariant;

  /** Nilai progress, dari 0 sampai 100 */
  value?: number;

  /** Teks persentase yang ditampilkan di bawah progress bar */
  showPercentage?: boolean;

  /** Teks detail tambahan, misalnya "4/6" */
  detail?: string;

  /** Menampilkan atau menyembunyikan detail di bawah progress bar */
  showDetail?: boolean;

  /** Lebar progress bar, default 128px */
  width?: number | string;

  /** Ukuran teks detail, default 4px mengikuti HTML referensi */
  detailFontSize?: number;

  /** Mode skeleton/loading */
  loading?: boolean;
}

const variantColors: Record<ProgressBarVariant, string> = {
  primary: "#277BC0",
  success: "#00BC7D",
  error: "#FB2C36",
  warning: "#FF6900",
  disabled: "#6A7282",
  skeleton: "#F0F1F3",
};

const sizeHeights: Record<ProgressBarSize, string> = {
  sm: "2px",
  md: "4px",
  lg: "6px",
};

export function ProgressBar({
  size = "sm",
  variant = "primary",
  value = 80,
  showPercentage = true,
  detail,
  showDetail = true,
  width = 128,
  detailFontSize = 4,
  loading = false,
  className = "",
  style,
  ...props
}: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));
  const isSkeleton = loading || variant === "skeleton";
  const fillColor = variantColors[variant];

  const widthStyle = typeof width === "number" ? `${width}px` : width;

  return (
    <div
      {...props}
      className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}
      style={{
        width: widthStyle,
        ...style,
      }}
    >
      <div
        role={isSkeleton ? undefined : "progressbar"}
        aria-label={
          props["aria-label"] ?? (isSkeleton ? "Loading" : "Progress")
        }
        aria-valuemin={isSkeleton ? undefined : 0}
        aria-valuemax={isSkeleton ? undefined : 100}
        aria-valuenow={isSkeleton ? undefined : normalizedValue}
        aria-valuetext={
          isSkeleton
            ? undefined
            : detail
              ? `${normalizedValue}%, ${detail}`
              : `${normalizedValue}%`
        }
        aria-busy={isSkeleton ? true : undefined}
        className="w-full overflow-hidden rounded-xl"
        style={{
          height: sizeHeights[size],
          backgroundColor: isSkeleton ? "#F0F1F3" : "#D1D3D8",
        }}
      >
        <div
          className="h-full rounded-xl transition-[width] duration-300 ease-in-out"
          style={{
            width: `${isSkeleton ? 100 : normalizedValue}%`,
            backgroundColor: fillColor,
          }}
        />
      </div>

      {!isSkeleton && (showPercentage || (showDetail && detail)) && (
        <div
          className="flex items-start justify-between whitespace-nowrap font-normal leading-normal text-[#606876]"
          style={{ fontSize: `${detailFontSize}px` }}
        >
          {showPercentage ? <span>{normalizedValue}%</span> : <span />}
          {showDetail && detail ? <span>{detail}</span> : null}
        </div>
      )}
    </div>
  );
}
