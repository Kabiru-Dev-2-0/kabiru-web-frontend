"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type StepperProps = {
  /** Jumlah step yang ditampilkan */
  totalSteps: number;

  /** Index step aktif, dimulai dari 0 */
  value?: number;

  /** Index awal untuk uncontrolled mode */
  defaultValue?: number;

  /** Callback ketika step berubah */
  onChange?: (step: number) => void;

  /** Warna track aktif */
  activeColor?: string;

  /** Warna track nonaktif */
  inactiveColor?: string;

  /** Ukuran tombol navigasi */
  navSize?: number;

  /** Tinggi track */
  trackHeight?: number;

  /** Jarak antar-track */
  trackGap?: number;

  /** Jarak tombol navigasi dengan track */
  navGap?: number;

  /** Radius ujung track */
  trackRadius?: string;

  /** Label aksesibilitas */
  ariaLabel?: string;

  /** Class tambahan untuk container */
  className?: string;
};

export function Stepper({
  totalSteps,
  value,
  defaultValue = 0,
  onChange,
  activeColor = "#3674B5",
  inactiveColor = "#E4E4E7",
  navSize = 32,
  trackHeight = 10,
  trackGap = 10,
  navGap = 32,
  trackRadius = "9999px",
  ariaLabel = "Progress steps",
  className = "",
}: StepperProps) {
  const [internalStep, setInternalStep] = useState(defaultValue);

  // value digunakan jika parent mengontrol step aktif.
  const isControlled = value !== undefined;
  const currentStep = Math.max(
    0,
    Math.min(totalSteps - 1, isControlled ? value : internalStep),
  );

  const goToStep = (step: number) => {
    const nextStep = Math.max(0, Math.min(totalSteps - 1, step));

    if (!isControlled) {
      setInternalStep(nextStep);
    }

    onChange?.(nextStep);
  };

  if (totalSteps < 1) {
    return null;
  }

  return (
    <nav
      aria-label={ariaLabel}
      className={`flex w-full items-center ${className}`}
      style={{ gap: navGap }}
    >
      {/* Tombol step sebelumnya */}
      <button
        type="button"
        aria-label="Previous step"
        onClick={() => goToStep(currentStep - 1)}
        disabled={currentStep === 0}
        className="flex shrink-0 items-center justify-center border-0 bg-transparent p-0 transition-opacity disabled:cursor-default disabled:opacity-40"
        style={{
          width: navSize,
          height: navSize,
          color: activeColor,
        }}
      >
        <ArrowLeft aria-hidden="true" size={navSize} strokeWidth={1.8} />
      </button>

      {/* Kumpulan track step */}
      <div
        className="flex h-full min-w-0 flex-1 items-center"
        style={{
          height: trackHeight,
          gap: trackGap,
        }}
      >
        {Array.from({ length: totalSteps }, (_, index) => {
          const isActive = index === currentStep;

          return (
            <button
              key={index}
              type="button"
              aria-label={`Step ${index + 1}`}
              aria-current={isActive ? "step" : undefined}
              onClick={() => goToStep(index)}
              className="h-full min-w-0 flex-1 shrink-0 cursor-pointer border-0 p-0 transition-colors duration-150 ease-in-out focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: isActive ? activeColor : inactiveColor,
                borderRadius: trackRadius,
                outlineColor: activeColor,
              }}
            />
          );
        })}
      </div>

      {/* Tombol step berikutnya */}
      <button
        type="button"
        aria-label="Next step"
        onClick={() => goToStep(currentStep + 1)}
        disabled={currentStep === totalSteps - 1}
        className="flex shrink-0 items-center justify-center border-0 bg-transparent p-0 transition-opacity disabled:cursor-default disabled:opacity-40"
        style={{
          width: navSize,
          height: navSize,
          color: activeColor,
        }}
      >
        <ArrowRight aria-hidden="true" size={navSize} strokeWidth={1.8} />
      </button>
    </nav>
  );
}
