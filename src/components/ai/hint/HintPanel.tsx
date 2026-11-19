"use client";

import { useState } from "react";
import Image from "next/image";
import type { HintLevel, HintPanelProps, HintResult } from "@/types/aiAgent";
import { Button } from "@/components/ui/Button";

const LEVELS: HintLevel[] = [1, 2, 3];

export function HintPanel({
  questionId,
  questionType,
  status,
  isSubmitting,
  onRequestHint,
}: HintPanelProps) {
  const { wrongAttempts, availableLevel, isSolved } = status;

  const [cache, setCache] = useState<Partial<Record<HintLevel, HintResult>>>({});
  const [viewLevel, setViewLevel] = useState<HintLevel | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const alreadyHaveAvailable =
    availableLevel !== null && cache[availableLevel] !== undefined;
  const canRequest =
    !isSubmitting &&
    !isLoading &&
    !isSolved &&
    availableLevel !== null &&
    !alreadyHaveAvailable;

  const cachedLevels = LEVELS.filter((l) => cache[l]);
  const shownLevel =
    viewLevel ?? (cachedLevels.length ? cachedLevels[cachedLevels.length - 1] : null);
  const shownHint = shownLevel ? cache[shownLevel] : undefined;

  async function handleRequest() {
    if (!canRequest) return;
    setIsLoading(true);
    setError(null);
    try {
      const result = await onRequestHint({ questionId });
      setCache((prev) => ({ ...prev, [result.level]: result }));
      setViewLevel(result.level);
    } catch {
      setError("Hint gagal dimuat. Periksa koneksimu lalu coba lagi.");
    } finally {
      setIsLoading(false);
    }
  }

  let notice = "";
  if (isSolved) notice = "Soal ini sudah selesai, hint tidak diperlukan lagi.";
  else if (availableLevel === null)
    notice = "Hint akan tersedia setelah kamu mencoba menjawab soal ini.";
  else if (alreadyHaveAvailable)
    notice =
      availableLevel === 3
        ? "Semua hint sudah kamu buka."
        : "Hint berikutnya terbuka setelah jawaban salah berikutnya.";
  else notice = `Hint Level ${availableLevel} siap diminta.`;

  return (
    <div className="flex flex-col gap-3.5" data-question-type={questionType}>
      <div className="flex items-center gap-2.5">
        <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
          <Image src="/icons/robot.svg" alt="Robot AI" fill className="object-cover" />
        </div>
        <div className="relative rounded-2xl bg-primary-default px-3 py-1.5 text-small text-white">
          <svg
            width="8"
            height="12"
            viewBox="0 0 8 12"
            aria-hidden="true"
            className="absolute -left-[6px] top-1/2 -translate-y-1/2 text-primary-default"
          >
            <path d="M8 0L0 6L8 12V0Z" fill="currentColor" />
          </svg>
          <p>Butuh Petunjuk?</p>
        </div>
      </div>

      <ol className="flex items-start justify-between" aria-label="Level hint">
        {LEVELS.map((level, i) => {
          const unlocked = availableLevel !== null && level <= availableLevel;
          const hasHint = cache[level] !== undefined;
          const isShown = shownLevel === level;
          return (
            <li key={level} className="relative flex flex-1 flex-col items-center gap-1">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className={`absolute right-1/2 top-3 h-0.5 w-full -translate-y-1/2 ${
                    unlocked ? "bg-primary-default" : "bg-border-surface"
                  }`}
                />
              )}
              <button
                type="button"
                disabled={!hasHint}
                onClick={() => setViewLevel(level)}
                aria-current={isShown ? "step" : undefined}
                aria-label={`Level ${level}${hasHint ? "" : unlocked ? ", belum diminta" : ", terkunci"}`}
                className={`relative z-10 flex h-6 w-6 items-center justify-center rounded-full text-small font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-active ${
                  isShown
                    ? "bg-primary-default text-white"
                    : unlocked
                      ? "bg-primary-default/15 text-primary-default"
                      : "bg-gray-200 text-text-paragraph-75"
                } ${hasHint ? "cursor-pointer" : "cursor-default"}`}
              >
                {level}
              </button>
              <span className="text-small text-text-paragraph-75">Level {level}</span>
            </li>
          );
        })}
      </ol>

      <p className="text-small text-text-paragraph-75">
        Kesalahan pada soal ini: {wrongAttempts}
      </p>

      {shownHint && (
        <div className="rounded-2xl border border-primary-default/20 bg-primary-default/5 p-3 text-small leading-relaxed text-text-paragraph">
          <p className="mb-1 text-small font-semibold text-primary-default">
            Hint Level {shownHint.level}
          </p>
          <p className="whitespace-pre-line">{shownHint.text}</p>
        </div>
      )}

      {isLoading && (
        <p role="status" className="flex items-center gap-2 text-small text-text-paragraph-75">
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-border-surface border-t-primary-default"
          />
          Menyiapkan hint...
        </p>
      )}

      {error && !isLoading && (
        <p
          role="alert"
          className="rounded-2xl border border-error-default/25 bg-error-default/10 p-2.5 text-small text-error-default"
        >
          {error}
        </p>
      )}

      {!isLoading && !error && (
        <p className="text-small leading-relaxed text-text-paragraph-75">{notice}</p>
      )}

      <Button
        variant={canRequest ? "primary" : "disabled"}
        onClick={handleRequest}
        disabled={!canRequest}
        fullWidth
        className="!h-8 !min-h-0 !rounded-lg !px-3 !py-1 !text-small text-white"
      >
        {isSubmitting
          ? "Memeriksa jawaban..."
          : isLoading
            ? "Memuat..."
            : error
              ? "Coba lagi"
              : "Minta Hint"}
      </Button>
    </div>
  );
}