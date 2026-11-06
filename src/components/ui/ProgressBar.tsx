"use client";

import * as React from "react";

export type ProgressBarSize = "sm" | "md" | "lg" | "xl";

export type ProgressBarVariant = "primary" | "success" | "error" | "warning" | "disabled" | "skeleton" | "progress";

export interface ProgressBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "color"> {
  /** Ukuran ketebalan progress bar */
  size?: ProgressBarSize;

  /** Warna progress bar berdasarkan variant */
  variant?: ProgressBarVariant;

  /** Custom warna progress bar */
  color?: string;

  /** Nilai progress bar, dari 0 sampai 100 */
  value?: number;

  /** Menampilkan atau menyembunyikan teks persentase */
  showPercentage?: boolean;

  /** Teks persentase, misalnya "80%" */
  percentageText?: string;

  /** Teks tahapan, misalnya "1/5" atau "3/6" */
  percentage?: string;

  /** Custom class untuk teks persentase/tahapan */
  percentageClassName?: string;

  /** Custom style untuk teks persentase/tahapan */
  percentageStyle?: React.CSSProperties;

  /** Teks detail tambahan di bawah progress bar */
  detail?: string;

  /** Menampilkan atau menyembunyikan detail */
  showDetail?: boolean;

  /** Lebar progress bar, default 128px */
  width?: number | string;

  /** Ukuran teks detail, default 12px */
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
  progress: "#F5A524",
};

const sizeHeights: Record<ProgressBarSize, string> = {
  sm: "2px",
  md: "4px",
  lg: "6px",
  xl: "16px",
};

export function ProgressBar({
  size = "sm",
  variant = "primary",
  color,
  value = 80,
  showPercentage = true,
  percentageText,
  percentage,
  percentageClassName = "",
  percentageStyle,
  detail,
  showDetail = true,
  width = 128,
  detailFontSize = 12,
  loading = false,
  className = "",
  style,
  ...props
}: ProgressBarProps) {
  const normalizedValue = Math.min(100, Math.max(0, value));

  const isSkeleton = loading || variant === "skeleton";

  // Custom color memiliki prioritas dibandingkan warna variant.
  const fillColor = color ?? variantColors[variant];

  const widthStyle = typeof width === "number" ? `${width}px` : width;

  // Menentukan teks yang ditampilkan di kanan atas.
  const displayPercentage = percentage ?? percentageText ?? `${normalizedValue}%`;

  return (
    <div
      {...props}
      className={["flex flex-col gap-1", className].filter(Boolean).join(" ")}
      style={{
        width: widthStyle,
        ...style,
      }}
    >
      {/* Teks persentase atau tahapan di kanan atas */}
      {showPercentage && !isSkeleton && (
        <div className="flex justify-end">
          <span
            className={percentageClassName}
            style={{
              fontSize: "12px",
              fontWeight: 500,
              color: "#606876",
              ...percentageStyle,
            }}
          >
            {displayPercentage}
          </span>
        </div>
      )}

      {/* Progress bar */}
      <div
        role={isSkeleton ? undefined : "progressbar"}
        aria-label={props["aria-label"] ?? (isSkeleton ? "Loading" : "Progress")}
        aria-valuemin={isSkeleton ? undefined : 0}
        aria-valuemax={isSkeleton ? undefined : 100}
        aria-valuenow={isSkeleton ? undefined : normalizedValue}
        aria-valuetext={isSkeleton ? undefined : percentage ? `${percentage}, ${normalizedValue}%` : `${normalizedValue}%`}
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
            backgroundColor: isSkeleton ? variantColors.skeleton : fillColor,
          }}
        />
      </div>

      {/* Detail tambahan di bawah progress bar */}
      {!isSkeleton && showDetail && detail && (
        <div className="text-[#606876] font-normal leading-normal" style={{ fontSize: `${detailFontSize}px` }}>
          {detail}
        </div>
      )}
    </div>
  );
}
