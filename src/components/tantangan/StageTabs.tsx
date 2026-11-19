import { TantanganStageKey } from "@/types/tantangan";

interface StageTabsProps {
  tabs: { key: TantanganStageKey; label: string }[];
  activeKey: TantanganStageKey;
  onChange: (key: TantanganStageKey) => void;
}

export default function StageTabs({ tabs, activeKey, onChange }: StageTabsProps) {
  return (
    <div className="flex gap-2 rounded-2xl bg-bg-light px-3 py-2">
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey;
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`flex-1 rounded-[14px] py-3 text-heading font-semibold transition-all duration-200 ${
              isActive
                ? "bg-primary-default text-white shadow-[0_4px_0_var(--color-primary-hover)]"
                : "bg-transparent text-primary-default hover:bg-[#DCE4EE]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}