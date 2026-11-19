import { ReactNode } from "react";
import { ProgressBar } from "../ui/ProgressBar";
import { Card } from "../ui/Card";

interface MissionCardProps {
  icon: ReactNode;
  title: string;
  progress: number;
  total: number;
  expReward: number;
  isClaimed: boolean;
  isDisabled?: boolean;
  isClaimLoading?: boolean;
  onClaim?: () => void;
}

export default function MissionCard({ icon, title, progress, total, expReward, isClaimed, isDisabled = false, isClaimLoading = false, onClaim }: MissionCardProps) {
  const isCompleted = total > 0 && progress >= total;
  const canClaim = isCompleted && !isClaimed && !isDisabled;
  const percent = total > 0 ? Math.min(100, (progress / total) * 100) : 0;

  const buttonLabel = isClaimed ? "Diklaim" : "Klaim";

  return (
    <Card border={false} shadow className={`grid grid-cols-[auto_minmax(0,1fr)_auto_auto] items-center gap-3 ${isDisabled ? "opacity-60" : ""}`} aria-disabled={isDisabled}>
      <div className="flex h-[42px] w-[42px] items-center justify-center">{icon}</div>

      <div className="flex flex-1 flex-col gap-2">
        <p className="text-paragraph font-semibold text-text-heading">{title}</p>

        {isClaimed ? (
          <span className="text-paragraph font-semibold text-success-active">✅ SELESAI!</span>
        ) : (
          <div className="flex gap-3">
            <ProgressBar className="w-full" width="100%" value={percent} variant={isCompleted ? "success" : "warning"} size="xl" showPercentage={false} showDetail={false} />
            <span className="shrink-0 text-sm font-medium leading-5 text-text-heading">{`${progress}/${total}`}</span>
          </div>
        )}
      </div>

      <div className="flex justify-between items-center gap-3 pl-3">
        <span className="text-left text-display-4 font-semibold text-primary-default">+{expReward} EXP</span>

        <button
          type="button"
          onClick={onClaim}
          hidden={isClaimed}
          className={`w-full max-w-fit rounded-xl px-4 py-2 text-center text-small font-semibold transition-colors ${
            canClaim ? "bg-accent-default text-text-heading hover:bg-accent-hover active:bg-accent-active" : "cursor-not-allowed bg-bg-disabled text-white"
          }`}
        >
          {isClaimLoading ? "Memproses..." : buttonLabel}
        </button>
      </div>
    </Card>
  );
}
